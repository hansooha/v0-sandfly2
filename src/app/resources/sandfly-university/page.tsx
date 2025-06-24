import React from 'react';
import Link from 'next/link';
import { ClockIcon, UserGroupIcon, AcademicCapIcon, PlayIcon } from '@heroicons/react/24/outline';

const courses = [
  {
    id: 1,
    title: 'Sandfly 기초: 에이전트리스 보안 시작하기',
    description: 'Sandfly의 기본 개념부터 설치, 초기 설정까지 단계별로 학습합니다.',
    level: '초급',
    duration: '2시간',
    modules: 8,
    category: '기초',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 2,
    title: 'Linux 위협 탐지 마스터 클래스',
    description: 'Linux 환경에서 발생하는 다양한 위협 패턴을 이해하고 Sandfly로 탐지하는 방법을 학습합니다.',
    level: '중급',
    duration: '4시간',
    modules: 12,
    category: '위협 탐지',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 3,
    title: '사고 대응 워크플로 구축',
    description: 'Sandfly를 활용한 효과적인 사고 대응 워크플로를 설계하고 구현하는 방법을 배웁니다.',
    level: '중급',
    duration: '3시간',
    modules: 10,
    category: '사고 대응',
    imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 4,
    title: 'SIEM 통합 및 자동화',
    description: 'Sandfly를 기존 SIEM, SOAR 도구와 통합하여 자동화된 보안 운영을 구축합니다.',
    level: '고급',
    duration: '5시간',
    modules: 15,
    category: '통합',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 5,
    title: '컨테이너 및 클라우드 보안',
    description: 'Kubernetes, Docker 등 컨테이너 환경과 클라우드에서 Sandfly 활용법을 학습합니다.',
    level: '고급',
    duration: '4시간',
    modules: 13,
    category: '클라우드',
    imageUrl: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 6,
    title: '포렌식 분석 및 증거 수집',
    description: '인시던트 발생 시 Sandfly를 활용한 디지털 포렌식 분석과 법적 증거 수집 방법을 배웁니다.',
    level: '고급',
    duration: '6시간',
    modules: 18,
    category: '포렌식',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
];

const certifications = [
  {
    title: 'Sandfly 인증 전문가 (SCP)',
    description: 'Sandfly 플랫폼의 기본 사용법과 Linux 보안 원리를 숙지한 전문가',
    level: '기초',
    duration: '40시간',
    badge: '🥉',
  },
  {
    title: 'Sandfly 인증 분석가 (SCA)',
    description: '고급 위협 분석과 사고 대응을 수행할 수 있는 숙련된 분석가',
    level: '중급',
    duration: '80시간',
    badge: '🥈',
  },
  {
    title: 'Sandfly 인증 아키텍트 (SAA)',
    description: '대규모 환경에서 Sandfly 솔루션을 설계하고 구축할 수 있는 전문 아키텍트',
    level: '고급',
    duration: '120시간',
    badge: '🥇',
  },
];

const Page = () => {
  return (
    <div className="bg-gray-900 text-white">
      <main className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <section className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <AcademicCapIcon className="h-12 w-12 text-cyan-400 mr-4" />
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Sandfly University</h1>
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Linux 보안 전문가가 되기 위한 포괄적인 교육 프로그램. 실무 중심의 커리큘럼으로 
            Sandfly 플랫폼 활용 능력을 체계적으로 향상시킬 수 있습니다.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-2xl font-bold text-cyan-400">6+</div>
              <div className="text-sm text-gray-400">전문 과정</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-2xl font-bold text-cyan-400">50+</div>
              <div className="text-sm text-gray-400">실습 모듈</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-2xl font-bold text-cyan-400">3</div>
              <div className="text-sm text-gray-400">인증 레벨</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-2xl font-bold text-cyan-400">1000+</div>
              <div className="text-sm text-gray-400">수료생</div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="mt-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">전문 교육 과정</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-cyan-500 transition-all">
                <img 
                  src={course.imageUrl} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-cyan-900 text-cyan-400 px-3 py-1 rounded-full text-xs font-medium">
                      {course.category}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      course.level === '초급' ? 'bg-green-700 text-green-300' :
                      course.level === '중급' ? 'bg-yellow-700 text-yellow-300' :
                      'bg-red-700 text-red-300'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <ClockIcon className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <PlayIcon className="h-4 w-4" />
                      {course.modules}개 모듈
                    </div>
                  </div>
                  <button className="w-full bg-cyan-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-cyan-700 transition-colors">
                    과정 시작하기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mt-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">전문 인증 프로그램</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg text-center">
                <div className="text-4xl mb-4">{cert.badge}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{cert.title}</h3>
                <p className="text-gray-400 mb-6">{cert.description}</p>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <ClockIcon className="h-4 w-4" />
                    {cert.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <AcademicCapIcon className="h-4 w-4" />
                    {cert.level}
                  </div>
                </div>
                <button className="bg-gray-700 text-gray-300 py-2 px-6 rounded-md font-semibold hover:bg-gray-600 transition-colors">
                  인증 정보 보기
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Paths Section */}
        <section className="mt-20 max-w-6xl mx-auto bg-gray-800 p-10 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">학습 경로 가이드</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">기초 과정</h3>
              <p className="text-gray-400">
                Sandfly 플랫폼 소개부터 기본 사용법까지 차근차근 학습합니다.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">실무 적용</h3>
              <p className="text-gray-400">
                실제 시나리오를 바탕으로 위협 탐지와 사고 대응 실습을 진행합니다.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">전문가 인증</h3>
              <p className="text-gray-400">
                고급 과정을 수료하고 공인된 Sandfly 전문가 인증을 취득합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mt-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Sandfly University 혜택</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <UserGroupIcon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">전문가 멘토링</h3>
              <p className="text-gray-400 text-sm">
                업계 최고 전문가들의 직접적인 멘토링과 Q&A 세션을 제공합니다.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <PlayIcon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">실습 중심 학습</h3>
              <p className="text-gray-400 text-sm">
                이론보다는 실제 환경에서의 실습을 통해 즉시 활용 가능한 기술을 습득합니다.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <AcademicCapIcon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">공인 인증서</h3>
              <p className="text-gray-400 text-sm">
                업계에서 인정받는 공식 인증서로 전문성을 입증할 수 있습니다.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <ClockIcon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">유연한 학습</h3>
              <p className="text-gray-400 text-sm">
                온라인 및 오프라인 혼합 학습으로 개인 일정에 맞춰 수강할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-cyan-400 sm:text-4xl">
            Linux 보안 전문가로 성장하세요
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Sandfly University에서 제공하는 체계적인 교육 프로그램으로 경력을 한 단계 끌어올리세요.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact-us" 
              className="inline-block rounded-md bg-cyan-600 px-8 py-3 text-base font-semibold text-white shadow-md hover:bg-cyan-700"
            >
              교육 상담 신청
            </Link>
            <Link 
              href="/resources/documentation" 
              className="inline-block rounded-md bg-gray-800 px-8 py-3 text-base font-semibold text-gray-300 ring-1 ring-gray-300 hover:bg-gray-700"
            >
              커리큘럼 자세히 보기
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;