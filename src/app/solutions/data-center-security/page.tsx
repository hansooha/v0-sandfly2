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
              데이터센터 보안
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              전통적인 데이터센터와 하이브리드 환경의 보안을 강화하세요.
              물리적 서버부터 가상화 인프라까지 포괄적인 보안 모니터링을 제공합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/get-sandfly" 
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-block"
              >
                무료 체험
              </Link>
              <Link 
                href="/solutions" 
                className="border border-gray-400 hover:border-gray-300 text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg inline-block"
              >
                솔루션 개요
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Data Center Challenges */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">데이터센터 보안 과제</h2>
            <p className="text-xl text-gray-300">현대 데이터센터가 직면한 보안 문제들</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Legacy Infrastructure */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 21V9a2 2 0 011-1.732l5-2.857A2 2 0 0115.5 6V21" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">레거시 인프라</h3>
              <p className="text-gray-300 text-center">
                오래된 시스템과 다양한 운영체제, 애플리케이션이 혼재하는 
                복잡한 환경에서 일관된 보안 관리가 어렵습니다.
              </p>
            </div>

            {/* Physical and Virtual Mix */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">물리/가상 혼재</h3>
              <p className="text-gray-300 text-center">
                물리적 서버와 가상머신, 컨테이너가 혼재하는 환경에서 
                통합된 보안 가시성을 확보하기 어렵습니다.
              </p>
            </div>

            {/* Compliance Requirements */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">규정 준수</h3>
              <p className="text-gray-300 text-center">
                금융, 의료, 정부 등의 엄격한 규제 환경에서 
                지속적인 컴플라이언스 모니터링이 필요합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sandfly Data Center Solution */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Sandfly 데이터센터 솔루션</h2>
            <p className="text-xl text-gray-300">기존 인프라에 최적화된 에이전트리스 보안</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Unified Monitoring */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">통합 모니터링</h3>
              <p className="text-gray-300 text-center mb-4">
                물리 서버, 가상머신, 베어메탈을 단일 대시보드에서 통합 관리합니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">혼재 환경 통합 가시성</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">중앙집중식 관리</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">실시간 상태 모니터링</span>
                </li>
              </ul>
            </div>

            {/* Legacy System Support */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">레거시 지원</h3>
              <p className="text-gray-300 text-center mb-4">
                오래된 시스템도 에이전트 설치 없이 안전하게 모니터링할 수 있습니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">구형 Linux 배포판 지원</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">시스템 변경 최소화</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">하위 호환성 보장</span>
                </li>
              </ul>
            </div>

            {/* High Availability */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">고가용성</h3>
              <p className="text-gray-300 text-center mb-4">
                미션 크리티컬 환경을 위한 고가용성 아키텍처를 제공합니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">클러스터 구성 지원</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">자동 페일오버</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">데이터 백업 및 복구</span>
                </li>
              </ul>
            </div>

            {/* Performance Optimization */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2V7a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 002 2h2a2 2 0 012-2V7a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 00-2 2h-2a2 2 0 00-2 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">성능 최적화</h3>
              <p className="text-gray-300 text-center mb-4">
                대규모 데이터센터 환경에서도 최적의 성능을 보장합니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">최적화된 스캔 스케줄링</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">네트워크 대역폭 관리</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">리소스 사용량 최소화</span>
                </li>
              </ul>
            </div>

            {/* Compliance Reporting */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">컴플라이언스 보고</h3>
              <p className="text-gray-300 text-center mb-4">
                규제 요구사항에 맞는 상세한 보고서를 자동으로 생성합니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">NIST, ISO 27001 지원</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">자동화된 감사 보고서</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">변경 추적 및 기록</span>
                </li>
              </ul>
            </div>

            {/* Zero Trust Security */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">제로 트러스트</h3>
              <p className="text-gray-300 text-center mb-4">
                내부 네트워크에 대한 무조건적 신뢰를 배제한 보안 모델을 구현합니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">지속적 검증</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">최소 권한 원칙</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">이상 행위 탐지</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">데이터센터 활용 사례</h2>
            <p className="text-xl text-gray-300">다양한 데이터센터 환경에서의 Sandfly 활용</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Financial Services */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-white mb-4">금융 서비스</h3>
              <p className="text-gray-300 mb-6">
                엄격한 규제 환경에서 고가용성과 보안을 동시에 만족하는 모니터링을 제공합니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">PCI DSS 컴플라이언스 지원</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">실시간 거래 시스템 모니터링</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">금융 데이터 보호</span>
                </li>
              </ul>
            </div>

            {/* Government */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-white mb-4">정부 기관</h3>
              <p className="text-gray-300 mb-6">
                국가 기밀 정보를 다루는 정부 기관의 보안 요구사항을 충족합니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">FISMA, FedRAMP 준수</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">기밀 정보 보호</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">내부자 위협 탐지</span>
                </li>
              </ul>
            </div>

            {/* Healthcare */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-white mb-4">의료 기관</h3>
              <p className="text-gray-300 mb-6">
                환자 데이터 보호와 의료 시스템의 연속성을 보장합니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">HIPAA 컴플라이언스</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">의료 IoT 디바이스 보안</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">환자 정보 보호</span>
                </li>
              </ul>
            </div>

            {/* Manufacturing */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-white mb-4">제조업</h3>
              <p className="text-gray-300 mb-6">
                산업 제어 시스템과 IT 인프라를 통합적으로 보호합니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">OT/IT 융합 환경 모니터링</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">생산 라인 연속성 보장</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">지적재산 보호</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">데이터센터 보안 강화 효과</h2>
            <p className="text-xl text-gray-300">Sandfly 도입으로 얻을 수 있는 핵심 이점</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Reduced Complexity */}
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">복잡성 감소</h3>
              <p className="text-gray-300">
                단일 솔루션으로 다양한 시스템을 통합 관리하여 운영 복잡성을 크게 줄입니다.
              </p>
            </div>

            {/* Cost Savings */}
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">비용 절감</h3>
              <p className="text-gray-300">
                에이전트리스 방식으로 라이선스 비용과 유지보수 비용을 대폭 절감합니다.
              </p>
            </div>

            {/* Enhanced Security */}
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">보안 강화</h3>
              <p className="text-gray-300">
                실시간 위협 탐지와 지속적 모니터링으로 데이터센터 보안을 크게 향상시킵니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            데이터센터 보안을 한 단계 업그레이드하세요
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Sandfly의 에이전트리스 기술로 기존 인프라를 변경하지 않고도 
            강력한 보안 모니터링을 구현할 수 있습니다.
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