import Image from 'next/image';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { getHome } from '@/api/home';
import GlobalNavigationBar from '@/components/GlobalNavigationBar';
import ApplyButton from '@/components/ApplyButton';
import { serializeJsonLd } from '@/lib/jsonLd';

const MentorSlider = dynamic(() => import('@/components/MentorSlider'));
const QnADropdown = dynamic(() => import('@/components/QnADropdown'));

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default async function Home() {
  const { mentors, qna, recruit } = await getHome();

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qna.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <main className="lg:hide-scrollbar w-full lg:overflow-x-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqStructuredData) }} />
      <div className="lg:min-w-360">
        <header className="relative h-160 w-full md:h-180 lg:aspect-1440/800 lg:h-auto">
          <Image
            src="https://image.bcsdlab.com/bcsd_main_page_image.png"
            alt="BCSD 메인 대표 이미지"
            fill
            sizes="100vw"
            className="object-cover object-[70%_center] lg:object-center"
            priority
          />
          <div className="absolute inset-0">
            <div className="font-inter absolute top-28 right-6 left-6 text-white lg:top-75 lg:right-auto lg:left-30 lg:m-4 lg:-translate-y-1/2 min-[90rem]:top-75 min-[90rem]:left-35 min-[90rem]:translate-y-0">
              <h1 className="text-[26px] leading-[120%] font-semibold md:text-[36px] lg:text-[40px]">
                각자의 궤도를 그리며
                <br />
                BCSD와 함께 성장하세요.
              </h1>
              <ApplyButton className="mt-6 rounded-[10px] bg-[#C360F3] px-5 py-3.25 text-white" recruit={recruit} />
            </div>
          </div>
        </header>
        <GlobalNavigationBar location="Main" />

        <div className="min-h-screen gap-16">
          <div className="space-y-20">
            <section className="flex flex-col gap-10 px-6 pt-20 lg:flex-row lg:justify-between lg:gap-0 lg:px-30 lg:pt-30">
              <div>
                <h2 className="text-[26px] leading-[120%] font-medium text-neutral-100 lg:text-[34px]">
                  열린 공간 BCSD
                </h2>
                <p className="mt-3.25">
                  마치 은하계가 외부의 다른 천체들과 상호작용하듯,
                  <br className="hidden lg:inline" /> BCSD는 구성원들 간의 교류뿐만 아니라 외부의 다양한
                  <br className="hidden lg:inline" /> 사람들과도 소통하고 지식을 공유할 수 있는 열린 공간입니다.
                </p>
              </div>
              <Image
                src="/images/main/main-image.svg"
                alt="BCSD 열린 공간 일러스트"
                width="540"
                height="237"
                loading="lazy"
                unoptimized
                className="w-full max-w-135 self-center lg:w-auto lg:max-w-full lg:self-auto"
              />
            </section>
            <section className="relative flex items-center justify-center bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_-9.38%,#FEF2FF_67.06%,rgba(255,255,255,0.00)_90.62%)] px-6 py-24 lg:h-150 lg:p-0">
              <div className="space-y-4 text-center">
                <h2 className="text-[26px] leading-[120%] font-medium text-neutral-100 lg:text-[34px]">
                  함께 성장하는 BCSD
                </h2>
                <p>
                  행성들은 고유한 궤도를 따라 움직이며 하나의 체계를 유지하듯이,
                  <br className="hidden lg:inline" /> BCSD 내에서 각자가 자신의 목표를 향해 나아가면서도,
                  <br className="hidden lg:inline" /> 협력과 교류를 통해 함께 더 큰 성장을 이뤄나갑니다.
                </p>
              </div>
              <div className="absolute top-0 left-100 hidden lg:block">
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
              <div className="absolute top-16 left-0 hidden lg:block">
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
              <div className="absolute top-32 right-32 hidden lg:block">
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
            {mentors.length > 0 && <MentorSlider mentors={mentors} />}
          </div>
          <section className="relative flex flex-col items-center justify-center bg-linear-to-b from-white to-[#F5DBFF] px-6 pt-24 lg:h-245 lg:p-0">
            <div className="text-center">
              <h2 className="title max-lg:text-[26px]">중력과 유대, BCSD에서의 원동력.</h2>
              <p className="mt-3.5 text-center text-base lg:text-[17px]">
                행성들이 중력을 통해 서로 영향을 주고 받으며 균형을 유지하듯이,
                <br className="hidden lg:inline" /> BCSD에서는 비기너, 레귤러, 멘토가 각자의 위치에서 상호작용하며
                <br className="hidden lg:inline" /> 서로를 성장시키는 원동력이 되어줍니다.
              </p>
            </div>
            <div className="mt-16">
              <h2 className="text-center text-[26px] leading-[120%] font-medium lg:text-[34px]">
                또 하나의 행성 할 사람?
              </h2>
              <div className="text-center">
                <ApplyButton
                  className="mt-6 rounded-[10px] bg-[#D365FD] p-2.5 text-[17px] text-[#FFF]"
                  label="저요!"
                  recruit={recruit}
                />
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
              className="mt-12 w-4/5 max-w-132 self-start lg:absolute lg:bottom-0 lg:left-0 lg:mt-0 lg:w-auto lg:max-w-full"
            />
          </section>
          <QnADropdown qna={qna} />
        </div>
      </div>
    </main>
  );
}
