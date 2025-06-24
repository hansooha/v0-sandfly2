import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-white mb-6">
              Sandfly 보안 플랫폼
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              에이전트 없는 Linux 보안의 미래를 경험하세요. Sandfly는 복잡성을 제거하고 성능 영향 없이 
              Linux 인프라에 대한 완전한 가시성과 위협 탐지를 제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Threat Detection */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 hover:bg-gray-700 transition-all">
              <div className="w-16 h-16 bg-sandfly-yellow bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-sandfly-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">위협 탐지</h3>
              <p className="text-gray-300 mb-6 text-center">
                에이전트 없이 Linux 시스템의 위협을 실시간으로 탐지하고 분석합니다.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">실시간 위협 탐지</span>
                </li>
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">고급 행동 분석</span>
                </li>
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">맬웨어 및 루트킷 탐지</span>
                </li>
              </ul>
              <Link href="/platform/threat-detection" className="text-sandfly-yellow hover:text-sandfly-yellow-light font-semibold">
                자세히 보기 →
              </Link>
            </div>

            {/* SSH Key Monitoring */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 hover:bg-gray-700 transition-all">
              <div className="w-16 h-16 bg-sandfly-yellow bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-sandfly-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">SSH 키 모니터링</h3>
              <p className="text-gray-300 mb-6 text-center">
                전체 Linux 인프라에서 SSH 키를 발견하고 감사하여 무단 액세스를 방지합니다.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">SSH 키 자동 발견</span>
                </li>
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">키 사용 패턴 분석</span>
                </li>
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">무단 키 탐지</span>
                </li>
              </ul>
              <Link href="/platform/ssh-key-monitoring" className="text-sandfly-yellow hover:text-sandfly-yellow-light font-semibold">
                자세히 보기 →
              </Link>
            </div>

            {/* Password Auditing */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 hover:bg-gray-700 transition-all">
              <div className="w-16 h-16 bg-sandfly-yellow bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-sandfly-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">패스워드 감사</h3>
              <p className="text-gray-300 mb-6 text-center">
                공격자보다 먼저 Linux 인프라의 취약한 패스워드를 찾아 보안을 강화합니다.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">취약한 패스워드 탐지</span>
                </li>
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">패스워드 정책 준수 확인</span>
                </li>
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">계정 보안 강화 권장사항</span>
                </li>
              </ul>
              <Link href="/platform/password-auditing" className="text-sandfly-yellow hover:text-sandfly-yellow-light font-semibold">
                자세히 보기 →
              </Link>
            </div>

            {/* Drift Detection */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 hover:bg-gray-700 transition-all">
              <div className="w-16 h-16 bg-sandfly-yellow bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-sandfly-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-10 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 10h6m-6 4h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">드리프트 탐지</h3>
              <p className="text-gray-300 mb-6 text-center">
                Linux 시스템의 무단 변경 사항을 탐지하여 설정 드리프트를 방지합니다.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">설정 변경 모니터링</span>
                </li>
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">파일 무결성 검증</span>
                </li>
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">규정 준수 모니터링</span>
                </li>
              </ul>
              <Link href="/platform/drift-detection" className="text-sandfly-yellow hover:text-sandfly-yellow-light font-semibold">
                자세히 보기 →
              </Link>
            </div>

            {/* Device & Appliance Security */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 hover:bg-gray-700 transition-all">
              <div className="w-16 h-16 bg-sandfly-yellow bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-sandfly-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">디바이스 및 어플라이언스 보안</h3>
              <p className="text-gray-300 mb-6 text-center">
                중요한 Linux 네트워킹 장비와 엣지 디바이스의 침입자를 찾습니다.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">네트워크 장비 모니터링</span>
                </li>
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">IoT 장치 보안</span>
                </li>
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">엣지 컴퓨팅 보호</span>
                </li>
              </ul>
              <Link href="/platform/device-and-appliance-security" className="text-sandfly-yellow hover:text-sandfly-yellow-light font-semibold">
                자세히 보기 →
              </Link>
            </div>

            {/* Incident Response */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 hover:bg-gray-700 transition-all">
              <div className="w-16 h-16 bg-sandfly-yellow bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-sandfly-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">인시던트 대응</h3>
              <p className="text-gray-300 mb-6 text-center">
                인시던트 대응 팀이 위협을 즉시 찾고 대응할 수 있게 합니다.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">실시간 위협 대응</span>
                </li>
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">포렌식 데이터 수집</span>
                </li>
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">자동화된 격리 조치</span>
                </li>
              </ul>
              <Link href="/platform/incident-response" className="text-sandfly-yellow hover:text-sandfly-yellow-light font-semibold">
                자세히 보기 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Sandfly 플랫폼의 핵심 장점</h2>
            <p className="text-xl text-gray-300">에이전트리스 아키텍처가 제공하는 독특한 이점들</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-sandfly-yellow bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sandfly-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">즉시 배포</h3>
              <p className="text-gray-300">에이전트 설치 없이 몇 분 만에 배포 완료</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-sandfly-yellow bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sandfly-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">성능 영향 없음</h3>
              <p className="text-gray-300">시스템 리소스 사용량 최소화</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-sandfly-yellow bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sandfly-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">높은 안정성</h3>
              <p className="text-gray-300">에이전트 오류나 충돌 위험 제거</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Sandfly 플랫폼을 직접 경험해보세요
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            에이전트리스 Linux 보안의 미래를 지금 무료로 체험해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/get-sandfly" 
              className="bg-sandfly-yellow hover:bg-sandfly-yellow-light text-gray-900 px-8 py-3 rounded-lg font-semibold inline-block"
            >
              무료 체험 시작
            </Link>
            <Link 
              href="/contact-us" 
              className="border border-gray-400 hover:border-gray-300 text-white px-8 py-3 rounded-lg font-semibold inline-block"
            >
              전문가 상담
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;