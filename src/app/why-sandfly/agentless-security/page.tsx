import React from 'react';
import Link from 'next/link';
import { ShieldCheckIcon, BoltIcon, ServerIcon, ClockIcon, EyeSlashIcon, CogIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: '성능 저하 제로',
    description: '호스트 시스템에 에이전트를 설치하지 않으므로 CPU, 메모리 등 시스템 리소스를 전혀 소모하지 않습니다. 운영 중인 서비스의 성능에 영향을 주지 않고 보안 검사를 수행할 수 있습니다.',
    icon: BoltIcon,
  },
  {
    name: '관리 오버헤드 없음',
    description: '수천 개의 엔드포인트에 에이전트를 배포, 관리, 업데이트 및 패치하는 복잡한 과정이 필요 없습니다. Sandfly는 중앙에서 모든 작업을 관리하여 운영 효율성을 극대화합니다.',
    icon: CogIcon,
  },
  {
    name: '공격 표면 최소화',
    description: '보안 에이전트 자체가 해커의 공격 대상이 되거나, 에이전트의 취약점이 시스템 전체에 위협이 되는 경우를 원천적으로 차단합니다. Sandfly는 공격자가 우회하거나 비활성화할 수 있는 에이전트가 없습니다.',
    icon: EyeSlashIcon,
  },
  {
    name: '즉각적인 배포 및 확장',
    description: 'SSH 접속 정보만으로 몇 분 안에 수천 개의 Linux 시스템에 대한 보안 검사를 시작할 수 있습니다. 시스템 재시작이나 복잡한 설치 과정 없이 즉시 가치를 창출합니다.',
    icon: ClockIcon,
  },
  {
    name: '광범위한 호환성',
    description: '오래된 레거시 시스템, 특수 목적의 어플라이언스, IoT 기기 등 에이전트 설치가 어렵거나 불가능한 환경에서도 일관된 보안을 적용할 수 있습니다.',
    icon: ServerIcon,
  },
  {
    name: '완벽한 데이터 통제',
    description: '모든 데이터는 고객의 네트워크 내에서만 처리되며 외부로 전송되지 않습니다. 온프레미스 및 에어갭(Air-gapped) 환경에서도 완벽하게 작동하여 데이터 주권을 보장합니다.',
    icon: ShieldCheckIcon,
  },
];

const Page = () => {
  return (
    <div className="bg-gray-900">
      <main>
        {/* Hero Section */}
        <div className="relative bg-gray-800">
          <div className="absolute inset-0">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-900" />
          </div>
          <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:px-8">
            <div className="bg-gray-900 py-16 px-4 sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
              <div className="max-w-lg mx-auto lg:mx-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  에이전트리스 보안: 성능과 안정성을 모두 잡다
                </h1>
                <p className="mt-6 text-lg text-gray-300">
                  Sandfly는 Linux 시스템에 어떤 소프트웨어도 설치하지 않는 혁신적인 에이전트리스 접근 방식을 사용합니다. 이를 통해 시스템 성능 저하, 관리의 복잡성, 에이전트와 시스템 간의 충돌 위험 없이 강력한 위협 탐지 및 포렌식 조사를 수행합니다.
                </p>
                <div className="mt-10">
                  <Link
                    href="/get-sandfly"
                    className="inline-block bg-cyan-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-cyan-700"
                  >
                    무료 평가판 시작하기
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 py-16 px-4 sm:py-24 sm:px-6 lg:bg-none lg:px-0 lg:pl-8 lg:flex lg:items-center lg:justify-end">
              <div className="max-w-lg mx-auto w-full space-y-8 lg:mx-0">
                <div>
                  <h2 className="text-2xl font-extrabold text-white">에이전트 기반 솔루션의 문제점</h2>
                  <p className="mt-3 text-gray-300">
                    기존의 에이전트 기반 보안 솔루션은 다음과 같은 고질적인 문제들을 안고 있습니다.
                  </p>
                </div>
                <ul role="list" className="space-y-5">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <ShieldCheckIcon className="h-6 w-6 text-red-500" aria-hidden="true" />
                    </div>
                    <p className="ml-3 text-base text-gray-300">성능 저하: 에이전트는 항상 시스템 리소스를 사용하여 운영 환경에 부담을 줍니다.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <ShieldCheckIcon className="h-6 w-6 text-red-500" aria-hidden="true" />
                    </div>
                    <p className="ml-3 text-base text-gray-300">관리 부담: 모든 엔드포인트에 에이전트를 설치, 업데이트, 관리해야 하는 운영 부담이 큽니다.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <ShieldCheckIcon className="h-6 w-6 text-red-500" aria-hidden="true" />
                    </div>
                    <p className="ml-3 text-base text-gray-300">보안 위험: 에이전트 자체의 취약점이 새로운 공격 경로가 될 수 있으며, 공격자에 의해 비활성화될 수 있습니다.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-cyan-600 tracking-wide uppercase">Sandfly의 접근법</h2>
              <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                에이전트리스가 제공하는 핵심 가치
              </p>
              <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                Sandfly는 표준 SSH 프로토콜을 사용하여 원격으로 시스템에 접속하고, 필요한 정보를 수집 및 분석한 후 즉시 연결을 종료합니다. 이 간단하고 강력한 방식으로 기존 보안 솔루션의 한계를 극복합니다.
              </p>
            </div>

            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="pt-6">
                    <div className="flow-root bg-gray-800 rounded-lg px-6 pb-8 shadow-sm">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-cyan-500 rounded-md shadow-lg">
                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-white tracking-tight">{feature.name}</h3>
                        <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-800">
          <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">지금 바로 Sandfly의 차이를</span>
              <span className="block text-cyan-600">직접 경험해보세요.</span>
            </h2>
            <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
              <Link
                href="/get-sandfly"
                className="flex items-center justify-center bg-cyan-600 border border-transparent rounded-md py-3 px-8 text-base font-medium text-white hover:bg-cyan-700"
              >
                무료 평가판
              </Link>
              <Link
                href="/platform"
                className="flex items-center justify-center bg-gray-800 border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-800 hover:bg-gray-200"
              >
                플랫폼 더 알아보기
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
