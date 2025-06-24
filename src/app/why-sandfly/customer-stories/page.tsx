import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    quote: 'BitPrime은 암호화폐 거래소 플랫폼을 공격으로부터 보호하기 위해 Sandfly를 사용하고 있습니다. Sandfly의 에이전트리스 침입 탐지 시스템은 고객을 안전하게 지키기 위한 추가적인 보안을 제공합니다.',
    author: 'Ross Carter-Brown',
    company: 'BitPrime Cryptocurrency Exchange',
    imageUrl: 'https://www.datocms-assets.com/56687/1637897182-bitprime-logo.jpg?auto=enhance&h=160&w=160',
  },
  {
    quote: 'Sandfly는 Linux 플랫폼에서 수천 가지 침해 징후를 정확하고 빠르게 탐지하는 것을 제가 본 첫 번째 제품입니다. 고유한 방법론으로 수동으로는 불가능한 작업을 자동화합니다. 탐지에서 자동화가 핵심이며, Sandfly는 이를 완전히 충족하고 다른 요구사항도 만족합니다. 조직에서 Linux를 사용한다면 이것은 사이버보안 도구 세트의 일부가 되어야 합니다.',
    author: 'Ken Kleiner',
    company: 'University of Massachusetts',
    imageUrl: 'https://www.datocms-assets.com/56687/1637897245-umass-logo.jpg?auto=enhance&h=160&w=160',
  },
  {
    quote: 'Sandfly는 업계의 심각한 보안 공백인 Linux 플랫폼의 침입 탐지 문제를 해결합니다. Sandfly의 가장 좋은 점은 에이전트리스 특성으로, 모든 Linux 환경에서 다용도 애플리케이션이 될 수 있다는 것입니다.',
    author: 'Salinda Lekamge',
    company: 'Tait Communications',
    imageUrl: 'https://www.datocms-assets.com/56687/1637897235-tait-logo.jpg?auto=enhance&h=160&w=160',
  },
  {
    quote: 'Sandfly는 마음의 평안을 제공하며 많은 시간을 소요했던 수동 감사 및 검토 작업을 줄이거나 제거했습니다.',
    author: 'Jonathan Love',
    company: 'Doubledot Media Ltd',
    imageUrl: 'https://www.datocms-assets.com/56687/1637897200-doubledot-logo.jpg?auto=enhance&h=160&w=160',
  },
  {
    quote: 'Webmad에서는 고객을 보호하기 위해 Sandfly를 선택했습니다. 에이전트리스 설치는 시스템 변경이 전혀 필요하지 않았으며 리소스 영향 없이 즉시 결과를 제공했습니다.',
    author: 'Stephen Price',
    company: 'WebMad Hosting',
    imageUrl: 'https://www.datocms-assets.com/56687/1638776719-stephen-price.jpg?auto=enhance&faceindex=1&facepad=3&fit=facearea&h=160&mask=ellipse&usm=20&w=160',
  },
];

const TestimonialsPage = () => {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            고객 추천사
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-300">
            Sandfly Security에 대한 고객들의 평가를 들어보세요.
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root sm:mt-24">
          <div className="-my-12 divide-y divide-gray-700">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="py-12">
                <div className="flex items-center gap-x-4">
                  <Image
                    className="h-16 w-16 rounded-full object-cover"
                    src={testimonial.imageUrl}
                    alt=""
                    width={64}
                    height={64}
                    unoptimized
                  />
                  <div>
                    <div className="text-base font-semibold leading-7 tracking-tight text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm leading-6 text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
                <p className="mt-6 text-lg leading-8 text-gray-300">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;