'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronDownIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const faqCategories = [
  {
    id: 'general',
    title: '일반 정보',
    faqs: [
      {
        question: 'Sandfly Security는 무엇인가요?',
        answer: 'Sandfly Security는 Linux 시스템을 위한 에이전트리스 침입 탐지 및 사고 대응 플랫폼입니다. 에이전트 설치 없이 SSH를 통해 원격으로 Linux 호스트를 스캔하여 침해 징후(IOC), 루트킷, 악성 코드를 탐지합니다.',
      },
      {
        question: '에이전트리스 보안이란 무엇인가요?',        
        answer: '에이전트리스 보안은 대상 시스템에 소프트웨어를 설치하지 않고도 보안 모니터링과 위협 탐지를 수행하는 방식입니다. Sandfly는 SSH 연결을 통해 원격으로 시스템을 분석하므로 시스템 성능에 영향을 주지 않고 공격자가 탐지하기 어렵습니다.',
      },
      {
        question: '다른 보안 도구와 어떤 차이점이 있나요?',
        answer: 'Sandfly의 주요 차별점은 완전히 에이전트리스라는 점입니다. 기존 EDR 솔루션과 달리 대상 시스템에 아무것도 설치하지 않으므로 공격자가 비활성화할 수 없고, 시스템 리소스를 소모하지 않으며, 컨테이너나 임시 환경에서도 사용할 수 있습니다.',
      },
      {
        question: 'Sandfly는 어떤 Linux 배포판을 지원하나요?',
        answer: 'Ubuntu, CentOS, RHEL, Debian, SUSE, Amazon Linux, Alpine Linux 등 거의 모든 Linux 배포판을 지원합니다. 또한 Docker 컨테이너, Kubernetes 환경, 클라우드 인스턴스에서도 동작합니다.',
      },
    ],
  },
  {
    id: 'installation',
    title: '설치 및 배포',
    faqs: [
      {
        question: 'Sandfly 설치는 얼마나 복잡한가요?',
        answer: 'Sandfly 설치는 매우 간단합니다. 중앙 서버에 Sandfly만 설치하면 되며, 모니터링할 Linux 호스트에는 아무것도 설치할 필요가 없습니다. Docker 컨테이너 또는 가상 머신으로 제공되어 10-15분 내에 설치 완료됩니다.',
      },
      {
        question: '어떤 네트워크 요구 사항이 있나요?',
        answer: 'Sandfly 서버에서 모니터링할 Linux 호스트로 SSH(포트 22) 연결이 가능해야 합니다. 추가로 웹 인터페이스 접근을 위한 HTTPS 포트가 필요합니다. 방화벽 설정에서 이 포트들만 허용하면 됩니다.',
      },
      {
        question: '클라우드 환경에서 배포할 수 있나요?',
        answer: '네, AWS, Azure, GCP 등 모든 주요 클라우드 환경에서 배포 가능합니다. 클라우드 네이티브 아키텍처를 지원하며, Kubernetes 환경에서도 완벽하게 동작합니다. 클라우드별 배포 가이드도 제공됩니다.',
      },
      {
        question: '온프레미스와 클라우드 하이브리드 환경을 지원하나요?',
        answer: '네, 단일 Sandfly 인스턴스로 온프레미스와 클라우드의 Linux 시스템을 동시에 모니터링할 수 있습니다. 네트워크 연결만 되어 있다면 위치에 관계없이 모든 Linux 호스트를 관리할 수 있습니다.',
      },
    ],
  },
  {
    id: 'features',
    title: '기능 및 특징',
    faqs: [
      {
        question: 'Sandfly가 탐지할 수 있는 위협 유형은 무엇인가요?',
        answer: 'Sandfly는 루트킷, 백도어, 악성 프로세스, 변조된 바이너리, 숨겨진 파일, 권한 상승 흔적, 지속성 메커니즘, 측면 이동 흔적 등 다양한 침해 징후를 탐지할 수 있습니다. 3,000개 이상의 탐지 규칙을 제공합니다.',
      },
      {
        question: '실시간 모니터링이 가능한가요?',
        answer: 'Sandfly는 설정 가능한 간격으로 연속 스캔을 수행합니다. 기본적으로 5분마다 스캔하며, 요구사항에 따라 1분 간격까지 설정할 수 있습니다. 중요한 위협이 발견되면 즉시 알림을 받을 수 있습니다.',
      },
      {
        question: '알림 및 통합 기능이 있나요?',
        answer: '이메일, Slack, Microsoft Teams, PagerDuty 등 다양한 알림 채널을 지원합니다. 또한 SIEM 시스템(Splunk, ELK, QRadar 등)과 통합하거나 REST API를 통해 다른 보안 도구와 연동할 수 있습니다.',
      },
      {
        question: '포렌식 증거 수집이 가능한가요?',
        answer: '네, Sandfly는 발견된 위협에 대한 상세한 포렌식 데이터를 수집합니다. 악성 파일의 해시값, 프로세스 정보, 네트워크 연결, 타임라인 등을 자동으로 수집하여 사고 분석과 법적 대응에 활용할 수 있습니다.',
      },
    ],
  },
  {
    id: 'performance',
    title: '성능 및 확장성',
    faqs: [
      {
        question: 'Sandfly가 시스템 성능에 미치는 영향은?',
        answer: 'Sandfly는 에이전트리스 방식이므로 모니터링 대상 시스템의 CPU, 메모리, 디스크에 거의 영향을 주지 않습니다. 원격 SSH 연결을 통해 읽기 전용 명령만 실행하므로 시스템 부하가 최소화됩니다.',
      },
      {
        question: '얼마나 많은 호스트를 모니터링할 수 있나요?',
        answer: '단일 Sandfly 인스턴스로 수천 대의 Linux 호스트를 모니터링할 수 있습니다. 대규모 환경에서는 다중 Sandfly 인스턴스를 배포하여 수만 대 이상의 호스트도 관리 가능합니다.',
      },
      {
        question: '스캔 시간은 얼마나 걸리나요?',
        answer: '일반적인 Linux 호스트의 전체 스캔은 2-5분 정도 소요됩니다. 시스템 크기와 실행 중인 프로세스 수에 따라 차이가 있지만, 병렬 스캔을 통해 대규모 환경에서도 효율적으로 처리됩니다.',
      },
      {
        question: '네트워크 대역폭 사용량은?',
        answer: 'Sandfly는 매우 적은 네트워크 대역폭을 사용합니다. SSH 연결을 통한 텍스트 기반 명령 실행이므로 호스트당 평균 1-2KB/분 정도의 네트워크 트래픽만 발생합니다.',
      },
    ],
  },
  {
    id: 'security',
    title: '보안 및 접근 제어',
    faqs: [
      {
        question: 'SSH 인증은 어떻게 관리되나요?',
        answer: 'SSH 키 기반 인증을 권장하며, 사용자명/비밀번호 인증도 지원합니다. SSH 키는 Sandfly 내부에 안전하게 암호화되어 저장되며, 역할 기반 접근 제어(RBAC)로 관리자별 권한을 세분화할 수 있습니다.',
      },
      {
        question: '어떤 SSH 권한이 필요한가요?',
        answer: '일반적으로 읽기 전용 접근만 필요합니다. sudo 권한이 있으면 더 깊은 분석이 가능하지만, 제한된 권한으로도 대부분의 위협을 탐지할 수 있습니다. 권한별로 탐지 가능한 위협 유형이 문서화되어 있습니다.',
      },
      {
        question: '데이터는 어떻게 보호되나요?',
        answer: '모든 통신은 TLS/SSL로 암호화되며, 수집된 데이터는 데이터베이스에 암호화되어 저장됩니다. GDPR, HIPAA 등 규정 준수를 지원하며, 데이터 보존 정책도 설정할 수 있습니다.',
      },
      {
        question: '다중 사용자 환경을 지원하나요?',
        answer: '네, 역할 기반 접근 제어(RBAC)를 지원합니다. 관리자, 분석가, 뷰어 등 다양한 역할을 정의하고, 사용자별로 접근 가능한 호스트 그룹과 기능을 제한할 수 있습니다.',
      },
    ],
  },
  {
    id: 'support',
    title: '지원 및 라이센스',
    faqs: [
      {
        question: '어떤 지원 옵션이 있나요?',
        answer: '이메일 지원, 온라인 문서, 커뮤니티 포럼을 기본 제공하며, 프리미엄 지원으로 전화 지원과 우선 응답을 받을 수 있습니다. 또한 설치 지원과 맞춤형 교육도 제공됩니다.',
      },
      {
        question: '라이센스 모델은 어떻게 되나요?',        
        answer: '모니터링하는 Linux 호스트 수에 따른 구독 기반 라이센스입니다. 연간 또는 월간 구독이 가능하며, 비영리 기관과 교육 기관에는 할인이 제공됩니다.',
      },
      {
        question: '무료 체험이 가능한가요?',
        answer: '네, 30일 무료 체험을 제공합니다. 체험 기간 중 최대 10대의 호스트를 모니터링할 수 있으며, 모든 기능을 제한 없이 사용할 수 있습니다.',
      },
      {
        question: '업데이트는 어떻게 제공되나요?',
        answer: '정기적인 제품 업데이트와 새로운 탐지 규칙이 자동으로 제공됩니다. 중요한 보안 업데이트는 즉시 배포되며, 메이저 기능 업데이트는 분기별로 출시됩니다.',
      },
    ],
  },
];

const Page = () => {
  const [openFaq, setOpenFaq] = React.useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = React.useState('general');

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const currentCategory = faqCategories.find(cat => cat.id === selectedCategory);

  return (
    <div className="bg-gray-900 text-white">
      <main className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <section className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <QuestionMarkCircleIcon className="h-12 w-12 text-cyan-400 mr-4" />
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">자주 묻는 질문</h1>
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Sandfly Security에 대해 궁금한 점들을 정리했습니다. 
            필요한 답변을 찾지 못하셨다면 언제든 문의해 주세요.
          </p>
        </section>

        {/* Category Navigation */}
        <section className="mt-12 max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-cyan-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-cyan-400">
            {currentCategory?.title}
          </h2>
          <div className="space-y-4">
            {currentCategory?.faqs.map((faq, index) => {
              const faqId = `${selectedCategory}-${index}`;
              const isOpen = openFaq === faqId;
              
              return (
                <div key={faqId} className="bg-gray-800 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(faqId)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700 transition-colors"
                  >
                    <span className="text-lg font-medium text-white pr-4">
                      {faq.question}
                    </span>
                    <ChevronDownIcon 
                      className={`h-5 w-5 text-cyan-400 transition-transform ${
                        isOpen ? 'transform rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-4">
                      <div className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Search Section */}
        <section className="mt-20 max-w-4xl mx-auto bg-gray-800 p-10 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">
            원하는 답변을 찾지 못하셨나요?
          </h2>
          <p className="text-gray-300 mb-8">
            추가 질문이나 기술적 지원이 필요하시면 언제든 연락해 주세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="text"
              placeholder="질문을 검색해보세요..."
              className="flex-1 px-4 py-3 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="bg-cyan-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-cyan-700 transition-colors">
              검색
            </button>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-16 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-3">기술 지원</h3>
              <p className="text-gray-400 mb-4">
                기술적인 문제나 설정 관련 도움이 필요하신가요?
              </p>
              <Link 
                href="/support" 
                className="inline-block bg-cyan-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-cyan-700 transition-colors"
              >
                지원 요청
              </Link>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-3">영업 문의</h3>
              <p className="text-gray-400 mb-4">
                라이센스나 가격에 대한 문의를 원하시나요?
              </p>
              <Link 
                href="/contact-us" 
                className="inline-block bg-cyan-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-cyan-700 transition-colors"
              >
                영업팀 연락
              </Link>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-3">제품 데모</h3>
              <p className="text-gray-400 mb-4">
                Sandfly의 실제 동작을 확인해보고 싶으신가요?
              </p>
              <Link 
                href="/request-a-demo" 
                className="inline-block bg-cyan-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-cyan-700 transition-colors"
              >
                데모 신청
              </Link>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="mt-20 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-cyan-400 sm:text-4xl">
            추가 리소스
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            더 깊이 있는 정보와 학습 자료를 원하신다면 아래 리소스를 확인해보세요.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/resources/documentation" 
              className="inline-block rounded-md bg-cyan-600 px-8 py-3 text-base font-semibold text-white shadow-md hover:bg-cyan-700"
            >
              문서 보기
            </Link>
            <Link 
              href="/resources/sandfly-university" 
              className="inline-block rounded-md bg-gray-800 px-8 py-3 text-base font-semibold text-gray-300 ring-1 ring-gray-300 hover:bg-gray-700"
            >
              교육 프로그램
            </Link>
            <Link 
              href="/resources/white-papers" 
              className="inline-block rounded-md bg-gray-800 px-8 py-3 text-base font-semibold text-gray-300 ring-1 ring-gray-300 hover:bg-gray-700"
            >
              백서 다운로드
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;