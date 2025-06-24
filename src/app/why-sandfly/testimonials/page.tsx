import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const testimonials = [
  {
    quote: 'BitPrime은 암호화폐 거래소 플랫폼을 공격으로부터 보호하기 위해 Sandfly를 사용합니다. Sandfly의 에이전트 없는 침입 탐지 시스템은 고객을 안전하게 보호하는 데 도움이 되는 추가적인 보안을 제공합니다.',
    author: 'Ross Carter-Brown',
    company: 'BitPrime Cryptocurrency Exchange',
    imageUrl: 'https://www.datocms-assets.com/56687/1637897182-bitprime-logo.jpg?auto=enhance&h=160&w=160',
  },
  {
    quote: 'Sandfly는 Linux 플랫폼에서 수천 가지의 침해 징후를 정확하고 신속하게 탐지하는 제가 본 첫 번째 제품입니다. 독특한 방법으로 수동으로는 불가능한 작업을 자동화합니다. 탐지에는 자동화가 핵심이며 Sandfly는 이 및 기타 요구 사항을 완벽하게 충족합니다. 조직에서 Linux를 사용하고 있다면 사이버 보안 툴셋의 일부가 되어야 합니다.',
    author: 'Ken Kleiner',
    company: 'University of Massachusetts',
    imageUrl: 'https://www.datocms-assets.com/56687/1637897245-umass-logo.jpg?auto=enhance&h=160&w=160',
  },
  {
    quote: 'Sandfly는 업계의 심각한 보안 격차인 Linux 플랫폼에서의 침입 탐지를 해결합니다. Sandfly의 가장 큰 장점은 에이전트가 없는 특성으로, 모든 Linux 환경에 다용도로 적용할 수 있는 애플리케이션입니다.',
    author: 'Salinda Lekamge',
    company: 'Tait Communications',
    imageUrl: 'https://www.datocms-assets.com/56687/1637897235-tait-logo.jpg?auto=enhance&h=160&w=160',
  },
  {
    quote: 'Sandfly는 마음의 평화를 제공하고 많은 시간들여 수행하던 수동 감사 및 검토 작업을 줄이거나 없애주었습니다.',
    author: 'Jonathan Love',
    company: 'Doubledot Media Ltd',
    imageUrl: 'https://www.datocms-assets.com/56687/1637897200-doubledot-logo.jpg?auto=enhance&h=160&w=160',
  },
  {
    quote: 'Webmad에서는 고객을 보호하기 위해 Sandfly를 선택했습니다. 에이전트 없는 설치는 시스템에 어떠한 변경도 필요하지 않았으며 리소스 영향 없이 즉각적인 결과를 제공했습니다.',
    author: 'Stephen Price',
    company: 'WebMad Hosting',
    imageUrl: 'https://www.datocms-assets.com/56687/1638776719-stephen-price.jpg?auto=enhance&faceindex=1&facepad=3&fit=facearea&h=160&mask=ellipse&usm=20&w=160',
  },
];

const Page = () => {
  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gray-800 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            고객 추천사
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
            전 세계 기업들이 Sandfly를 신뢰하여 가장 중요한 Linux 시스템을 보호하는 이유를 알아보세요.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.author} className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Image
                    className="h-20 w-20 rounded-full object-cover"
                    src={testimonial.imageUrl}
                    alt={`${testimonial.author} - ${testimonial.company}`}
                    width={80}
                    height={80}
                    unoptimized
                  />
                </div>
                <div className="ml-6">
                  <p className="text-lg text-gray-300">“{testimonial.quote}”</p>
                  <footer className="mt-6">
                    <p className="text-base font-medium text-white">{testimonial.author}</p>
                    <p className="text-base text-cyan-400">{testimonial.company}</p>
                  </footer>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-800">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Sandfly의 강력한 보안을 경험하세요.</span>
            <span className="block text-cyan-500">지금 바로 시작하세요.</span>
          </h2>
          <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
            <Link
              href="/get-sandfly"
              className="flex items-center justify-center bg-cyan-600 border border-transparent rounded-md py-3 px-8 text-base font-medium text-white hover:bg-cyan-700"
            >
              무료 평가판 시작하기
            </Link>
            <Link
              href="/platform"
              className="flex items-center justify-center bg-gray-200 border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-800 hover:bg-gray-300"
            >
              플랫폼 더 알아보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
