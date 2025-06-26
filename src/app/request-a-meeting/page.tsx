'use client';

import React from 'react';
import Link from 'next/link';
import { CalendarDaysIcon, ClockIcon, UserGroupIcon, PhoneIcon } from '@heroicons/react/24/outline';

const meetingTypes = [
  {
    title: '제품 데모',
    duration: '30분',
    description: 'Sandfly Security 플랫폼의 핵심 기능과 UI를 실시간으로 확인해보세요.',
    features: [
      '에이전트리스 Linux 보안 시연',
      '실시간 위협 탐지 과정',
      '대시보드 및 리포팅 기능',
      'Q&A 세션 포함',
    ],
    icon: '🖥️',
  },
  {
    title: '기술 상담',
    duration: '45분',
    description: '귀하의 환경에 맞는 기술적 요구사항과 구현 방안을 논의합니다.',
    features: [
      '현재 보안 환경 분석',
      '아키텍처 및 통합 방안',
      '성능 및 확장성 검토',
      '맞춤형 솔루션 제안',
    ],
    icon: '🔧',
  },
  {
    title: '비즈니스 미팅',
    duration: '60분',
    description: '라이센스, 가격, 계약 조건 등 비즈니스 측면을 상세히 논의합니다.',
    features: [
      '라이센싱 모델 설명',
      '맞춤형 가격 제안',
      '계약 조건 협의',
      'ROI 및 비용 분석',
    ],
    icon: '💼',
  },
];

const timeSlots = [
  '09:00 - 09:30',
  '09:30 - 10:00',
  '10:00 - 10:30',
  '10:30 - 11:00',
  '11:00 - 11:30',
  '11:30 - 12:00',
  '14:00 - 14:30',
  '14:30 - 15:00',
  '15:00 - 15:30',
  '15:30 - 16:00',
  '16:00 - 16:30',
  '16:30 - 17:00',
];

const benefits = [
  {
    title: '전문가 컨설팅',
    description: '10년 이상의 Linux 보안 경험을 가진 전문가가 직접 상담해드립니다.',
    icon: UserGroupIcon,
  },
  {
    title: '맞춤형 솔루션',
    description: '귀하의 환경과 요구사항에 최적화된 보안 솔루션을 제안합니다.',
    icon: CalendarDaysIcon,
  },
  {
    title: '즉시 지원',
    description: '미팅 후에도 지속적인 기술 지원과 문의 응답을 제공합니다.',
    icon: ClockIcon,
  },
];

const Page = () => {
  const [selectedMeetingType, setSelectedMeetingType] = React.useState('제품 데모');

  return (
    <div className="bg-gray-900 text-white">
      <main className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <section className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <CalendarDaysIcon className="h-12 w-12 text-cyan-400 mr-4" />
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">전문가 미팅 신청</h1>
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Sandfly Security 전문가와 1:1 미팅을 통해 귀하의 Linux 보안 요구사항에 
            대한 맞춤형 솔루션을 확인해보세요. 무료 상담부터 기술 데모까지 
            다양한 미팅 옵션을 제공합니다.
          </p>
        </section>

        {/* Benefits Section */}
        <section className="mt-16 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">왜 Sandfly 전문가와 만나야 할까요?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
                <benefit.icon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Meeting Types */}
        <section className="mt-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">미팅 유형 선택</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {meetingTypes.map((type, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:ring-2 hover:ring-cyan-500 transition-all">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{type.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{type.title}</h3>
                  <div className="flex items-center justify-center gap-1 mt-2 text-cyan-400">
                    <ClockIcon className="h-4 w-4" />
                    <span className="text-sm">{type.duration}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <ul className="space-y-2 mb-6">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-gray-400">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => setSelectedMeetingType(type.title)}
                  className={`w-full py-2 px-4 rounded-md font-semibold transition-colors ${
                    selectedMeetingType === type.title
                      ? 'bg-cyan-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {selectedMeetingType === type.title ? '선택됨' : '선택하기'}
                </button>
              </div>
            ))}
          </div>
        </section>


        {/* FAQ Section */}
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">자주 묻는 질문</h2>
          <div className="space-y-4">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">미팅은 어떻게 진행되나요?</h3>
              <p className="text-gray-300">
                모든 미팅은 온라인으로 진행되며, Zoom, Microsoft Teams, Google Meet 등 편하신 플랫폼을 사용합니다. 
                신청 후 1-2일 내에 확정된 일정과 접속 링크를 보내드립니다.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">미팅 비용이 있나요?</h3>
              <p className="text-gray-300">
                모든 상담 미팅은 무료입니다. 제품 데모, 기술 상담, 비즈니스 미팅 모두 비용 없이 제공됩니다.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">미팅 후 어떤 자료를 받을 수 있나요?</h3>
              <p className="text-gray-300">
                미팅 후 논의된 내용을 정리한 요약서, 맞춤형 제안서, 관련 기술 문서 등을 제공합니다. 
                필요시 추가 자료나 평가판 라이센스도 안내해드립니다.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-cyan-400 sm:text-4xl">
            지금 바로 전문가와 만나보세요
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Linux 보안의 새로운 패러다임, Sandfly Security를 경험해보세요.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact-us" 
              className="inline-block rounded-md bg-cyan-600 px-8 py-3 text-base font-semibold text-white shadow-md hover:bg-cyan-700"
            >
              일반 문의하기
            </Link>
            <Link 
              href="/request-a-free-trial" 
              className="inline-block rounded-md bg-gray-800 px-8 py-3 text-base font-semibold text-gray-300 ring-1 ring-gray-300 hover:bg-gray-700"
            >
              무료 체험 신청
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;