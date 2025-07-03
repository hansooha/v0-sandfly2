import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CalendarIcon, ClockIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { sandFlyBlogPosts } from '@/data/blog-posts';
import { marked } from 'marked';



interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export async function generateStaticParams() {
  return sandFlyBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const resolvedParams = await params;
  const post = sandFlyBlogPosts.find(p => p.slug === resolvedParams.slug);
  
  if (!post) {
    notFound();
  }

  let styledHtml = '';
  if (post.contentKo) {
    const rawHtml = await marked.parse(post.contentKo);
    if (rawHtml) {
      styledHtml = rawHtml
        .replace(/<h2>/g, '<h2 class="text-3xl font-bold text-white mt-12 mb-6">')
        .replace(/<h3>/g, '<h3 class="text-2xl font-semibold text-white mt-10 mb-6">')
        .replace(/<h4>/g, '<h4 class="text-xl font-semibold text-white mt-8 mb-4">');
    }
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/resources/blog"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            블로그로 돌아가기
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          {/* Categories */}
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            {post.categoriesKo.map((category, index) => (
              <span 
                key={index}
                className="bg-cyan-900 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium"
              >
                {category}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.titleKo}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-6 text-gray-400 text-sm mb-8">
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4" />
              {formatDate(post.publishDate)}
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4" />
              {post.readTime}분 읽기
            </div>
            <div>
              {post.author}
            </div>
          </div>

          {/* Featured Image */}
          {post.imageUrl && (
            <div className="mb-8">
              <img 
                src={post.imageUrl} 
                alt={post.titleKo}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>
          )}

          {/* Summary */}
          <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-cyan-400 mb-8">
            <h2 className="text-lg font-semibold text-cyan-400 mb-3">요약</h2>
            <p className="text-gray-300 leading-relaxed">
              {post.summaryKo}
            </p>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          {post.contentKo ? (
            <div
              dangerouslySetInnerHTML={{ __html: styledHtml }}
            />
          ) : (
            <div className="text-gray-300 leading-relaxed">
              <p className="mb-6">
                이 기사에 대한 자세한 내용은 원문을 참조해주세요.
              </p>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-3">주요 내용</h3>
                <p className="text-gray-300 mb-4">{post.summaryKo}</p>
              </div>
            </div>
          )}
        </article>

        {/* Original Article Link */}
        <div className="mt-12 p-6 bg-gray-800 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">원문 기사 보기</h3>
              <p className="text-gray-400 text-sm">
                Sandfly Security 공식 블로그에서 영문 원문을 확인하세요.
              </p>
            </div>
            <a 
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cyan-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-cyan-700 transition-colors"
            >
              원문 읽기 →
            </a>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8">관련 기사</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {sandFlyBlogPosts
              .filter(p => p.slug !== post.slug && p.categoriesKo.some(cat => post.categoriesKo.includes(cat)))
              .slice(0, 2)
              .map((relatedPost) => (
                <Link 
                  key={relatedPost.slug}
                  href={`/resources/blog/${relatedPost.slug}`}
                  className="bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-cyan-500 transition-all block"
                >
                  <img 
                    src={relatedPost.imageUrl || 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'} 
                    alt={relatedPost.titleKo}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                        {relatedPost.categoriesKo[0]}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                      {relatedPost.titleKo}
                    </h4>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {relatedPost.summaryKo}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gray-800 p-10 rounded-lg">
          <h3 className="text-3xl font-bold text-cyan-400 mb-4">
            Sandfly 보안 솔루션 체험
          </h3>
          <p className="text-gray-300 mb-8">
            이 기사에서 소개한 보안 기술들을 실제로 경험해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/get-sandfly" 
              className="inline-block rounded-md bg-cyan-600 px-8 py-3 text-base font-semibold text-white shadow-md hover:bg-cyan-700 transition-colors"
            >
              무료 체험 시작
            </Link>
            <Link 
              href="/platform" 
              className="inline-block rounded-md bg-gray-700 px-8 py-3 text-base font-semibold text-gray-300 ring-1 ring-gray-600 hover:bg-gray-600 transition-colors"
            >
              기능 자세히 보기
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}