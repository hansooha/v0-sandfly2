import React from 'react';
import Link from 'next/link';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';

// 고객 사례 데이터를 정의합니다.
const caseStudies = [
  {
    title: '매사추세츠 대학교 로웰 연구 네트워크 보안',
    category: '고등교육',
    description: '매사추세츠 대학교에서는 학생, 강사, 분석가 및 연구원을 지원하는 중요한 웹 애플리케이션과 데이터베이스를 실행하는 Linux 서버를 운영하고 있습니다.',
    imageUrl: 'https://www.datocms-assets.com/56687/1678843939-umass-lowell-case-study.png?auto=format',
    pdfUrl: 'https://www.datocms-assets.com/56687/1678843818-sandfly-case-study-umass-lowell.pdf',
  },
  {
    title: '중요한 MSSP 인프라 보호',
    category: '관리형 보안 서비스 제공업체',
    description: '이 MSSP는 보안 비즈니스를 운영하는 자체 중요 인프라를 보호하기 위해 Sandfly를 사용합니다.',
    imageUrl: 'https://www.datocms-assets.com/56687/1678843952-mssp-case-study.png?auto=format',
    pdfUrl: 'https://www.datocms-assets.com/56687/1678843801-sandfly-case-study-mssp.pdf',
  },
  {
    title: '글로벌 금융 SaaS 플랫폼 보안',
    category: '금융 SaaS',
    description: '글로벌 금융 SaaS 플랫폼에서는 고객 대면 클라우드 Linux 호스트에서 에이전트리스 보안 및 위협 탐지를 제공하기 위해 Sandfly를 사용합니다.',
    imageUrl: 'https://www.datocms-assets.com/56687/1678843924-financial-saas-case-study.png?auto=format',
    pdfUrl: 'https://www.datocms-assets.com/56687/1678843787-sandfly-case-study-financial-saas.pdf',
  },
];

/**
 * CaseStudiesPage는 고객 사례 연구를 보여주는 페이지 컴포넌트입니다.
 * Hero 섹션, 사례 연구 목록, 그리고 CTA(Call to Action) 섹션으로 구성됩니다.
 */
export default function Page() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex">
              <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-300 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="font-semibold text-sandfly-yellow">실제 사례</span>
              </div>
            </div>
            <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-white sm:text-6xl">
              고객 사례 연구
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Sandfly는 지구상에서 가장 까다롭고 적대적인 환경에 배포되어 있습니다. 다음은 고객들이 자산을 보호하기 위해 에이전트리스 Linux 보안 플랫폼을 어떻게 사용하고 있는지에 대한 사례 연구입니다.
            </p>
          </div>
        </div>
      </div>

      {/* Case Studies List */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.title} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <img src={study.imageUrl} alt={study.title} className="aspect-[16/9] w-full rounded-2xl bg-gray-800 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <span className="relative z-10 rounded-full bg-sandfly-yellow px-3 py-1.5 font-medium text-gray-900">
                    {study.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-300">
                    <a href={study.pdfUrl} target="_blank" rel="noopener noreferrer">
                      <span className="absolute inset-0" />
                      {study.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">{study.description}</p>
                </div>
                <div className="mt-6">
                  <a href={study.pdfUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-x-2 text-sm font-semibold text-sandfly-yellow hover:text-sandfly-yellow-light">
                    PDF 다운로드
                    <DocumentArrowDownIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Sandfly 실제 작동 확인
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Sandfly 무료 체험을 받고 Linux 시스템 보호에 어떻게 도움을 줄 수 있는지 확인해보세요.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/request-a-free-trial/"
                className="rounded-md bg-sandfly-yellow px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-sandfly-yellow-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sandfly-yellow"
              >
무료 체험
              </a>
              <a href="/platform/" className="text-sm font-semibold leading-6 text-white">
자세히 보기 <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
