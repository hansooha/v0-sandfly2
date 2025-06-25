'use client';

import React from 'react';
import Link from 'next/link';
import { footerNav, socialNav, legalNav } from '@/lib/navigation';

// Sandfly Logo
const Logo = () => (
  <Link href="/" className="flex items-center">
    <img 
      src="/images/Sandfly Security_idmRQwxQGp_1.svg" 
      alt="Sandfly Security" 
      width={164} 
      height={21}
      className="h-8 w-auto"
    />
  </Link>
);

const Footer = () => {
  const navTitles = ['플랫폼', '회사소개', '리소스'];

  return (
    <footer className="bg-gray-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
푸터
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Logo />
            <p className="text-sm leading-6 text-gray-300">
Linux를 위한 에이전트 없는 EDR 및 클라우드 보안.
            </p>
            <div className="flex space-x-6">
              {socialNav.slice(1).map((item) => (
                <a key={item.title} href={item.url} className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">{item.title}</span>
                  {/* Placeholder for social icons */}
                  <div className="h-6 w-6 border rounded-full flex items-center justify-center">
                    {item.title.charAt(0)}
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">{navTitles[0]}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNav[0].map((item) => (
                    <li key={item.id}>
                      <Link href={item.path} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">{navTitles[1]}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNav[1].map((item) => (
                    <li key={item.id}>
                      <Link href={item.path} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.title.replace(' [Alias]', '')}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
               <div>
                <h3 className="text-sm font-semibold leading-6 text-white">{navTitles[2]}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNav[2].map((item) => (
                    <li key={item.id}>
                      <Link href={item.path} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">뉴스레터 구독</h3>
            <p className="mt-2 text-sm leading-6 text-gray-300">최신 뉴스, 글, 리소스를 매주 이메일로 받아보세요.</p>
          </div>
          <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
            <label htmlFor="email-address" className="sr-only">이메일 주소</label>
            <input type="email" name="email-address" id="email-address" autoComplete="email" required className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full" placeholder="이메일 주소 입력" />
            <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
              <button type="submit" className="flex w-full items-center justify-center rounded-md bg-sandfly-yellow px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-sandfly-yellow-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sandfly-yellow">구독</button>
            </div>
          </form>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-4 md:order-2">
            {legalNav.map((item) => (
              <Link key={item.id} href={item.url} className="text-xs leading-5 text-gray-400 hover:text-white">
                {item.title}
              </Link>
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
&copy; {new Date().getFullYear()} Sandfly Security. 모든 권리 보유.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


