import React from 'react';
import Link from 'next/link';
import { ShieldCheckIcon, LockClosedIcon, WifiIcon, ServerIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: '분석을 위한 데이터 외부 전송 없음',
    description: 'Sandfly는 분석을 위해 보안 원격 측정 데이터를 당사로 보내지 않습니다. 모든 처리는 고객이 제어하는 시스템에서 이루어집니다.',
    icon: ShieldCheckIcon,
  },
  {
    name: '제3자 데이터 공유 없음',
    description: 'Sandfly는 고객이 명시적으로 지정하지 않는 한 (예: 사용하는 MDR 서비스로 경고 전달) 제3자에게 데이터를 전송하지 않습니다.',
    icon: LockClosedIcon,
  },
  {
    name: '에어 갭 및 격리된 네트워크 지원',
    description: 'Sandfly는 에어 갭 또는 기타 격리된 네트워크에서도 완벽하게 작동하며, 인터넷 연결이 필요하지 않습니다. 업데이트는 격리된 오프라인 메커니즘을 통해 쉽게 이루어집니다.',
    icon: WifiIcon,
  },
  {
    name: '고객 데이터 미보유',
    description: '당사는 고객의 운영 데이터를 어떤 형태로든 당사 시스템에 보관하거나 처리하지 않습니다. 우리는 공격자가 고객의 중요한 데이터에 접근할 수 있는 백도어가 아닙니다.',
    icon: ServerIcon,
  },
  {
    name: '완벽한 데이터 소유권 및 제어',
    description: '데이터의 이동 경로와 사용 방법을 사용자가 결정합니다. Sandfly는 완전한 소유권과 제어권을 제공합니다.',
    icon: UserGroupIcon,
  },
];

const Page = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">당신의 데이터는 당신의 것입니다.</h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
            Sandfly는 보안 데이터의 민감성과 외부 시스템과 공유할 때 발생하는 위험을 이해합니다. 이것이 바로 Sandfly가 에어 갭 또는 격리된 환경에서도 고객의 네트워크 내에서 완벽하게 작동하도록 설계된 이유입니다.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-cyan-400 tracking-wide uppercase">데이터 개인정보 보호</h2>
            <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              데이터와 비밀을 안전하게 보호합니다.
            </p>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-10">
              {features.map((feature) => (
                <div key={feature.name} className="text-center p-6 bg-gray-800 rounded-lg">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyan-500 text-white mx-auto">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="mt-5">
                    <h3 className="text-lg leading-6 font-medium text-white">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video & Testimonial Section */}
      <div className="bg-gray-800 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              단 몇 초 만에 보안이 확보됩니다.
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Sandfly를 Linux에 즉시 배포하여 얼마나 쉽게 시작하고 실행할 수 있는지 확인해 보세요.
            </p>
            <div className="mt-8">
              <Link
                href="https://www.youtube.com/watch?v=CouyFLNiTeU"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700"
              >
                동영상 보기
              </Link>
            </div>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-white">고객 후기</h3>
            <blockquote className="mt-4">
              <p className="text-lg text-gray-300">
                “Sandfly는 제가 본 첫 번째 제품으로, Linux 플랫폼에서 수천 가지의 침해 징후를 정확하고 신속하게 탐지합니다. 독특한 방법으로 수동으로는 불가능한 작업을 자동화합니다.”
              </p>
            </blockquote>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Sandfly의 강력한 보안을 경험하세요.</span>
            <span className="block text-cyan-500">지금 바로 시작하세요.</span>
          </h2>
          <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
            <Link
              href="/get-sandfly"
              className="flex items-center justify-center bg-cyan-600 border border-transparent rounded-md py-3 px-8 text-base font-medium text-white hover:bg-cyan-700"
            >
              무료 평가판 시작하기
            </Link>
            <Link
              href="/platform"
              className="flex items-center justify-center bg-gray-200 border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-800 hover:bg-gray-300"
            >
              플랫폼 더 알아보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
