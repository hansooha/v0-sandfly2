# Sandfly.kr 클론 웹사이트 프로젝트

## 프로젝트 개요
- Sandfly Security 웹사이트 클론 (www.sandflysecurity.com)
- Next.js 15.3.4 기반 React 19 애플리케이션
- 한국어 답변 및 코드 주석 필수

## 현재 상태 (2025-06-25)
- **웹사이트 구조 대부분 완성** ✅
- **57개 페이지 구현 완료** ✅
- **반응형 헤더/푸터 완성** ✅
- **네비게이션 시스템 완성** ✅
- **서버 정상 작동** ✅ (http://localhost:3000)

## 완성된 주요 섹션
### 1. Why Sandfly (13개 페이지)
- [x] case-studies - 고객 사례 및 PDF 다운로드
- [x] compatibility - 호환성 정보
- [x] agentless-security - 에이전트리스 보안
- [x] customer-stories - 고객 스토리
- [x] data-privacy - 데이터 프라이버시
- [x] fast-deployment - 빠른 배포
- [x] safety - 안전성
- [x] sandfly-vs-osquery/sysmon/wazuh - 경쟁사 비교
- [x] tactics-detection - 전술 탐지
- [x] testimonials - 고객 추천

### 2. Platform (10개 페이지)
- [x] compliance - 규정 준수
- [x] device-and-appliance-security - 디바이스 보안
- [x] drift-detection - 드리프트 탐지
- [x] incident-response - 사고 대응
- [x] integrations - 통합
- [x] password-auditing - 패스워드 감사
- [x] ssh-key-monitoring - SSH 키 모니터링
- [x] threat-detection - 위협 탐지
- [x] vulnerability-management - 취약점 관리

### 3. Solutions (4개 페이지)
- [x] cloud-workload-protection - 클라우드 워크로드 보호
- [x] data-center-security - 데이터센터 보안
- [x] iot-and-embedded-device-security - IoT 보안

### 4. Resources (10개 페이지)
- [x] blog, documentation, webinars 등

### 5. Company/About-us (8개 페이지)
- [x] 회사 정보, 채용, 뉴스룸 등

### 6. 기타 핵심 페이지 (12개 페이지)
- [x] contact-us, pricing, support, login 등

## 기술 스택
- **Frontend**: Next.js 15.3.4, React 19, TypeScript 5
- **Styling**: Tailwind CSS 4, PostCSS
- **UI Components**: Headless UI 2.2.4, Heroicons 2.2.0
- **Testing**: Playwright 1.53.1
- **Linting**: ESLint 9 with Next.js config

## 컴포넌트 구조
### 완성된 컴포넌트 (9개)
- [x] Header.tsx - 2단 네비게이션 (Under Attack/Support/Contact + 메인 메뉴)
- [x] Footer.tsx - 풀 사이트맵 링크 포함
- [x] Layout.tsx - 전체 레이아웃 래퍼
- [x] Hero.tsx - 히어로 섹션
- [x] Features.tsx - 기능 소개
- [x] CTA.tsx - Call to Action
- [x] Testimonials.tsx - 고객 추천
- [x] TrustedBy.tsx - 파트너/고객사
- [x] YouTubeEmbed.tsx - 유튜브 임베드

## 최근 수정 작업
- Header/Footer 컴포넌트 세부 조정
- 네비게이션 로직 개선
- 반응형 디자인 최적화

## 현재 작업 상태
- **세부적인 수정 작업 진행 중** 🔄
- 페이지 구조와 기본 기능은 모두 완성
- UI/UX 개선 및 마이너 버그 수정 단계

## 개발 명령어
```bash
cd /Users/hansoo./Dev/sandfly.kr
npm run dev      # 개발 서버 시작
npm run build    # 프로덕션 빌드
npm run lint     # 코드 린트
```

## 중요 규칙
- 모든 답변과 코드 주석은 반드시 **한글**로 작성
- 새 기능 추가/UI 변경 전에는 사용자 컨펌 필수
- 파일 끝에 불필요한 JSX 남기지 않기