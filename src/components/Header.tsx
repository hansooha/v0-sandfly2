'use client';

import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import { Dialog, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { mainNav } from '@/lib/navigation';

// Sandfly Logo
const Logo = () => (
  <Link href="/" className="flex items-center">
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-sandfly-yellow rounded-full flex items-center justify-center">
        <span className="text-black font-bold text-lg">S</span>
      </div>
      <span className="text-xl font-bold text-white">Sandfly</span>
    </div>
  </Link>
);

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black sticky top-0 z-50 border-b border-gray-800">
      {/* 첫 번째 줄: Under Attack, Support, Contact Us */}
      <div className="hidden lg:block border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-end py-2 space-x-4 text-sm">
            <Link href="/under-attack" className="font-semibold leading-6 text-red-400 hover:text-red-300">
              공격을 받고 있나요?
            </Link>
            <Link href="/support" className="font-semibold leading-6 text-white hover:text-sandfly-yellow">
              지원
            </Link>
            <Link href="/contact-us" className="font-semibold leading-6 text-white hover:text-sandfly-yellow">
              내가 연락하기
            </Link>
          </div>
        </div>
      </div>

      {/* 두 번째 줄: 로고, 메인 메뉴, Sandfly 시작하기 */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">메인 메뉴 열기</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {mainNav.map((item) => (
            <Popover key={item.id} className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white outline-none hover:text-sandfly-yellow">
                {item.title.replace(' [Alias]', '')}
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-gray-900 shadow-lg ring-1 ring-gray-700">
                  <div className="p-4">
                    {item.children.map((child) => (
                      <div
                        key={child.id}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-800"
                      >
                        <div className="flex-auto">
                          <Link href={child.path} className="block font-semibold text-white hover:text-sandfly-yellow">
                            {child.title}
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-gray-400">{child.excerpt}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          ))}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/get-sandfly" className="rounded-md bg-sandfly-yellow px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sandfly-yellow">
            Sandfly 시작하기
          </Link>
        </div>
      </nav>

      {/* 모바일 메뉴 */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-700">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">메뉴 닫기</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-700">
              <div className="space-y-2 py-6">
                {mainNav.map((item) => (
                    <div key={item.id} className="py-2">
                        <p className='px-3 text-base font-semibold leading-7 text-gray-400'>{item.title.replace(' [Alias]', '')}</p>
                        <div className="mt-2 space-y-1">
                            {item.children.map((child) => (
                                <Link
                                    key={child.id}
                                    href={child.path}
                                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-gray-800 hover:text-sandfly-yellow"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {child.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
              </div>
              <div className="py-6 space-y-2">
                <Link
                  href="/under-attack"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-red-400 hover:bg-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  공격을 받고 있나요?
                </Link>
                <Link
                  href="/support"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  지원
                </Link>
                <Link
                  href="/contact-us"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  내가 연락하기
                </Link>
                <Link
                  href="/get-sandfly"
                  className="mt-2 -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-black bg-sandfly-yellow hover:bg-yellow-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sandfly 시작하기
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;