import React from 'react';

const Page = () => {
  return (
    <div className="bg-gray-900 text-white">
      <main className="container mx-auto px-6 py-16">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-center">
            파트너 및 MSSP
          </h1>
          <h2 className="mt-8 text-2xl font-semibold text-center text-gray-300">
            사고 대응팀, 위협 헌터, 보안 통합업체를 위한 솔루션
          </h2>
          <div className="mt-8 text-lg leading-8 text-gray-300 space-y-6">
            <p>
              Sandfly는 Linux 공격 탐지 및 대응 문제를 해결할 수 있습니다. 에이전트리스 SSH 기반 접근 방식을 통해 모든 유형의 Linux 시스템을 다루므로, 몇 분 내에 Linux 보안 커버리지를 가동할 수 있습니다.
            </p>
            <p>
              Reporting and integration with your existing monitoring systems is easy through Sandfly’s library of REST-based APIs. MSSPs can also develop their own Sandfly investigation modules to support any custom requirements. You can offer Linux monitoring to all your clients as a MSSP – or as a reseller.
            </p>
            <p>
              See what your customers think of Sandfly’s unique and comprehensive coverage while at the same time boosting your team’s capacity to monitor and secure Linux.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
