import React from 'react';

const newsArticles = [
  {
    title: 'Sandfly Security, Gula Tech Adventures와 Sorenson Capital로부터 투자 유치',
    date: '2024년 3월 25일',
    source: '보도자료',
    content: `
      <p class="mb-4">에이전트리스 Linux 보안 회사인 Sandfly Security가 포괄적인 Linux 보안 솔루션에 대한 증가하는 시장 수요를 충족하기 위해 Gula Tech Adventures와 Sorenson Capital로부터 시드 펀딩을 확보했다고 발표했습니다. 통신 서비스, 제조업, 네트워킹 회사 등 세계 인프라를 지원하는 산업들이 Linux 환경 보안을 위해 Sandfly를 신뢰하고 있습니다. Sandfly는 추가 자금을 제품 역량 확장과 시장 진출 전략 가속화에 사용할 예정입니다.</p>
      
      <h3 class="text-2xl font-semibold mt-6 mb-4 text-cyan-400">Linux: 세상을 움직이는 OS, 하지만 포괄적 보호는 어려워</h3>
      <p class="mb-4">거의 모든 중요 인프라가 Linux에서 실행되지만, 지금까지 인기 있는 운영 체제의 수백 가지 버전과 호환되는 보안 솔루션은 없었습니다. Linux 시스템을 보호하기 위해 에이전트를 사용하는 기존 접근 방식은 호환성, 성능, 안정성 장벽에 직면합니다. 이러한 솔루션은 종종 과도한 CPU 사용량, 안정성 및 성능 영향을 야기하여 생산성 손실과 중요 시스템의 공격 취약성을 증가시킵니다. Sandfly의 에이전트리스 접근 방식은 이러한 문제를 해결하여 고객에게 Linux 보안을 위한 가장 광범위한 호환성, 성능, 안전성을 제공합니다.</p>
      
      <p class="mb-4">"Linux는 인터넷을 구동합니다. 클라우드 워크로드의 95%가 Linux에서 실행됩니다. 로봇공학, 엣지 장치, 네트워킹 장비, 대부분의 중요 인프라의 산업용 앱이 Linux에서 실행됩니다. 하지만 안정성과 성능에 영향을 주지 않으면서 이를 보호할 좋은 도구가 없습니다."라고 Sandfly Security의 CEO이자 창립자인 Craig Rowland가 말했습니다. "Linux 보안은 달성하기 어렵습니다. 고도로 분산되고 분열되어 있으며, 보호 도구가 미션 크리티컬 애플리케이션을 방해할 수 없습니다. 이것이 에이전트 기반 시스템이 종종 작동하지 않는 이유이며, 가장 큰 문제인 에이전트 로딩을 제거하는 우리의 접근 방식에 대한 강한 수요를 보고 있습니다."</p>
      
      <h3 class="text-2xl font-semibold mt-6 mb-4 text-cyan-400">네트워크 침입에 깊은 뿌리를 둔 숙련된 창립자</h3>
      <p class="mb-4">Craig Rowland는 침입 탐지 기술 구축에서 과거의 성공을 거둔 숙련된 기업가입니다. 이러한 기술 중 하나는 허위 경보를 최대 95% 줄였으며 Cisco에 성공적으로 인수되었습니다. 민간 부문으로 이동하기 전에 Craig는 미국 펜타곤의 해군 작전 참모총장을 위해 수년간 일했습니다. 사고가 어떻게 발생하고 보안 팀이 중요 자산을 보호하기 위해 어떻게 고군분투하는지 보면서 Craig는 기존의 에이전트 기반 접근 방식을 통해 Linux를 보호하는 것이 얼마나 어려운지 직접 목격했습니다.</p>
      
      <p class="mb-4">"Craig는 어려운 문제를 해결하는 지속 가능한 회사를 반복적으로 구축할 수 있다는 것을 증명한 드문 기업가 중 한 명입니다."라고 Tenable Network Security의 공동 창립자이자 Gula Tech Adventures의 창립자인 Ron Gula가 말했습니다. "세상은 Linux에 의존하고 있으며, 우리는 그것을 보호하는 것이 얼마나 중요한지 알고 있습니다. 하지만 조직들은 그렇지 않아서 중요 시스템을 취약하게 두고 있습니다. 기존의 에이전트 기반 솔루션은 호환성과 성능 영향이 있고, 배포하기 어려우며, 물건을 망가뜨릴 가능성이 높습니다. 시장은 안정적으로 작동하고, 배포하기 쉽고, 약속한 것을 효과적으로 수행하는 솔루션을 간절히 원하고 있습니다. 그것이 바로 Sandfly Security입니다."</p>
      
      <p class="mb-4">Linux 환경 보안에 대해 자세히 알아보려면 sandflysecurity.com을 방문하세요.</p>
      
      <h3 class="text-2xl font-semibold mt-6 mb-4 text-cyan-400">Sandfly Security 소개</h3>
      <p>에이전트리스, 호환 가능하며 빠른 배포가 가능한 Sandfly Security는 기존 엔드포인트 탐지 기능을 넘어서 지연 문제나 번거로운 배포 없이 Linux 박스를 보호합니다. Sandfly는 현대적인 클라우드 배포부터 10년 된 장치까지, 배포판이나 CPU 아키텍처에 관계없이 거의 모든 Linux 시스템을 보호합니다. Sandfly는 침해 징후를 추적하고, SSH 자격 증명을 추적하며, 약한 비밀번호를 감사하고, 드리프트 탐지로 무단 변경을 탐지하며, 새로운 신흥 위협을 찾기 위한 맞춤형 모듈을 허용합니다. Sandfly는 Linux에서 최고의 안전성, 성능, 호환성으로 이를 수행합니다. 우리는 엔드포인트에 에이전트를 로드하지 않고 이를 수행합니다. <em>투자자로는 Gula Tech Adventures, Sorenson Capital, Alt Ventures New Zealand가 있습니다.</em></p>
    `
  }
];

const Page = () => {
  return (
    <div className="bg-gray-900 text-white">
      <main className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-center mb-12">뉴스</h1>
        <div className="max-w-4xl mx-auto">
          {newsArticles.map((article, index) => (
            <article key={index} className="mb-12 p-8 bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">{article.title}</h2>
              <p className="text-sm text-gray-400 mb-6">{article.date} - {article.source}</p>
              <div
                className="text-lg leading-8 text-gray-300 space-y-4"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Page;