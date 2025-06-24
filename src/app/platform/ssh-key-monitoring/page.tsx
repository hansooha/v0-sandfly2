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
              SSH 키 모니터링
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              전체 Linux 인프라에서 SSH 키를 찾고 감사하세요.
              악성 키와 무단 접근을 방지하여 시스템 보안을 강화합니다.
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
            <h2 className="text-3xl font-bold text-white mb-4">핵심 SSH 키 모니터링 기능</h2>
            <p className="text-xl text-gray-400">포괄적인 SSH 키 가시성과 보안 제어</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Comprehensive Discovery */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">포괄적 탐지</h3>
              <p className="text-gray-400 text-center mb-4">
                모든 시스템에서 SSH 키를 자동으로 찾아내고 인벤토리를 구축합니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">authorized_keys 파일 스캔</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">개인 키 파일 탐지</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">숨겨진 키 위치 검색</span>
                </li>
              </ul>
            </div>

            {/* Key Analysis */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">키 분석</h3>
              <p className="text-gray-400 text-center mb-4">
                각 SSH 키의 상세한 정보와 보안 상태를 분석합니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">키 강도 평가</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">암호화 상태 확인</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">마지막 사용 시간 추적</span>
                </li>
              </ul>
            </div>

            {/* Malicious Key Detection */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">악성 키 탐지</h3>
              <p className="text-gray-400 text-center mb-4">
                공격자가 설치한 의심스러운 SSH 키를 자동으로 탐지합니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">무단 키 설치 탐지</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">비밀번호 없는 키 식별</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">의심스러운 키 옵션 검출</span>
                </li>
              </ul>
            </div>

            {/* Access Tracking */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">접근 추적</h3>
              <p className="text-gray-400 text-center mb-4">
                SSH 키 사용 현황을 실시간으로 모니터링하고 추적합니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">로그인 시도 모니터링</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">비정상 접근 패턴 탐지</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">사용량 통계 제공</span>
                </li>
              </ul>
            </div>

            {/* Compliance Reporting */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">규정 준수 보고</h3>
              <p className="text-gray-400 text-center mb-4">
                SSH 키 관리 현황에 대한 상세한 보고서를 생성합니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">키 인벤토리 보고서</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">보안 정책 준수 상태</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">감사 추적 로그</span>
                </li>
              </ul>
            </div>

            {/* Automated Response */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">자동 대응</h3>
              <p className="text-gray-400 text-center mb-4">
                위험한 SSH 키를 탐지하면 자동으로 대응 조치를 실행합니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">즉시 알림 발송</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">자동 격리 조치</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">워크플로우 통합</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detection Scenarios */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">탐지 시나리오</h2>
            <p className="text-xl text-gray-400">Sandfly가 탐지하는 SSH 키 관련 위협들</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            
            {/* Backdoor Keys */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-white mb-3">백도어 키</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• 공격자가 설치한 지속성 키</li>
                <li>• 숨겨진 위치의 키</li>
                <li>• 비정상적인 권한을 가진 키</li>
                <li>• 의심스러운 명령 제한</li>
              </ul>
            </div>

            {/* Weak Keys */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-white mb-3">취약한 키</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• 암호화되지 않은 개인 키</li>
                <li>• 약한 암호화 알고리즘</li>
                <li>• 짧은 키 길이</li>
                <li>• 기본 키 쌍</li>
              </ul>
            </div>

            {/* Stale Keys */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-white mb-3">오래된 키</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• 장기간 미사용 키</li>
                <li>• 퇴사자의 키</li>
                <li>• 만료된 임시 키</li>
                <li>• 정책 위반 키</li>
              </ul>
            </div>

            {/* Privilege Escalation */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-white mb-3">권한 상승</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• root 계정 키 무단 추가</li>
                <li>• 서비스 계정 키 남용</li>
                <li>• sudo 권한 우회</li>
                <li>• 시스템 계정 키 설치</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">SSH 키 모니터링의 이점</h2>
            <p className="text-xl text-gray-400">조직의 보안 태세 강화</p>
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
                    <strong className="text-white">무단 접근 방지:</strong>
                    <span className="text-gray-400"> 권한 없는 SSH 키를 즉시 탐지하고 제거</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-white">지속성 공격 차단:</strong>
                    <span className="text-gray-400"> 공격자의 백도어 키 설치를 사전 차단</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-white">측면 이동 방지:</strong>
                    <span className="text-gray-400"> 키 기반 측면 이동 공격 차단</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Operational Benefits */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-white mb-4">운영 이점</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-white">중앙 집중식 관리:</strong>
                    <span className="text-gray-400"> 모든 SSH 키를 한 곳에서 관리</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-white">자동화된 관리:</strong>
                    <span className="text-gray-400"> 수동 키 관리 프로세스 자동화</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-white">규정 준수:</strong>
                    <span className="text-gray-400"> 감사 요구사항 충족을 위한 상세 보고</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            SSH 키 보안을 강화하세요
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Sandfly의 포괄적인 SSH 키 모니터링으로 인프라의 모든 SSH 키를 안전하게 관리하세요. 
            무단 접근과 지속성 공격을 사전에 차단할 수 있습니다.
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

