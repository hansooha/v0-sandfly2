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
              간단하고 투명한 요금제
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              귀하의 조직에 맞는 요금제를 선택하세요. 모든 요금제에는 숨겨진 비용이나 에이전트당 비용 없이 
              핵심 에이전트리스 보안 플랫포룄이 포함됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Starter Plan */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">스타터</h3>
                <div className="mb-4">
                  <span className="text-4xl font-extrabold text-white">문의하기</span>
                </div>
                <p className="text-gray-300">시작하는 소규모 팀에 적합</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sandfly-yellow mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">최대 25개 Linux 시스템</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sandfly-yellow mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">핵심 위협 탐지</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sandfly-yellow mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">SSH 키 모니터링</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sandfly-yellow mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">이메일 지원</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sandfly-yellow mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">기본 리포팅</span>
                </li>
              </ul>
              
              <Link 
                href="/contact-us" 
                className="w-full bg-sandfly-yellow hover:bg-sandfly-yellow-light text-gray-900 py-3 px-6 rounded-lg font-semibold text-center block"
              >
                영업팀 문의
              </Link>
            </div>

            {/* Professional Plan - Featured */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border-2 border-sandfly-yellow relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-sandfly-yellow text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                  인기 요금제
                </span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">프로페셔널</h3>
                <div className="mb-4">
                  <span className="text-4xl font-extrabold text-white">문의하기</span>
                </div>
                <p className="text-gray-300">성장하는 조직에 이상적</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sandfly-yellow mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">최대 500개 Linux 시스템</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sandfly-yellow mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">고급 위협 탐지</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sandfly-yellow mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">패스워드 감사</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sandfly-yellow mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">드리프트 탐지</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sandfly-yellow mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">우선 지원</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sandfly-yellow mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">고급 리포팅 및 분석</span>
                </li>
              </ul>
              
              <Link 
                href="/contact-us" 
                className="w-full bg-sandfly-yellow hover:bg-sandfly-yellow-light text-gray-900 py-3 px-6 rounded-lg font-semibold text-center block"
              >
                영업팀 문의
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">엔터프라이즈</h3>
                <div className="mb-4">
                  <span className="text-4xl font-extrabold text-white">문의하기</span>
                </div>
                <p className="text-gray-300">대규모 배포를 위한</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sandfly-yellow mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">무제한 Linux 시스템</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sandfly-yellow mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">모든 플랫폼 기능</span>
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
                  <span className="text-gray-300">전담 지원팀</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sandfly-yellow mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">온프레미스 배포</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sandfly-yellow mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">전문 서비스</span>
                </li>
              </ul>
              
              <Link 
                href="/contact-us" 
                className="w-full bg-sandfly-yellow hover:bg-sandfly-yellow-light text-gray-900 py-3 px-6 rounded-lg font-semibold text-center block"
              >
                영업팀 문의
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">자주 묻는 질문</h2>
            <p className="text-xl text-gray-300">요금제와 플랜에 대한 일반적인 질문</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="border-b border-gray-600 pb-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  무료 체험이 가능한가요?
                </h3>
                <p className="text-gray-300">
                  네, 귀하의 환경에서 Sandfly를 평가할 수 있는 무료 체험을 제공합니다. 시작하려면 영업팀에 문의하세요.
                </p>
              </div>
              
              <div className="border-b border-gray-600 pb-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  요금제에는 무엇이 포함되나요?
                </h3>
                <p className="text-gray-300">
                  모든 요금제에는 핵심 Sandfly 플랫폼, 정기 업데이트, 지원이 포함됩니다. 에이전트당 또는 스캔당 추가 비용은 없습니다.
                </p>
              </div>
              
              <div className="border-b border-gray-600 pb-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  요금제를 업그레이드하거나 다운그레이드할 수 있나요?
                </h3>
                <p className="text-gray-300">
                  네, 언제든지 요금제를 변경할 수 있습니다. 요금제 변경에 대한 도움이 필요하시면 지원팀에 문의하세요.
                </p>
              </div>
              
              <div className="border-b border-gray-600 pb-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  대량 할인을 제공하나요?
                </h3>
                <p className="text-gray-300">
                  네, 대규모 배포에 대해 대량 할인을 제공합니다. 특정 요구사항을 논의하려면 영업팀에 문의하세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            시작할 준비가 되셨나요?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            요구사항을 논의하고 맞춤형 견적을 받으려면 영업팀에 문의하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact-us" 
              className="bg-sandfly-yellow hover:bg-sandfly-yellow-light text-gray-900 px-8 py-3 rounded-lg font-semibold inline-block"
            >
              영업팀 문의
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