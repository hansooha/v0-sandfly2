'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const [splashMessage, setSplashMessage] = useState('');

  return (
    <div className="bg-gray-900 text-white">
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js" />
      
      <main className="container mx-auto px-6 py-16">
        <section className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Linux 보호 준비가 되셨나요? 상담을 시작해보세요.</h1>
            <p className="mt-4 text-lg leading-8 text-gray-300">Linux 보안 전문가가 귀하의 요구사항을 논의하기 위해 연락드리겠습니다.</p>
          </div>

          {/* 성공 메시지 */}
          {showSplash && (
            <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg shadow-lg flex items-center">
              <div className="bg-green-500 rounded-full w-5 h-5 flex items-center justify-center mr-3">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span>{splashMessage}</span>
            </div>
          )}

          <div className="mt-12 bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Sandfly 상담요청</h2>
            
            <form 
              id="webform5644518000032612002" 
              name="WebToLeads5644518000032612002"
              onSubmit={async (e) => {
                e.preventDefault();
                
                // 필수 필드 확인
                const form = e.target as HTMLFormElement;
                const company = form['Company'].value.trim();
                const companyUrl = form['LEADCF5'].value.trim();
                const lastName = form['Last Name'].value.trim();
                const email = form['Email'].value.trim();
                const mobile = form['Mobile'].value.trim();
                const privacyChecked = form['privacyTool'].checked;

                if (!company || !companyUrl || !lastName || !email || !mobile) {
                  alert('모든 필수 필드를 입력해주세요.');
                  return;
                }

                // 이메일 유효성 검사
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                  alert('올바른 이메일 주소를 입력하십시오.');
                  return;
                }

                if (!privacyChecked) {
                  alert('개인정보 처리 방침에 동의해주세요.');
                  return;
                }

                setLoading(true);

                try {
                  const formData = new FormData(form);
                  const response = await fetch('https://crm.zoho.com/crm/WebToLeadForm', {
                    method: 'POST',
                    body: formData,
                  });

                  if (response.ok) {
                    const data = await response.json();
                    setSplashMessage(data.actionvalue || '양식이 성공적으로 제출되었습니다.');
                    setShowSplash(true);
                    form.reset();
                    
                    setTimeout(() => {
                      setShowSplash(false);
                    }, 5000);
                  } else {
                    throw new Error('제출 실패');
                  }
                } catch (error) {
                  alert('제출 중 오류가 발생했습니다. 다시 시도해주세요.');
                } finally {
                  setLoading(false);
                }
              }}
            >
              {/* Hidden Fields */}
              <input type="text" style={{ display: 'none' }} name="xnQsjsdp" value="eeb9d3b80a1c43c093d05b79ab5c0d94cbc54f2a04baa8d6402f5ab20d11830b" readOnly />
              <input type="hidden" name="zc_gad" id="zc_gad" value="" />
              <input type="text" style={{ display: 'none' }} name="xmIwtLD" value="7cc0f2c0a439c6bcb75c39742b77117f571d872b0a27420670215f674c28afc7ce3ed1b2f4fe0d77de785da283310f4b" readOnly />
              <input type="text" style={{ display: 'none' }} name="actionType" value="TGVhZHM=" readOnly />
              <input type="text" style={{ display: 'none' }} name="returnURL" value="null" readOnly />
              <input type="text" style={{ display: 'none' }} name="aG9uZXlwb3Q" value="" readOnly />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 기관명 */}
                <div>
                  <label htmlFor="Company" className="block text-sm font-medium text-gray-300">
                    기관명 <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="Company" 
                    name="Company" 
                    maxLength={200}
                    required
                    className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                  />
                </div>

                {/* 기관 홈페이지 */}
                <div>
                  <label htmlFor="LEADCF5" className="block text-sm font-medium text-gray-300">
                    기관 홈페이지 <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="LEADCF5" 
                    name="LEADCF5" 
                    maxLength={450}
                    required
                    placeholder="https://example.com"
                    className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                  />
                </div>

                {/* 성명 */}
                <div>
                  <label htmlFor="Last_Name" className="block text-sm font-medium text-gray-300">
                    성명 <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="Last_Name" 
                    name="Last Name" 
                    maxLength={80}
                    required
                    className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                  />
                </div>

                {/* 이메일 */}
                <div>
                  <label htmlFor="Email" className="block text-sm font-medium text-gray-300">
                    전자 메일 <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="Email" 
                    name="Email" 
                    maxLength={100}
                    required
                    className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                  />
                </div>

                {/* 휴대전화 */}
                <div className="md:col-span-2">
                  <label htmlFor="Mobile" className="block text-sm font-medium text-gray-300">
                    휴대전화 <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="Mobile" 
                    name="Mobile" 
                    maxLength={30}
                    required
                    placeholder="010-1234-5678"
                    className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* 개인정보 처리 동의 */}
              <div className="mt-6">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input 
                      id="privacyTool" 
                      name="privacyTool" 
                      type="checkbox"
                      required
                      className="focus:ring-cyan-500 h-4 w-4 text-cyan-600 border-gray-500 rounded bg-gray-700"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="privacyTool" className="font-medium text-gray-300">
                      본 양식으로 제출된 내용은 제안서 안내 및 기본 뉴스레터 전송의 용도이외에는 사용되지 않습니다.
                    </label>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs text-gray-500">
                모든 커뮤니케이션은 저희의 <Link href="/privacy-policy" className="underline hover:text-cyan-400">이용약관 및 개인정보 보호정책</Link>에 따릅니다
              </p>

              <div className="mt-8 flex gap-4">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? '제출 중...' : '제출'}
                </button>
                <button 
                  type="reset" 
                  className="inline-flex justify-center py-3 px-6 border border-gray-600 shadow-sm text-base font-medium rounded-md text-gray-300 bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  재설정
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Analytics Tracking */}
      <Script 
        id="wf_anal" 
        src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=3db2f93352b6be2ee05ddaab689e0a3e0eb7290c05815183d801b0b58962d4edf80d2c3e26fa08560bd34bfa66379e15gidebf7be21190af7675886510c2d9b01735b6a974ffd1b6a941e4392bd51d5931egid00b4bb4ec1c4b809c52b9dfeb908469aee4bc79e41423e0b28982fcabe247fdbgid12e5093d13c635ae557aed44656e9da4cfc82408127d22650f5536579333a5e9&tw=b2b8020cbeb82f9728739009910cd082729d9ea54d54f4266682dde442508c7e"
      />
    </div>
  );
};

export default Page;