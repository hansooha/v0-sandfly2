import React from 'react';
import Link from 'next/link';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

const ComparisonRow = ({ feature, sandfly, wazuh, sandflyIcon = true, wazuhIcon = false }: {
  feature: string;
  sandfly: string;
  wazuh: string;
  sandflyIcon?: boolean;
  wazuhIcon?: boolean;
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
        {wazuhIcon ? (
          <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
        ) : (
          <XCircleIcon className="h-6 w-6 text-red-500 mr-2" />
        )}
        <span className="text-gray-300">{wazuh}</span>
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
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Sandfly vs. Wazuh</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Wazuh는 포괄적인 오픈소스 보안 플랫폼이지만, Sandfly는 Linux에 특화된 에이전트리스 접근 방식으로 
            더 간단하고 효과적인 위협 탐지를 제공합니다. 두 솔루션의 핵심 차이점을 살펴보세요.
          </p>
        </section>

        {/* Quick Summary */}
        <section className="mt-16 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-cyan-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Sandfly Security</h2>
              <ul className="space-y-3 text-gray-200">
                <li>• 에이전트리스 Linux 전용 보안</li>
                <li>• 즉시 배포 가능</li>
                <li>• Linux 특화 위협 탐지</li>
                <li>• 최소한의 설정 필요</li>
                <li>• 실시간 원격 분석</li>
                <li>• 전문적 기술 지원</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-blue-400 mb-4">Wazuh</h2>
              <ul className="space-y-3 text-gray-200">
                <li>• 멀티 플랫폼 SIEM/XDR</li>
                <li>• 복잡한 설치 및 설정</li>
                <li>• 범용 보안 모니터링</li>
                <li>• 광범위한 구성 옵션</li>
                <li>• 에이전트 기반 수집</li>
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
                  <th className="py-4 px-6 text-center font-bold text-blue-400">Wazuh</th>
                </tr>
              </thead>
              <tbody>
                <ComparisonRow 
                  feature="배포 복잡도" 
                  sandfly="간단 (몇 분 내 배포)" 
                  wazuh="복잡 (다중 컴포넌트 설치)"
                  sandflyIcon={true}
                  wazuhIcon={false}
                />
                <ComparisonRow 
                  feature="에이전트 요구사항" 
                  sandfly="에이전트 불필요" 
                  wazuh="에이전트 설치 필수"
                  sandflyIcon={true}
                  wazuhIcon={false}
                />
                <ComparisonRow 
                  feature="Linux 특화 탐지" 
                  sandfly="고도로 특화된 탐지" 
                  wazuh="일반적 규칙 기반 탐지"
                  sandflyIcon={true}
                  wazuhIcon={false}
                />
                <ComparisonRow 
                  feature="설정 및 튜닝" 
                  sandfly="최소한의 설정" 
                  wazuh="광범위한 설정 필요"
                  sandflyIcon={true}
                  wazuhIcon={false}
                />
                <ComparisonRow 
                  feature="시스템 리소스" 
                  sandfly="최소 사용량" 
                  wazuh="높은 리소스 요구"
                  sandflyIcon={true}
                  wazuhIcon={false}
                />
                <ComparisonRow 
                  feature="사고 대응 속도" 
                  sandfly="즉시 원격 분석" 
                  wazuh="에이전트 설치 후 분석"
                  sandflyIcon={true}
                  wazuhIcon={false}
                />
                <ComparisonRow 
                  feature="학습 곡선" 
                  sandfly="낮음" 
                  wazuh="높음 (다양한 기능)"
                  sandflyIcon={true}
                  wazuhIcon={false}
                />
                <ComparisonRow 
                  feature="멀티 플랫폼 지원" 
                  sandfly="Linux 전용" 
                  wazuh="Windows, macOS, Linux"
                  sandflyIcon={false}
                  wazuhIcon={true}
                />
                <ComparisonRow 
                  feature="SIEM 기능" 
                  sandfly="탐지 및 분석 특화" 
                  wazuh="전체 SIEM 스택"
                  sandflyIcon={false}
                  wazuhIcon={true}
                />
                <ComparisonRow 
                  feature="비용" 
                  sandfly="상업용 라이선스" 
                  wazuh="오픈소스 무료"
                  sandflyIcon={false}
                  wazuhIcon={true}
                />
                <ComparisonRow 
                  feature="기술 지원" 
                  sandfly="전문적 지원" 
                  wazuh="커뮤니티 지원"
                  sandflyIcon={true}
                  wazuhIcon={false}
                />
              </tbody>
            </table>
          </div>
        </section>

        {/* Architecture Comparison */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">아키텍처 비교</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-cyan-400 mb-6">Sandfly 아키텍처</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-cyan-400 rounded mr-3"></div>
                  <span className="text-gray-300">중앙 관리 서버</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-400 rounded mr-3"></div>
                  <span className="text-gray-300">SSH 기반 원격 스캔</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-400 rounded mr-3"></div>
                  <span className="text-gray-300">실시간 분석 엔진</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-purple-400 rounded mr-3"></div>
                  <span className="text-gray-300">웹 인터페이스</span>
                </div>
              </div>
              <p className="mt-6 text-gray-400 text-sm">
                간단한 단일 서버 배포로 모든 Linux 시스템을 에이전트 없이 모니터링
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-6">Wazuh 아키텍처</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-400 rounded mr-3"></div>
                  <span className="text-gray-300">Wazuh Manager</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-400 rounded mr-3"></div>
                  <span className="text-gray-300">Elasticsearch</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-400 rounded mr-3"></div>
                  <span className="text-gray-300">Kibana</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-400 rounded mr-3"></div>
                  <span className="text-gray-300">에이전트 (각 호스트)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-purple-400 rounded mr-3"></div>
                  <span className="text-gray-300">Logstash (옵션)</span>
                </div>
              </div>
              <p className="mt-6 text-gray-400 text-sm">
                복잡한 다중 컴포넌트 아키텍처로 각 시스템에 에이전트 설치 필요
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">적합한 사용 사례</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Sandfly가 적합한 경우</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Linux 환경에만 집중하는 조직</li>
                <li>• 빠른 배포와 즉시 사용이 필요한 경우</li>
                <li>• 에이전트 설치가 제한적인 환경</li>
                <li>• 전문적인 Linux 위협 탐지가 필요한 경우</li>
                <li>• 최소한의 관리 오버헤드를 원하는 경우</li>
                <li>• 사고 대응 시 신속한 분석이 필요한 경우</li>
                <li>• 상업적 지원이 중요한 기업 환경</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Wazuh가 적합한 경우</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• 다양한 OS가 혼재된 환경</li>
                <li>• 완전한 SIEM 솔루션이 필요한 경우</li>
                <li>• 오픈소스 솔루션을 선호하는 경우</li>
                <li>• 광범위한 커스터마이징이 필요한 경우</li>
                <li>• 로그 수집 및 분석이 주요 목적인 경우</li>
                <li>• 규정 준수를 위한 포괄적 모니터링</li>
                <li>• 기존 ELK 스택과의 통합이 필요한 경우</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Migration Scenarios */}
        <section className="mt-20 bg-gray-800 py-16 px-8 rounded-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Wazuh에서 Sandfly로 전환하는 시나리오</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">복잡성 해결</h3>
                <p className="text-gray-300">Wazuh의 복잡한 설정과 유지보수 부담을 줄이고 싶은 경우</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Linux 특화</h3>
                <p className="text-gray-300">Linux 환경에 특화된 고급 위협 탐지가 필요한 경우</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">신속한 대응</h3>
                <p className="text-gray-300">사고 대응 시 에이전트 설치 없이 즉시 분석이 필요한 경우</p>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Comparison */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">성능 비교</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-4">배포 시간</h3>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="text-cyan-400 text-3xl font-bold mb-2">5분</div>
                <div className="text-gray-400 text-sm">Sandfly</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg mt-4">
                <div className="text-blue-400 text-3xl font-bold mb-2">수시간</div>
                <div className="text-gray-400 text-sm">Wazuh</div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-4">리소스 사용량</h3>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="text-cyan-400 text-3xl font-bold mb-2">최소</div>
                <div className="text-gray-400 text-sm">Sandfly</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg mt-4">
                <div className="text-blue-400 text-3xl font-bold mb-2">높음</div>
                <div className="text-gray-400 text-sm">Wazuh</div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-4">학습 시간</h3>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="text-cyan-400 text-3xl font-bold mb-2">1일</div>
                <div className="text-gray-400 text-sm">Sandfly</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg mt-4">
                <div className="text-blue-400 text-3xl font-bold mb-2">수주</div>
                <div className="text-gray-400 text-sm">Wazuh</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-cyan-400 sm:text-4xl">
            Linux 보안을 위한 더 스마트한 선택
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            복잡한 설정과 에이전트 관리 없이 즉시 Linux 위협을 탐지하고 분석할 수 있습니다.
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