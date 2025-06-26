import React from 'react';

const Page = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <main className="container mx-auto px-6 py-16">
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">우리의 사명에 동참하세요</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Sandfly Security에서는 Linux를 위한 가장 앞선 에이전트리스 보안을 제공하는 데 전념하고 있습니다. 우리는 열정적인 혁신가들로 구성된 팀이며, 전 세계 중요 인프라를 보호하는 데 도움을 줄 재능 있는 인재를 항상 찾고 있습니다.
          </p>
        </section>

        <section className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-cyan-400">왜 우리와 함께 일해야 할까요?</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8 text-lg text-gray-300">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">혁신과 선도</h3>
              <p>최첨단 에이전트리스 보안 기술을 연구하고 Linux 보안의 최전선에서 활동하세요.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">영향력 있는 일</h3>
              <p>당신의 업무는 전 세계 필수 시스템과 인프라를 보호하는 데 직접적으로 기여할 것입니다.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">협력적 문화</h3>
              <p>당신의 아이디어가 소중히 여겨지고 격려받는 지지적이고 협력적인 환경에 참여하세요.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">성장 기회</h3>
              <p>우리는 팀원들의 성장에 전념하며, 전문적 발전을 위한 기회를 제공합니다.</p>
            </div>
          </div>
        </section>

        <section className="mt-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-cyan-400 sm:text-4xl">현재 채용</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            현재 공개된 채용 포지션은 없지만, 재능 있고 열정적인 전문가들의 연락을 항상 환영합니다.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            우리 팀에 잘 맞을 것이라고 생각하신다면, <a href="mailto:sales@psymont.com" className="text-cyan-400 hover:underline">sales@psymont.com</a>으로 이력서와 자기소개서를 자유롭게 보내주세요. 향후 기회를 위해 귀하의 정보를 보관하겠습니다.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Page;
