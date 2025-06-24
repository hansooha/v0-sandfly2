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
              에이전트리스 패스워드 감사
            </h1>
            <p className="text-2xl text-gray-300 mb-8">
              모든 Linux 장치를 위한 패스워드 감사.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              약한 패스워드와 기본 패스워드는 Linux에서 주요한 침해 벡터입니다. 패스워드 브루트포스 공격에 취약한 시스템은 종종 제대로 모니터링되지 않으며 공격자가 내부에 들어오면 빠른 측면 이동을 제공합니다. Sandfly를 사용하면 약한 패스워드를 찾는 것이 매우 쉽고 빠르며 안전합니다.
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

      {/* CISA Warning Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-900 border-l-4 border-yellow-500 p-6 mb-8">
              <img 
                src="https://www.datocms-assets.com/56687/1707614133-23-1461_sbdalert_12142023_fblkintwr-1200x628_0.png" 
                alt="CISA 경고 이미지" 
                className="w-full h-auto rounded-lg mb-4"
                loading="lazy"
              />
              <p className="text-yellow-200 text-sm mb-2">CISA 경고에서 강조된 약한 패스워드</p>
              <blockquote className="text-white text-lg italic">
                "악의적인 사이버 공격자들은 인터넷에 노출된 시스템에서 기본 패스워드(예: "1234", "default", "password")를 지속적으로 악용하여 조직에 대한 초기 액세스를 얻고 조직 내에서 측면으로 이동합니다."
              </blockquote>
              <cite className="text-yellow-300 text-sm">- CISA.org</cite>
            </div>
            <p className="text-gray-400 text-center">
              Sandfly는 이러한 위험을 에이전트 없이 몇 초 만에 찾을 수 있습니다.
            </p>
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
              <h3 className="text-xl font-bold text-white mb-4">몇 초 만에 약한 패스워드 찾기</h3>
              <p className="text-gray-400">
                Sandfly의 패스워드 감사는 Linux 엔드포인트에서 즉시 작동합니다. 기본 패스워드와 약한 패스워드는 몇 초 내에 발견됩니다.
              </p>
            </div>

            {/* Use Case 2 */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">02.</div>
              <h3 className="text-xl font-bold text-white mb-4">임베디드 장치 감사</h3>
              <p className="text-gray-400">
                임베디드 장치는 쉽게 추측할 수 있는 기본 패스워드와 함께 출하되는 것으로 악명 높습니다. Sandfly는 어떤 시스템이 즉각적인 브루트포스 공격에 노출되어 있는지 즉시 알려줍니다.
              </p>
            </div>

            {/* Use Case 3 */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">03.</div>
              <h3 className="text-xl font-bold text-white mb-4">Linux 어플라이언스 감사</h3>
              <p className="text-gray-400">
                임베디드 장치와 마찬가지로 Linux 어플라이언스는 종종 기본 패스워드와 함께 출하되며 모니터링하기도 어렵습니다. Sandfly는 이러한 많은 장치에 접근하여 이 위협을 경고할 수 있습니다.
              </p>
            </div>

            {/* Use Case 4 */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">04.</div>
              <h3 className="text-xl font-bold text-white mb-4">금지된 패스워드 찾기</h3>
              <p className="text-gray-400">
                모든 조직에는 수년간 남아있는 악명 높은 공유 패스워드가 있습니다. Sandfly를 사용하면 팀이 금지된 패스워드의 맞춤형 목록을 작성하여 그것들이 어디에 남아있는지 즉시 확인할 수 있습니다.
              </p>
            </div>

            {/* Use Case 5 */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">05.</div>
              <h3 className="text-xl font-bold text-white mb-4">지속적인 패스워드 감사</h3>
              <p className="text-gray-400">
                Sandfly는 시스템에서 약한 패스워드를 정기적으로 확인하여 다시 나타나지 않도록 보장합니다. Sandfly는 너무 빨라서 약한 패스워드가 오래 머물 수 없습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Sandfly 패스워드 감사 솔루션</h2>
            <p className="text-xl text-gray-400">Sandfly의 패스워드 감사는 Linux에 대한 브루트포스 공격을 중단시키는 데 도움이 됩니다.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Benefit 1 */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">01.</div>
              <h3 className="text-xl font-bold text-white mb-4">비교할 수 없는 시스템 호환성</h3>
              <p className="text-gray-400">
                제한된 리소스를 가진 임베디드 장치와 어플라이언스에서도 Linux 시스템에 대한 즉각적인 결과를 제공합니다.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">02.</div>
              <h3 className="text-xl font-bold text-white mb-4">민감한 패스워드 해시 보호</h3>
              <p className="text-gray-400">
                패스워드 해시는 원격 장치를 떠나지 않아 사용자 프라이버시와 데이터 무결성을 보장합니다.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">03.</div>
              <h3 className="text-xl font-bold text-white mb-4">위험한 기본 패스워드 확인</h3>
              <p className="text-gray-400">
                내장된 모듈로 업계 최악의 패스워드 목록 상위 100개 또는 500개를 대상으로 합니다.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">04.</div>
              <h3 className="text-xl font-bold text-white mb-4">맞춤형 패스워드 목록</h3>
              <p className="text-gray-400">
                특정 조직의 위험과 직원의 패스워드 습관을 해결하기 위해 자체 금지 패스워드 목록을 생성하세요.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold mb-4">05.</div>
              <h3 className="text-xl font-bold text-white mb-4">성능 영향 제로</h3>
              <p className="text-gray-400">
                패스워드 감사는 원격 시스템에서 안전하고 고성능 방식으로 발생하여 시스템 부하가 영향받지 않도록 보장합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">몇 초 만에 보안</h2>
            <p className="text-xl text-gray-400 mb-8">
              Linux에서 Sandfly를 설정하고 실행하는 것이 얼마나 쉬운지 확인해보세요.
            </p>
            <div className="max-w-4xl mx-auto">
              <YouTubeEmbed 
                videoId="hcrmfY6SyS0" 
                title="Sandfly 에이전트리스 Linux 보안 빠른 시작" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Primary CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">침해 위험을 감수하지 마세요</h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              패스워드를 제어하세요. 지금 무료 체험을 시작하세요.
            </p>
            <Link 
              href="/get-sandfly" 
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg inline-block"
            >
              무료 체험 시작
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            패스워드를 보안할 준비가 되셨나요?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            모든 장치, 모든 패스워드, 모든 계정을 보안하세요.
          </p>
          <Link 
            href="/get-sandfly" 
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-block mb-8"
          >
            지금 보안 시작하기
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