import Link from 'next/link';

const companyLinks = [
  { name: '회사 소개', href: '/company/about-us', description: '저희의 사명, 팀, 투자자에 대해 자세히 알아보세요.' },
  { name: '채용', href: '/company/careers', description: '저희 팀에 합류하여 Linux 세계를 안전하게 만드는 데 도움을 주세요.' },
  { name: '뉴스룸', href: '/company/newsroom', description: 'Sandfly의 최신 뉴스와 보도자료를 읽어보세요.' },
  { name: '문의하기', href: '/company/contact-us', description: '모든 문의사항에 대해 저희 팀에 연락해 주세요.' },
];

export default function Page() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <main className="container mx-auto px-6 py-16">
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">회사 정보</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Sandfly Security, 저희의 사명, 그리고 여러분이 저희의 여정에 어떻게 참여할 수 있는지에 대해 자세히 알아보세요. 저희 회사 정보, 채용 기회, 최신 뉴스를 탐색해보세요.
          </p>
        </section>

        <section className="mt-16">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {companyLinks.map((link) => (
              <Link href={link.href} key={link.name} className="block p-8 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-colors">
                <h2 className="text-2xl font-bold text-sandfly-yellow mb-2">{link.name}</h2>
                <p className="text-gray-400">{link.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
