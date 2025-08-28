import Image from 'next/image';
import BeginnerTimeLine from './components/Timeline';
import BenefitCards from './components/BenefitCards';
import TrackSection from './components/TrackSection';
import GlobalNavigationBar from '@/components/GlobalNavigationBar';

export default function Recruit() {
  return (
    <div className="hide-scrollbar mb-42.5 w-full overflow-x-auto">
      <div className="w-full min-w-[1440px]">
        <div className="relative h-[587px]">
          <Image
            src="https://image.bcsdlab.com/bcsd_recruit_page.png"
            alt="recruit background"
            fill
            sizes="1440px"
            className="object-cover object-center"
            priority
          />

          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="absolute z-0 translate-x-[2px] translate-y-[9px] bg-gradient-to-t from-[#666] to-[#999] bg-clip-text text-[40px] font-semibold whitespace-nowrap text-transparent opacity-80">
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

        <div className="mt-23 grid bg-[linear-gradient(180deg,_#FFF_0%,_#FEF2FF_76.44%,_#FFF_100%)] pb-48">
          <BeginnerTimeLine />
          <BenefitCards />
        </div>
        <div className="place-items-center">
          <TrackSection />
        </div>
      </div>
    </div>
  );
}
