import React from 'react';
import Link from 'next/link';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import { sandFlyBlogPosts } from '@/data/blog-posts';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const estimateReadTime = (summary: string) => {
  const words = summary.split(' ').length;
  const wordsPerMinute = 200;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes}분`;
};

const getAllCategories = () => {
  const categorySet = new Set<string>();
  sandFlyBlogPosts.forEach(post => {
    post.categories.forEach(category => categorySet.add(category));
  });
  return ['전체', ...Array.from(categorySet).sort()];
};

const categories = getAllCategories();

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
                  src={sandFlyBlogPosts[0].imageUrl || 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'} 
                  alt={sandFlyBlogPosts[0].titleKo}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="bg-cyan-900 text-cyan-400 px-3 py-1 rounded-full text-xs font-medium">
                    추천 포스트
                  </span>
                  <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">
                    {sandFlyBlogPosts[0].categoriesKo[0]}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">{sandFlyBlogPosts[0].titleKo}</h2>
                <p className="text-gray-300 mb-6 line-clamp-3">{sandFlyBlogPosts[0].summaryKo}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="h-4 w-4" />
                      {formatDate(sandFlyBlogPosts[0].publishDate)}
                    </div>
                    <div className="flex items-center gap-1">
                      <ClockIcon className="h-4 w-4" />
                      {sandFlyBlogPosts[0].readTime || estimateReadTime(sandFlyBlogPosts[0].summary)}분 읽기
                    </div>
                  </div>
                  <Link 
                    href={`/blog/${sandFlyBlogPosts[0].slug}`}
                    className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-semibold"
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
            {sandFlyBlogPosts.slice(1, 13).map((post, index) => (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-cyan-500 transition-all block"
              >
                <img 
                  src={post.imageUrl || 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'} 
                  alt={post.titleKo}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    {post.categoriesKo.slice(0, 2).map((category, idx) => (
                      <span key={idx} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                        {category}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                    {post.titleKo}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {post.summaryKo}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="h-3 w-3" />
                        {formatDate(post.publishDate)}
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="h-3 w-3" />
                        {post.readTime || estimateReadTime(post.summary)}분
                      </div>
                    </div>
                    <span className="text-cyan-400 hover:text-cyan-300 font-medium">
                      읽기 →
                    </span>
                  </div>
                </div>
              </Link>
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