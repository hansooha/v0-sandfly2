import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const complianceFeatures = [
  {
    name: '지속적 모니터링 및 감사',
    description: 'Sandfly는 Linux 시스템에 대한 24/7 에이전트리스 모니터링을 제공하여 보안 이벤트의 상세한 감사 추적을 생성합니다. 이를 통해 PCI-DSS, HIPAA, SOX와 같은 표준의 지속적 모니터링 요구사항을 충족할 수 있습니다.',
  },
  {
    name: '파일 무결성 및 드리프트 탐지',
    description: '당사의 드리프트 탐지 기능은 중요한 시스템 파일 및 구성의 무단 변경에 대해 알림을 제공하며, 이는 시스템 무결성 유지 및 규정 준수의 핵심 요구사항입니다.',
  },
  {
    name: '접근 제어 및 자격증명 모니터링',
    description: 'SSH 키 사용을 추적하고 취약한 패스워드를 감사하여, 다양한 보안 프레임워크에서 요구하는 강력한 접근 제어 정책을 시행하고 무단 접근을 방지할 수 있도록 지원합니다.',
  },
  {
    name: '사고 대응 및 포렌식',
    description: '침해 사고 발생 시, Sandfly는 에이전트 없이 즉각적이고 상세한 포렌식 데이터를 제공하여 신속한 사고 대응을 통해 위협을 격리하고 침해 신고 요구사항을 충족할 수 있도록 합니다.',
  },
  {
    name: '취약점 및 위협 탐지',
    description: '멀웨어, 루트킷, 의심스러운 활동을 탐지함으로써 취약점을 식별하고 완화할 수 있도록 지원하며, 이는 거의 모든 보안 규정 준수 표준의 기본 요소입니다.',
  },
  {
    name: '데이터 프라이버시 및 제어',
    description: 'Sandfly는 에이전트리스이며 분석을 위해 데이터를 제3자 클라우드로 전송하지 않기 때문에, 민감한 시스템 데이터에 대한 완전한 제어를 유지할 수 있어 GDPR과 같은 데이터 거주 및 프라이버시 규정에 부합합니다.',
  },
];

const Page = () => {
  return (
    <div className="bg-gray-900 text-white">
      <main className="container mx-auto px-6 py-16">
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">자신감 있는 규정 준수 요구사항 충족</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Sandfly의 에이전트리스 Linux 보안 플랫폼은 엄격한 규정 준수 및 규제 표준을 충족하는 데 필요한 가시성과 제어를 제공합니다. 당사의 포괄적인 탐지 및 모니터링 기능은 안전하고 감사 가능한 환경을 구축하는 데 도움이 됩니다.
          </p>
        </section>

        <section className="mt-16 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceFeatures.map((feature) => (
              <div key={feature.name} className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <CheckCircleIcon className="h-8 w-8 text-cyan-400 mr-4" />
                  <h2 className="text-xl font-bold text-white">{feature.name}</h2>
                </div>
                <p className="text-gray-400 leading-7">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 text-center max-w-4xl mx-auto bg-gray-800 p-10 rounded-lg">
          <h2 className="text-3xl font-bold tracking-tight text-cyan-400">안전하고 규정을 준수하는 에이전트리스</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            PCI-DSS, HIPAA, GDPR, SOX 또는 기타 산업 규제의 적용을 받는지 여부에 관계없이, Sandfly는 에이전트의 성능 영향과 복잡성 없이 Linux 환경에서 실사를 입증하고 강력한 보안 태세를 유지하는 데 도움이 되는 도구를 제공합니다.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Page;
