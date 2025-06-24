import React from 'react';
import Link from 'next/link';
import YouTubeEmbed from '@/components/YouTubeEmbed';

const Page = () => {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-extrabold text-white mb-6">
              위협 탐지
            </h1>
            <p className="text-xl text-gray-400 mb-4">
              Linux 보안,
            </p>
            <p className="text-xl text-gray-400 mb-8">
              그것이 우리가 하는 전부입니다.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Sandfly의 Linux 침입자 전술에 대한 깊은 이해는 비교할 수 없는 위협 커버리지와 사전 예방적 보호를 제공합니다. 알려진 공격과 알려지지 않은 공격 모두 안전하고 높은 성능으로 탐지됩니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/get-sandfly" 
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-block"
              >
                무료 체험
              </Link>
              <Link 
                href="/platform" 
                className="border border-gray-400 hover:border-gray-300 text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg inline-block"
              >
                플랫폼 개요
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Linux 위협 노출</h2>
            <p className="text-xl text-gray-400 mb-8">
              Sandfly와 함께 파이어링 레인지에서 침해된 Linux 시스템을 사냥하는 과정을 함께하세요.
            </p>
            <div className="max-w-4xl mx-auto">
              <YouTubeEmbed 
                videoId="QYd64EsOLko" 
                title="Linux 맬웨어를 몇 초 만에 에이전트리스로 찾고 분석" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">사용 사례</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Use Case 1 */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">01.</div>
              <h3 className="text-xl font-bold text-white mb-4">모든 모니터링을 위한 하나의 도구</h3>
              <p className="text-gray-400">
                Sandfly의 호환성은 하나의 도구로 모든 Linux 자산을 감시할 수 있음을 의미합니다. 내장된 위협 탐지 모듈과 SSH 키 추적과 같은 능동적 방어 기능은 Sandfly에 광범위한 커버리지를 제공합니다.
              </p>
            </div>

            {/* Use Case 2 */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">02.</div>
              <h3 className="text-xl font-bold text-white mb-4">임베디드 장치 및 어플라이언스</h3>
              <p className="text-gray-400">
                Sandfly는 모니터링하기 어렵기로 악명 높은 임베디드 장치와 Linux 기반 어플라이언스에서 실행할 수 있습니다. 클라우드에서 엣지까지 모든 것을 보호할 수 있습니다.
              </p>
            </div>

            {/* Use Case 3 */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">03.</div>
              <h3 className="text-xl font-bold text-white mb-4">에어갭 및 민감한 네트워크</h3>
              <p className="text-gray-400">
                Sandfly는 우리나 제3자의 분석을 위해 어떤 데이터도 오프사이트로 전송하지 않습니다. 이는 격리되고 에어갭된 네트워크에서 작동하며 민감한 원격 측정 데이터가 귀하의 통제를 벗어나지 않음을 의미합니다.
              </p>
            </div>

            {/* Use Case 4 */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">04.</div>
              <h3 className="text-xl font-bold text-white mb-4">다른 EDR 솔루션과 함께 작동</h3>
              <p className="text-gray-400">
                Sandfly의 능동적인 위협 헌팅은 에이전트 기반 EDR 시스템과 함께 작동하며 에이전트가 갈 수 없는 곳에 가시성을 제공합니다. Sandfly는 기존 EDR에 독특하고 강력한 두 번째 눈을 제공합니다.
              </p>
            </div>

            {/* Use Case 5 */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">05.</div>
              <h3 className="text-xl font-bold text-white mb-4">배포판에 구애받지 않음</h3>
              <p className="text-gray-400">
                Sandfly는 Linux 배포판에 구애받지 않습니다. 모니터링할 시스템이 Linux를 실행한다면 Sandfly가 거의 위험 없이 보호할 수 있는 가능성이 매우 높습니다.
              </p>
            </div>

            {/* Use Case 6 */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">06.</div>
              <h3 className="text-xl font-bold text-white mb-4">중요 인프라</h3>
              <p className="text-gray-400">
                Sandfly는 전 세계적으로 중요 인프라 제공업체들이 시스템을 보호하는 데 신뢰하고 있습니다. 우리는 이 역할에서 성능, 안정성 및 안전성에 대한 입증된 실적을 보유하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Threat Hunting Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">자체 위협 헌팅 모듈 구축</h2>
            <p className="text-xl text-gray-400 mb-8">
              Sandfly의 사용하기 쉬운 검사로 Linux 보안을 사용자 정의하고 필요에 맞는 특정 위협을 사냥하세요. 
              1,100개 이상의 사전 구축된 탐지에 액세스하고 직관적인 구문으로 자체 탐지를 만드세요. 
              공격자에 대한 즉각적인 통찰력을 얻고 Linux 포렌식에 대한 우리의 전문 지식을 활용하세요. 
              아래에서 우리가 대응하는 Linux 위협의 일부를 살펴보세요.
            </p>
            <div className="max-w-4xl mx-auto mb-8">
              <img 
                src="https://www.datocms-assets.com/56687/1707605722-screenshot-2024-02-11-at-11-55-13-am.png" 
                alt="Sandfly의 에이전트리스 Linux 위협 헌팅 모듈 관리" 
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Threats List Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">탐지 가능한 위협들</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {[
              "로드 가능한 커널 모듈 및 eBPF 스텔스 루트킷 탐지",
              "표준 루트킷 탐지",
              "암호화폐 및 크립토마이너 탐지",
              "약하고 기본적인 Linux 사용자 패스워드",
              "숨겨진 의심스러운 프로세스",
              "의심스러운 네트워크 활동을 수행하는 프로세스",
              "프로세스 위장",
              "파일 위장 및 숨기기",
              "오염된 시스템 명령",
              "스텔스 루트킷의 은폐된 데이터",
              "변조된 시스템 시작 스크립트",
              "암호화되고 의심스러운 실행 파일",
              "비정상적인 시스템 바이너리",
              "의심스러운 사용자 및 권한",
              "숨겨진 실행 파일",
              "의심스러운 방식으로 사용되거나 은폐된 시스템 셸",
              "프로세스 인젝션",
              "리버스 바인드셸 익스플로잇",
              "표준 바인드셸 익스플로잇",
              "침해된 웹사이트",
              "변조된 감사 기록",
              "파괴된 감사 기록",
              "웹셸 및 백도어",
              "안티 포렌식 활동",
              "은폐된 백도어",
              "권한 상승 백도어",
              "멀웨어 지속성 메커니즘",
              "오용되거나 고아가 된 SSH 키",
              "의심스러운 사용자 로그인 및 로그아웃 활동",
              "의심스러운 크론 작업 및 기타 예약된 작업",
              "Linux 멀웨어 및 고급 지속 위협 활동",
              "분산 서비스 거부(DDoS) 에이전트",
              "패스워드 및 네트워크 스니퍼",
              "기타 많은 위협들!"
            ].map((threat, index) => (
              <div key={index} className="flex items-start">
                <svg className="w-5 h-5 text-cyan-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">{threat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            빠르고 안전한 Linux EDR을 받으세요
          </h2>
          <Link 
            href="/get-sandfly" 
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-block mb-8"
          >
            지금 호스트 보호하기
          </Link>
          <div className="flex justify-center">
            <img 
              src="https://sandflysecurity.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fveracode-verified-standard-white.d24ef83e.png&w=384&q=75" 
              alt="Veracode Verified Standard" 
              width={160} 
              height={42}
              className="opacity-80"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;