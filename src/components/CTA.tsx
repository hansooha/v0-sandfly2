import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
빠르고 안전한 Linux EDR을 받으세요
        </h2>
        <p className="mt-4 text-xl text-gray-300">
에이전트 없는 배포로 수초 내에 호스트를 보호하세요
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/get-sandfly"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-sandfly-yellow hover:bg-yellow-400 transition-colors"
          >
지금 호스트 보호
          </Link>
          <Link 
            href="/contact-us"
            className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-white hover:border-sandfly-yellow transition-colors"
          >
내가 연락하기
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
