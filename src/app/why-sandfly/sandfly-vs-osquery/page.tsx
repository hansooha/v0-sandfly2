import React from 'react';
import Link from 'next/link';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

const ComparisonRow = ({ feature, sandfly, osquery, sandflyIcon = true, osqueryIcon = false }: {
  feature: string;
  sandfly: string;
  osquery: string;
  sandflyIcon?: boolean;
  osqueryIcon?: boolean;
}) => (
  <tr className="border-b border-gray-700">
    <td className="py-4 px-6 text-left font-medium text-white">{feature}</td>
    <td className="py-4 px-6 text-center">
      <div className="flex items-center justify-center">
        {sandflyIcon ? (
          <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
        ) : (
          <XCircleIcon className="h-6 w-6 text-red-500 mr-2" />
        )}
        <span className="text-gray-300">{sandfly}</span>
      </div>
    </td>
    <td className="py-4 px-6 text-center">
      <div className="flex items-center justify-center">
        {osqueryIcon ? (
          <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
        ) : (
          <XCircleIcon className="h-6 w-6 text-red-500 mr-2" />
        )}
        <span className="text-gray-300">{osquery}</span>
      </div>
    </td>
  </tr>
);

const Page = () => {
  return (
    <div className="bg-gray-900 text-white">
      <main className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Sandfly vs. osquery</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            osquery는 강력한 오픈소스 프레임워크이지만, Sandfly는 Linux 보안에 특화된 에이전트리스 접근 방식으로 
            더 간단하고 효과적인 솔루션을 제공합니다. 두 도구의 주요 차이점을 비교해보세요.
          </p>
        </section>

        {/* Quick Summary */}
        <section className="mt-16 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-cyan-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Sandfly Security</h2>
              <ul className="space-y-3 text-gray-200">
                <li>• 에이전트리스 - 설치 불필요</li>
                <li>• Linux 전용 특화 탐지</li>
                <li>• 즉시 사용 가능한 위협 탐지</li>
                <li>• 성능 영향 없음</li>
                <li>• 자동화된 분석 및 보고</li>
                <li>• 상업적 지원 및 업데이트</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-orange-400 mb-4">osquery</h2>
              <ul className="space-y-3 text-gray-200">
                <li>• 에이전트 설치 필요</li>
                <li>• 범용 시스템 모니터링</li>
                <li>• 복잡한 쿼리 작성 필요</li>
                <li>• 시스템 리소스 사용</li>
                <li>• 수동 설정 및 분석</li>
                <li>• 커뮤니티 지원</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Detailed Comparison Table */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">상세 비교</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-gray-700">
                <tr>
                  <th className="py-4 px-6 text-left font-bold text-white">기능</th>
                  <th className="py-4 px-6 text-center font-bold text-cyan-400">Sandfly</th>
                  <th className="py-4 px-6 text-center font-bold text-orange-400">osquery</th>
                </tr>
              </thead>
              <tbody>
                <ComparisonRow 
                  feature="배포 방식" 
                  sandfly="에이전트리스 (SSH 기반)" 
                  osquery="에이전트 설치 필요"
                  sandflyIcon={true}
                  osqueryIcon={false}
                />
                <ComparisonRow 
                  feature="시스템 성능 영향" 
                  sandfly="없음" 
                  osquery="메모리 및 CPU 사용"
                  sandflyIcon={true}
                  osqueryIcon={false}
                />
                <ComparisonRow 
                  feature="설정 복잡도" 
                  sandfly="간단 (플러그 앤 플레이)" 
                  osquery="복잡 (쿼리 작성 필요)"
                  sandflyIcon={true}
                  osqueryIcon={false}
                />
                <ComparisonRow 
                  feature="Linux 특화 탐지" 
                  sandfly="전문적 위협 탐지" 
                  osquery="일반적 시스템 모니터링"
                  sandflyIcon={true}
                  osqueryIcon={false}
                />
                <ComparisonRow 
                  feature="실시간 분석" 
                  sandfly="자동화된 위협 분석" 
                  osquery="수동 쿼리 및 분석"
                  sandflyIcon={true}
                  osqueryIcon={false}
                />
                <ComparisonRow 
                  feature="포렌식 데이터" 
                  sandfly="즉시 제공" 
                  osquery="수동 수집 필요"
                  sandflyIcon={true}
                  osqueryIcon={false}
                />
                <ComparisonRow 
                  feature="사고 대응" 
                  sandfly="즉시 원격 분석" 
                  osquery="에이전트 설치 후 분석"
                  sandflyIcon={true}
                  osqueryIcon={false}
                />
                <ComparisonRow 
                  feature="학습 곡선" 
                  sandfly="낮음" 
                  osquery="높음 (SQL 쿼리 작성)"
                  sandflyIcon={true}
                  osqueryIcon={false}
                />
                <ComparisonRow 
                  feature="오픈소스" 
                  sandfly="상업용 솔루션" 
                  osquery="오픈소스"
                  sandflyIcon={false}
                  osqueryIcon={true}
                />
                <ComparisonRow 
                  feature="기술 지원" 
                  sandfly="전문 기술 지원" 
                  osquery="커뮤니티 지원"
                  sandflyIcon={true}
                  osqueryIcon={false}
                />
              </tbody>
            </table>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">적합한 사용 사례</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Sandfly가 적합한 경우</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• 빠른 위협 탐지가 필요한 경우</li>
                <li>• 에이전트 설치가 어려운 환경</li>
                <li>• Linux 특화 보안이 필요한 경우</li>
                <li>• 즉시 사용 가능한 솔루션이 필요한 경우</li>
                <li>• 전문적인 기술 지원이 필요한 경우</li>
                <li>• 규정 준수 및 감사가 중요한 경우</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-orange-400 mb-4">osquery가 적합한 경우</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• 맞춤형 모니터링이 필요한 경우</li>
                <li>• 예산이 제한적인 경우</li>
                <li>• 복잡한 쿼리 작성이 가능한 팀</li>
                <li>• 다양한 OS 지원이 필요한 경우</li>
                <li>• 오픈소스 솔루션을 선호하는 경우</li>
                <li>• 기존 SIEM과의 커스텀 통합이 필요한 경우</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Migration from osquery */}
        <section className="mt-20 bg-gray-800 py-16 px-8 rounded-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">osquery에서 Sandfly로 전환하는 이유</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">즉시 배포</h3>
                <p className="text-gray-300">에이전트 설치나 복잡한 설정 없이 몇 분 내에 보안 모니터링을 시작할 수 있습니다.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">전문가 수준 탐지</h3>
                <p className="text-gray-300">Linux 특화 위협 패턴과 TTPs를 자동으로 탐지하여 복잡한 쿼리 작성이 불필요합니다.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">운영 안정성</h3>
                <p className="text-gray-300">시스템 리소스 사용이나 안정성 문제 없이 지속적인 보안 모니터링이 가능합니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-cyan-400 sm:text-4xl">
            Sandfly의 차별화된 Linux 보안을 경험해보세요
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            복잡한 설정이나 쿼리 작성 없이 즉시 Linux 위협을 탐지하고 대응할 수 있습니다.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/get-sandfly" 
              className="inline-block rounded-md bg-cyan-600 px-8 py-3 text-base font-semibold text-white shadow-md hover:bg-cyan-700"
            >
              무료 체험 시작
            </Link>
            <Link 
              href="/platform" 
              className="inline-block rounded-md bg-gray-800 px-8 py-3 text-base font-semibold text-gray-300 ring-1 ring-gray-300 hover:bg-gray-700"
            >
              기능 자세히 보기
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;