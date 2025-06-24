import React from 'react';
import Link from 'next/link';
import { RocketLaunchIcon, ServerStackIcon, BugAntIcon, CodeBracketSquareIcon, MagnifyingGlassIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: '신속하고 안전한 배포',
    description: 'Sandfly는 복잡한 설치나 엔드포인트 중단 없이 신속하게 배포하여 위험을 최소화하고 호환성 문제를 방지합니다.',
    icon: RocketLaunchIcon,
  },
  {
    name: '포괄적인 Linux 지원',
    description: '서버, 어플라이언스부터 임베디드 장치에 이르기까지 모든 Linux 시스템에서 원활하게 작동하여 포괄적인 보호를 보장합니다.',
    icon: ServerStackIcon,
  },
  {
    name: '광범위한 위협 탐지',
    description: '악성코드, 크립토마이너, 백도어, 루트킷, 자격 증명 도용과 같은 Linux 공격을 식별하는 광범위한 위협 탐지 라이브러리를 활용합니다.',
    icon: BugAntIcon,
  },
  {
    name: '사용자 정의 가능한 조사',
    description: '특정 위협이나 의심스러운 활동을 조사하기 위해 모든 모듈을 복제하고 조정할 수 있습니다.',
    icon: CodeBracketSquareIcon,
  },
  {
    name: '미묘한 변경 사항 탐지',
    description: '임베디드 장치 및 어플라이언스를 포함한 모든 Linux 시스템에서 가장 미묘한 변경 사항까지 확인합니다.',
    icon: MagnifyingGlassIcon,
  },
  {
    name: '신속한 사고 대응',
    description: '손상된 시스템을 몇 초 만에 정확히 찾아내어 피해를 최소화하고 사고 대응을 신속하게 처리합니다.',
    icon: ShieldCheckIcon,
  },
];

const Page = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">초고속, 에이전트 없는 즉각적인 보호.</h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
            Sandfly는 Linux의 기존 보안 솔루션이 가진 가장 큰 위험인 '배포' 문제를 해결하기 위해 설계되었습니다. 보호하려는 시스템을 지정하기만 하면 즉시 작동을 시작합니다.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-cyan-400 tracking-wide uppercase">빠른 배포</h2>
            <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              전체 Linux 환경에 걸친 신속하고 안전한 배포.
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
                “Sandfly Security는 우리의 보안 접근 방식이 효과가 있음을 알려주고, 침해나 문제가 발생하는 즉시 경고하여 문제가 확대되기 전에 조치를 취할 수 있도록 해줍니다.”
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
