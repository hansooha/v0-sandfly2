import React from 'react';

const TrustedBy = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-white mb-4">
중요 인프라에서 신뢰받는
        </h2>
        <p className="text-center text-lg text-gray-300 mb-8">
전 세계 중요 인프라에 배포됨
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70">
          <div className="text-center">
            <p className="text-gray-400 font-medium">Fortune 500 기업</p>
          </div>
          <div className="text-center">
            <p className="text-gray-400 font-medium">미국 연방 정부</p>
          </div>
          <div className="text-center">
            <p className="text-gray-400 font-medium">주요 금융 기관</p>
          </div>
          <div className="text-center">
            <p className="text-gray-400 font-medium">선도적인 SaaS 기업</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
