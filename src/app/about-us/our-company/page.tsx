import React from 'react';
import Image from 'next/image';

const ProfileCard = ({ name, title, company, imageUrl, description }: { name: string; title: string; company?: string; imageUrl: string; description: string; }) => (
  <div className="text-center">
    <Image src={imageUrl} alt={name} width={160} height={160} className="mx-auto rounded-full" />
    <h3 className="mt-6 text-xl font-semibold text-white">{name}</h3>
    {company && <p className="text-base font-semibold text-gray-400">{company}</p>}
    <p className="text-sm text-gray-500">{title}</p>
    <p className="mt-2 text-base text-gray-300">{description}</p>
  </div>
);

const Page = () => {
  return (
    <div className="bg-gray-900 text-white">
      <main className="container mx-auto px-6 py-16">
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">우리의 사명</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Sandfly는 엔드포인트 에이전트나 복잡함 없이 모든 시스템에서 작동하는 전용적이고 신뢰할 수 있는 Linux 보안 솔루션을 만듭니다. 우리 회사는 고성능, 고안정성, 고호환성, 저위험의 Linux 보안에 집중합니다.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            많은 미션 크리티컬 시스템이 Linux에서 실행되고 있는 가운데, 우리는 시장을 선도하는 에이전트리스 기술로 이 플랫폼을 보호하는 데 전념하고 있습니다. Sandfly는 성능 영향과 다운타임 없이 가장 광범위한 위협으로부터 Linux를 보호합니다. 우리는 이 사명을 전 세계적으로 신뢰받고 있습니다.
          </p>
        </section>

        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">창립자</h2>
          <div className="mt-10 max-w-lg mx-auto">
            <ProfileCard
              name="Craig Rowland"
              title="CEO / 창립자"
              imageUrl="https://www.datocms-assets.com/56687/1747699470-craig-rowland-headshot.jpg?auto=enhance&faceindex=1&facepad=3&fit=facearea&h=160&mask=ellipse&usm=20&w=160"
              description="Craig Rowland는 Cisco Systems와 같은 대기업에 인수된 스타트업 경력을 가진 사이버보안 기업가입니다. 미 공군 정보전 센터 베테랑들과 함께 경력을 시작하여 전문적으로 컴퓨터 네트워크에 침입하고 침입 탐지 및 취약점 스캐닝 제품을 개발했습니다. 현재 Linux용 에이전트리스 침입 탐지 및 사고 대응 플랫폼인 Sandfly Security의 CEO로 재직하고 있습니다."
            />
          </div>
        </section>

        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">투자자</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-12">
            <ProfileCard
              name="Ron Gula"
              title="President"
              company="Gula Tech Adventures"
              imageUrl="https://www.datocms-assets.com/56687/1721600045-ron-head-closeup.png?auto=enhance&faceindex=1&facepad=3&fit=facearea&h=160&mask=ellipse&usm=20&w=160"
              description="Ron은 Gula Tech Adventures의 사장이자 Tenable Network Security의 공동 창립자입니다. 그는 수십 개의 사이버 및 AI 스타트업과 비영리 조직에 적극적으로 참여하고 있습니다."
            />
            <ProfileCard
              name="Ken Elefant"
              title="Partner"
              company="Sorenson Capital"
              imageUrl="https://www.datocms-assets.com/56687/1721600538-bx3i3039edit-edited.png?auto=enhance&faceindex=1&facepad=3&fit=facearea&h=160&mask=ellipse&usm=20&w=160"
              description="Ken Elefant is a partner at Sorenson Capital, where he co-founded the firm’s Ventures practice in 2017. He invests primarily in cybersecurity..."
            />
            <ProfileCard
              name="Chris Jagger"
              title="Founder"
              company="Alt Ventures"
              imageUrl="https://www.datocms-assets.com/56687/1721600795-chris-jagger.jpeg?auto=enhance&faceindex=1&facepad=3&fit=facearea&h=160&mask=ellipse&usm=20&w=160"
              description="Chris Jagger는 회사 설립, 사모투자, 펀드 관리 분야에서 15년 이상의 경험을 쌓은 후 2019년 Alt Ventures를 설립했습니다."
            />
          </div>
        </section>

        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">자문위원회</h2>
          <div className="mt-10 max-w-lg mx-auto">
            <ProfileCard
              name="Rob Joyce"
              title="전 NSA TAO 국장"
              imageUrl="https://www.datocms-assets.com/56687/1721601168-robjoyce_1658_2.jpg?auto=enhance&faceindex=1&facepad=3&fit=facearea&h=160&mask=ellipse&usm=20&w=160"
              description="Rob은 NSA에서 34년 이상 근무하며 해외 정보 수집 작전을 수행하는 NSA 해커 조직인 TAO(Tailored Access Operations)의 국장을 포함한 여러 역할을 맡았습니다."
            />
          </div>
        </section>

      </main>
    </div>
  );
};

export default Page;

