# Next.js Zoho CRM 및 실시간 이메일 검증 연동 가이드

이 문서는 Next.js 애플리케이션에 Zoho CRM 문의 양식을 연동하고, ZeroBounce API를 사용하여 이메일 주소의 유효성을 실시간으로 검증하는 기능의 구현 방법을 안내합니다.

## 주요 기능

- Zoho CRM Web-to-Lead 양식을 이용한 데이터 제출
- 사용자 입력 중 실시간 이메일 존재 여부 검증
- API 키의 안전한 관리
- 검증 상태에 따른 동적 UI 피드백 제공

---

## 1. 사전 준비

- **Zoho CRM 계정**: Web-to-Lead 양식을 생성하기 위해 필요합니다.
- **ZeroBounce 계정**: 실시간 이메일 검증 API 키를 발급받기 위해 필요합니다.
- **Node.js 및 Next.js**: 개발 환경이 구성되어 있어야 합니다.

---

## 2. 백엔드: 이메일 검증 API 라우트 생성

클라이언트에서 ZeroBounce API 키가 노출되지 않도록, 서버에서 API를 대신 호출해 주는 백엔드 API 라우트를 생성합니다.

**경로**: `src/app/api/verify-email/route.ts`

```typescript
// src/app/api/verify-email/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  const apiKey = process.env.ZEROBOUNCE_API_KEY;

  if (!apiKey) {
    console.error('ZeroBounce API key is not configured.');
    return NextResponse.json({ error: 'Configuration error' }, { status: 500 });
  }

  const ipAddress = ''; // 선택 사항

  try {
    const apiResponse = await fetch(
      `https://api.zerobounce.net/v2/validate?api_key=${apiKey}&email=${encodeURIComponent(
        email as string
      )}&ip_address=${encodeURIComponent(ipAddress)}`,
      {
        method: 'GET',
      }
    );

    if (!apiResponse.ok) {
      const errorData = await apiResponse.json();
      console.error('ZeroBounce API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to verify email' },
        { status: apiResponse.status }
      );
    }

    const data = await apiResponse.json();

    return NextResponse.json({ status: data.status, sub_status: data.sub_status });

  } catch (error) {
    console.error('Error connecting to ZeroBounce API:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
```

---

## 3. 프론트엔드: 문의 양식 페이지 수정

React 컴포넌트에서 이메일 입력 시 위에서 만든 API를 호출하고, 결과에 따라 UI를 업데이트하도록 수정합니다.

**경로**: `src/app/contact-us/page.tsx` (또는 해당 양식이 있는 페이지)

### 3.1. 필요 패키지 설치

사용자 입력이 끝난 후 API를 호출(Debounce)하기 위해 `lodash`를 사용합니다.

```bash
npm install lodash
npm install --save-dev @types/lodash
```

### 3.2. 컴포넌트 코드 수정

주요 로직은 다음과 같습니다.

1.  이메일, 검증 상태, UI 메시지 등을 관리할 `useState` 추가
2.  `lodash`의 `debounce`를 사용하여 이메일 검증 함수 생성
3.  이메일 입력(`onChange`) 시 검증 함수 호출
4.  검증 결과에 따라 메시지를 보여주고, '제출' 버튼의 활성화/비활성화 상태 제어

```tsx
// src/app/contact-us/page.tsx (주요 부분 발췌)
'use client';

import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';

// ... (기존 import)

export default function ContactUs() {
  // ... (기존 상태 변수)

  // 이메일 검증을 위한 상태 추가
  const [email, setEmail] = useState('');
  const [emailStatus, setEmailStatus] = useState<'idle' | 'verifying' | 'valid' | 'invalid' | 'error'>('idle');
  const [emailMessage, setEmailMessage] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  // 이메일 검증 API 호출 함수
  const verifyEmail = async (emailToVerify: string) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailToVerify)) {
      setEmailStatus('idle');
      setEmailMessage('');
      return;
    }
    setEmailStatus('verifying');
    setEmailMessage('이메일 주소를 확인하는 중입니다...');

    try {
      const response = await fetch('/api/verify-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailToVerify }),
      });

      if (!response.ok) {
        throw new Error('Configuration error');
      }

      const result = await response.json();

      if (['valid', 'catch-all'].includes(result.status)) {
        setEmailStatus('valid');
        setEmailMessage('유효한 이메일 주소입니다.');
      } else {
        setEmailStatus('invalid');
        setEmailMessage('유효하지 않거나 존재하지 않는 이메일 주소입니다.');
      }
    } catch (error) {
      setEmailStatus('error');
      setEmailMessage('이메일 검증 중 오류가 발생했습니다.');
      console.error(error);
    }
  };

  // Debounce 적용된 검증 함수
  const debouncedVerifyEmail = useCallback(debounce(verifyEmail, 500), []);

  // 이메일 입력 핸들러
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setFormData(prev => ({ ...prev, Email: newEmail }));
    debouncedVerifyEmail(newEmail);
  };

  // 제출 버튼 활성화 로직
  useEffect(() => {
    // 필수 필드가 모두 채워졌는지 확인하는 로직
    const allRequiredFieldsFilled = formData.Last_Name && formData.Company && formData.Phone;
    // 이메일이 유효한 상태인지 확인
    const isEmailVerified = emailStatus === 'valid' || emailStatus === 'catch-all';

    setIsSubmitDisabled(!(allRequiredFieldsFilled && isEmailVerified));

  }, [formData, emailStatus]);

  // ... (JSX 부분)

  // 이메일 입력 필드
  <input
    type="email"
    name="Email"
    value={email}
    onChange={handleEmailChange}
    // ... (기타 속성)
  />
  {/* 이메일 검증 메시지 표시 */}
  {emailMessage && <p className="mt-2 text-sm ...">{emailMessage}</p>}

  // 제출 버튼
  <button type="submit" disabled={isSubmitDisabled} >
    제출
  </button>
}
```

---

## 4. 환경 변수 설정

API 키와 같은 민감한 정보는 환경 변수로 관리합니다.

### 4.1. 로컬 개발 환경

프로젝트 최상단에 `.env.local` 파일을 생성하고 아래 내용을 추가합니다.

```
ZEROBOUNCE_API_KEY=여기에_발급받은_API_키를_입력하세요
```

### 4.2. 프로덕션 환경 (Vercel 예시)

Vercel 프로젝트 대시보드 > Settings > Environment Variables 메뉴에서 동일한 이름(`ZEROBOUNCE_API_KEY`)과 값으로 환경 변수를 추가합니다.

---

## 5. 결론

위 단계를 통해 Zoho CRM 양식에 실시간 이메일 검증 기능을 안정적으로 연동할 수 있습니다. 이를 통해 유효하지 않은 리드 데이터를 사전에 차단하고 데이터 품질을 향상시킬 수 있습니다.
