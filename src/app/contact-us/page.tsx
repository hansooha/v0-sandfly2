import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="bg-gray-900 text-white">
      <main className="container mx-auto px-6 py-16">
        <section className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Linux 보호 준비가 되셨나요? 상담을 시작해보세요.</h1>
            <p className="mt-4 text-lg leading-8 text-gray-300">Linux 보안 전문가가 귀하의 요구사항을 논의하기 위해 연락드리겠습니다.</p>
          </div>

          <form className="mt-12 bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-300">문의 목적</label>
                <select id="reason" name="reason" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm">
                  <option>구매 관심</option>
                  <option>언론/미디어 문의</option>
                  <option>파트너십</option>
                  <option>기타</option>
                </select>
              </div>
              <div></div> {/* Spacer */}
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-300">이름</label>
                <input type="text" name="first-name" id="first-name" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-300">성</label>
                <input type="text" name="last-name" id="last-name" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">이메일</label>
                <input type="email" name="email" id="email" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300">회사명</label>
                <input type="text" name="company" id="company" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300">전화번호</label>
                <input type="tel" name="phone" id="phone" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">메시지</label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"></textarea>
              </div>
               <div className="md:col-span-2">
                <label htmlFor="how-did-you-hear" className="block text-sm font-medium text-gray-300">저희를 어떻게 알게 되셨나요?</label>
                <input type="text" name="how-did-you-hear" id="how-did-you-hear" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm" />
              </div>
            </div>
            <div className="mt-6 space-y-4">
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input id="personal-use" name="personal-use" type="checkbox" className="focus:ring-cyan-500 h-4 w-4 text-cyan-600 border-gray-500 rounded bg-gray-700" />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="personal-use" className="font-medium text-gray-300">Sandfly Security를 개인 용도로 사용할 예정입니다</label>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input id="marketing-consent" name="marketing-consent" type="checkbox" className="focus:ring-cyan-500 h-4 w-4 text-cyan-600 border-gray-500 rounded bg-gray-700" />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="marketing-consent" className="font-medium text-gray-300">Sandfly Security로부터 마케팅 커뮤니케이션을 받는 것에 동의합니다.</label>
                    </div>
                </div>
            </div>
            <p className="mt-4 text-xs text-gray-500">모든 커뮤니케이션은 저희의 <Link href="/privacy-policy" className="underline hover:text-cyan-400">이용약관 및 개인정보 보호정책</Link>에 따릅니다</p>
            <div className="mt-8 text-right">
              <button type="submit" className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                제출
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Page;
