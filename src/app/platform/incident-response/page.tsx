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
              Linux 사고 대응
            </h1>
            <p className="text-2xl text-gray-300 mb-4">
              즉시 사고 대응.
            </p>
            <p className="text-2xl text-gray-300 mb-8">
              Linux 위협이 가면을 벗다.
            </p>
            <p className="text-lg text-gray-400 mb-6">
              사고 대응(IR) 팀은 피해를 억제하기 위해 침해에 빠르게 대응해야 합니다. 기존의 에이전트 기반 도구를 사용하면 호환성이나 성능 위험으로 인해 완전한 커버리지가 없을 경우 어려워질 수 있습니다. Sandfly는 이전에 보안 모니터링을 사용한 적이 없는 시스템에서도 즉시 배포됩니다.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              파이어링 레인지에서 Linux의 침입과 침해를 헌팅하는 Sandfly와 함께하세요.
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
            <h2 className="text-3xl font-bold text-white mb-4">Linux 위협이 가면을 벗다</h2>
            <p className="text-xl text-gray-400 mb-8">
              파이어링 레인지에서 침입과 침해된 Linux를 헌팅하는 Sandfly와 함께하세요.
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
              <h3 className="text-xl font-bold text-white mb-4">사고 중 배포</h3>
              <p className="text-gray-400">
                Sandfly는 즉각적인 침해 탐지와 포렌식을 얻기 위해 라이브 사고에 드라마 없이 배포될 수 있습니다. Sandfly는 빠르게 배포되어 위험을 최소화하고 호환성 문제를 피합니다.
              </p>
            </div>

            {/* Use Case 2 */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">02.</div>
              <h3 className="text-xl font-bold text-white mb-4">즉석 Linux 포렌식 전문가</h3>
              <p className="text-gray-400">
                맬웨어, 스텔스 루트킷, 백도어, 자격증명 도용과 같은 Linux 공격을 식별하기 위해 우리의 광범위한 라이브러리를 활용하세요. 우리는 당신의 즉석 Linux 포렌식 수사관입니다.
              </p>
            </div>

            {/* Use Case 3 */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">03.</div>
              <h3 className="text-xl font-bold text-white mb-4">침해 탐지</h3>
              <p className="text-gray-400">
                Sandfly는 활성 또는 과거 공격 흔적이 있는 시스템에서 작동합니다. 이는 IR 팀이 무슨 일이 일어나고 있는지의 전체 그림을 구축하는 데 도움이 되며 침입자가 숨으려고 하더라도 침해된 시스템이 남겨지지 않도록 보장합니다.
              </p>
            </div>

            {/* Use Case 4 */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">04.</div>
              <h3 className="text-xl font-bold text-white mb-4">커스터마이징 가능</h3>
              <p className="text-gray-400">
                1,000개 이상의 내장 모듈 중 하나를 프레임워크로 커스터마이징하여 자체 위협 헌팅 무기고를 만드세요. 맞춤형 위협 헌팅 모듈은 모든 보호된 시스템에 즉시 배포될 수 있습니다.
              </p>
            </div>

            {/* Use Case 5 */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">05.</div>
              <h3 className="text-xl font-bold text-white mb-4">드리프트 탐지</h3>
              <p className="text-gray-400">
                알려진 양호한 호스트에 대해 드리프트 프로파일을 만들 수 있습니다. 그런 다음 해당 프로파일을 사용하여 유사한 시스템에 조사가 필요한 변경사항이 있는지 확인할 수 있습니다. 이를 통해 IR 팀은 차이점을 보이는 호스트에만 노력을 집중하여 귀중한 시간을 절약할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Incident Response Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Linux 사고 대응 기능</h2>
            <p className="text-xl text-gray-400">Sandfly Security는 Linux 사고 대응에 이상적인 많은 기능을 가지고 있습니다.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Feature 1 */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">01.</div>
              <h3 className="text-xl font-bold text-white mb-4">에이전트리스</h3>
              <p className="text-gray-400">
                에이전트와 관련된 성능 오버헤드, 배포 번거로움, 잠재적 안정성 위험을 제거합니다. Sandfly는 시스템의 즉각적인 조사를 허용합니다.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">02.</div>
              <h3 className="text-xl font-bold text-white mb-4">가장 넓은 Linux 커버리지</h3>
              <p className="text-gray-400">
                Sandfly는 다른 EDR 솔루션에 비해 광범위한 Linux 배포판과 버전을 지원합니다. IR 팀은 침해에 대해 그 어느 때보다 더 많은 시스템을 더 빠르게 평가할 수 있습니다.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">03.</div>
              <h3 className="text-xl font-bold text-white mb-4">빠르고 효율적</h3>
              <p className="text-gray-400">
                Sandfly는 시스템을 매우 빠르게 스캔하여 잠재적 위협에 대한 거의 즉각적인 가시성을 제공합니다. 이는 시간이 핵심인 사고 대응 중에 중요합니다.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">04.</div>
              <h3 className="text-xl font-bold text-white mb-4">능동적 대응</h3>
              <p className="text-gray-400">
                의심스러운 활동을 탐지하면 프로세스 일시 중지 또는 종료를 포함한 조치를 취합니다. IR 팀은 사고 중 위협을 억제하기 위한 귀중한 옵션을 얻습니다.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">05.</div>
              <h3 className="text-xl font-bold text-white mb-4">포렌식 기능</h3>
              <p className="text-gray-400">
                Sandfly는 Linux 시스템에서 포렌식 데이터를 수집하고 분석하여 공격의 범위와 타임라인을 이해하는 데 도움을 줍니다.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">06.</div>
              <h3 className="text-xl font-bold text-white mb-4">설계상 Linux 보안</h3>
              <p className="text-gray-400">
                우리의 초점은 Linux입니다. 우리는 이 플랫폼에 영향을 미치는 특정 시그니처 대신 공격자 전술에 집중합니다. 우리의 탐지 방법은 오래된 그리고 새로운 맬웨어, 루트킷 등에서 작동합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Free IR License Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">무료 IR 라이선스 받기</h2>
            <p className="text-lg text-gray-400 mb-8">
              모든 시스템에 대한 가시성을 얻으세요. Sandfly는 서버, 가상 머신, 온프레미스, 클라우드, 임베디드 및 어플라이언스 시스템에서 작동합니다. IR 팀은 하나의 도구로 모든 시스템에 대한 즉각적인 가시성을 얻습니다.
            </p>
            <Link 
              href="/get-sandfly" 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-block"
            >
              무료 IR 라이선스 받기
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            사고에 즉시 대응하세요
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Sandfly의 강력한 사고 대응 기능으로 Linux 보안 사고에 빠르고 효과적으로 대응하세요. 
            피해를 최소화하고 신속한 복구로 비즈니스 연속성을 보장할 수 있습니다.
          </p>
          <Link 
            href="/get-sandfly" 
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-block mb-8"
          >
            지금 시작하기
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