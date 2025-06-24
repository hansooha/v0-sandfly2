import React from 'react';
import { ShieldCheckIcon, CpuChipIcon, ServerIcon, WifiIcon, CircleStackIcon, CogIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: '에이전트리스 설계',
    description: '모니터링 대상 장치에 소프트웨어를 설치할 필요가 없어 관리를 단순화하고 항상 작동해야 하는 중요 시스템의 위험을 줄입니다.',
    icon: ShieldCheckIcon,
  },
  {
    name: '최소한의 성능 영향',
    description: '에이전트가 지속적으로 실행되지 않으므로 Sandfly는 장치 성능이나 안정성에 거의 영향을 주지 않으며, 이는 중요 인프라 애플리케이션에 필수적입니다.',
    icon: CpuChipIcon,
  },
  {
    name: '완전한 EDR 기능',
    description: '엣지 장치도 전체 서버와 동일한 보호를 받으며, 회피적이고 새로운 침입자 활동을 찾는 고급 드리프트 탐지 기능을 포함합니다.',
    icon: ServerIcon,
  },
  {
    name: '공격자 은신처 모니터링',
    description: '공격자들은 귀중한 데이터의 병목 지점 역할을 하는 보호되지 않은 엣지 장치를 표적으로 삼습니다. Sandfly를 통해 공격자가 있는 곳에서 작업할 수 있습니다.',
    icon: WifiIcon,
  },
  {
    name: '손쉬운 확장성',
    description: '개별 에이전트 관리의 복잡성을 피할 수 있습니다. Sandfly는 광범위한 네트워킹 인프라와 분산 시스템을 보유한 조직에 이상적입니다.',
    icon: CircleStackIcon,
  },
  {
    name: '광범위한 장치 지원',
    description: '네트워크 장비와 IoT 장치부터 산업용 제어 장치와 로봇까지 다양한 Linux 기반 시스템을 보호합니다.',
    icon: CogIcon,
  },
];

const Page = () => {
  return (
    <div className="bg-gray-900 text-white">
      <main>
        <section className="text-center py-20 px-4 bg-black">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">엣지에 숨어있는 침입자를 찾아내세요</h1>
            <p className="text-lg md:text-xl text-gray-300 leading-8">
              국가 지원 해커와 지능형 지속 위협(APT) 그룹은 점점 더 네트워킹 장비와 Linux 기반 임베디드 장치를 표적으로 삼고 있습니다. 이러한 시스템에서 위협을 탐지하는 것은 중요 인프라를 보호하는 데 필수적입니다.
            </p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-cyan-400">모든 Linux 장치를 보호하세요</h2>
              <p className="mt-4 text-lg text-gray-400">Sandfly는 업계에서 가장 광범위한 Linux 장치 호환성을 제공합니다.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {features.map((feature) => (
                <div key={feature.name} className="bg-gray-800 p-8 rounded-lg shadow-lg">
                  <feature.icon className="h-12 w-12 text-cyan-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{feature.name}</h3>
                  <p className="text-gray-400 leading-7">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Linux 위협 탐지 실전</h2>
            <p className="text-lg text-gray-300 mb-8">
              드리프트 탐지를 사용하여 손상된 임베디드 Linux 장치를 추적하는 Sandfly의 실제 작업을 함께 확인해보세요.
            </p>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.youtube.com/embed/pZMOeVHEanU" 
                title="Sandfly Drift Detection on Embedded Linux" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;

