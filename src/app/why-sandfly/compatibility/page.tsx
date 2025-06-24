import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheckIcon, CpuChipIcon, CloudIcon, ServerStackIcon, RocketLaunchIcon, BugAntIcon } from '@heroicons/react/24/outline';

const logos = [
  { name: 'Ubuntu', src: 'https://www.datocms-assets.com/56687/1707871295-ubuntu-ar21.svg' },
  { name: 'SUSE Linux', src: 'https://www.datocms-assets.com/56687/1707871292-suse_logo.svg' },
  { name: 'Rocky Linux', src: 'https://www.datocms-assets.com/56687/1707871289-rocky_linux_wordmark.svg' },
  { name: 'Red Hat', src: 'https://www.datocms-assets.com/56687/1707871286-redhat.svg' },
  { name: 'Raspberry Pi', src: 'https://www.datocms-assets.com/56687/1707871283-raspberry_pi_logo.svg' },
  { name: 'Gentoo Linux', src: 'https://www.datocms-assets.com/56687/1707871280-gentoo-horizontal.svg' },
  { name: 'Fedora', src: 'https://www.datocms-assets.com/56687/1707871278-fedora_logo-2021.svg' },
  { name: 'Debian', src: 'https://www.datocms-assets.com/56687/1707871275-debian-openlogo.svg' },
  { name: 'CentOS', src: 'https://www.datocms-assets.com/56687/1707871272-centos-logo-light.svg' },
  { name: 'Arch Linux', src: 'https://www.datocms-assets.com/56687/1707871269-archlinux-logo-dark-scalable-518881f04ca9.svg' },
  { name: 'Alma Linux', src: 'https://www.datocms-assets.com/56687/1707871265-alma-full.svg' },
];

const benefits = [
    {
        name: '모든 주요 배포판 지원',
        description: 'Sandfly는 Red Hat, Alma, Rocky, Fedora, SUSE, CentOS, Ubuntu, Gentoo, Arch 등 수많은 Linux 배포판에서 테스트되었습니다. 임베디드 및 어플라이언스 장치의 맞춤형 배포판에서도 동작합니다.',
        icon: ServerStackIcon,
    },
    {
        name: '광범위한 아키텍처 호환성',
        description: 'Sandfly는 Intel, AMD, ARM, MIPS, IBM POWER CPU를 포함한 다양한 아키텍처의 Linux를 수정 없이 지원합니다. 제한된 RAM을 가진 저전력 임베디드 시스템에서도 동작합니다.',
        icon: CpuChipIcon,
    },
    {
        name: '유연한 네트워크 아키텍처',
        description: 'Sandfly는 클라우드 시스템부터 온프레미스, 하이브리드 배포까지 네트워크 아키텍처에 관계없이 동작합니다. 즉시 통합된 가시성을 제공합니다.',
        icon: CloudIcon,
    },
    {
        name: '레거시부터 최신 시스템까지',
        description: '수십 년 된 시스템, 최신 클라우드 워크로드, 심지어 임베디드 장치까지 보호합니다. 공격자가 숨어서 네트워크를 이동할 수 있는 사각지대를 제거합니다.',
        icon: ShieldCheckIcon,
    },
    {
        name: '에이전트 없는 배포',
        description: '에이전트 배포와 관리를 잊고, 전체 Linux 환경에 몇 초 만에 배포하는 간소화된 운영을 경험하세요. Sandfly는 빠르고 안전하며 효과적입니다.',
        icon: RocketLaunchIcon,
    },
    {
        name: '침입 중심 전술 탐지',
        description: 'Sandfly는 Linux 공격을 성공시키는 전술을 추적합니다. 침입자의 전술을 탐지하여 알려진 위협과 알려지지 않은 위협을 신속하고 정확하게 차단합니다.',
        icon: BugAntIcon,
    },
];

const Page = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              모든 것을 보고, 모든 것을 보호합니다.
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
              다양한 연령대, 애플리케이션, 배포 모델이 혼재하는 Linux 환경을 보호하는 것은 어려운 일입니다. Sandfly는 거의 모든 시스템에 즉시 배포되어 현재 가시성과 보호가 제공되지 않는 곳에 즉각적인 가시성과 보호를 제공합니다.
            </p>
          </div>
        </div>
      </div>

      {/* Logo Cloud Section */}
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
            <p className="text-center text-base font-semibold text-gray-300 uppercase tracking-wider">
                모든 주요 Linux 배포판 지원
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
                {logos.map((logo) => (
                    <div key={logo.name} className="col-span-1 flex justify-center items-center py-8 px-8 bg-gray-700 rounded-lg filter grayscale hover:grayscale-0 transition-all duration-300">
                        <Image
                            className="max-h-12 object-contain"
                            src={logo.src}
                            alt={logo.name}
                            width={160}
                            height={48}
                            unoptimized
                        />
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                  <h2 className="text-base font-semibold text-sandfly-yellow tracking-wide uppercase">Key Features & Benefits</h2>
                  <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                      모든 시스템에서 비교할 수 없는 범위와 안전성을 제공합니다.
                  </p>
              </div>
              <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                  {benefits.map((benefit) => (
                      <div key={benefit.name} className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                          <div className="flex items-center mb-4">
                              <div className="flex-shrink-0 bg-sandfly-yellow text-gray-900 rounded-full p-3">
                                  <benefit.icon className="h-7 w-7" aria-hidden="true" />
                              </div>
                              <div className="ml-4">
                                  <h3 className="text-lg font-bold text-white">{benefit.name}</h3>
                              </div>
                          </div>
                          <p className="text-base text-gray-300">{benefit.description}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* CTA Section with Video and Testimonial */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Linux 보안 완료.
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                에이전트리스 성능과 안전성으로 Sandfly를 쉬게 설정하고 실행하는 방법을 보세요.
              </p>
              <div className="mt-8">
                <Link
                  href="https://www.youtube.com/watch?v=CouyFLNiTeU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-sandfly-yellow border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-sandfly-yellow-light transition-colors duration-300"
                >
                  비디오 보기
                </Link>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="font-semibold text-lg mb-4">What our customers say</h3>
              <blockquote className="text-gray-300 italic border-l-4 border-sandfly-yellow pl-6">
                <p>
                  “Sandfly is the first product I’ve seen that accurately and quickly detects thousands of signs of compromise on the Linux platform. Its unique method automates tasks which would be manually impossible. Automation is key with detection, and Sandfly completely fits this and other requirements. If your organization is using Linux, this should be part of your cybersecurity toolset.”
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
