import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-extrabold text-white mb-6">
              Sandfly 시작하기
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Sandfly의 에이전트리스 침입 탐지 및 인시던트 대응 플랫폼은 단시간에 Linux 인프라를 보호할 수 있도록 빠르고 경제적입니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact-us" 
                className="bg-sandfly-yellow hover:bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg inline-block"
              >
                시작하기
              </Link>
              <Link 
                href="/request-a-meeting" 
                className="border border-gray-400 hover:border-sandfly-yellow text-white px-8 py-4 rounded-lg font-semibold text-lg inline-block"
              >
                데모 요청
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Options Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">시작 방법 선택</h2>
            <p className="text-xl text-gray-600">귀하의 환경에 맞는 최적의 방법을 선택하세요</p>
          </div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Cloud Deployment */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border-2 border-sandfly-yellow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-sandfly-yellow bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-sandfly-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">클라우드 배포</h3>
                <p className="text-gray-300">가장 빠르고 간편한 시작 방법</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sandfly-yellow mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">5분 이내 설치 완료</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sandfly-yellow mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">자동 업데이트 및 관리</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sandfly-yellow mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">AWS, Azure, GCP 지원</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sandfly-yellow mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">확장성 및 고가용성</span>
                </li>
              </ul>
              
              <Link 
                href="/resources/digitalocean-cloud-deployment" 
                className="w-full bg-sandfly-yellow hover:bg-sandfly-yellow-light text-gray-900 py-3 px-6 rounded-lg font-semibold text-center block mb-3"
              >
                클라우드 배포 가이드
              </Link>
            </div>

            {/* On-Premise Deployment */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-sandfly-yellow bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-sandfly-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-6 4h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">온프레미스 배포</h3>
                <p className="text-gray-300">완전한 제어와 보안이 필요한 환경</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sandfly-yellow mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">완전한 데이터 제어</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sandfly-yellow mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">에어갭 환경 지원</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sandfly-yellow mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">맞춤형 통합</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sandfly-yellow mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">전용 지원팀</span>
                </li>
              </ul>
              
              <Link 
                href="/resources/requirements-installation" 
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold text-center block mb-3"
              >
                설치 요구사항 확인
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">간단한 3단계로 시작</h2>
            <p className="text-xl text-gray-300">복잡한 설정 없이 바로 시작할 수 있습니다</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">연락처 제출</h3>
                <p className="text-gray-300">
                  간단한 정보를 입력하여 무료 체험을 신청하세요. 
                  영업팀이 24시간 내에 연락드립니다.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">환경 설정</h3>
                <p className="text-gray-300">
                  전문가와 함께 귀하의 환경에 맞는 최적의 설정을 구성합니다. 
                  대부분 30분 이내에 완료됩니다.
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">즉시 보안 확인</h3>
                <p className="text-gray-300">
                  설치 완료 즉시 Linux 시스템의 보안 상태를 확인하고 
                  위협을 탐지할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">전문가 지원</h2>
            <p className="text-xl text-gray-300">설치부터 운영까지 전문가가 도와드립니다</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-sandfly-yellow bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-sandfly-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">설치 가이드</h3>
              <p className="text-gray-300 text-sm">단계별 설치 문서와 비디오 가이드</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-sandfly-yellow bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-sandfly-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">24/7 지원</h3>
              <p className="text-gray-300 text-sm">언제든지 도움을 받을 수 있는 지원 서비스</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-sandfly-yellow bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-sandfly-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">전문가 상담</h3>
              <p className="text-gray-300 text-sm">보안 전문가와 1:1 맞춤 상담</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-sandfly-yellow bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-sandfly-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">성공 보장</h3>
              <p className="text-gray-300 text-sm">성공적인 배포까지 끝까지 지원</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Linux 보안을 한 단계 업그레이드하세요. 무료 체험으로 Sandfly의 강력한 기능을 직접 경험해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact-us" 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-block"
            >
              무료 체험 시작
            </Link>
            <Link 
              href="/pricing" 
              className="border border-gray-400 hover:border-gray-300 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-block"
            >
              요금제 보기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
