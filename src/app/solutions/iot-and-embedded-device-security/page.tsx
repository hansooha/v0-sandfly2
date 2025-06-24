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
              IoT 및 임베디드 디바이스 보안
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              급증하는 IoT 디바이스와 임베디드 시스템의 보안을 강화하세요.
              에이전트리스 방식으로 제한된 리소스를 가진 디바이스도 안전하게 모니터링합니다.
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

      {/* IoT Security Challenges */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">IoT 보안 과제</h2>
            <p className="text-xl text-gray-300">IoT 환경에서 직면하는 보안 문제들</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Resource Constraints */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">리소스 제약</h3>
              <p className="text-gray-300 text-center">
                제한된 CPU, 메모리, 스토리지를 가진 IoT 디바이스에서는 
                전통적인 보안 솔루션 설치가 어렵거나 불가능합니다.
              </p>
            </div>

            {/* Device Diversity */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">디바이스 다양성</h3>
              <p className="text-gray-300 text-center">
                다양한 아키텍처, 운영체제, 펌웨어를 가진 수많은 IoT 디바이스를 
                일관되게 관리하고 보안을 유지하기 어렵습니다.
              </p>
            </div>

            {/* Weak Authentication */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">취약한 인증</h3>
              <p className="text-gray-300 text-center">
                기본 패스워드 사용, 약한 암호화, 인증 우회 등 
                많은 IoT 디바이스가 기본적인 보안 수준도 충족하지 못합니다.
              </p>
            </div>

            {/* Update Challenges */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">업데이트 어려움</h3>
              <p className="text-gray-300 text-center">
                원격지에 배치된 디바이스의 펌웨어 업데이트가 어렵고, 
                제조사의 지원 종료로 보안 패치가 제공되지 않는 경우가 많습니다.
              </p>
            </div>

            {/* Network Exposure */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">네트워크 노출</h3>
              <p className="text-gray-300 text-center">
                인터넷에 직접 연결된 IoT 디바이스들이 외부 공격에 노출되어 
                봇넷 구성이나 데이터 유출의 경로가 됩니다.
              </p>
            </div>

            {/* Visibility Gap */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">가시성 부족</h3>
              <p className="text-gray-300 text-center">
                네트워크상의 IoT 디바이스를 발견하고 상태를 모니터링하기 어려워 
                보안 사고 발생 시 신속한 대응이 불가능합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sandfly IoT Solution */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Sandfly IoT 보안 솔루션</h2>
            <p className="text-xl text-gray-300">IoT 환경에 최적화된 에이전트리스 보안</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Zero-Agent Architecture */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">에이전트리스 아키텍처</h3>
              <p className="text-gray-300 text-center mb-4">
                디바이스에 별도 소프트웨어 설치 없이 원격에서 보안 상태를 모니터링합니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">리소스 사용량 제로</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">펌웨어 변경 불필요</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">성능 영향 없음</span>
                </li>
              </ul>
            </div>

            {/* Device Discovery */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">자동 디바이스 발견</h3>
              <p className="text-gray-300 text-center mb-4">
                네트워크상의 모든 IoT 디바이스를 자동으로 발견하고 분류합니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">네트워크 스캐닝</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">디바이스 핑거프린팅</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">자동 분류 및 태깅</span>
                </li>
              </ul>
            </div>

            {/* Vulnerability Assessment */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">취약점 평가</h3>
              <p className="text-gray-300 text-center mb-4">
                IoT 디바이스의 보안 취약점을 종합적으로 평가하고 위험도를 산정합니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">CVE 데이터베이스 매칭</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">설정 취약점 검사</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">위험도 우선순위 지정</span>
                </li>
              </ul>
            </div>

            {/* Behavior Monitoring */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">행위 모니터링</h3>
              <p className="text-gray-300 text-center mb-4">
                IoT 디바이스의 비정상적인 네트워크 활동과 행위를 실시간으로 탐지합니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">트래픽 패턴 분석</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">이상 행위 탐지</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">봇넷 활동 감지</span>
                </li>
              </ul>
            </div>

            {/* Credential Security */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1721 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">자격증명 보안</h3>
              <p className="text-gray-300 text-center mb-4">
                IoT 디바이스의 기본 패스워드와 취약한 인증 설정을 탐지합니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">기본 패스워드 검사</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">약한 인증 탐지</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">SSL/TLS 설정 검증</span>
                </li>
              </ul>
            </div>

            {/* Asset Management */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">자산 관리</h3>
              <p className="text-gray-300 text-center mb-4">
                IoT 디바이스 인벤토리를 자동으로 관리하고 변경사항을 추적합니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">자동 인벤토리 관리</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">펌웨어 버전 추적</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">생명주기 관리</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IoT Device Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">지원 IoT 디바이스</h2>
            <p className="text-xl text-gray-300">Sandfly가 보안을 지원하는 다양한 IoT 디바이스</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            
            {/* Smart Building */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-sm border text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 21V9a2 2 0 011-1.732l5-2.857A2 2 0 0115.5 6V21" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">스마트 빌딩</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>HVAC 시스템</li>
                <li>조명 제어</li>
                <li>보안 카메라</li>
                <li>접근 제어 시스템</li>
              </ul>
            </div>

            {/* Industrial IoT */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-sm border text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">산업용 IoT</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>센서 네트워크</li>
                <li>제어 시스템</li>
                <li>모니터링 장비</li>
                <li>자동화 시스템</li>
              </ul>
            </div>

            {/* Medical Devices */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-sm border text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">의료 기기</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>환자 모니터링</li>
                <li>의료 IoT 센서</li>
                <li>진단 장비</li>
                <li>원격 진료 기기</li>
              </ul>
            </div>

            {/* Network Infrastructure */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-sm border text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">네트워크 인프라</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>라우터/스위치</li>
                <li>무선 AP</li>
                <li>방화벽</li>
                <li>네트워크 어플라이언스</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">IoT 보안 강화 효과</h2>
            <p className="text-xl text-gray-300">Sandfly IoT 보안으로 얻을 수 있는 핵심 이점</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Security Benefits */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-6">보안 이점</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-white">완전한 가시성:</span>
                    <span className="text-gray-300"> 숨겨진 IoT 디바이스까지 모든 자산을 발견하고 모니터링</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-white">취약점 제거:</span>
                    <span className="text-gray-300"> 기본 패스워드와 설정 오류를 자동으로 탐지하고 수정</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-white">위협 탐지:</span>
                    <span className="text-gray-300"> 봇넷 감염과 악성 활동을 실시간으로 탐지</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Operational Benefits */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-6">운영 이점</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-white">간편한 배포:</span>
                    <span className="text-gray-300"> 디바이스 수정 없이 즉시 보안 모니터링 시작</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-white">비용 효율:</span>
                    <span className="text-gray-300"> 개별 디바이스 라이선스 없이 전체 환경 보호</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-white">중앙 관리:</span>
                    <span className="text-gray-300"> 단일 콘솔에서 모든 IoT 디바이스 보안 관리</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">활용 사례</h2>
            <p className="text-xl text-gray-300">다양한 산업 분야에서의 IoT 보안 적용</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Smart Factory */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-bold text-white mb-3">스마트 팩토리</h3>
              <p className="text-gray-300 text-sm mb-4">
                제조업체가 생산라인의 IoT 센서와 제어 시스템을 통합 모니터링하여 
                사이버 공격으로부터 생산 중단을 방지합니다.
              </p>
              <div className="text-sm text-cyan-600 font-semibold">
                생산성 향상 25% • 보안 사고 90% 감소
              </div>
            </div>

            {/* Smart Hospital */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-bold text-white mb-3">스마트 병원</h3>
              <p className="text-gray-300 text-sm mb-4">
                의료진이 환자 모니터링 장비와 의료 IoT 기기의 보안을 관리하여 
                환자 안전과 개인정보를 보호합니다.
              </p>
              <div className="text-sm text-cyan-600 font-semibold">
                HIPAA 완전 준수 • 의료 기기 보안 100%
              </div>
            </div>

            {/* Smart City */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-bold text-white mb-3">스마트 시티</h3>
              <p className="text-gray-300 text-sm mb-4">
                도시 관리자가 교통 시스템, 가로등, 환경 센서 등 
                도시 인프라의 IoT 디바이스를 통합 보안 관리합니다.
              </p>
              <div className="text-sm text-cyan-600 font-semibold">
                관리 효율성 40% 향상 • 인프라 보안 강화
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            IoT 보안의 새로운 기준을 경험하세요
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Sandfly의 혁신적인 에이전트리스 기술로 모든 IoT 디바이스를 
            안전하게 보호하고 통합 관리할 수 있습니다.
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
              IoT 보안 상담
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;