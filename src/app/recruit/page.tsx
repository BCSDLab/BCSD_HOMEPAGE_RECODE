import Image from 'next/image';
import type { Metadata } from 'next';
import BeginnerTimeLine from './components/Timeline';
import BenefitCards from './components/BenefitCards';
import TrackSection from './components/TrackSection';
import GlobalNavigationBar from '@/components/GlobalNavigationBar';

export const metadata: Metadata = {
  title: '모집 안내',
  description:
    'BCSD 2025년 하반기 신입 부원 모집. Frontend, Backend, Android, iOS, Design, Game, Data Analyst, PM, Security 트랙에서 함께 성장할 멤버를 찾습니다.',
  keywords: [
    'BCSD 모집',
    '동아리 모집',
    '신입 부원',
    '개발자 모집',
    '디자이너 모집',
    'IT 동아리',
    '코리아텍',
  ],
  openGraph: {
    title: '모집 안내 | BCSD',
    description: 'BCSD와 함께 성장할 새로운 멤버를 찾습니다. 9개 트랙에서 여러분을 기다립니다.',
    images: [
      {
        url: 'https://image.bcsdlab.com/bcsd_recruit_page.png',
        width: 1440,
        height: 587,
        alt: 'BCSD 모집 안내',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '모집 안내 | BCSD',
    description: 'BCSD와 함께 성장할 새로운 멤버를 찾습니다. 9개 트랙에서 여러분을 기다립니다.',
    images: ['https://image.bcsdlab.com/bcsd_recruit_page.png'],
  },
};

export default function Recruit() {
  return (
    <div className="hide-scrollbar w-full overflow-x-auto">
      <div className="min-w-360">
        <div className="relative aspect-1440/587 w-full">
          <Image
            src="https://image.bcsdlab.com/bcsd_recruit_page.png"
            alt="recruit Image"
            fill
            sizes="100vw"
            priority
          />

          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="absolute z-0 translate-x-0.5 translate-y-2.25 bg-linear-to-t from-[#666] to-[#999] bg-clip-text text-[40px] font-semibold whitespace-nowrap text-transparent opacity-80">
              <div>각자의 궤도를 그리며</div>
              <div>BCSD와 함께 성장하세요.</div>
            </div>
            <div className="font-inter relative z-10 text-[40px] font-semibold whitespace-nowrap text-white">
              <div>각자의 궤도를 그리며</div>
              <div>BCSD와 함께 성장하세요.</div>
            </div>
          </div>

          <GlobalNavigationBar location="Recruit" />
        </div>

        <div className="mt-23 bg-[linear-gradient(180deg,#FFF_0%,#FEF2FF_76.44%,#FFF_100%)] pb-48">
          <BeginnerTimeLine />
          <BenefitCards />
        </div>
        <div className="mb-42.5 flex content-center justify-center">
          <TrackSection />
        </div>
      </div>
    </div>
  );
}
