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
              SSH 키 감사
            </h1>
            <p className="text-2xl text-gray-300 mb-4">
              SSH 키를 추적하고,
            </p>
            <p className="text-2xl text-gray-300 mb-8">
              누가 사용하는지 파악하세요
            </p>
            <p className="text-lg text-gray-400 mb-6">
              SSH 키는 무단 접근과 은밀한 측면 이동을 포함하여 Linux에 심각한 위험을 초래합니다. Sandfly는 에이전트 없이 중요한 SSH 자산을 추적합니다. 우리는 이 기능을 SSH Hunter라고 부릅니다.
            </p>
            <p className="text-lg text-gray-400 mb-6">
              SSH Hunter를 사용하면 모든 SSH 공개 키가 추적되고 추적됩니다. 보안 팀은 키가 어디에서 사용되고 있는지, 누가 사용하고 있는지, 언제 처음 나타났는지, 모든 시스템에서 즉시 무엇에 액세스할 수 있는지 확인할 수 있습니다. 또한 침해 시 심각한 측면 이동 위험을 나타내는 암호화되지 않은 SSH 개인 키를 탐지합니다.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              SSH 보안 구역을 사용하여 보안 팀은 키가 작동할 수 있는 시스템을 더욱 제한하고 승인되지 않은 새 키가 나타날 때 알림을 받을 수 있습니다. 신비한 사용자 키와 백도어 키는 오래 머물 수 없습니다.
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
            <h2 className="text-3xl font-bold text-white mb-4">SSH 키 헌팅</h2>
            <p className="text-xl text-gray-400 mb-8">
              파이어링 레인지에서 침해된 SSH 키를 헌팅하는 Sandfly와 함께하세요.
            </p>
            <div className="max-w-4xl mx-auto">
              <YouTubeEmbed 
                videoId="y25qzP9Bi5A" 
                title="Linux에서 Sandfly로 침해된 SSH 키 탐지 및 조사" 
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
              <h3 className="text-xl font-bold text-white mb-4">SSH 키가 어디에 있는지 알기</h3>
              <p className="text-gray-400">
                SSH 키가 어느 시스템에 있는지 찾는 것은 어려울 수 있습니다. Sandfly는 모든 Linux 시스템에서 SSH 키를 자동으로 찾아 완전한 인벤토리를 생성합니다. 키가 어디에 설치되어 있는지, 누가 사용하고 있는지, 언제 사용되었는지 즉시 알 수 있습니다.
              </p>
            </div>

            {/* Use Case 2 */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">02.</div>
              <h3 className="text-xl font-bold text-white mb-4">임베디드 장치 보호</h3>
              <p className="text-gray-400">
                임베디드 장치는 종종 기본 SSH 키로 출하되거나 쉽게 추측할 수 있는 키를 가지고 있습니다. Sandfly는 이러한 장치에서 위험한 키를 탐지하고 보안 팀이 이를 교체하거나 비활성화할 수 있도록 경고합니다.
              </p>
            </div>

            {/* Use Case 3 */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">03.</div>
              <h3 className="text-xl font-bold text-white mb-4">Linux 어플라이언스 모니터링</h3>
              <p className="text-gray-400">
                Linux 기반 어플라이언스는 관리자가 SSH 키가 설치되었는지 알지 못하는 경우가 많습니다. Sandfly는 이러한 시스템을 스캔하여 숨겨진 SSH 키를 찾고 무단 액세스를 방지합니다.
              </p>
            </div>

            {/* Use Case 4 */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">04.</div>
              <h3 className="text-xl font-bold text-white mb-4">키 및 서버 위험</h3>
              <p className="text-gray-400">
                약한 SSH 키나 손상된 서버는 전체 네트워크에 위험을 초래할 수 있습니다. Sandfly는 위험한 키 구성을 식별하고 보안 팀이 위험을 완화하기 전에 경고합니다.
              </p>
            </div>

            {/* Use Case 5 */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">05.</div>
              <h3 className="text-xl font-bold text-white mb-4">보안 구역</h3>
              <p className="text-gray-400">
                SSH 보안 구역을 사용하면 특정 키가 액세스할 수 있는 시스템을 제한할 수 있습니다. 이를 통해 측면 이동을 방지하고 침해 시 공격자의 범위를 제한할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">SSH 자격증명 자동 추적 및 감사</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Benefit 1 */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">01.</div>
              <h3 className="text-xl font-bold text-white mb-4">무단 액세스 방지</h3>
              <p className="text-gray-400">
                Sandfly는 권한 없는 SSH 키와 악성 키를 탐지하여 무단 액세스를 방지합니다. 공격자가 백도어를 만들기 위해 설치한 키를 빠르게 식별할 수 있습니다.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">02.</div>
              <h3 className="text-xl font-bold text-white mb-4">구성 오류 탐지</h3>
              <p className="text-gray-400">
                SSH 자격증명 모니터링을 자동화하여 조직을 침해에 노출시킬 수 있는 오류 가능성을 줄입니다. Sandfly는 SSH 자격증명이 지속적으로 모니터링되고 추적되도록 보장합니다.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">03.</div>
              <h3 className="text-xl font-bold text-white mb-4">비교할 수 없는 성능</h3>
              <p className="text-gray-400">
                우리 플랫폼은 기존 인프라와 원활하게 통합되어 시스템 성능에 영향을 주지 않고 보호 기능을 제공합니다. SSH 키 추적은 즉각적이고 자동적이며 빠릅니다.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">04.</div>
              <h3 className="text-xl font-bold text-white mb-4">규정 준수 및 자산 추적</h3>
              <p className="text-gray-400">
                Sandfly는 SSH 환경에 대한 깊은 가시성을 제공하여 규정 준수 및 자산 추적을 단순화하고 감사 준비 태세를 유지할 수 있도록 보장합니다.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">05.</div>
              <h3 className="text-xl font-bold text-white mb-4">확장 가능한 솔루션</h3>
              <p className="text-gray-400">
                기업이 확장됨에 따라 우리의 에이전트리스 솔루션이 함께 확장되어 SSH 환경의 보안을 유지합니다. SSH 자격증명 침해의 위험이 일관되게 모니터링되고 관리됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Track SSH Key Use */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">SSH 키 사용 및 남용 추적</h2>
              <p className="text-lg text-gray-400 mb-6">
                Sandfly는 에이전트리스 추적을 통해 SSH 키가 어떻게 사용되고 있는지 완전한 가시성을 제공합니다. 우리의 고급 모니터링 기능을 통해 키 활동을 실시간으로 추적하고 의심스러운 행동을 식별할 수 있습니다.
              </p>
              <div className="mb-8">
                <img 
                  src="https://www.datocms-assets.com/56687/1721096022-ssh-host-violation-view.png" 
                  alt="SSH 보안 구역 위반" 
                  className="w-full h-auto rounded-lg shadow-lg mb-6"
                  loading="lazy"
                />
              </div>
              <p className="text-lg text-gray-400 mb-8">
                SSH 보안 구역을 통해 특정 키가 액세스할 수 있는 시스템을 제한하여 측면 이동을 방지하고 침해 시 공격 범위를 제한할 수 있습니다. 이러한 제어를 통해 SSH 키 관리에 대한 세분화된 접근 방식을 제공합니다.
              </p>
            </div>

            {/* Rapid Incident Response */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">신속한 사고 대응</h2>
              <p className="text-lg text-gray-400 mb-6">
                보안 사고가 발생했을 때 Sandfly는 SSH 키와 관련된 활동을 신속하게 식별하고 분석할 수 있는 도구를 제공합니다. 우리의 포렌식 기능을 통해 침해의 범위를 빠르게 파악하고 적절한 대응 조치를 취할 수 있습니다.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <img 
                  src="https://www.datocms-assets.com/56687/1707607862-screenshot-2024-02-11-at-12-27-54-pm.png" 
                  alt="SSH 중복 키 알림" 
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
                <img 
                  src="https://www.datocms-assets.com/56687/1707609245-screenshot-2024-02-11-at-12-52-32-pm.png" 
                  alt="SSH 키 감사 세부 정보" 
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
              <p className="text-lg text-gray-400 mb-8">
                실시간 모니터링과 히스토리 분석을 통해 공격자가 어떤 시스템에 액세스했는지, 어떤 키를 사용했는지, 언제 활동이 시작되었는지 정확히 파악할 수 있습니다.
              </p>
            </div>

            {/* SSH Key Auditing Made Easy */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">SSH 키 감사가 쉬워졌습니다</h2>
              <p className="text-lg text-gray-400 mb-6">
                Sandfly는 SSH 키 동작을 모니터링하고 위험 평가를 자동화하여 SSH 키 감사를 단순화합니다. 우리의 지능형 분석 엔진은 정상적인 키 사용 패턴을 학습하고 이상 징후를 자동으로 플래그합니다.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                포괄적인 보고 기능을 통해 감사 요구사항을 충족하고 규정 준수를 입증할 수 있는 상세한 문서를 제공합니다. SSH 키 인벤토리부터 사용 통계까지 모든 정보를 한 곳에서 확인할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Try SSH Hunter CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">SSH Hunter 체험해보기</h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              숨겨진 위협이 네트워크 보안을 침해하지 않도록 하세요. 지금 무료 체험을 시작하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/get-sandfly" 
                className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg inline-block"
              >
                체험판 라이선스 받기
              </Link>
              <Link 
                href="/get-sandfly" 
                className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg inline-block"
              >
                무료 라이선스 받기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            오늘 SSH 키를 감사하세요
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Sandfly의 강력한 SSH 키 모니터링으로 인프라의 모든 SSH 키를 완전히 제어하세요. 
            무단 접근을 방지하고 보안 태세를 강화할 수 있습니다.
          </p>
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