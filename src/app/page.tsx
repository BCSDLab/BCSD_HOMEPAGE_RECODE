import Image from 'next/image';
import dynamic from 'next/dynamic';
import { QnAData } from '@/static/main/QnA';
import GlobalNavigationBar from '@/components/GlobalNavigationBar';
import ApplyButton from '@/components/ApplyButton';

const MentorSlider = dynamic(() => import('@/components/MentorSlider'));
const QnADropdown = dynamic(() => import('@/components/QnADropdown'));

export default function Home() {
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: QnAData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <main className="hide-scrollbar w-full overflow-x-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <div className="min-w-360">
        <header className="relative aspect-1440/800 w-full">
          <Image
            src="https://image.bcsdlab.com/bcsd_main_page_image.png"
            alt="BCSD 메인 대표 이미지"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0">
            <div className="font-inter absolute top-75 left-30 m-4 -translate-y-1/2 text-white min-[1440px]:top-75 min-[1440px]:left-35 min-[1440px]:translate-y-0">
              <h1 className="text-[40px] leading-[120%] font-semibold">
                각자의 궤도를 그리며
                <br />
                BCSD와 함께 성장하세요.
              </h1>
              <ApplyButton className="mt-6 rounded-[10px] bg-[#C360F3] px-5 py-3.25 text-white" />
            </div>
          </div>
        </header>
        <GlobalNavigationBar location="Main" />

        <div className="min-h-screen gap-16">
          <div className="space-y-20">
            <section className="flex justify-between px-30 pt-30">
              <div>
                <h2 className="text-[34px] leading-[120%] font-medium text-neutral-100">열린 공간 BCSD</h2>
                <p className="mt-3.25">
                  마치 은하계가 외부의 다른 천체들과 상호작용하듯,
                  <br /> BCSD는 구성원들 간의 교류뿐만 아니라 외부의 다양한
                  <br /> 사람들과도 소통하고 지식을 공유할 수 있는 열린 공간입니다.
                </p>
              </div>
              <Image
                src="/images/main/main-image.svg"
                alt="BCSD 열린 공간 일러스트"
                width="540"
                height="237"
                loading="lazy"
                unoptimized
              />
            </section>
            <section className="relative flex h-150 items-center justify-center bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_-9.38%,#FEF2FF_67.06%,rgba(255,255,255,0.00)_90.62%)]">
              <div className="space-y-4 text-center">
                <h2 className="text-[34px] leading-[120%] font-medium text-neutral-100">함께 성장하는 BCSD</h2>
                <p>
                  행성들은 고유한 궤도를 따라 움직이며 하나의 체계를 유지하듯이,
                  <br /> BCSD 내에서 각자가 자신의 목표를 향해 나아가면서도,
                  <br /> 협력과 교류를 통해 함께 더 큰 성장을 이뤄나갑니다.
                </p>
              </div>
              <div className="absolute top-0 left-100">
                <Image
                  src="/images/main/main-icon-partner.svg"
                  alt=""
                  aria-hidden="true"
                  width="242"
                  height="242"
                  loading="lazy"
                  unoptimized
                />
              </div>
              <div className="absolute top-16 left-0">
                <Image
                  src="/images/main/main-icon-pipe.svg"
                  alt=""
                  aria-hidden="true"
                  width="326"
                  height="500"
                  loading="lazy"
                  unoptimized
                />
              </div>
              <div className="absolute top-32 right-32">
                <Image
                  src="/images/main/main-icon-arrow.svg"
                  alt=""
                  aria-hidden="true"
                  width="475"
                  height="478"
                  loading="lazy"
                  unoptimized
                />
              </div>
            </section>
            <MentorSlider />
          </div>
          <section className="relative flex h-245 flex-col items-center justify-center bg-linear-to-b from-white to-[#F5DBFF]">
            <div className="text-center">
              <h2 className="title">중력과 유대, BCSD에서의 원동력.</h2>
              <p className="mt-3.5 text-center text-[17px]">
                행성들이 중력을 통해 서로 영향을 주고 받으며 균형을 유지하듯이,
                <br /> BCSD에서는 비기너, 레귤러, 멘토가 각자의 위치에서 상호작용하며
                <br /> 서로를 성장시키는 원동력이 되어줍니다.
              </p>
            </div>
            <div className="mt-16">
              <h2 className="text-center text-[34px] leading-[120%] font-medium">또 하나의 행성 할 사람?</h2>
              <div className="text-center">
                <ApplyButton className="mt-6 rounded-[10px] bg-[#D365FD] p-2.5 text-[17px] text-[#FFF]" label="저요!" />
              </div>
            </div>
            <Image
              src="/images/main/main-character.svg"
              alt=""
              aria-hidden="true"
              width="528"
              height="297"
              loading="lazy"
              unoptimized
              className="absolute bottom-0 left-0"
            />
          </section>
          <QnADropdown />
        </div>
      </div>
    </main>
  );
}
