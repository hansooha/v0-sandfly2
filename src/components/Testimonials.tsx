import React from 'react';

const Testimonials = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        {/* Logo Placeholder */}
        <div className="h-12 w-auto bg-gray-300 mx-auto rounded flex items-center justify-center">
            <p className="text-gray-500 text-sm">Company Logo</p>
        </div>
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              "Sandfly는 Linux 플랫폼에서 수천 가지 침해 흔적을 정확하고 빠르게 탐지하는 첫 번째 제품입니다. 
              독특한 방식으로 수동으로는 불가능한 작업을 자동화합니다. 탐지에서 자동화는 핵심이며, 
              Sandfly는 이 요구사항과 다른 요구사항들을 완전히 충족합니다. 
              조직에서 Linux를 사용한다면 이것은 사이버보안 툴셋의 일부가 되어야 합니다."
            </p>
          </blockquote>
          <figcaption className="mt-10">
            {/* Image Placeholder */}
            <div className="mx-auto h-10 w-10 rounded-full bg-sandfly-yellow" />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">보안 전문가</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">고객 추천사</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;