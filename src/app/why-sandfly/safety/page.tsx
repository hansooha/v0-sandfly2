import React from 'react';
import Link from 'next/link';
import { ShieldCheckIcon, CpuChipIcon, PuzzlePieceIcon, EyeSlashIcon, ArrowPathIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: '에이전트 없는 아키텍처',
    description: 'Sandfly는 Linux에 에이전트를 설치할 필요 없이 작동합니다. 이로써 성능 오버헤드, 배포 충돌 및 안정성 위험을 제거합니다.',
    icon: ShieldCheckIcon,
  },
  {
    name: '최소한의 CPU 영향',
    description: 'Sandfly는 Linux 시스템에 최소한의 CPU 영향을 미치도록 설계되어 중요한 환경에 적합한 선택입니다. 저전력 임베디드 장치에서도 성능 저하 없이 보호 기능을 제공합니다.',
    icon: CpuChipIcon,
  },
  {
    name: '시스템 프로세스와의 충돌 없음',
    description: 'Sandfly는 시스템 프로세스(및 다른 보안 도구)와 함께 영향을 주지 않고 작동하여 안정성과 가동 시간을 보장합니다.',
    icon: PuzzlePieceIcon,
  },
  {
    name: '흔적 없는 조사',
    description: 'Sandfly는 작은 모듈을 사용하여 시스템의 위협을 신속하게 확인한 다음 흔적 없이 사라집니다. 조사 과정이 빠를 뿐만 아니라 원격 시스템 성능에 영향을 미치지 않습니다.',
    icon: EyeSlashIcon,
  },
  {
    name: '업데이트 및 호환성 문제 없음',
    description: 'Linux 환경 전반에 걸친 에이전트 업데이트나 호환성 문제에 대해 걱정할 필요가 없습니다. Sandfly에 영향을 주지 않고 원하는 만큼 자주 Linux 시스템을 업데이트할 수 있습니다.',
    icon: ArrowPathIcon,
  },
  {
    name: '손쉬운 확장성',
    description: 'Sandfly는 각 엔드포인트에서 개별 에이전트를 관리할 필요 없이 손쉽게 확장됩니다. 대규모 Linux 배포 환경에서 안정적으로 확장하고 성능을 발휘하는 것으로 신뢰받고 있습니다.',
    icon: ArrowsPointingOutIcon,
  },
];

const Page = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">문제 없고, 다운타임 없는 운영.</h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
            Sandfly는 시스템 성능에 영향을 주지 않으면서 전 세계 중요 애플리케이션에서 안전하고 신뢰할 수 있다는 잘 확립된 실적을 보유하고 있습니다.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-cyan-400 tracking-wide uppercase">안전성</h2>
            <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              비교할 수 없는 호환성과 안전성을 위해 설계되었습니다.
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

      {/* Testimonial Section */}
      <div className="bg-gray-800 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h3 className="text-xl font-semibold text-white">고객 후기</h3>
           <blockquote className="mt-4">
              <p className="text-2xl leading-9 font-medium text-gray-300">
                “기존 및 신규 서버 모두에 대해 이러한 추가적인 모니터링 및 보호 수준을 갖추고 있다는 사실은 특히 중앙 IT 부서에서 반드시 관리하지 않는 Linux 서버를 배포할 때 도움이 됩니다.”
              </p>
            </blockquote>
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
