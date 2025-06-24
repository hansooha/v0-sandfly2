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
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Our Mission</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Sandfly creates a dedicated and reliable Linux security solution that works across all systems without endpoint agents or drama. Our company focuses on Linux security that is high performance, high stability, high compatibility, and low risk.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            With so many mission critical systems running Linux, we are exclusively focused on securing this platform with market-leading agentless technology. Sandfly protects Linux from the widest number of threats with no performance impacts and no downtime. We are entrusted globally on this mission.
          </p>
        </section>

        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Founder</h2>
          <div className="mt-10 max-w-lg mx-auto">
            <ProfileCard
              name="Craig Rowland"
              title="CEO / Founder"
              imageUrl="https://www.datocms-assets.com/56687/1747699470-craig-rowland-headshot.jpg?auto=enhance&faceindex=1&facepad=3&fit=facearea&h=160&mask=ellipse&usm=20&w=160"
              description="Craig Rowland is a cybersecurity entrepreneur with a track record of start-ups acquired by giants like Cisco Systems. Starting his career alongside U.S. Air Force Information Warfare Center veterans, he broke into computer networks professionally and developed intrusion detection and vulnerability scanning products. Currently, he serves as the CEO of Sandfly Security, a platform for agentless intrusion detection and incident response for Linux."
            />
          </div>
        </section>

        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Investors</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-12">
            <ProfileCard
              name="Ron Gula"
              title="President"
              company="Gula Tech Adventures"
              imageUrl="https://www.datocms-assets.com/56687/1721600045-ron-head-closeup.png?auto=enhance&faceindex=1&facepad=3&fit=facearea&h=160&mask=ellipse&usm=20&w=160"
              description="Ron is President of Gula Tech Adventures and co-Founder Tenable Network Security. He is actively involved with several dozen cyber and AI start-ups and nonprofit organizations."
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
              description="Chris Jagger founded Alt Ventures in 2019, after more than 15 years in company building, private investment, and fund management..."
            />
          </div>
        </section>

        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Advisory Board</h2>
          <div className="mt-10 max-w-lg mx-auto">
            <ProfileCard
              name="Rob Joyce"
              title="Former Head of Tailored Access Operations, NSA"
              imageUrl="https://www.datocms-assets.com/56687/1721601168-robjoyce_1658_2.jpg?auto=enhance&faceindex=1&facepad=3&fit=facearea&h=160&mask=ellipse&usm=20&w=160"
              description="Rob served over 34 years at the NSA, where he held roles including the head of Tailored Access Operations (TAO), the NSA hackers running operations to produce foreign intelligence..."
            />
          </div>
        </section>

      </main>
    </div>
  );
};

export default Page;

