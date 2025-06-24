import React from 'react';
import Link from 'next/link';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

const ComparisonRow = ({ feature, sandfly, sysmon, sandflyIcon = true, sysmonIcon = false }: {
  feature: string;
  sandfly: string;
  sysmon: string;
  sandflyIcon?: boolean;
  sysmonIcon?: boolean;
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
        {sysmonIcon ? (
          <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
        ) : (
          <XCircleIcon className="h-6 w-6 text-red-500 mr-2" />
        )}
        <span className="text-gray-300">{sysmon}</span>
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
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Sandfly vs. Sysmon</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Sysmon은 Windows 환경에서 유용한 시스템 모니터링 도구이지만, Sandfly는 Linux에 특화된 에이전트리스 접근 방식으로 
            더 포괄적이고 효율적인 위협 탐지를 제공합니다. 두 솔루션의 핵심 차이점을 살펴보세요.
          </p>
        </section>

        {/* Quick Summary */}
        <section className="mt-16 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-cyan-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Sandfly Security</h2>
              <ul className="space-y-3 text-gray-200">
                <li>• 에이전트리스 Linux 전용 보안</li>
                <li>• 즉시 배포 및 사용 가능</li>
                <li>• 통합된 위협 탐지 솔루션</li>
                <li>• 자동화된 분석 및 대응</li>
                <li>• 포렌식 데이터 자동 수집</li>
                <li>• 전문적 기술 지원</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-blue-400 mb-4">Sysmon</h2>
              <ul className="space-y-3 text-gray-200">
                <li>• Windows 전용 로깅 도구</li>
                <li>• 복잡한 설정 및 구성</li>
                <li>• 이벤트 로깅에만 집중</li>
                <li>• 수동 분석 필요</li>
                <li>• 별도 SIEM과 통합 필요</li>
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
                  <th className="py-4 px-6 text-center font-bold text-blue-400">Sysmon</th>
                </tr>
              </thead>
              <tbody>
                <ComparisonRow 
                  feature="플랫폼 지원" 
                  sandfly="Linux 전용 (모든 배포판)" 
                  sysmon="Windows 전용"
                  sandflyIcon={true}
                  sysmonIcon={false}
                />
                <ComparisonRow 
                  feature="배포 방식" 
                  sandfly="에이전트리스 (SSH 기반)" 
                  sysmon="에이전트 설치 필요"
                  sandflyIcon={true}
                  sysmonIcon={false}
                />
                <ComparisonRow 
                  feature="설정 복잡도" 
                  sandfly="플러그 앤 플레이" 
                  sysmon="복잡한 XML 구성"
                  sandflyIcon={true}
                  sysmonIcon={false}
                />
                <ComparisonRow 
                  feature="시스템 성능 영향" 
                  sandfly="없음" 
                  sysmon="로깅 오버헤드"
                  sandflyIcon={true}
                  sysmonIcon={false}
                />
                <ComparisonRow 
                  feature="위협 탐지" 
                  sandfly="실시간 자동 탐지" 
                  sysmon="이벤트 로깅만"
                  sandflyIcon={true}
                  sysmonIcon={false}
                />
                <ComparisonRow 
                  feature="분석 도구" 
                  sandfly="통합 분석 엔진" 
                  sysmon="별도 분석 도구 필요"
                  sandflyIcon={true}
                  sysmonIcon={false}
                />
                <ComparisonRow 
                  feature="대응 기능" 
                  sandfly="자동 대응 및 격리" 
                  sysmon="로깅만 (대응 불가)"
                  sandflyIcon={true}
                  sysmonIcon={false}
                />
                <ComparisonRow 
                  feature="포렌식 데이터" 
                  sandfly="자동 수집 및 제공" 
                  sysmon="수동 수집 필요"
                  sandflyIcon={true}
                  sysmonIcon={false}
                />
                <ComparisonRow 
                  feature="사고 대응 속도" 
                  sandfly="즉시 원격 분석" 
                  sysmon="로그 분석 시간 소요"
                  sandflyIcon={true}
                  sysmonIcon={false}
                />
                <ComparisonRow 
                  feature="사용자 인터페이스" 
                  sandfly="전용 웹 대시보드" 
                  sysmon="이벤트 뷰어 사용"
                  sandflyIcon={true}
                  sysmonIcon={false}
                />
                <ComparisonRow 
                  feature="학습 곡선" 
                  sandfly="낮음" 
                  sysmon="높음 (XML 구성)"
                  sandflyIcon={true}
                  sysmonIcon={false}
                />
                <ComparisonRow 
                  feature="오픈소스" 
                  sandfly="상업용 솔루션" 
                  sysmon="무료 Microsoft 도구"
                  sandflyIcon={false}
                  sysmonIcon={true}
                />
                <ComparisonRow 
                  feature="기술 지원" 
                  sandfly="전문적 지원" 
                  sysmon="커뮤니티 지원"
                  sandflyIcon={true}
                  sysmonIcon={false}
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
                  <span className="text-gray-300">통합 웹 인터페이스</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-orange-400 rounded mr-3"></div>
                  <span className="text-gray-300">자동 대응 시스템</span>
                </div>
              </div>
              <p className="mt-6 text-gray-400 text-sm">
                완전한 통합 솔루션으로 탐지부터 대응까지 모든 기능을 제공
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-6">Sysmon + SIEM 아키텍처</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-400 rounded mr-3"></div>
                  <span className="text-gray-300">Sysmon 에이전트</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-400 rounded mr-3"></div>
                  <span className="text-gray-300">Windows 이벤트 로그</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-400 rounded mr-3"></div>
                  <span className="text-gray-300">로그 수집기</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-400 rounded mr-3"></div>
                  <span className="text-gray-300">SIEM 시스템</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-purple-400 rounded mr-3"></div>
                  <span className="text-gray-300">분석 도구</span>
                </div>
              </div>
              <p className="mt-6 text-gray-400 text-sm">
                여러 컴포넌트 통합 필요하며 각각 별도 설정과 관리 필요
              </p>
            </div>
          </div>
        </section>

        {/* Event Types Comparison */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">탐지 범위 비교</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-cyan-400 mb-6">Sandfly 탐지 범위</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• 숨겨진 프로세스 및 네트워크 연결</li>
                <li>• 루트킷 및 커널 레벨 위협</li>
                <li>• 권한 상승 및 지속성 메커니즘</li>
                <li>• 파일리스 공격 및 메모리 기반 위협</li>
                <li>• 컨테이너 및 클러스터 위협</li>
                <li>• 크립토마이닝 및 봇넷 활동</li>
                <li>• 데이터 탈취 및 익스필트레이션</li>
                <li>• MITRE ATT&CK Linux 전술</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-6">Sysmon 로깅 범위</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• 프로세스 생성 및 종료</li>
                <li>• 네트워크 연결 이벤트</li>
                <li>• 파일 생성 및 수정</li>
                <li>• 레지스트리 변경 (Windows만)</li>
                <li>• 이미지/DLL 로드</li>
                <li>• 원격 스레드 생성</li>
                <li>• 원시 액세스 읽기</li>
                <li>• 프로세스 액세스</li>
              </ul>
              <p className="mt-4 text-yellow-400 text-sm">
                * Linux는 지원하지 않음, 이벤트 로깅만 제공
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
                <li>• Linux 서버 및 클라우드 인프라 보안</li>
                <li>• 컨테이너 및 마이크로서비스 환경</li>
                <li>• 즉시 배포가 필요한 상황</li>
                <li>• 에이전트 설치가 제한적인 환경</li>
                <li>• 자동화된 위협 대응이 필요한 경우</li>
                <li>• 포렌식 분석 및 사고 대응</li>
                <li>• 규정 준수 및 보안 감사</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Sysmon이 적합한 경우</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Windows 환경 전용</li>
                <li>• 기본적인 시스템 모니터링</li>
                <li>• 로그 기반 보안 분석</li>
                <li>• 기존 SIEM과의 통합</li>
                <li>• 예산이 제한적인 경우</li>
                <li>• Microsoft 생태계 중심 환경</li>
                <li>• 커스텀 로깅 요구사항</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Migration Scenarios */}
        <section className="mt-20 bg-gray-800 py-16 px-8 rounded-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Sysmon에서 Sandfly로 전환하는 시나리오</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Linux 환경 확장</h3>
                <p className="text-gray-300">Windows 중심에서 Linux 서버와 클라우드로 인프라가 확장되는 경우</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">실시간 대응</h3>
                <p className="text-gray-300">로그 분석을 넘어 실시간 위협 탐지와 자동 대응이 필요한 경우</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">통합 솔루션</h3>
                <p className="text-gray-300">복잡한 다중 도구 스택 대신 통합된 보안 솔루션이 필요한 경우</p>
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
                <div className="text-gray-400 text-sm">Sysmon + SIEM</div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-4">시스템 영향</h3>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="text-cyan-400 text-3xl font-bold mb-2">0%</div>
                <div className="text-gray-400 text-sm">Sandfly</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg mt-4">
                <div className="text-blue-400 text-3xl font-bold mb-2">5-10%</div>
                <div className="text-gray-400 text-sm">Sysmon</div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-4">탐지 시간</h3>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="text-cyan-400 text-3xl font-bold mb-2">초</div>
                <div className="text-gray-400 text-sm">Sandfly</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg mt-4">
                <div className="text-blue-400 text-3xl font-bold mb-2">시간</div>
                <div className="text-gray-400 text-sm">Sysmon</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-cyan-400 sm:text-4xl">
            Linux 보안의 차세대 솔루션
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            복잡한 로그 분석이나 에이전트 관리 없이 즉시 Linux 위협을 탐지하고 대응할 수 있습니다.
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