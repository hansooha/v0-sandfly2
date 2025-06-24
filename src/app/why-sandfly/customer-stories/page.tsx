import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    quote: 'BitPrime uses Sandfly to help protect our cryptocurrency exchange platform against attack. Sandfly’s agentless intrusion detection system gives us extra security to help keep our customers safe.',
    author: 'Ross Carter-Brown',
    company: 'BitPrime Cryptocurrency Exchange',
    imageUrl: 'https://www.datocms-assets.com/56687/1637897182-bitprime-logo.jpg?auto=enhance&h=160&w=160',
  },
  {
    quote: 'Sandfly is the first product I’ve seen that accurately and quickly detects thousands of signs of compromise on the Linux platform. Its unique method automates tasks which would be manually impossible. Automation is key with detection, and Sandfly completely fits this and other requirements. If your organization is using Linux, this should be part of your cybersecurity toolset.',
    author: 'Ken Kleiner',
    company: 'University of Massachusetts',
    imageUrl: 'https://www.datocms-assets.com/56687/1637897245-umass-logo.jpg?auto=enhance&h=160&w=160',
  },
  {
    quote: 'Sandfly addresses a serious security gap in the industry: Intrusion detection on Linux platforms. The best part of Sandfly is its agentless nature, making it a versatile application for any Linux environment.',
    author: 'Salinda Lekamge',
    company: 'Tait Communications',
    imageUrl: 'https://www.datocms-assets.com/56687/1637897235-tait-logo.jpg?auto=enhance&h=160&w=160',
  },
  {
    quote: 'Sandfly provides peace of mind and has reduced or eliminated many of the manual auditing and review tasks that were costing us a lot of time.',
    author: 'Jonathan Love',
    company: 'Doubledot Media Ltd',
    imageUrl: 'https://www.datocms-assets.com/56687/1637897200-doubledot-logo.jpg?auto=enhance&h=160&w=160',
  },
  {
    quote: 'At Webmad we chose Sandfly to protect our clients. The agentless install didn’t require any changes on our systems and gave us immediate results with no resource impacts.',
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
                <p className="mt-6 text-lg leading-8 text-gray-300">“{testimonial.quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
