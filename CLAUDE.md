# Sandfly.kr 클론 웹사이트 프로젝트

## 프로젝트 개요
- Sandfly Security 웹사이트 클론
- Next.js 기반 React 애플리케이션
- 한국어 답변 및 코드 주석 필수

## 완료된 페이지
- [x] why-sandfly/case-studies/page.tsx
  - 3개 고객 사례 데이터 포함
  - PDF 다운로드 링크
  - 반응형 디자인 적용

## 현재 상태
- 기본 레이아웃 및 컴포넌트 구조 완성
- 네비게이션 시스템 구현
- Tailwind CSS 스타일링 적용
- 다크 모드 지원

## 다음 작업 계획
1. **즉시 필요한 작업**
   - why-sandfly/compatibility 페이지 작성
   - 404 페이지 전략 결정 및 구현

2. **추후 작업**
   - 전체 QA 테스트 (레이아웃, 다크모드, 링크)
   - 성능 최적화

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