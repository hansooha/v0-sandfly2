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
              드리프트 탐지
            </h1>
            <p className="text-2xl text-gray-300 mb-8">
              즉석 Linux 기준선 및 드리프트 탐지.
            </p>
            <p className="text-lg text-gray-400 mb-6">
              Sandfly는 Linux 시스템의 기준선을 빠르게 설정한 다음 드리프트와 무단 변경을 탐지할 수 있습니다. 이는 파일 무결성 모니터링과 시스템이 변조되지 않았음을 보장하는 데 완벽합니다. 또한 시스템이 원래 배포에서 잘못 구성되었을 수 있는 구성 드리프트도 탐지할 수 있습니다.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              우리의 에이전트리스 접근 방식은 기준선을 생성할 때 Linux 어플라이언스와 임베디드 장치에 전혀 영향을 주지 않음을 의미합니다. Sandfly 드리프트 탐지는 수천 대의 머신이 있는 기업 환경으로 확장되며 에어갭 네트워크 내에서 안전하게 작동합니다.
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
            <h2 className="text-3xl font-bold text-white mb-4">Synology NAS 장치에서 맬웨어 찾기</h2>
            <p className="text-xl text-gray-400 mb-8">
              드리프트 탐지를 사용하여 Synology NAS 장치에서 맬웨어를 찾는 Sandfly와 함께하세요.
            </p>
            <div className="max-w-4xl mx-auto">
              <YouTubeEmbed 
                videoId="pZMOeVHEanU" 
                title="Synology NAS DSM 어플라이언스에서 맬웨어 및 랜섬웨어 찾기" 
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
              <h3 className="text-xl font-bold text-white mb-4">어플라이언스 기준선 설정 및 모니터링</h3>
              <p className="text-gray-400">
                Linux 어플라이언스는 종종 모니터링이나 변조 여부를 보여주는 방법이 없습니다. Sandfly는 이러한 시스템의 기준선을 설정하고 침해되거나 잘못 구성되었는지 탐지할 수 있습니다.
              </p>
            </div>

            {/* Use Case 2 */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">02.</div>
              <h3 className="text-xl font-bold text-white mb-4">구성 드리프트 탐지</h3>
              <p className="text-gray-400">
                Sandfly의 드리프트 탐지를 사용하여 중요한 구성 파일과 시스템 설정이 변경되지 않은 상태로 유지되도록 하거나 변경될 때 알림을 받을 수 있습니다.
              </p>
            </div>

            {/* Use Case 3 */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">03.</div>
              <h3 className="text-xl font-bold text-white mb-4">파일 무결성 모니터링</h3>
              <p className="text-gray-400">
                Sandfly를 사용하여 중요한 시스템 파일과 디렉터리의 무단 변경을 모니터링하세요. 여기에는 시스템 바이너리, 구성 파일 및 기타 중요한 자산 모니터링이 포함됩니다.
              </p>
            </div>

            {/* Use Case 4 */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">04.</div>
              <h3 className="text-xl font-bold text-white mb-4">규정 준수 및 감사</h3>
              <p className="text-gray-400">
                드리프트 탐지는 시스템이 승인된 구성 상태를 유지했다는 증거를 제공하여 규정 준수 요구사항을 지원합니다.
              </p>
            </div>

            {/* Use Case 5 */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">05.</div>
              <h3 className="text-xl font-bold text-white mb-4">에어갭 및 보안 네트워크</h3>
              <p className="text-gray-400">
                Sandfly의 에이전트리스 접근 방식은 기존 모니터링 솔루션이 작동할 수 없는 에어갭 환경에서 작동할 수 있음을 의미합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">드리프트 탐지 기능</h2>
            <p className="text-xl text-gray-400">Sandfly 드리프트 탐지는 Linux 시스템에 대한 포괄적인 모니터링과 알림을 제공합니다.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Feature 1 */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">01.</div>
              <h3 className="text-xl font-bold text-white mb-4">에이전트리스 작동</h3>
              <p className="text-gray-400">
                모니터링되는 시스템에 에이전트나 소프트웨어 설치가 필요하지 않습니다. 이는 시스템 성능에 전혀 영향을 주지 않고 최대한의 호환성을 보장합니다.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">02.</div>
              <h3 className="text-xl font-bold text-white mb-4">즉석 기준선 생성</h3>
              <p className="text-gray-400">
                운영을 방해하지 않고 파일, 구성 및 시스템 상태에 대한 시스템 기준선을 빠르게 설정합니다.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">03.</div>
              <h3 className="text-xl font-bold text-white mb-4">실시간 드리프트 탐지</h3>
              <p className="text-gray-400">
                시스템의 변경사항을 지속적으로 모니터링하고 드리프트가 탐지되면 즉시 알림을 받습니다.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">04.</div>
              <h3 className="text-xl font-bold text-white mb-4">포괄적인 커버리지</h3>
              <p className="text-gray-400">
                모든 Linux 시스템에서 파일, 디렉터리, 구성, 시스템 설정 등을 모니터링합니다.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">05.</div>
              <h3 className="text-xl font-bold text-white mb-4">에어갭 네트워크 지원</h3>
              <p className="text-gray-400">
                외부 연결이나 클라우드 서비스 없이 네트워크 내에서 완전히 작동합니다.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">06.</div>
              <h3 className="text-xl font-bold text-white mb-4">기업 규모</h3>
              <p className="text-gray-400">
                높은 성능과 신뢰성으로 수천 개의 시스템을 처리하도록 설계되었습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Zero Impact Monitoring */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">영향 없는 모니터링</h2>
              <p className="text-lg text-gray-400 mb-6">
                우리의 에이전트리스 아키텍처는 기준선을 생성하거나 드리프트를 모니터링할 때 시스템에 성능 영향이 없음을 의미합니다. 이는 제한된 리소스를 가지고 있거나 추가 소프트웨어 설치를 허용할 수 없는 Linux 어플라이언스와 임베디드 장치에 특히 중요합니다.
              </p>
              <div className="mb-8">
                <img 
                  src="https://www.datocms-assets.com/56687/1707701101-screenshot-2024-02-12-at-2-23-16-pm.png" 
                  alt="Linux에서 드리프트 탐지 의심스러운 프로세스" 
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Comprehensive Drift Detection */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">포괄적인 드리프트 탐지</h2>
              <p className="text-lg text-gray-400 mb-8">
                Sandfly는 파일, 디렉터리, 권한, 소유권, 타임스탬프 등의 변경사항을 탐지할 수 있습니다. 또한 무단 변경에 대한 구성 파일을 모니터링하고 중요한 시스템 설정이 수정되었을 때 알림을 받을 수 있습니다.
              </p>
            </div>

            {/* Enterprise Deployment */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">기업 배포</h2>
              <p className="text-lg text-gray-400 mb-8">
                대규모 기업 배포를 위해 설계된 Sandfly는 수천 개의 시스템을 동시에 모니터링할 수 있습니다. 우리의 분산 아키텍처는 가장 큰 환경에서도 높은 가용성과 성능을 보장합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Linux 인프라를 보호하세요
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            오늘부터 Linux 시스템의 무단 변경과 구성 드리프트 모니터링을 시작하세요.
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