import Image from 'next/image';
import BeginnerTimeLine from './components/Timeline';
import BenefitCards from './components/BenefitCards';
import TrackSection from './components/TrackSection';
import GlobalNavigationBar from '@/components/GlobalNavigationBar';

export default function Recruit() {
  return (
    <div className="mb-43 min-h-screen place-items-center">
      <div className="relative h-[587px] w-full">
        <Image src="https://image.bcsdlab.com/bcsd_recruit_page.png" alt="recruit background" fill sizes="100vw" />

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="absolute z-0 translate-x-[2px] translate-y-[9px] bg-gradient-to-t from-[#666] to-[#999] bg-clip-text text-[40px] font-semibold text-transparent opacity-80">
            <div>각자의 궤도를 그리며</div>
            <div>BCSD와 함께 성장하세요.</div>
          </div>

          <div className="font-inter relative z-10 text-[40px] font-semibold text-white">
            <div>각자의 궤도를 그리며</div>
            <div>BCSD와 함께 성장하세요.</div>
          </div>
        </div>
        <GlobalNavigationBar location="Recruit" />
      </div>

      <div className="mt-23 grid w-full place-items-center bg-[linear-gradient(180deg,_#FFF_0%,_#FEF2FF_76.44%,_#FFF_100%)] pb-48">
        <BeginnerTimeLine />
        <BenefitCards />
      </div>
      <TrackSection />
    </div>
  );
}
