import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const supportLinks = [
  {
    title: '도움말',
    description: '저희 도움말에서 제품 설치 및 사용에 대한 대부분의 질문에 대한 답을 찾을 수 있습니다.',
    href: 'https://docs.sandflysecurity.com/',
  },
  {
    title: 'REST API 도움말',
    description: 'Sandfly의 REST API를 통해 다양한 보안 도구에서 쉽게 작업할 수 있습니다. SIEM 및 SOAR와의 통합이 간단합니다.',
    href: 'https://api.sandflysecurity.com/',
  },
  {
    title: '지원',
    description: 'Sandfly의 고객 지원팀이 전담팀으로 모든 질문이나 우려사항에 대해 신속하고 전문적인 도움을 제공할 준비가 되어 있습니다.',
    href: 'https://help.sandflysecurity.com/',
  },
];

const SupportCard = ({ title, description, href }: { title: string; description: string; href: string; }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" className="block p-8 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300">
    <h3 className="text-2xl font-bold text-cyan-400 mb-4">{title}</h3>
    <p className="text-gray-300 mb-6">{description}</p>
    <div className="flex items-center text-cyan-400 font-semibold">
      <span>자세히 보기</span>
      <ArrowRightIcon className="ml-2 h-5 w-5" />
    </div>
  </Link>
);

const Page = () => {
  return (
    <div className="bg-gray-900 text-white">
      <main className="container mx-auto px-6 py-16">
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">지원 리소스</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            종합적인 도움말, API 참조 문서, 직접 지원 채널을 통해 필요한 도움을 찾아보세요.
          </p>
        </section>

        <section className="mt-20 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportLinks.map((link) => (
              <SupportCard key={link.title} {...link} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
