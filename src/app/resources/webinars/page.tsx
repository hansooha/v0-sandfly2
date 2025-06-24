import React from 'react';
import Link from 'next/link';
import { CalendarIcon, ClockIcon, PlayIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const webinars = [
  {
    id: 1,
    title: '에이전트리스 보안: Linux 환경에서의 혁신적 접근법',
    description: 'Linux 서버에 에이전트를 설치하지 않고도 강력한 보안 모니터링을 구현하는 방법과 실제 구현 사례를 소개합니다.',
    speaker: 'Craig Rowland, Sandfly 창립자',
    date: '2024년 4월 15일',
    time: '오후 2:00 - 3:00 (KST)',
    duration: '60분',
    attendees: 245,
    status: 'upcoming',
    thumbnailUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    registrationUrl: '#',
  },
  {
    id: 2,
    title: 'MITRE ATT&CK을 활용한 Linux 위협 탐지 전략',
    description: 'MITRE ATT&CK 프레임워크를 기반으로 Linux 환경에서 발생하는 고급 지속 위협을 탐지하고 분석하는 실전 기법을 학습합니다.',
    speaker: 'Sandfly 보안 전문가팀',
    date: '2024년 3월 28일',
    time: '오후 3:00 - 4:30 (KST)',
    duration: '90분',
    attendees: 342,
    status: 'recorded',
    thumbnailUrl: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    videoUrl: '#',
  },
  {
    id: 3,
    title: '클라우드 네이티브 환경에서의 컨테이너 보안',
    description: 'Kubernetes와 Docker 환경에서 발생할 수 있는 보안 위협을 식별하고, 실시간으로 탐지하여 대응하는 방법을 데모와 함께 설명합니다.',
    speaker: 'Alex Kim, 클라우드 보안 전문가',
    date: '2024년 3월 14일',
    time: '오후 2:30 - 4:00 (KST)',
    duration: '90분',
    attendees: 298,
    status: 'recorded',
    thumbnailUrl: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    videoUrl: '#',
  },
  {
    id: 4,
    title: 'Linux 루트킷 탐지: 숨겨진 위협 찾아내기',
    description: '고급 루트킷과 은폐 기법을 탐지하는 전문 기술을 실습과 함께 배우고, 실제 사례를 통해 대응 방법을 학습합니다.',
    speaker: 'Dr. Sarah Johnson, 멀웨어 분석 전문가',
    date: '2024년 2월 29일',
    time: '오후 1:00 - 2:30 (KST)',
    duration: '90분',
    attendees: 187,
    status: 'recorded',
    thumbnailUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    videoUrl: '#',
  },
  {
    id: 5,
    title: '사고 대응 시 효과적인 포렌식 데이터 수집 방법',
    description: '사이버 인시던트 발생 시 신속하고 정확한 포렌식 데이터 수집을 통해 효과적인 사고 대응을 수행하는 실무 가이드를 제공합니다.',
    speaker: 'Mike Chen, 사고 대응 전문가',
    date: '2024년 2월 15일',
    time: '오후 3:00 - 4:00 (KST)',
    duration: '60분',
    attendees: 156,
    status: 'recorded',
    thumbnailUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    videoUrl: '#',
  },
  {
    id: 6,
    title: '제로 트러스트 보안 모델: Linux 환경 구현 가이드',
    description: '제로 트러스트 아키텍처를 Linux 인프라에 성공적으로 적용하기 위한 단계별 구현 전략과 모범 사례를 공유합니다.',
    speaker: 'David Park, 보안 아키텍트',
    date: '2024년 1월 25일',
    time: '오후 2:00 - 3:30 (KST)',
    duration: '90분',
    attendees: 203,
    status: 'recorded',
    thumbnailUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    videoUrl: '#',
  },
];

const WebinarCard = ({ webinar }: { webinar: typeof webinars[0] }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-cyan-500 transition-all">
    <div className="relative">
      <img 
        src={webinar.thumbnailUrl} 
        alt={webinar.title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        {webinar.status === 'recorded' ? (
          <PlayIcon className="h-16 w-16 text-white opacity-80" />
        ) : (
          <CalendarIcon className="h-16 w-16 text-cyan-400 opacity-80" />
        )}
      </div>
      <div className="absolute top-4 left-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          webinar.status === 'upcoming' 
            ? 'bg-green-600 text-white' 
            : 'bg-gray-700 text-gray-300'
        }`}>
          {webinar.status === 'upcoming' ? '예정' : '녹화 완료'}
        </span>
      </div>
    </div>
    
    <div className="p-6">
      <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
        {webinar.title}
      </h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
        {webinar.description}
      </p>
      
      <div className="space-y-2 text-xs text-gray-500 mb-4">
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-4 w-4" />
          <span>{webinar.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <ClockIcon className="h-4 w-4" />
          <span>{webinar.time} ({webinar.duration})</span>
        </div>
        <div className="flex items-center gap-2">
          <UserGroupIcon className="h-4 w-4" />
          <span>{webinar.attendees}명 참여</span>
        </div>
      </div>
      
      <p className="text-sm text-gray-400 mb-4">
        <strong>발표자:</strong> {webinar.speaker}
      </p>
      
      <div className="flex gap-2">
        {webinar.status === 'upcoming' ? (
          <Link 
            href={webinar.registrationUrl}
            className="flex-1 bg-cyan-600 text-white px-4 py-2 rounded-md text-sm font-semibold text-center hover:bg-cyan-700 transition-colors"
          >
            등록하기
          </Link>
        ) : (
          <Link 
            href={webinar.videoUrl}
            className="flex-1 bg-gray-700 text-gray-300 px-4 py-2 rounded-md text-sm font-semibold text-center hover:bg-gray-600 transition-colors"
          >
            시청하기
          </Link>
        )}
        <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-md text-sm hover:border-gray-500 transition-colors">
          공유
        </button>
      </div>
    </div>
  </div>
);

const Page = () => {
  const upcomingWebinars = webinars.filter(w => w.status === 'upcoming');
  const recordedWebinars = webinars.filter(w => w.status === 'recorded');

  return (
    <div className="bg-gray-900 text-white">
      <main className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Sandfly 보안 웨비나</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Linux 보안 전문가들과 함께하는 실시간 학습 세션. 최신 위협 동향부터 실무 적용 방법까지 
            심도 있는 보안 지식을 전수받으세요.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mt-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-2xl font-bold text-cyan-400">{webinars.length}+</div>
              <div className="text-sm text-gray-400">총 웨비나</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-2xl font-bold text-cyan-400">1,500+</div>
              <div className="text-sm text-gray-400">총 참여자</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-2xl font-bold text-cyan-400">95%</div>
              <div className="text-sm text-gray-400">만족도</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-2xl font-bold text-cyan-400">50+</div>
              <div className="text-sm text-gray-400">전문가</div>
            </div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        {upcomingWebinars.length > 0 && (
          <section className="mt-20 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">다가오는 웨비나</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingWebinars.map((webinar) => (
                <WebinarCard key={webinar.id} webinar={webinar} />
              ))}
            </div>
          </section>
        )}

        {/* Recorded Webinars */}
        <section className="mt-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">지난 웨비나 다시보기</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recordedWebinars.map((webinar) => (
              <WebinarCard key={webinar.id} webinar={webinar} />
            ))}
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="mt-20 max-w-4xl mx-auto bg-gray-800 p-10 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-4">웨비나 알림 신청</h2>
          <p className="text-gray-300 mb-8">
            새로운 웨비나 일정과 보안 업데이트를 가장 먼저 받아보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="이메일 주소를 입력하세요"
              className="flex-1 px-4 py-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-cyan-500 focus:outline-none"
            />
            <button className="bg-cyan-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-cyan-700 transition-colors">
              알림 신청
            </button>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mt-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">웨비나 참여 혜택</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <UserGroupIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">전문가와의 직접 소통</h3>
              <p className="text-gray-400">
                업계 최고 전문가들과 실시간으로 질의응답하고 실무 경험을 공유받을 수 있습니다.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <PlayIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">실습 중심 학습</h3>
              <p className="text-gray-400">
                이론뿐만 아니라 실제 도구와 기법을 사용한 실습을 통해 즉시 적용 가능한 지식을 습득합니다.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CalendarIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">녹화본 무료 제공</h3>
              <p className="text-gray-400">
                모든 웨비나는 녹화되어 언제든지 다시 시청할 수 있으며, 참고 자료도 함께 제공됩니다.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-cyan-400 sm:text-4xl">
            보안 전문성을 한 단계 끌어올리세요
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            웨비나에서 학습한 기술을 Sandfly와 함께 실제 환경에서 적용해보세요.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/get-sandfly" 
              className="inline-block rounded-md bg-cyan-600 px-8 py-3 text-base font-semibold text-white shadow-md hover:bg-cyan-700"
            >
              무료 체험 시작
            </Link>
            <Link 
              href="/platform" 
              className="inline-block rounded-md bg-gray-800 px-8 py-3 text-base font-semibold text-gray-300 ring-1 ring-gray-300 hover:bg-gray-700"
            >
              기능 자세히 보기
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;