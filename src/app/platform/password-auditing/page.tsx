import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-extrabold text-white mb-6">
              패스워드 감사
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              공격자가 발견하기 전에 Linux 인프라의 취약한 패스워드를 찾아내세요.
              안전하고 에이전트리스 방식으로 패스워드 보안을 강화합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/get-sandfly" 
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-block"
              >
                무료 체험
              </Link>
              <Link 
                href="/platform" 
                className="border border-gray-400 hover:border-gray-300 text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg inline-block"
              >
                플랫폼 개요
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">핵심 패스워드 감사 기능</h2>
            <p className="text-xl text-gray-400">안전하고 포괄적인 패스워드 보안 검사</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Weak Password Detection */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">취약한 패스워드 탐지</h3>
              <p className="text-gray-400 text-center mb-4">
                다양한 유형의 취약한 패스워드를 자동으로 식별하고 보고합니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">빈 패스워드 계정</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">사용자명과 동일한 패스워드</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">일반적인 약한 패스워드</span>
                </li>
              </ul>
            </div>

            {/* Default Password Check */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">기본 패스워드 검사</h3>
              <p className="text-gray-400 text-center mb-4">
                시스템이나 애플리케이션의 기본 패스워드를 탐지합니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">벤더 기본 패스워드</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">서비스 계정 기본 패스워드</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">애플리케이션 기본 자격증명</span>
                </li>
              </ul>
            </div>

            {/* Breach Database Check */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">침해 데이터베이스 검사</h3>
              <p className="text-gray-400 text-center mb-4">
                알려진 데이터 침해에서 유출된 패스워드를 확인합니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">침해된 패스워드 데이터베이스</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">공개된 패스워드 목록</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">위협 인텔리전스 피드</span>
                </li>
              </ul>
            </div>

            {/* Safe Auditing */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">안전한 감사</h3>
              <p className="text-gray-400 text-center mb-4">
                운영 시스템에 영향을 주지 않는 안전한 패스워드 검사 방식입니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">계정 잠금 방지</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">자격증명 노출 없음</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">운영 중단 없음</span>
                </li>
              </ul>
            </div>

            {/* Policy Compliance */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">정책 준수 검사</h3>
              <p className="text-gray-400 text-center mb-4">
                조직의 패스워드 정책 준수 여부를 확인하고 보고합니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">복잡도 요구사항 검증</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">만료 정책 준수</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">재사용 방지 검사</span>
                </li>
              </ul>
            </div>

            {/* Automated Reporting */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">자동화된 보고</h3>
              <p className="text-gray-400 text-center mb-4">
                패스워드 감사 결과를 자동으로 수집하고 상세한 보고서를 생성합니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">상세 감사 보고서</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">위험도 우선순위 지정</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">개선 권장사항</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detection Categories */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">탐지 카테고리</h2>
            <p className="text-xl text-gray-400">Sandfly가 탐지하는 패스워드 보안 문제들</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            
            {/* Common Weak Passwords */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-white mb-3">일반적인 약한 패스워드</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• password, 123456</li>
                <li>• admin, root</li>
                <li>• 조직명 기반 패스워드</li>
                <li>• 키보드 패턴 (qwerty)</li>
              </ul>
            </div>

            {/* System Defaults */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-white mb-3">시스템 기본값</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• 운영체제 기본 계정</li>
                <li>• 데이터베이스 기본 패스워드</li>
                <li>• 웹 애플리케이션 기본값</li>
                <li>• 네트워크 장비 기본 자격증명</li>
              </ul>
            </div>

            {/* Policy Violations */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-white mb-3">정책 위반</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• 최소 길이 미달</li>
                <li>• 복잡도 요구사항 미충족</li>
                <li>• 패스워드 재사용</li>
                <li>• 만료 기간 초과</li>
              </ul>
            </div>

            {/* Security Risks */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-white mb-3">보안 위험</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• 비어있는 패스워드</li>
                <li>• 역할 기반 계정 취약점</li>
                <li>• 서비스 계정 약한 패스워드</li>
                <li>• 공유 계정 패스워드</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">패스워드 감사의 이점</h2>
            <p className="text-xl text-gray-400">조직의 인증 보안 강화</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Security Benefits */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-white mb-4">보안 이점</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-white">브루트 포스 공격 방지:</strong>
                    <span className="text-gray-400"> 약한 패스워드 사전 제거로 공격 성공률 대폭 감소</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-white">자격증명 도용 차단:</strong>
                    <span className="text-gray-400"> 추측 가능한 패스워드를 통한 무단 접근 방지</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-white">침해 위험 감소:</strong>
                    <span className="text-gray-400"> 알려진 침해 패스워드 사용 방지</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Compliance Benefits */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-white mb-4">규정 준수 이점</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-white">정책 준수 입증:</strong>
                    <span className="text-gray-400"> 패스워드 정책 준수 상태를 객관적으로 증명</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-white">감사 준비:</strong>
                    <span className="text-gray-400"> 정기적인 패스워드 감사 보고서로 규제 요구사항 충족</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-white">지속적 개선:</strong>
                    <span className="text-gray-400"> 패스워드 보안 수준의 지속적 모니터링과 개선</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">안전한 감사 방법론</h2>
            <p className="text-xl text-gray-400">운영 환경에 영향을 주지 않는 검증된 방식</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* How It Works */}
              <div className="bg-gray-900 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">작동 원리</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-white">해시 수집</h4>
                      <p className="text-gray-400">시스템에서 패스워드 해시를 안전하게 수집</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-white">패턴 분석</h4>
                      <p className="text-gray-400">알려진 약한 패스워드 패턴과 비교 분석</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-white">위험도 평가</h4>
                      <p className="text-gray-400">탐지된 취약점의 위험도를 평가하고 우선순위 지정</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Safety Features */}
              <div className="bg-gray-900 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">안전 기능</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-cyan-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-white">비침입적 검사</h4>
                      <p className="text-gray-400">실제 로그인 시도 없이 패스워드 강도 평가</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-cyan-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-white">데이터 보호</h4>
                      <p className="text-gray-400">패스워드 평문은 절대 노출되지 않음</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-cyan-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-white">성능 최적화</h4>
                      <p className="text-gray-400">시스템 리소스 사용량 최소화</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            패스워드 보안을 강화하세요
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Sandfly의 안전하고 포괄적인 패스워드 감사로 조직의 인증 보안을 강화하세요. 
            취약한 패스워드를 사전에 발견하고 제거하여 보안 위험을 최소화할 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/get-sandfly" 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-block"
            >
              무료 체험 시작
            </Link>
            <Link 
              href="/contact-us" 
              className="border border-gray-400 hover:border-gray-300 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-block"
            >
              전문가와 상담
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;