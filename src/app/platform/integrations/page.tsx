import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const integrations = [
  {
    category: 'SIEM 및 로그 관리',
    name: 'Splunk, QRadar, LogRhythm 등',
    description: 'Sandfly에서 SIEM으로 풍부하고 상세한 보안 이벤트 데이터를 직접 전송하여 중앙 집중식 분석, 상관관계 분석 및 보고를 수행합니다. 광범위한 호환성을 위해 CEF 및 LEEF와 같은 표준 형식을 지원합니다.',
    iconUrl: 'https://img.icons8.com/color/96/database.png',
  },
  {
    category: 'SOAR 및 티켓팅',
    name: 'Jira, TheHive, Cortex 등',
    description: 'Sandfly를 SOAR 플랫폼이나 티켓팅 시스템과 통합하여 인시던트 대응 워크플로를 자동화합니다. 자동으로 티켓을 생성하고, 플레이북을 트리거하며, 케이스 관리를 간소화합니다.',
    iconUrl: 'https://img.icons8.com/color/96/workflow.png',
  },
  {
    category: '알림 및 ChatOps',
    name: 'Slack, Microsoft Teams, PagerDuty',
    description: '웹훅을 통해 팀의 채팅 채널이나 알림 시스템에서 실시간 경고를 받습니다. Linux 시스템의 중요한 위협에 대해 보안 및 운영 팀에게 즉시 알립니다.',
    iconUrl: 'https://img.icons8.com/color/96/chat.png',
  },
  {
    category: '위협 인텔리전스',
    name: 'VirusTotal, MISP, Recorded Future',
    description: '공개 및 비공개 위협 인텔리전스 피드를 통합하여 위협 헌팅을 강화합니다. Sandfly는 파일 해시 및 기타 지표를 이러한 데이터베이스와 자동으로 확인하여 알려진 위협을 식별할 수 있습니다.',
    iconUrl: 'https://img.icons8.com/color/96/mind-map.png',
  },
  {
    category: '네트워크 및 보안 어플라이언스',
    name: 'Cisco, Juniper, Palo Alto Networks',
    description: 'Sandfly는 에이전트리스 보안 커버리지를 Linux 기반 네트워크 어플라이언스까지 확장하여 기존 보안 도구에서는 블랙박스인 장치에 대한 가시성을 제공합니다.',
    iconUrl: 'https://img.icons8.com/color/96/router.png',
  },
  {
    category: '커스텀 통합',
    name: 'REST API',
    description: 'Sandfly의 포괄적인 REST API를 활용하여 보안 생태계의 모든 도구와 커스텀 통합을 구축하세요. 프로그래밍 방식으로 데이터를 가져오고, 호스트를 관리하며, 스캔을 제어할 수 있습니다.',
    iconUrl: 'https://img.icons8.com/color/96/api-settings.png',
  },
];

const Page = () => {
  return (
    <div className="bg-gray-900 text-white">
      <main className="container mx-auto px-6 py-16">
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">보안 생태계에 Sandfly를 원활하게 통합</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Sandfly는 기존 보안 도구를 대체하는 것이 아니라 함께 작동하도록 설계되었습니다. 에이전트리스 Linux 위협 탐지 기능을 선호하는 플랫폼과 연결하여 보안 태세를 강화하세요.
          </p>
        </section>

        <section className="mt-16 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration) => (
              <div key={integration.category} className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col">
                <img src={integration.iconUrl} alt={integration.category} className="h-16 w-16 mb-6" />
                <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">{integration.category}</h2>
                <h3 className="text-xl font-bold text-white mt-2">{integration.name}</h3>
                <p className="text-gray-400 leading-7 mt-4 flex-grow">{integration.description}</p>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold mt-6 inline-flex items-center">
                  자세히 보기 <ArrowRightIcon className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 text-center max-w-4xl mx-auto bg-gray-800 p-10 rounded-lg">
          <h2 className="text-3xl font-bold tracking-tight text-white">무한한 가능성을 위한 강력한 API</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            강력한 REST API를 통해 모든 작업을 스크립트화하고 모든 데이터를 가져올 수 있는 권한을 얻으세요. 조직에 필요한 커스텀 워크플로와 통합을 구축하여 진정으로 맞춤형 보안 솔루션을 만드세요.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Page;