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
              요구사항 및 설치
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Sandfly를 성공적으로 설치하고 운영하기 위한 시스템 요구사항과 단계별 설치 가이드입니다.
              다양한 환경에서 최적의 성능을 위한 권장 사양을 확인하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/get-sandfly" 
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-block"
              >
                무료 체험
              </Link>
              <Link 
                href="/contact-us" 
                className="border border-gray-400 hover:border-gray-300 text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg inline-block"
              >
                설치 지원 요청
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">시스템 요구사항</h2>
            <p className="text-xl text-gray-300">안정적인 운영을 위한 최소 및 권장 시스템 사양</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Minimum Requirements */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">최소 요구사항</h3>
                <p className="text-gray-300">소규모 환경 (최대 50대 서버)</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-300">CPU</span>
                  <span className="text-gray-300">2 코어</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-300">메모리</span>
                  <span className="text-gray-300">4GB RAM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-300">저장공간</span>
                  <span className="text-gray-300">20GB</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-300">네트워크</span>
                  <span className="text-gray-300">1Gbps</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-semibold text-gray-300">운영체제</span>
                  <span className="text-gray-300">Linux</span>
                </div>
              </div>
            </div>

            {/* Recommended Requirements */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border border-cyan-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">권장 사양</h3>
                <p className="text-gray-300">대규모 환경 (500대 이상 서버)</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-300">CPU</span>
                  <span className="text-gray-300">8+ 코어</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-300">메모리</span>
                  <span className="text-gray-300">16GB+ RAM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-300">저장공간</span>
                  <span className="text-gray-300">100GB+ SSD</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-300">네트워크</span>
                  <span className="text-gray-300">10Gbps</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-semibold text-gray-300">운영체제</span>
                  <span className="text-gray-300">Linux (최신 커널)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Operating Systems */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">지원 운영체제</h2>
            <p className="text-xl text-gray-300">Sandfly가 공식적으로 지원하는 Linux 배포판</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            
            {/* Ubuntu */}
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 14.794c-.044.121-.112.23-.203.32-.09.09-.198.158-.319.202a.860.86 0 01-.373.084.86.86 0 01-.374-.084c-.12-.044-.228-.112-.318-.202-.09-.09-.159-.199-.203-.32a.86.86 0 01-.084-.373c0-.127.028-.251.084-.374.044-.12.112-.228.203-.318.09-.09.198-.159.318-.203a.86.86 0 01.374-.084c.127 0 .252.028.373.084.121.044.229.112.319.203.09.09.159.198.203.318a.86.86 0 01.084.374.86.86 0 01-.084.373z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Ubuntu</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>20.04 LTS</li>
                <li>22.04 LTS</li>
                <li>24.04 LTS</li>
              </ul>
            </div>

            {/* CentOS/RHEL */}
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">CentOS/RHEL</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>CentOS 7/8</li>
                <li>RHEL 7/8/9</li>
                <li>Rocky Linux 8/9</li>
              </ul>
            </div>

            {/* Debian */}
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.72 19.637c-.212.03-.426.045-.643.045-5.445 0-9.862-4.418-9.862-9.862S6.632 0 12.077 0c.217 0 .431.015.643.045v2.183c-.212-.03-.426-.045-.643-.045-4.233 0-7.679 3.446-7.679 7.679s3.446 7.679 7.679 7.679c.217 0 .431-.015.643-.045v2.141z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Debian</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>Debian 10</li>
                <li>Debian 11</li>
                <li>Debian 12</li>
              </ul>
            </div>

            {/* SUSE */}
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">SUSE</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>SLES 12/15</li>
                <li>openSUSE Leap</li>
                <li>openSUSE Tumbleweed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">설치 방법</h2>
            <p className="text-xl text-gray-300">환경에 맞는 설치 방법을 선택하세요</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Docker Installation */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Docker 설치</h3>
              <p className="text-gray-300 text-center mb-6">
                가장 빠르고 간편한 설치 방법입니다. 개발 환경이나 테스트에 적합합니다.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-300">5분 내 설치 완료</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-300">격리된 환경</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-300">쉬운 업그레이드</span>
                </li>
              </ul>
              <Link href="#docker-install" className="text-blue-600 hover:text-blue-700 font-semibold">
                Docker 설치 가이드 →
              </Link>
            </div>

            {/* Package Installation */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">패키지 설치</h3>
              <p className="text-gray-300 text-center mb-6">
                운영 환경에 최적화된 native 패키지 설치입니다. 최고 성능을 제공합니다.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  <span className="text-gray-300">최적의 성능</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  <span className="text-gray-300">시스템 통합</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  <span className="text-gray-300">자동 업데이트</span>
                </li>
              </ul>
              <Link href="#package-install" className="text-green-600 hover:text-green-700 font-semibold">
                패키지 설치 가이드 →
              </Link>
            </div>

            {/* Source Installation */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">소스 컴파일</h3>
              <p className="text-gray-300 text-center mb-6">
                완전한 제어와 사용자 정의가 필요한 경우를 위한 소스 컴파일 설치입니다.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-purple-600 mr-2">•</span>
                  <span className="text-gray-300">완전한 제어</span>
                </li>
                <li className="flex items-center">
                  <span className="text-purple-600 mr-2">•</span>
                  <span className="text-gray-300">사용자 정의</span>
                </li>
                <li className="flex items-center">
                  <span className="text-purple-600 mr-2">•</span>
                  <span className="text-gray-300">최신 기능</span>
                </li>
              </ul>
              <Link href="#source-install" className="text-purple-600 hover:text-purple-700 font-semibold">
                소스 설치 가이드 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Network Requirements */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">네트워크 요구사항</h2>
            <p className="text-xl text-gray-300">Sandfly 운영을 위한 네트워크 설정</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Required Ports */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-6">필수 포트</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <div>
                    <span className="font-semibold text-white">443 (HTTPS)</span>
                    <p className="text-sm text-gray-300">웹 인터페이스 접근</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">인바운드</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <div>
                    <span className="font-semibold text-white">22 (SSH)</span>
                    <p className="text-sm text-gray-300">대상 시스템 스캔</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">아웃바운드</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <div>
                    <span className="font-semibold text-white">5432 (PostgreSQL)</span>
                    <p className="text-sm text-gray-300">데이터베이스 연결</p>
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">내부</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <div>
                    <span className="font-semibold text-white">443 (HTTPS)</span>
                    <p className="text-sm text-gray-300">라이선스 서버</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">아웃바운드</span>
                </div>
              </div>
            </div>

            {/* Network Topology */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-6">네트워크 토폴로지</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-white">에이전트리스 아키텍처</span>
                    <p className="text-sm text-gray-300">대상 시스템에 소프트웨어 설치 불필요</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-white">SSH 기반 연결</span>
                    <p className="text-sm text-gray-300">표준 SSH 프로토콜 사용</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-white">중앙 집중식 관리</span>
                    <p className="text-sm text-gray-300">단일 서버에서 모든 시스템 관리</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-white">확장 가능한 설계</span>
                    <p className="text-sm text-gray-300">수천 대 시스템까지 확장 지원</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="py-20" id="docker-install">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">빠른 시작 가이드</h2>
            <p className="text-xl text-gray-300">Docker를 사용한 15분 설치</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              
              {/* Step 1 */}
              <div className="flex items-start">
                <div className="w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center mr-6 flex-shrink-0 font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Docker 설치 확인</h3>
                  <p className="text-gray-300 mb-4">시스템에 Docker가 설치되어 있는지 확인합니다.</p>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                    $ docker --version<br/>
                    $ docker-compose --version
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start">
                <div className="w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center mr-6 flex-shrink-0 font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Sandfly 다운로드</h3>
                  <p className="text-gray-300 mb-4">최신 Sandfly Docker 이미지를 다운로드합니다.</p>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                    $ docker pull sandfly/sandfly-server:latest
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start">
                <div className="w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center mr-6 flex-shrink-0 font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">설정 파일 생성</h3>
                  <p className="text-gray-300 mb-4">Docker Compose 설정 파일을 생성합니다.</p>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                    $ curl -o docker-compose.yml https://sandfly.kr/install/docker-compose.yml
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start">
                <div className="w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center mr-6 flex-shrink-0 font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Sandfly 시작</h3>
                  <p className="text-gray-300 mb-4">Docker Compose를 사용하여 Sandfly를 시작합니다.</p>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                    $ docker-compose up -d
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-start">
                <div className="w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center mr-6 flex-shrink-0 font-bold">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">웹 인터페이스 접근</h3>
                  <p className="text-gray-300 mb-4">브라우저에서 Sandfly 웹 인터페이스에 접근합니다.</p>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                    https://localhost:443
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
            설치에 도움이 필요하신가요?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            저희 전문가 팀이 설치 과정을 도와드립니다. 
            기술 지원을 통해 빠르고 안전한 설치를 보장받으세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact-us" 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-block"
            >
              설치 지원 요청
            </Link>
            <Link 
              href="/resources/documentation" 
              className="border border-gray-400 hover:border-gray-300 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-block"
            >
              상세 문서 보기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;