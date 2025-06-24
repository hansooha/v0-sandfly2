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
              문서
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Sandfly 플랫폼의 설치, 구성, 운영에 필요한 모든 기술 문서를 제공합니다.
              단계별 가이드부터 고급 설정까지 체계적으로 정리된 문서로 빠르게 시작하세요.
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
                기술 지원
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">문서 카테고리</h2>
            <p className="text-xl text-gray-300">목적에 맞는 문서를 쉽게 찾아보세요</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Getting Started */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">시작하기</h3>
              <p className="text-gray-300 text-center mb-6">
                Sandfly를 처음 사용하는 사용자를 위한 기본 가이드입니다.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  <span className="text-gray-300">빠른 시작 가이드</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  <span className="text-gray-300">기본 개념 이해</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  <span className="text-gray-300">첫 번째 스캔 실행</span>
                </li>
              </ul>
              <Link href="#" className="text-green-600 hover:text-green-700 font-semibold">
                시작하기 →
              </Link>
            </div>

            {/* Installation & Setup */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">설치 및 설정</h3>
              <p className="text-gray-300 text-center mb-6">
                다양한 환경에서 Sandfly를 설치하고 구성하는 방법을 안내합니다.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-300">시스템 요구사항</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-300">설치 가이드</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-300">초기 구성</span>
                </li>
              </ul>
              <Link href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                설치 가이드 →
              </Link>
            </div>

            {/* User Guide */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">사용자 가이드</h3>
              <p className="text-gray-300 text-center mb-6">
                Sandfly의 모든 기능을 활용하기 위한 상세한 사용 방법을 제공합니다.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-purple-600 mr-2">•</span>
                  <span className="text-gray-300">대시보드 사용법</span>
                </li>
                <li className="flex items-center">
                  <span className="text-purple-600 mr-2">•</span>
                  <span className="text-gray-300">스캔 설정 및 실행</span>
                </li>
                <li className="flex items-center">
                  <span className="text-purple-600 mr-2">•</span>
                  <span className="text-gray-300">결과 분석 및 해석</span>
                </li>
              </ul>
              <Link href="#" className="text-purple-600 hover:text-purple-700 font-semibold">
                사용자 가이드 →
              </Link>
            </div>

            {/* Administrator Guide */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">관리자 가이드</h3>
              <p className="text-gray-300 text-center mb-6">
                시스템 관리자를 위한 고급 설정 및 관리 방법을 안내합니다.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-red-600 mr-2">•</span>
                  <span className="text-gray-300">고급 구성 설정</span>
                </li>
                <li className="flex items-center">
                  <span className="text-red-600 mr-2">•</span>
                  <span className="text-gray-300">사용자 권한 관리</span>
                </li>
                <li className="flex items-center">
                  <span className="text-red-600 mr-2">•</span>
                  <span className="text-gray-300">백업 및 복구</span>
                </li>
              </ul>
              <Link href="#" className="text-red-600 hover:text-red-700 font-semibold">
                관리자 가이드 →
              </Link>
            </div>

            {/* API Reference */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">API 레퍼런스</h3>
              <p className="text-gray-300 text-center mb-6">
                개발자를 위한 Sandfly API 사용법과 레퍼런스 문서입니다.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span className="text-gray-300">REST API 엔드포인트</span>
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span className="text-gray-300">인증 및 권한</span>
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span className="text-gray-300">SDK 및 예제</span>
                </li>
              </ul>
              <Link href="#" className="text-yellow-600 hover:text-yellow-700 font-semibold">
                API 문서 →
              </Link>
            </div>

            {/* Troubleshooting */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">문제 해결</h3>
              <p className="text-gray-300 text-center mb-6">
                일반적인 문제와 해결 방법, 진단 도구 사용법을 제공합니다.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-gray-300 mr-2">•</span>
                  <span className="text-gray-300">일반적인 오류</span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-300 mr-2">•</span>
                  <span className="text-gray-300">성능 최적화</span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-300 mr-2">•</span>
                  <span className="text-gray-300">로그 분석</span>
                </li>
              </ul>
              <Link href="#" className="text-gray-300 hover:text-gray-300 font-semibold">
                문제 해결 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Documentation */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">인기 문서</h2>
            <p className="text-xl text-gray-300">가장 많이 찾는 문서들</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Quick Start */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">빠른 시작 가이드</h3>
              <p className="text-gray-300 mb-6">
                15분 만에 Sandfly를 설치하고 첫 번째 스캔을 실행하는 방법을 안내합니다.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-cyan-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</div>
                  <span className="text-gray-300">시스템 요구사항 확인</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-cyan-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</div>
                  <span className="text-gray-300">Sandfly 설치</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-cyan-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</div>
                  <span className="text-gray-300">첫 번째 스캔 실행</span>
                </div>
              </div>
              <Link href="#" className="inline-block mt-6 text-cyan-600 hover:text-cyan-700 font-semibold">
                가이드 시작하기 →
              </Link>
            </div>

            {/* Best Practices */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">모범 사례</h3>
              <p className="text-gray-300 mb-6">
                Sandfly를 효과적으로 활용하기 위한 검증된 모범 사례와 권장사항입니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">정기 스캔 스케줄링</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">알림 및 보고서 설정</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">성능 최적화 팁</span>
                </li>
              </ul>
              <Link href="#" className="inline-block mt-6 text-cyan-600 hover:text-cyan-700 font-semibold">
                모범 사례 보기 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Document Search */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">문서 검색</h2>
            <p className="text-xl text-gray-300">필요한 정보를 빠르게 찾아보세요</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="검색어를 입력하세요..."
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                />
                <svg className="absolute right-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sm text-gray-500">인기 검색어:</span>
                <button className="text-sm text-cyan-600 hover:text-cyan-700">설치</button>
                <span className="text-gray-300">•</span>
                <button className="text-sm text-cyan-600 hover:text-cyan-700">API</button>
                <span className="text-gray-300">•</span>
                <button className="text-sm text-cyan-600 hover:text-cyan-700">스캔</button>
                <span className="text-gray-300">•</span>
                <button className="text-sm text-cyan-600 hover:text-cyan-700">문제해결</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            찾는 정보가 없으신가요?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            저희 전문가 팀이 언제나 도움을 드릴 준비가 되어 있습니다. 
            기술 지원이나 추가 문서가 필요하시면 언제든 연락하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact-us" 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-block"
            >
              기술 지원 요청
            </Link>
            <Link 
              href="/resources" 
              className="border border-gray-400 hover:border-gray-300 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-block"
            >
              리소스 센터
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;