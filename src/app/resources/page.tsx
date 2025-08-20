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
              리소스 센터
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Sandfly 활용을 위한 모든 자료를 한 곳에서 확인하세요. 
              문서부터 백서, 웨비나까지 Linux 보안 전문성을 높이는데 필요한 모든 리소스를 제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Documentation */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 hover:bg-gray-700 transition-all">
              <div className="w-16 h-16 bg-sandfly-yellow bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-sandfly-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">문서</h3>
              <p className="text-gray-300 mb-6 text-center">
                Sandfly 플랫폼의 설치, 설정, 운영에 필요한 모든 기술 문서를 제공합니다.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">설치 및 배포 가이드</span>
                </li>
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">API 레퍼런스</span>
                </li>
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">관리자 매뉴얼</span>
                </li>
              </ul>
              <Link href="/resources/documentation" className="text-sandfly-yellow hover:text-sandfly-yellow-light font-semibold">
                문서 보기 →
              </Link>
            </div>

            {/* White Papers */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 hover:bg-gray-700 transition-all">
              <div className="w-16 h-16 bg-sandfly-yellow bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-sandfly-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">백서</h3>
              <p className="text-gray-300 mb-6 text-center">
                Linux 보안과 에이전트리스 모니터링에 대한 심층적인 기술 분석과 연구 자료입니다.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">에이전트리스 보안 아키텍처</span>
                </li>
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">Linux 위협 환경 분석</span>
                </li>
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">성능 영향 분석</span>
                </li>
              </ul>
              <Link href="/resources/white-papers" className="text-sandfly-yellow hover:text-sandfly-yellow-light font-semibold">
                백서 보기 →
              </Link>
            </div>

            {/* Blog */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 hover:bg-gray-700 transition-all">
              <div className="w-16 h-16 bg-sandfly-yellow bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-sandfly-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">블로그</h3>
              <p className="text-gray-300 mb-6 text-center">
                최신 보안 위협, 업계 동향, Sandfly 활용 팁에 대한 전문가의 인사이트를 확인하세요.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">보안 위협 분석</span>
                </li>
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">활용 사례 및 팁</span>
                </li>
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">업계 동향</span>
                </li>
              </ul>
              <Link href="/blog" className="text-sandfly-yellow hover:text-sandfly-yellow-light font-semibold">
                블로그 보기 →
              </Link>
            </div>

            {/* Webinars */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 hover:bg-gray-700 transition-all">
              <div className="w-16 h-16 bg-sandfly-yellow bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-sandfly-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">웨비나</h3>
              <p className="text-gray-300 mb-6 text-center">
                Sandfly 전문가와 업계 리더들이 진행하는 라이브 세션과 녹화된 웨비나를 시청하세요.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">제품 데모 및 시연</span>
                </li>
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">보안 전문가 세션</span>
                </li>
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">Q&A 세션</span>
                </li>
              </ul>
              <Link href="/resources/webinars" className="text-sandfly-yellow hover:text-sandfly-yellow-light font-semibold">
                웨비나 보기 →
              </Link>
            </div>

            {/* Sandfly University */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 hover:bg-gray-700 transition-all">
              <div className="w-16 h-16 bg-sandfly-yellow bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-sandfly-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Sandfly 대학</h3>
              <p className="text-gray-300 mb-6 text-center">
                체계적인 교육 프로그램으로 Sandfly 전문가가 되어보세요. 초급부터 고급까지 단계별 학습을 제공합니다.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">기초 과정</span>
                </li>
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">고급 과정</span>
                </li>
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">인증 프로그램</span>
                </li>
              </ul>
              <Link href="/resources/sandfly-university" className="text-sandfly-yellow hover:text-sandfly-yellow-light font-semibold">
                과정 보기 →
              </Link>
            </div>

            {/* FAQ */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 hover:bg-gray-700 transition-all">
              <div className="w-16 h-16 bg-sandfly-yellow bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-sandfly-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">자주 묻는 질문</h3>
              <p className="text-gray-300 mb-6 text-center">
                Sandfly에 대해 자주 묻는 질문들과 답변을 확인하세요. 빠른 문제 해결에 도움이 됩니다.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">제품 기능 관련</span>
                </li>
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">설치 및 설정</span>
                </li>
                <li className="flex items-center">
                  <span className="text-sandfly-yellow mr-2">•</span>
                  <span className="text-gray-300">문제 해결</span>
                </li>
              </ul>
              <Link href="/resources/product-faqs" className="text-sandfly-yellow hover:text-sandfly-yellow-light font-semibold">
                FAQ 보기 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">추가 리소스</h2>
            <p className="text-xl text-gray-300">개발자와 시스템 관리자를 위한 특별 자료</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Requirements & Installation */}
            <div className="bg-gray-700 p-8 rounded-lg text-center border border-gray-600">
              <h3 className="text-xl font-bold text-white mb-4">요구사항 및 설치</h3>
              <p className="text-gray-300 mb-6">
                Sandfly 설치를 위한 시스템 요구사항과 상세한 설치 가이드입니다.
              </p>
              <Link 
                href="/resources/requirements-installation" 
                className="bg-sandfly-yellow hover:bg-sandfly-yellow-light text-gray-900 px-6 py-3 rounded-lg font-semibold inline-block"
              >
                가이드 보기
              </Link>
            </div>

            {/* Third-party Code Verification */}
            <div className="bg-gray-700 p-8 rounded-lg text-center border border-gray-600">
              <h3 className="text-xl font-bold text-white mb-4">서드파티 코드 검증</h3>
              <p className="text-gray-300 mb-6">
                Sandfly의 오픈소스 구성요소와 보안 검증 과정에 대한 정보입니다.
              </p>
              <Link 
                href="/resources/third-party-code-verification" 
                className="bg-sandfly-yellow hover:bg-sandfly-yellow-light text-gray-900 px-6 py-3 rounded-lg font-semibold inline-block"
              >
                검증 정보 보기
              </Link>
            </div>

            {/* DigitalOcean Deployment */}
            <div className="bg-gray-700 p-8 rounded-lg text-center border border-gray-600">
              <h3 className="text-xl font-bold text-white mb-4">DigitalOcean 배포</h3>
              <p className="text-gray-300 mb-6">
                DigitalOcean 클라우드 환경에서 Sandfly를 배포하는 방법을 안내합니다.
              </p>
              <Link 
                href="/resources/digitalocean-cloud-deployment" 
                className="bg-sandfly-yellow hover:bg-sandfly-yellow-light text-gray-900 px-6 py-3 rounded-lg font-semibold inline-block"
              >
                배포 가이드 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            더 많은 도움이 필요하세요?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            저희 전문가 팀이 Sandfly 도입과 활용을 위한 맞춤형 지원을 제공합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact-us" 
              className="bg-sandfly-yellow hover:bg-sandfly-yellow-light text-gray-900 px-8 py-3 rounded-lg font-semibold inline-block"
            >
              전문가와 상담
            </Link>
            <Link 
              href="/support" 
              className="border border-gray-400 hover:border-gray-300 text-white px-8 py-3 rounded-lg font-semibold inline-block"
            >
              기술 지원
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;