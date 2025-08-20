import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-sandfly-yellow text-black text-center py-2 px-4">
        <p className="text-sm font-medium">
          <Link href="/blog/sandfly-5-4-network-device-support" className="hover:underline">
Sandfly 5.4 - Cisco 및 Juniper 네트워크 장비 지원
          </Link>
        </p>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              <span className="block">에이전트 없는 Linux</span>
              <span className="block text-sandfly-yellow">침입 탐지</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-6">
수초 내 보안 완료
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-300 mb-8">
최신 시스템부터 레거시, 임베디드 장치까지 모든 Linux 시스템에서 즉시 보호 기능을 제공합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="https://www.youtube.com/watch?v=JepEjcugdpA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-sandfly-yellow hover:bg-yellow-400 transition-colors"
              >
동영상 시청
              </Link>
              <Link 
                href="/get-sandfly"
                className="inline-flex items-center px-8 py-3 border border-gray-600 text-base font-medium rounded-md text-white hover:border-sandfly-yellow transition-colors"
              >
Sandfly 시작하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
