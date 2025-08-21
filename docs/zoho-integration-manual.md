# Zoho 폼 실시간 유효성 검사 적용 매뉴얼

이 문서는 Zoho CRM 웹폼에 실시간 필수 필드 검증과 ZeroBounce API를 이용한 이메일 유효성 검사 기능을 적용하는 방법을 안내합니다. 새로운 세션에서 이 문서를 저에게 제공하면, 아래 절차에 따라 신속하게 작업을 진행할 수 있습니다.

---

## 1. 작업에 필요한 정보

작업을 시작하려면 아래 정보들을 저에게 알려주세요.

1.  **Zoho 웹폼 원본 HTML 코드**: Zoho CRM에서 생성한 전체 `<iframe>` 또는 `<div>` 코드를 전달해주세요.
2.  **ZeroBounce API 키**: 이메일 검증에 사용할 API 키입니다. (예: `8c...`)
3.  **필수 필드 목록**: 폼에서 필수로 지정하고 싶은 입력 필드의 `id` 속성값들을 알려주세요. (예: `['Company', 'Last_Name', 'Email', 'Mobile']`)

---

## 2. 작업 절차

### 1단계: `wp-config.php` 파일 설정

WordPress 설치 디렉토리의 루트에 있는 `wp-config.php` 파일에 아래 코드를 추가하여 ZeroBounce API 키를 안전하게 설정합니다. `/* That's all, stop editing! Happy publishing. */` 주석 바로 위에 추가하는 것이 좋습니다.

```php
// wp-config.php
define('ZB_API_KEY', 'YOUR_API_KEY'); // 'YOUR_API_KEY' 부분을 실제 키로 교체하세요.
```

### 2단계: 테마의 `functions.php` 파일 설정

사용 중인 WordPress 테마의 `functions.php` 파일 최하단에 아래 PHP 코드를 추가합니다. 이 코드는 이메일 검증을 위한 REST API 엔드포인트를 생성하고, 해당 API 주소를 프론트엔드 스크립트가 사용할 수 있도록 전달하는 역할을 합니다. **이 코드는 대부분의 경우 수정 없이 그대로 사용할 수 있습니다.**

```php
// functions.php 파일 하단에 추가

if (!function_exists('zb_register_rest_route')) {
    /**
     * ZeroBounce 이메일 검증을 위한 WordPress REST API 엔드포인트를 등록합니다.
     */
    function zb_register_rest_route() {
        register_rest_route('zb-api/v1', '/verify', array(
            'methods'  => 'GET',
            'callback' => 'zb_verify_email_callback',
            'permission_callback' => '__return_true', // 모든 사용자가 접근 가능
            'args'     => array(
                'email' => array(
                    'required' => true,
                    'validate_callback' => function($param, $request, $key) {
                        return is_email($param);
                    }
                ),
            ),
        ));
    }
    add_action('rest_api_init', 'zb_register_rest_route');
}

if (!function_exists('zb_verify_email_callback')) {
    /**
     * REST API 요청을 처리하여 ZeroBounce API를 호출하고 결과를 반환합니다.
     */
    function zb_verify_email_callback($request) {
        if (!defined('ZB_API_KEY')) {
            return new WP_Error('api_key_missing', 'ZeroBounce API key is not configured.', array('status' => 500));
        }
        $email = $request['email'];
        $api_key = ZB_API_KEY;
        $api_url = "https://api.zerobounce.net/v2/validate?api_key={$api_key}&email=" . urlencode($email);
        $response = wp_remote_get($api_url);
        if (is_wp_error($response)) {
            return new WP_Error('request_failed', 'Failed to connect to ZeroBounce.', array('status' => 500));
        }
        $body = wp_remote_retrieve_body($response);
        $data = json_decode($body, true);
        return new WP_REST_Response(array(
            'status'     => isset($data['status']) ? $data['status'] : 'error',
            'sub_status' => isset($data['sub_status']) ? $data['sub_status'] : 'error'
        ), 200);
    }
}

if (!function_exists('zb_enqueue_scripts')) {
    /**
     * REST API URL을 프론트엔드 자바스크립트로 전달합니다.
     */
    function zb_enqueue_scripts() {
        // 'astra-theme-js'는 사용 중인 테마에 맞게 변경될 수 있습니다.
        // 일반적으로 테마의 기본 JavaScript 핸들러 이름을 사용합니다.
        wp_localize_script('astra-theme-js', 'zb_vars', array(
            'rest_url' => get_rest_url(null, 'zb-api/v1/verify')
        ));
    }
    add_action('wp_enqueue_scripts', 'zb_enqueue_scripts');
}
```

### 3단계: Zoho 폼 코드 수정 (HTML & JavaScript)

전달받은 Zoho 폼 원본 코드를 아래와 같이 수정합니다. 이 작업은 제가 직접 진행합니다.

1.  **유효성 검사 메시지 영역 추가**: 각 필수 필드의 `<input>` 태그 바로 뒤에 메시지를 표시할 `<div class="validation-message"></div>`를 추가합니다.
2.  **스타일 추가**: 메시지 스타일(`.validation-message`)을 폼의 `<style>` 태그 안에 추가합니다.
3.  **스크립트 교체**: 폼 하단의 기존 `<script>` 내용을 모두 삭제하고, 아래의 **통합 유효성 검사 스크립트**로 교체합니다.
4.  **`onSubmit` 핸들러 변경**: `<form>` 태그의 `onSubmit` 속성을 `return validateAndSubmitForm()`으로 변경합니다.

#### 통합 유효성 검사 스크립트 (템플릿)

```javascript
// 이 스크립트는 기존 Zoho 스크립트를 대체합니다.
document.addEventListener('DOMContentLoaded', function() {
    // !!! 중요: 이 부분은 전달받은 필수 필드 목록으로 수정합니다. !!!
    const requiredFields = ['Company', 'Last_Name', 'Email', 'Mobile'];
    let emailCheckTimer;

    requiredFields.forEach(function(fieldId) {
        const field = document.getElementById(fieldId);
        if (field) {
            field.addEventListener('blur', function() { validateField(field); });
            if (field.id === 'Email') {
                field.addEventListener('input', function() {
                    clearTimeout(emailCheckTimer);
                    showValidationMessage(field, '입력 중...', 'orange');
                    emailCheckTimer = setTimeout(function() { validateEmailRealtime(field); }, 800);
                });
            }
        }
    });
    
    // 개인정보 동의 체크박스 ID는 폼마다 다를 수 있으므로 확인이 필요합니다.
    const privacyCheckbox = document.querySelector('input[id^="privacyTool"]');
    if(privacyCheckbox) {
        const privacyErr = document.getElementById(privacyCheckbox.getAttribute('aria-errormessage'));
        privacyCheckbox.addEventListener('click', function() {
            if (privacyCheckbox.checked) {
                privacyErr.style.visibility = 'hidden';
            }
        });
    }
});

function validateField(field) { /* ... (이하 생략, 이전과 동일한 로직) ... */ }
function validateEmailRealtime(emailField) { /* ... */ }
function showValidationMessage(field, message, color) { /* ... */ }
function hideValidationMessage(field) { /* ... */ }
function validateAndSubmitForm() { /* ... */ }
```

---

## 3. 웹사이트 또는 폼 변경 시 수정 가이드

-   **필수 필드가 변경된 경우**: 위 **통합 유효성 검사 스크립트** 템플릿에서 `const requiredFields = [...]` 배열의 내용만 수정하면 됩니다.
-   **웹사이트 주소(도메인)가 변경된 경우**: **아무것도 수정할 필요가 없습니다.** `functions.php`의 `get_rest_url()` 함수가 동적으로 올바른 주소를 생성해주기 때문에 코드는 그대로 작동합니다.
-   **완전히 새로운 폼을 적용하는 경우**: 이 매뉴얼의 1번 항목에 있는 **'작업에 필요한 정보'**를 저에게 다시 제공해주시면 됩니다.
