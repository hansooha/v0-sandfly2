import React from 'react';
import Link from 'next/link';
import { ShieldCheckIcon, CodeBracketSquareIcon, BoltIcon, ArrowPathIcon, BugAntIcon, CloudArrowUpIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: '지속적으로 확장되는 탐지 모듈',
    description: 'Sandfly의 계속 성장하는 탐지 모듈 목록은 공격자가 숨을 곳을 남기지 않습니다.',
    icon: ShieldCheckIcon,
  },
  {
    name: '사용자 정의 위협 추적',
    description: '배우기 쉬운 구문으로 자신만의 위협 추적을 사용자 정의하여 보안을 필요에 맞게 조정할 수 있습니다.',
    icon: CodeBracketSquareIcon,
  },
  {
    name: '신속한 사고 대응',
    description: 'Sandfly의 사고 대응 템플릿을 사용하거나 기존 전술 추적 모듈을 복제하여 신속하게 사고에 대응할 수 있습니다.',
    icon: BoltIcon,
  },
  {
    name: '전술 기반 탐지',
    description: '악성코드 시그니처는 오래되면 효력을 잃습니다. 우리는 공격의 기본 전술에 초점을 맞춰, 시대에 뒤처지지 않는 탁월한 위협 탐지 범위를 제공합니다.',
    icon: ArrowPathIcon,
  },
  {
    name: '새로운 및 회피형 공격 탐지',
    description: '전술을 방해함으로써 Sandfly는 기존 접근 방식으로는 놓칠 수 있는 새롭고 회피적인 공격을 찾아낼 수 있습니다.',
    icon: BugAntIcon,
  },
  {
    name: '엔드포인트 접촉 없는 업데이트',
    description: '기존 방식은 시그니처를 업데이트하는 데 시간이 많이 걸리고 위험하지만, Sandfly는 엔드포인트를 건드리지 않고도 업데이트할 수 있습니다.',
    icon: CloudArrowUpIcon,
  },
];

const Page = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">전통적 및 비전통적 공격 탐지.</h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
            Sandfly는 공격의 기본 전술에 집중하여, 시대에 뒤떨어지지 않는 독보적인 위협 탐지 능력을 제공합니다. 이를 통해 기존 방식으로는 놓칠 수 있는 새롭고 회피적인 공격을 찾아냅니다.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-cyan-400 tracking-wide uppercase">전술 탐지</h2>
            <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              우리의 접근 방식은 기존 솔루션보다 많은 이점을 제공합니다.
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
              Linux 위협의 실체.
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Sandfly가 우리의 사격장에서 침입과 침해를 어떻게 추적하는지 지켜보세요.
            </p>
            <div className="mt-8">
              <Link
                href="https://www.youtube.com/watch?v=QYd64EsOLko"
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
                “Sandfly는 업계의 심각한 보안 격차인 Linux 플랫폼에서의 침입 탐지를 해결합니다. Sandfly의 가장 큰 장점은 에이전트가 없는 특성으로, 모든 Linux 환경에 다용도로 적용할 수 있는 애플리케이션입니다.”
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
