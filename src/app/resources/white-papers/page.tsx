'use client';

import React from 'react';
import Link from 'next/link';
import { DocumentTextIcon, ClockIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const whitePapers = [
  {
    id: 1,
    title: 'Linux 에이전트리스 보안의 미래',
    description: '기존 에이전트 기반 보안 솔루션의 한계를 분석하고, 에이전트리스 접근 방식이 Linux 환경에서 제공하는 혁신적인 보안 이점을 탐구합니다.',
    category: '기술 혁신',
    publishDate: '2024년 3월',
    readTime: '15분',
    downloadCount: '2,500+',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    id: 2,
    title: '클라우드 네이티브 환경의 보안 위협',
    description: 'Kubernetes, Docker 등 컨테이너 기반 환경에서 발생하는 새로운 보안 위협 유형과 대응 전략을 상세히 분석합니다.',
    category: '클라우드 보안',
    publishDate: '2024년 2월',
    readTime: '20분',
    downloadCount: '1,800+',
    imageUrl: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: false,
  },
  {
    id: 3,
    title: '사이버 보안 사고 대응 프레임워크',
    description: '효과적인 사이버 보안 사고 대응을 위한 체계적인 프레임워크와 실무진이 알아야 할 핵심 원칙들을 제시합니다.',
    category: '사고 대응',
    publishDate: '2024년 1월',
    readTime: '25분',
    downloadCount: '3,200+',
    imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: false,
  },
  {
    id: 4,
    title: 'Linux 포렌식 분석 가이드',
    description: 'Linux 시스템에서 발생한 보안 침해 사고에 대한 체계적인 포렌식 분석 방법론과 도구 활용법을 다룹니다.',
    category: '디지털 포렌식',
    publishDate: '2023년 12월',
    readTime: '30분',
    downloadCount: '2,100+',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: false,
  },
  {
    id: 5,
    title: '제로 트러스트 보안 아키텍처',
    description: '현대적 IT 환경에서 제로 트러스트 보안 모델의 구현 방안과 Linux 환경에서의 적용 사례를 분석합니다.',
    category: '보안 아키텍처',
    publishDate: '2023년 11월',
    readTime: '18분',
    downloadCount: '2,900+',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: false,
  },
  {
    id: 6,
    title: 'AI 기반 위협 탐지 시스템',
    description: '머신러닝과 인공지능 기술을 활용한 차세대 위협 탐지 시스템의 구축 방법과 효과를 살펴봅니다.',
    category: 'AI/ML 보안',
    publishDate: '2023년 10월',
    readTime: '22분',
    downloadCount: '1,600+',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: false,
  },
];

const categories = [
  '전체',
  '기술 혁신',
  '클라우드 보안',
  '사고 대응',
  '디지털 포렌식',
  '보안 아키텍처',
  'AI/ML 보안',
];

const Page = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('전체');
  
  const filteredPapers = selectedCategory === '전체' 
    ? whitePapers 
    : whitePapers.filter(paper => paper.category === selectedCategory);

  const featuredPaper = whitePapers.find(paper => paper.featured);
  const regularPapers = whitePapers.filter(paper => !paper.featured);

  return (
    <div className="bg-gray-900 text-white">
      <main className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <section className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <DocumentTextIcon className="h-12 w-12 text-cyan-400 mr-4" />
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">백서 & 기술 자료</h1>
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            사이버 보안 전문가들이 집필한 심층적인 기술 분석과 연구 자료를 통해 
            최신 보안 트렌드와 모범 사례를 알아보세요.
          </p>
        </section>

        {/* Category Filter */}
        <section className="mt-12 max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-cyan-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Paper */}
        {featuredPaper && selectedCategory === '전체' && (
          <section className="mt-16 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-cyan-400">추천 백서</h2>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPaper.imageUrl} 
                    alt={featuredPaper.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <span className="bg-cyan-900 text-cyan-400 px-3 py-1 rounded-full text-xs font-medium">
                    {featuredPaper.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-4 mb-4">
                    {featuredPaper.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {featuredPaper.description}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <ClockIcon className="h-4 w-4" />
                      {featuredPaper.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <ArrowDownTrayIcon className="h-4 w-4" />
                      {featuredPaper.downloadCount} 다운로드
                    </div>
                    <span>{featuredPaper.publishDate}</span>
                  </div>
                  <button className="bg-cyan-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-cyan-700 transition-colors">
                    PDF 다운로드
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* White Papers Grid */}
        <section className="mt-16 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">
            {selectedCategory === '전체' ? '모든 백서' : `${selectedCategory} 백서`}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPapers.map((paper) => (
              <div key={paper.id} className="bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-cyan-500 transition-all">
                <img 
                  src={paper.imageUrl} 
                  alt={paper.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-cyan-900 text-cyan-400 px-3 py-1 rounded-full text-xs font-medium">
                      {paper.category}
                    </span>
                    {paper.featured && (
                      <span className="bg-yellow-900 text-yellow-400 px-2 py-1 rounded text-xs font-medium">
                        추천
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                    {paper.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {paper.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <ClockIcon className="h-4 w-4" />
                      {paper.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <ArrowDownTrayIcon className="h-4 w-4" />
                      {paper.downloadCount}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{paper.publishDate}</span>
                    <button className="bg-cyan-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-cyan-700 transition-colors">
                      다운로드
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="mt-20 max-w-4xl mx-auto bg-gray-800 p-10 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">
            최신 보안 인사이트를 받아보세요
          </h2>
          <p className="text-gray-300 mb-8">
            새로운 백서와 기술 자료가 출시될 때마다 알림을 받으실 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="이메일 주소를 입력하세요"
              className="flex-1 px-4 py-3 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="bg-cyan-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-cyan-700 transition-colors">
              구독하기
            </button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-cyan-400 sm:text-4xl">
            더 자세한 정보가 필요하신가요?
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Sandfly 보안 솔루션에 대한 맞춤형 상담과 데모를 받아보세요.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact-us" 
              className="inline-block rounded-md bg-cyan-600 px-8 py-3 text-base font-semibold text-white shadow-md hover:bg-cyan-700"
            >
              전문가 상담 신청
            </Link>
            <Link 
              href="/resources/sandfly-university" 
              className="inline-block rounded-md bg-gray-800 px-8 py-3 text-base font-semibold text-gray-300 ring-1 ring-gray-300 hover:bg-gray-700"
            >
              교육 프로그램 보기
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;