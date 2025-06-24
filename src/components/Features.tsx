import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheckIcon, 
  EyeIcon, 
  ServerStackIcon, 
  KeyIcon, 
  ExclamationTriangleIcon,
  PuzzlePieceIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    number: '01',
    title: '더 이상 에이전트 없음',
    description: '전 세계 중요 인프라에서 신뢰받는 Sandfly는 엔드포인트 에이전트 없이 드라마 없는 Linux EDR을 제공합니다.',
    icon: ServerStackIcon,
  },
  {
    number: '02',
    title: '고급 위협 탐지',
    description: 'Sandfly는 지속적으로 업데이트되는 시그니처가 아닌 공격 전술을 타겨팅하여 Linux 시스템을 보호합니다.',
    icon: EyeIcon,
  },
  {
    number: '03',
    title: '가장 넓은 Linux 커버리지',
    description: 'Sandfly는 모든 Linux 환경에서 원활하게 작동하여 비교할 수 없는 크로스 플랫폼 방어를 제공합니다.',
    icon: ShieldCheckIcon,
  },
  {
    number: '04',
    title: 'SSH 키 및 비밀번호 모니터링',
    description: 'Sandfly는 모든 Linux 시스템에서 SSH 키를 추적하고 약한 비밀번호를 감사하여 측면 이동 공격을 방지합니다.',
    icon: KeyIcon,
  },
  {
    number: '05',
    title: '드리프트 탐지',
    description: 'Sandfly의 드리프트 탐지는 모든 Linux 시스템에서 무단 변경을 경고합니다.',
    icon: ExclamationTriangleIcon,
  },
  {
    number: '06',
    title: '원활한 통합',
    description: 'Sandfly는 SIEM, SOAR, 티켓 시스템을 포함한 기존 보안 스택과 통합됩니다.',
    icon: PuzzlePieceIcon,
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold tracking-wide text-sandfly-yellow uppercase">
종합적인 Linux 보호
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
업계 리더들이 Sandfly를 선택하는 이유
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-300">
Sandfly는 에이전트 없는, 즉시 배포 가능한, 안전한 Linux 엔드포인트 탐지 및 대응(EDR) 플랫폼입니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-sandfly-yellow transition-colors">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sandfly-yellow text-black">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-sandfly-yellow mb-1">{feature.number}</div>
                  <h3 className="text-lg font-medium text-white mb-2">{feature.title}</h3>
                  <p className="text-base text-gray-300">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Overview Section */}
        <div className="mt-20 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
거의 모든 Linux 시스템 보호
            </h2>
            <p className="mt-3 text-lg text-gray-300">
최신 클라우드 배포부터 수십 년된 레거시 시스템까지, Sandfly는 거의 모든 Linux 시스템을 보호합니다
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <ShieldCheckIcon className="h-6 w-6 text-sandfly-yellow" />
                </div>
                <div className="ml-3">
                  <p className="text-base text-gray-300">
                    <strong className="text-white">엔드포인트 에이전트 불필요</strong> - 성능 및 안정성 영향 방지
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <KeyIcon className="h-6 w-6 text-sandfly-yellow" />
                </div>
                <div className="ml-3">
                  <p className="text-base text-gray-300">
                    <strong className="text-white">SSH 자격증명 추적</strong> 및 약한 비밀번호 감사
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <ExclamationTriangleIcon className="h-6 w-6 text-sandfly-yellow" />
                </div>
                <div className="ml-3">
                  <p className="text-base text-gray-300">
                    <strong className="text-white">드리프트 탐지</strong>로 무단 변경 탐지
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <PuzzlePieceIcon className="h-6 w-6 text-sandfly-yellow" />
                </div>
                <div className="ml-3">
                  <p className="text-base text-gray-300">
                    <strong className="text-white">사용자 정의 모듈</strong>로 인시던트 대응자가 신종 위협을 탐지
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Link 
                href="/platform"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-sandfly-yellow hover:bg-yellow-400 transition-colors"
              >
플랫폼 탐색
              </Link>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                <Link 
                  href="https://www.youtube.com/watch?v=JepEjcugdpA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sandfly-yellow text-black hover:bg-yellow-400 transition-colors"
                >
                  <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </Link>
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">
Sandfly 실제 보기
              </h3>
              <p className="mt-2 text-sm text-gray-300">
에이전트 없는 성능과 안전성으로 Sandfly를 얼마나 쉽게 설정하고 실행할 수 있는지 확인하세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
