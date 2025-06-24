import Image from 'next/image';

export default function Page() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">우리의 사명</h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto">
          Sandfly는 엔드포인트 에이전트나 복잡함 없이 모든 시스템에서 작동하는 전용의 신뢰할 수 있는 Linux 보안 솔루션을 만듭니다. 우리 회사는 고성능, 고안정성, 고호환성 및 저위험의 Linux 보안에 집중합니다.
        </p>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Sandfly 소개</h2>
          <p className="text-gray-400 leading-relaxed">
            수많은 미션 크리티컬 시스템이 Linux에서 실행되고 있는 상황에서, 우리는 시장을 선도하는 에이전트리스 기술로 이 플랫폼을 보호하는 데 전적으로 집중하고 있습니다. Sandfly는 성능 영향이나 다운타임 없이 가장 광범위한 위협으로부터 Linux를 보호합니다. 우리는 이 사명에 대해 전 세계적으로 신뢰받고 있습니다.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">창립자</h2>
          <div className="flex flex-col items-center">
            <Image
              src="https://www.datocms-assets.com/56687/1747699470-craig-rowland-headshot.jpg?auto=enhance&faceindex=1&facepad=3&fit=facearea&h=160&mask=ellipse&usm=20&w=160"
              alt="Craig Rowland"
              width={160}
              height={160}
              className="rounded-full mb-4"
            />
            <h3 className="text-2xl font-semibold">Craig Rowland</h3>
            <p className="text-gray-500 mb-4">CEO / 창립자</p>
            <p className="text-gray-400 max-w-2xl">
              Craig Rowland는 Cisco Systems와 같은 거대 기업에 인수된 스타트업의 실적을 가진 사이버보안 기업가입니다. 미 공군 정보전 센터 베테랑들과 함께 경력을 시작하여 전문적으로 컴퓨터 네트워크에 침투하고 침입 탐지 및 취약점 스캐닝 제품을 개발했습니다. 현재 그는 Linux용 에이전트리스 침입 탐지 및 사고 대응 플랫폼인 Sandfly Security의 CEO로 활동하고 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">투자자</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <Image src="https://www.datocms-assets.com/56687/1721600045-ron-head-closeup.png?auto=enhance&faceindex=1&facepad=3&fit=facearea&h=160&mask=ellipse&usm=20&w=160" alt="Ron Gula" width={160} height={160} className="rounded-full mb-4" />
              <h3 className="text-xl font-semibold">Ron Gula</h3>
              <p className="text-gray-500">Gula Tech Adventures</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="https://www.datocms-assets.com/56687/1721600538-bx3i3039edit-edited.png?auto=enhance&faceindex=1&facepad=3&fit=facearea&h=160&mask=ellipse&usm=20&w=160" alt="Ken Elefant" width={160} height={160} className="rounded-full mb-4" />
              <h3 className="text-xl font-semibold">Ken Elefant</h3>
              <p className="text-gray-500">Sorenson Capital</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="https://www.datocms-assets.com/56687/1721600795-chris-jagger.jpeg?auto=enhance&faceindex=1&facepad=3&fit=facearea&h=160&mask=ellipse&usm=20&w=160" alt="Chris Jagger" width={160} height={160} className="rounded-full mb-4" />
              <h3 className="text-xl font-semibold">Chris Jagger</h3>
              <p className="text-gray-500">Alt Ventures</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">자문위원회</h2>
          <div className="flex flex-col items-center">
            <Image
              src="https://www.datocms-assets.com/56687/1721601168-robjoyce_1658_2.jpg?auto=enhance&faceindex=1&facepad=3&fit=facearea&h=160&mask=ellipse&usm=20&w=160"
              alt="Rob Joyce"
              width={160}
              height={160}
              className="rounded-full mb-4"
            />
            <h3 className="text-2xl font-semibold">Rob Joyce</h3>
            <p className="text-gray-500 mb-4">전 NSA 맞춤형 접근 작전부(TAO) 책임자</p>
            <p className="text-gray-400 max-w-2xl">
              Rob은 NSA에서 34년 이상 근무하며 해외 정보 수집을 위한 작전을 수행하는 NSA 해커들인 맞춤형 접근 작전부(TAO)의 책임자를 포함한 여러 역할을 담당했습니다. 그는 마지막 몇 년을 기관의 사이버보안 이사회 책임자로 보냈습니다. 또한 백악관 국가안보회의에서 대통령 특별보좌관 겸 사이버보안 조정관, 그리고 국토안보 보좌관 대행으로 활동했습니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
