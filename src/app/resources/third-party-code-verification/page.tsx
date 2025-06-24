import React from 'react';
import Link from 'next/link';
import { ShieldCheckIcon, DocumentTextIcon, CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const verificationSteps = [
  {
    step: 1,
    title: '소스 코드 검토',
    description: '모든 서드파티 라이브러리와 종속성의 소스 코드를 철저히 검토합니다.',
    details: [
      '코드 품질 및 보안 취약점 분석',
      '라이선스 호환성 확인',
      '악성 코드 또는 백도어 탐지',
      '개발자 신뢰성 평가',
    ],
  },
  {
    step: 2,
    title: '취약점 스캔',
    description: '알려진 CVE 및 보안 취약점에 대한 자동화된 스캔을 수행합니다.',
    details: [
      'NIST 취약점 데이터베이스 대조',
      'OWASP Top 10 보안 위험 요소 점검',
      '종속성 트리 전체 스캔',
      '실시간 위협 인텔리전스 적용',
    ],
  },
  {
    step: 3,
    title: '정적 분석',
    description: '코드 구조와 패턴을 분석하여 잠재적 위험요소를 식별합니다.',
    details: [
      '데이터 흐름 분석',
      '입력 유효성 검사 확인',
      '메모리 안전성 점검',
      '암호화 구현 검증',
    ],
  },
  {
    step: 4,
    title: '동적 테스트',
    description: '격리된 환경에서 실제 동작을 테스트하여 런타임 보안을 확인합니다.',
    details: [
      '샌드박스 환경 실행 테스트',
      '네트워크 통신 모니터링',
      '파일 시스템 접근 추적',
      '권한 상승 시도 탐지',
    ],
  },
  {
    step: 5,
    title: '문서화 및 승인',  
    description: '검증 결과를 문서화하고 사용 승인 여부를 결정합니다.',
    details: [
      '상세한 보안 평가 보고서 작성',
      '위험도 등급 분류',
      '사용 조건 및 제한사항 명시',
      '정기 재검토 일정 수립',
    ],
  },
];

const verificationTools = [
  {
    name: 'SAST 도구',
    description: '정적 애플리케이션 보안 테스트',
    tools: ['SonarQube', 'Veracode', 'Checkmarx', 'Fortify'],
  },
  {
    name: 'SCA 도구',
    description: '소프트웨어 컴포넌트 분석',
    tools: ['Snyk', 'WhiteSource', 'Black Duck', 'Sonatype'],
  },
  {
    name: 'DAST 도구',
    description: '동적 애플리케이션 보안 테스트',
    tools: ['OWASP ZAP', 'Burp Suite', 'Nessus', 'Acunetix'],
  },
  {
    name: '취약점 데이터베이스',
    description: '알려진 취약점 정보 수집',
    tools: ['NVD', 'CVE', 'OWASP', 'CWE'],
  },
];

const riskLevels = [
  {
    level: '낮음',
    color: 'green',
    description: '보안 위험이 낮아 사용 권장',
    criteria: [
      '알려진 취약점 없음',
      '활발한 커뮤니티 및 유지보수',
      '투명한 개발 프로세스',
      '정기적인 보안 업데이트',
    ],
  },
  {
    level: '중간',
    color: 'yellow',
    description: '주의사항을 준수하여 사용 가능',
    criteria: [
      '경미한 취약점 존재하나 패치 가능',
      '제한적 사용 환경에서 안전',
      '정기적인 모니터링 필요',
      '대안 검토 권장',
    ],
  },
  {
    level: '높음',
    color: 'red',
    description: '사용 금지 또는 대안 필요',
    criteria: [
      '심각한 보안 취약점 존재',
      '유지보수 중단된 프로젝트',
      '악성 코드 또는 백도어 의심',
      '라이선스 문제 발생',
    ],
  },
];

const Page = () => {
  return (
    <div className="bg-gray-900 text-white">
      <main className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <section className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <ShieldCheckIcon className="h-12 w-12 text-cyan-400 mr-4" />
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">서드파티 코드 검증</h1>
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Sandfly Security는 제품에 사용되는 모든 서드파티 라이브러리와 종속성에 대해 
            엄격한 보안 검증 프로세스를 적용합니다. 고객의 보안을 최우선으로 하는 
            우리의 검증 절차를 확인해보세요.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-2xl font-bold text-cyan-400">100%</div>
              <div className="text-sm text-gray-400">코드 검증률</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-2xl font-bold text-cyan-400">5단계</div>
              <div className="text-sm text-gray-400">검증 프로세스</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-2xl font-bold text-cyan-400">24시간</div>
              <div className="text-sm text-gray-400">평균 검증 시간</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-2xl font-bold text-cyan-400">99.9%</div>
              <div className="text-sm text-gray-400">보안 정확도</div>
            </div>
          </div>
        </section>

        {/* Verification Process */}
        <section className="mt-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">검증 프로세스</h2>
          <div className="space-y-8">
            {verificationSteps.map((step, index) => (
              <div key={step.step} className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                </div>
                <div className="flex-1 bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 mb-4">{step.description}</p>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-2 text-gray-400">
                        <CheckCircleIcon className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Verification Tools */}
        <section className="mt-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">사용 도구 및 기술</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {verificationTools.map((tool, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-3">{tool.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
                <ul className="space-y-1">
                  {tool.tools.map((toolName, toolIndex) => (
                    <li key={toolIndex} className="text-cyan-400 text-sm">
                      • {toolName}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Risk Assessment */}
        <section className="mt-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">위험도 평가 기준</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {riskLevels.map((risk, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-4 h-4 rounded-full ${
                    risk.color === 'green' ? 'bg-green-500' :
                    risk.color === 'yellow' ? 'bg-yellow-500' : 'bg-red-500'
                  }`} />
                  <h3 className="text-lg font-semibold text-white">
                    위험도 {risk.level}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">{risk.description}</p>
                <ul className="space-y-2">
                  {risk.criteria.map((criterion, criterionIndex) => (
                    <li key={criterionIndex} className="flex items-start gap-2 text-gray-400">
                      <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="mt-20 max-w-6xl mx-auto bg-gray-800 p-10 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">준수 표준 및 인증</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <ShieldCheckIcon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">ISO 27001</h3>
              <p className="text-gray-400 text-sm">정보보안 관리시스템</p>
            </div>
            <div className="p-6">
              <DocumentTextIcon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">SOC 2</h3>
              <p className="text-gray-400 text-sm">서비스 조직 통제</p>
            </div>
            <div className="p-6">
              <CheckCircleIcon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">NIST</h3>
              <p className="text-gray-400 text-sm">사이버보안 프레임워크</p>
            </div>
            <div className="p-6">
              <ExclamationTriangleIcon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">OWASP</h3>
              <p className="text-gray-400 text-sm">웹 애플리케이션 보안</p>
            </div>
          </div>
        </section>

        {/* Transparency Report */}
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">투명성 보고서</h2>
          <div className="bg-gray-800 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">현재 사용 중인 서드파티 라이브러리</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• OpenSSL 3.0.2 (암호화)</li>
                  <li>• PostgreSQL 14.5 (데이터베이스)</li>
                  <li>• Redis 7.0.4 (캐싱)</li>
                  <li>• nginx 1.22.0 (웹 서버)</li>
                  <li>• Docker 20.10.17 (컨테이너화)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">최근 검증 완료 (2024년 3월)</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• 총 127개 라이브러리 검증</li>
                  <li>• 3개 보안 업데이트 적용</li>
                  <li>• 1개 라이브러리 대체 완료</li>
                  <li>• 0개 심각한 취약점 발견</li>
                  <li>• 100% 검증 통과율</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-20 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-cyan-400 sm:text-4xl">
            보안 검증에 대한 문의
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            서드파티 코드 검증 프로세스에 대한 추가 정보가 필요하시거나 
            특정 라이브러리에 대한 검증 상태를 확인하고 싶으시면 연락해 주세요.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact-us" 
              className="inline-block rounded-md bg-cyan-600 px-8 py-3 text-base font-semibold text-white shadow-md hover:bg-cyan-700"
            >
              보안팀 문의
            </Link>
            <Link 
              href="/resources/white-papers" 
              className="inline-block rounded-md bg-gray-800 px-8 py-3 text-base font-semibold text-gray-300 ring-1 ring-gray-300 hover:bg-gray-700"
            >
              보안 백서 다운로드
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;