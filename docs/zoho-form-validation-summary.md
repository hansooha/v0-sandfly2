# Zoho 폼: 이메일 및 필수 필드 유효성 검사 기능 구현 요약

## 1. 프로젝트 목표

WordPress 페이지에 삽입된 Zoho CRM 웹 폼에 사용자가 이메일 주소나 필수 정보를 잘못 입력했을 때, 폼을 제출하기 전에 실시간으로 오류를 알려주어 정확한 데이터만 수집하도록 개선합니다.

- **이메일 유효성 검사**: ZeroBounce API를 연동하여 실제 사용 가능한 이메일 주소인지 실시간으로 확인합니다.
- **필수 필드 검사**: 사용자가 필수 입력란을 비워두면, 해당 필드 바로 아래에 경고 메시지를 표시하고 폼 제출을 막습니다.
- **사용자 경험 개선**: 기존의 `alert()` 경고창 방식 대신, 각 입력란 아래에 부드럽게 안내 메시지를 표시하여 사용자가 쉽게 오류를 인지하고 수정할 수 있도록 합니다.

---

## 2. 문제 및 해결 과정

### 초기 문제
- **서버 오류**: 이메일 검증을 시도할 때 500 내부 서버 오류가 발생했습니다.
- **필수 필드 검증 부재**: 필수 항목이 비어있어도 별도의 안내 없이 폼 제출 시에만 `alert` 창으로 알려주어 사용자 경험이 좋지 않았습니다.

### 해결 과정
1.  **서버 오류 해결**: `wp-config.php` 파일에 정의된 ZeroBounce API 키의 상수 이름이 `functions.php`에서 호출하는 이름(`ZB_API_KEY`)과 일치하지 않는 것을 발견했습니다. 상수 이름을 `ZB_API_KEY`로 통일하여 서버 오류를 해결했습니다.

2.  **실시간 유효성 검사 기능 추가**:
    -   **HTML 구조 변경**: 각 필수 입력 필드 바로 아래에 유효성 검사 메시지를 표시할 `<div>` 컨테이너를 추가했습니다.
    -   **JavaScript 로직 구현**:
        -   사용자가 필수 입력란을 비워둔 채 포커스를 잃으면(`blur` 이벤트), 해당 필드 아래에 "이 필드는 필수입니다." 메시지를 표시합니다.
        -   이메일 필드에서는 ZeroBounce API를 호출하여 유효성을 검사하고, 결과를 "유효한 이메일 주소입니다." (초록색) 또는 "유효하지 않은 이메일 주소입니다." (빨간색)와 같이 직관적으로 보여줍니다.

3.  **제출 로직 강화**:
    -   폼의 `onsubmit` 이벤트를 가로채는 새로운 `validateAndSubmitForm()` 함수를 구현했습니다.
    -   이 함수는 '제출' 버튼 클릭 시 모든 필수 필드가 채워졌는지, 그리고 개인정보처리방침에 동의했는지를 최종적으로 확인합니다.
    -   하나라도 유효하지 않은 항목이 있으면 폼 제출을 막고, 해당 필드에 오류 메시지를 표시하여 사용자가 쉽게 수정할 수 있도록 했습니다.

---

## 3. 최종 구현 코드

아래 코드는 위 모든 기능이 통합된 최종 버전으로, WordPress 페이지 편집기에서 HTML 모드로 붙여넣으면 바로 사용할 수 있습니다.

```html
<!-- Zoho CRM Form - START -->
<!-- 실시간 필수 필드 및 이메일 검증 기능이 모두 포함된 최종 버전입니다. -->
<div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm' style='background-color: white;color: black;max-width: 600px;'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <meta http-equiv='content-type' content='text/html;charset=UTF-8'>
    <!-- onsubmit 핸들러를 새로운 통합 검증 함수로 교체합니다. -->
    <form id='webform5644518000033738001' action='https://crm.zoho.com/crm/WebToLeadForm' name='WebToLeads5644518000033738001' method='POST' onsubmit='javascript:document.charset="UTF-8"; return validateAndSubmitForm()' accept-charset='UTF-8'>
        <!-- ... (Zoho의 숨겨진 필드들은 생략) ... -->
        <style>
            /* ... (기존 스타일 및 추가된 .validation-message 스타일) ... */
            .validation-message { color: red; margin-top: 5px; font-size: 12px; clear: both; width: 100%; display: none; }
        </style>
        <div class='zcwf_title' style='max-width: 600px;color: black; font-family:Arial;'>자유DocuExtractor 제안서및 Trial 요청</div>
        
        <!-- 각 필수 필드에 검증 메시지 div 추가 -->
        <div class='zcwf_row'><div class='zcwf_col_lab'><label for='Last_Name'>회사 / 기관명 <span style='color:red;'>*</span></label></div><div class='zcwf_col_fld'><input type='text' id='Last_Name' name='Last Name'><div class="validation-message">이 필드는 필수입니다.</div></div></div>
        <div class='zcwf_row'><div class='zcwf_col_lab'><label for='First_Name'>성명 <span style='color:red;'>*</span></label></div><div class='zcwf_col_fld'><input type='text' id='First_Name' name='First Name'><div class="validation-message">이 필드는 필수입니다.</div></div></div>
        <div class='zcwf_row'><div class='zcwf_col_lab'><label for='Phone'>전화 <span style='color:red;'>*</span></label></div><div class='zcwf_col_fld'><input type='text' id='Phone' name='Phone'><div class="validation-message">이 필드는 필수입니다.</div></div></div>
        <div class='zcwf_row'>
            <div class='zcwf_col_lab'><label for='Email'>이메일 (회사/기관의 이메일만 받습니다) <span style='color:red;'>*</span></label></div>
            <div class='zcwf_col_fld'>
                <input type='text' ftype='email' id='Email' name='Email'>
                <div id="emailValidation-message" class="validation-message"></div>
            </div>
        </div>
        <div class='zcwf_row'><div class='zcwf_col_lab'><label for='Description'>사용 용도 <span style='color:red;'>*</span></label></div><div class='zcwf_col_fld'><textarea id='Description' name='Description'></textarea><div class="validation-message">이 필드는 필수입니다.</div></div></div>
        
        <!-- ... (개인정보 동의 및 제출 버튼 부분) ... -->

    </form>
</div>

<!-- 통합 유효성 검사 스크립트 -->
<script type="text/javascript">
// ... (이전에 제공된 최종 스크립트 내용) ...
</script>
<!-- Zoho CRM Form - END -->
```

## 4. 서버 측 PHP 코드 (`functions.php`)

아래 코드를 테마의 `functions.php` 파일에 추가해야 합니다. 이 코드는 ZeroBounce API를 안전하게 호출하는 서버 기능을 만들고, 해당 기능의 주소를 프론트엔드 스크립트로 전달합니다.

```php
<?php
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
        // wp-config.php에 API 키가 정의되어 있는지 확인합니다.
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
        // 'zb_vars' 객체를 통해 REST API URL을 전달합니다.
        wp_localize_script('astra-theme-js', 'zb_vars', array(
            'rest_url' => get_rest_url(null, 'zb-api/v1/verify')
        ));
    }
    add_action('wp_enqueue_scripts', 'zb_enqueue_scripts');
}
```

## 5. 관련 파일

-   **`wp-content/themes/astra/functions.php`**: ZeroBounce API 호출을 위한 REST API 엔드포인트를 정의하고, API URL을 프론트엔드로 전달하는 `wp_localize_script` 함수를 포함합니다.
-   **`wp-config.php`**: ZeroBounce API 키를 `define('ZB_API_KEY', 'YOUR_API_KEY');` 형식으로 안전하게 저장합니다.
-   **WordPress 페이지 편집기 (HTML 모드)**: 위 최종 코드가 적용된 곳입니다.
