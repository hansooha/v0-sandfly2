import React from 'react';
import Link from 'next/link';

const InfoCard = ({ number, text }: { number: string; text: string; }) => (
  <div className="flex items-start">
    <div className="text-4xl font-bold text-cyan-400 mr-4">{number}</div>
    <p className="text-gray-300">{text}</p>
  </div>
);

const Page = () => {
  return (
    <div className="bg-gray-900 text-white">
      <main className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">무료 인시던트 대응 라이선스 받기</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Sandfly Security에서는 인시던트 대응을 위한 무료 비상 라이선스를 제공합니다. 내부 보안팀의 일원이든, 고객을 도와주는 전문 IR 팀의 일원이든, 사이버 인시던트 중에 Sandfly를 무료로 배포하고 그 고유한 기능을 경험해볼 수 있습니다.
          </p>
        </section>

        {/* Steps Section */}
        <section className="mt-20 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <InfoCard number="01." text="저희의 인시던트 대응 라이선스는 인시던트에 대응하는 모든 기업이 사용할 수 있습니다. 양식을 작성하시면 가능한 한 빠른 시일 내에 연락드려 라이선스를 마련해드립니다." />
            <InfoCard number="02." text="라이선스는 30일간 유효하며 최대 500개 호스트를 커버합니다. 더 많은 시간이 필요하시면 언제든 말씀해 주세요. 라이선스는 조직당 하나로 제한되며, 한도는 협의에 따라 확장할 수 있습니다." />
            <InfoCard number="03." text="무료 1시간 교육 통화로 시작할 수 있도록 도와드릴 것입니다. 그 후에는 종합적인 지원 문서와 교육 비디오에 액세스할 수 있습니다." />
          </div>
        </section>

        {/* Form Placeholder Section */}
        <section className="mt-20 max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center">인시던트 대응 라이선스</h2>
          <p className="text-center mt-4 text-gray-400">세부 정보를 작성하시면 가능한 한 빠른 시일 내에 연락드리겠습니다.</p>
          <div className="mt-8">
            <p className="text-center text-gray-500">[연락처 양식 자리표시자]</p>
          </div>
        </section>

        {/* Why use Sandfly Section */}
        <section className="mt-20 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Sandfly를 사용하는 이유는?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <InfoCard number="01." text="엔드포인트 에이전트와 관련된 성능 오버헤드, 배포 번거로움, 잠재적인 안정성 위험을 제거합니다. Sandfly를 사용하면 복잡하지 않게 즉시 조사를 수행할 수 있습니다." />
            <InfoCard number="02." text="Sandfly는 온프레미스든 클라우드든 관계없이 가장 광범위한 Linux 배포판과 버전을 지원합니다. 조사하기 어려운 레거시 시스템, 임베디드 장치, 어플라이언스까지도 커버합니다." />
            <InfoCard number="03." text="Sandfly는 몇 초 만에 시스템을 스캔하여 위협에 대한 깊이 있는 가시성을 제공합니다. 시간이 중요한 인시던트 대응 중에 이는 매우 중요합니다." />
            <InfoCard number="04." text="수상한 활동을 탐지하면 프로세스를 일시 중단하거나 종료하는 등의 조치를 취할 수 있습니다. IR 팀은 인시던트 중 위협을 차단하기 위한 귀중한 옵션을 얻게 됩니다." />
            <InfoCard number="05." text="Sandfly는 저희나 다른 제3자에게 데이터를 외부로 전송하지 않습니다. 조사는 빠르고 신중하게 이루어집니다." />
            <InfoCard number="06." text="저희의 초점은 Linux입니다. 이 플랫폼에만 영향을 미치는 공격자 전술을 추적합니다. 저희의 탐지 방법은 맬웨어, 루트킷, 랜드 오프 더 랜드 전술 등에 효과적입니다." />
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Linux 위협을 폭로하다.</h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            저희가 사격장에서 침입과 손상된 Linux를 추적하는 Sandfly와 함께 동행해보세요.
          </p>
          <div className="mt-8">
            <Link href="https://www.youtube.com/watch?v=QYd64EsOLko" className="inline-block rounded-md bg-cyan-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-cyan-400">
              비디오 보기
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Page;

