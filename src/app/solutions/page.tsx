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
              모든 환경을 위한 보안 솔루션
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Sandfly는 다양한 환경과 사용 사례에 맞춤형 전문 보안 솔루션을 제공합니다. 클라우드 워크로드부터 IoT 장치까지, 모든 것을 다룹니다.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Cloud Workload Protection */}
            <div className="bg-gray-800 p-10 rounded-lg shadow-lg border border-gray-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-sandfly-yellow bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-sandfly-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.002 4.002 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">클라우드 워크로드 보호</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                AWS, Azure, GCP 및 기타 클라우드 플랫폼에서 클라우드 네이티브 애플리케이션과 컨테이너를 보호하세요. Sandfly는 기존 에이전트 기반 솔루션의 복잡성 없이 동적 클라우드 환경에 대한 종합적인 가시성과 위협 탐지를 제공합니다.
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  클라우드 인스턴스 및 컨테이너 자동 발견
                </li>
                <li className="flex items-start">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  클라우드 보안 서비스와의 네이티브 통합
                </li>
                <li className="flex items-start">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  클라우드 워크로드 규정 준수 모니터링
                </li>
                <li className="flex items-start">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  클라우드 인프라 드리프트 탐지
                </li>
              </ul>
              <Link 
                href="/solutions/cloud-workload-protection" 
                className="inline-flex items-center px-6 py-3 bg-sandfly-yellow text-gray-900 rounded-lg font-semibold hover:bg-sandfly-yellow-light transition-colors"
              >
                자세히 보기
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Data Center Security */}
            <div className="bg-gray-800 p-10 rounded-lg shadow-lg border border-gray-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-sandfly-yellow bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-sandfly-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-6 4h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">데이터 센터 보안</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                온프레미스 데이터 센터와 하이브리드 환경에서 중요한 인프라를 보호하세요. Sandfly는 물리적 서버, 가상화 플랫폼, 그리고 레거시 시스템에 대한 포괄적인 보안 모니터링을 제공합니다.
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  물리적 및 가상 서버 모니터링
                </li>
                <li className="flex items-start">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  레거시 시스템 지원
                </li>
                <li className="flex items-start">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  하이브리드 환경 가시성
                </li>
                <li className="flex items-start">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  규정 준수 및 감사 지원
                </li>
              </ul>
              <Link 
                href="/solutions/data-center-security" 
                className="inline-flex items-center px-6 py-3 bg-sandfly-yellow text-gray-900 rounded-lg font-semibold hover:bg-sandfly-yellow-light transition-colors"
              >
                자세히 보기
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* IoT and Embedded Device Security */}
            <div className="bg-gray-800 p-10 rounded-lg shadow-lg border border-gray-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-sandfly-yellow bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-sandfly-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">IoT 및 임베디드 장치 보안</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                IoT 장치, 임베디드 시스템, 네트워크 어플라이언스를 보호하세요. Sandfly의 경량 에이전트리스 접근 방식은 리소스가 제한된 장치에서도 완벽하게 작동합니다.
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  리소스 제약 환경 지원
                </li>
                <li className="flex items-start">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  네트워크 어플라이언스 모니터링
                </li>
                <li className="flex items-start">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  IoT 장치 무결성 검증
                </li>
                <li className="flex items-start">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  Edge 컴퓨팅 보안
                </li>
              </ul>
              <Link 
                href="/solutions/iot-and-embedded-device-security" 
                className="inline-flex items-center px-6 py-3 bg-sandfly-yellow text-gray-900 rounded-lg font-semibold hover:bg-sandfly-yellow-light transition-colors"
              >
                자세히 보기
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Managed Service Providers */}
            <div className="bg-gray-800 p-10 rounded-lg shadow-lg border border-gray-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-sandfly-yellow bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-sandfly-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">관리형 서비스 제공업체</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                MSSP 및 관리형 보안 서비스 제공업체를 위한 특별 솔루션입니다. 다중 테넌트 환경에서 다수의 고객을 효율적으로 모니터링하고 보호할 수 있습니다.
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  다중 테넌트 아키텍처
                </li>
                <li className="flex items-start">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  중앙 집중식 관리 콘솔
                </li>
                <li className="flex items-start">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  고객별 리포팅 및 대시보드
                </li>
                <li className="flex items-start">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  API 통합 및 자동화
                </li>
              </ul>
              <Link 
                href="/about-us/partner" 
                className="inline-flex items-center px-6 py-3 bg-sandfly-yellow text-gray-900 rounded-lg font-semibold hover:bg-sandfly-yellow-light transition-colors"
              >
                파트너 프로그램
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            귀하의 환경에 맞는 솔루션을 찾아보세요
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            전문가와 상담하여 귀하의 특정 요구사항에 맞는 최적의 Sandfly 솔루션을 구성하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact-us" 
              className="bg-sandfly-yellow hover:bg-sandfly-yellow-light text-gray-900 px-8 py-3 rounded-lg font-semibold inline-block"
            >
              전문가 상담
            </Link>
            <Link 
              href="/get-sandfly" 
              className="border border-gray-400 hover:border-gray-300 text-white px-8 py-3 rounded-lg font-semibold inline-block"
            >
              무료 체험
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;