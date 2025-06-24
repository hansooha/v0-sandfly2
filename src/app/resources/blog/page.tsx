import React from 'react';
import Link from 'next/link';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';

const blogPosts = [
  {
    id: 1,
    title: 'Linux 환경에서 에이전트리스 보안의 중요성',
    excerpt: 'Linux 서버에 에이전트를 설치하지 않고도 강력한 보안 모니터링을 구현하는 방법과 그 이점에 대해 알아봅니다.',
    category: '보안 기술',
    date: '2024년 3월 15일',
    readTime: '5분',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    author: 'Sandfly 보안팀',
  },
  {
    id: 2,
    title: '클라우드 네이티브 환경에서의 컨테이너 보안',
    excerpt: 'Kubernetes와 Docker 환경에서 발생할 수 있는 보안 위협과 이를 탐지하고 대응하는 효과적인 방법을 소개합니다.',
    category: '클라우드 보안',
    date: '2024년 3월 10일',
    readTime: '7분',
    imageUrl: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    author: 'Sandfly 보안팀',
  },
  {
    id: 3,
    title: 'MITRE ATT&CK 프레임워크와 Linux 위협 탐지',
    excerpt: 'MITRE ATT&CK 프레임워크를 활용하여 Linux 환경에서 발생하는 고급 지속 위협(APT)을 탐지하고 분석하는 방법을 설명합니다.',
    category: '위협 인텔리전스',
    date: '2024년 3월 5일',
    readTime: '6분',
    imageUrl: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    author: 'Sandfly 보안팀',
  },
  {
    id: 4,
    title: 'Linux 루트킷 탐지 및 대응 전략',
    excerpt: '시스템 깊숙이 숨어있는 루트킷을 탐지하고 제거하는 고급 기법과 예방 방법에 대해 상세히 다룹니다.',
    category: '멀웨어 분석',
    date: '2024년 2월 28일',
    readTime: '8분',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    author: 'Sandfly 보안팀',
  },
  {
    id: 5,
    title: '실시간 사고 대응을 위한 포렌식 데이터 수집',
    excerpt: '사이버 인시던트 발생 시 신속하고 정확한 포렌식 데이터 수집을 통해 효과적인 사고 대응을 수행하는 방법을 알아봅니다.',
    category: '사고 대응',
    date: '2024년 2월 22일',
    readTime: '6분',
    imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    author: 'Sandfly 보안팀',
  },
  {
    id: 6,
    title: '제로 트러스트 아키텍처에서의 Linux 보안',
    excerpt: '제로 트러스트 보안 모델을 Linux 환경에 적용할 때 고려해야 할 핵심 요소들과 구현 전략을 제시합니다.',
    category: '보안 아키텍처',
    date: '2024년 2월 15일',
    readTime: '7분',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    author: 'Sandfly 보안팀',
  },
];

const categories = ['전체', '보안 기술', '클라우드 보안', '위협 인텔리전스', '멀웨어 분석', '사고 대응', '보안 아키텍처'];

const Page = () => {
  return (
    <div className="bg-gray-900 text-white">
      <main className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Sandfly 보안 블로그</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Linux 보안, 위협 탐지, 사고 대응에 관한 최신 인사이트와 전문 지식을 공유합니다.
          </p>
        </section>

        {/* Category Filter */}
        <section className="mt-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === '전체'
                  ? 'bg-cyan-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </section>

        {/* Featured Post */}
        <section className="mt-16 max-w-6xl mx-auto">
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={blogPosts[0].imageUrl} 
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="bg-cyan-900 text-cyan-400 px-3 py-1 rounded-full text-xs font-medium">
                    추천 포스트
                  </span>
                  <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">
                    {blogPosts[0].category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-300 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="h-4 w-4" />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center gap-1">
                      <ClockIcon className="h-4 w-4" />
                      {blogPosts[0].readTime} 읽기
                    </div>
                  </div>
                  <Link 
                    href={`/resources/blog/${blogPosts[0].id}`}
                    className="text-cyan-400 hover:text-cyan-300 font-semibold"
                  >
                    자세히 읽기 →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="mt-16 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">최신 포스트</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-cyan-500 transition-all">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="h-3 w-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <Link 
                      href={`/resources/blog/${post.id}`}
                      className="text-cyan-400 hover:text-cyan-300 font-medium"
                    >
                      읽기
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="mt-20 max-w-4xl mx-auto bg-gray-800 p-10 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-4">보안 인사이트 뉴스레터</h2>
          <p className="text-gray-300 mb-8">
            Linux 보안과 위협 탐지에 관한 최신 정보와 전문가 팁을 이메일로 받아보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="이메일 주소를 입력하세요"
              className="flex-1 px-4 py-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-cyan-500 focus:outline-none"
            />
            <button className="bg-cyan-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-cyan-700 transition-colors">
              구독하기
            </button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-cyan-400 sm:text-4xl">
            Sandfly 보안 솔루션 체험
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            블로그에서 소개한 보안 기술들을 실제로 경험해보세요.
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