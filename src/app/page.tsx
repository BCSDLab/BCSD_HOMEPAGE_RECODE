import Image from 'next/image';
import MainImage from '@/assets/svg/main/main-image.svg';
import MainIconPartner from '@/assets/svg/main/main-icon-partner.svg';
import MainIconPipe from '@/assets/svg/main/main-icon-pipe.svg';
import MainIconArrow from '@/assets/svg/main/main-icon-arrow.svg';
import MentorSlider from '@/components/MentorSlider';
import Link from 'next/link';
import MainCharacter from '@/assets/svg/main/main-character.svg';
import QnADropdown from '@/components/QnADropdown';
import GlobalNavigationBar from '@/components/GlobalNavigationBar';

export default function Home() {
  return (
    <div className="hide-scrollbar w-full overflow-x-auto">
      <div className="min-w-[1440px]">
        <div>
          <header className="relative h-200 w-full">
            <Image
              src="https://image.bcsdlab.com/bcsd_main_page_image.png"
              alt="main Image"
              fill
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 flex">
              <div className="font-inter relative top-50 left-20 m-4 text-[40px] font-semibold text-white">
                <p className="text-[40px] font-semibold">
                  각자의 궤도를 그리며
                  <br />
                  BCSD와 함께 성장하세요.
                </p>
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfMP9HZIE4TzVpoWX_o3nnUB_tAthRSIsJTfKw72F4mftA62w/viewform?edit2=2_ABaOnueiLzcPk7-tUYyUJ6fU1Zxy5Kpyr2uACwdIkIHWchOsPBhTOHJlF74Oo37Skw"
                  className="inline-block rounded-[10px] bg-[#D365FD] px-5 py-[13px]"
                >
                  <p className="text-[17px] text-[#FFF]">지원하기</p>
                </Link>
              </div>
            </div>
            <GlobalNavigationBar location="Main" />
          </header>

          <div className="min-h-screen gap-16">
            <div className="space-y-20">
              <div className="flex justify-between px-30 pt-30">
                <div>
                  <p className="text-[34px] font-medium text-[#414141]">열린 공간 BCSD</p>
                  <p className="mt-[13px]">
                    마치 은하계가 외부의 다른 천체들과 상호작용하듯,
                    <br /> BCSD는 구성원들 간의 교류뿐만 아니라 외부의 다양한
                    <br /> 사람들과도 소통하고 지식을 공유할 수 있는 열린 공간입니다.
                  </p>
                </div>
                <MainImage />
              </div>
              <div className="relative flex h-[600px] items-center justify-center bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_-9.38%,#FEF2FF_67.06%,rgba(255,255,255,0.00)_90.62%)]">
                <div className="space-y-4 text-center">
                  <p className="text-[34px] font-medium text-[#414141]">함께 성장하는 BCSD</p>
                  <p>
                    행성들은 고유한 궤도를 따라 움직이며 하나의 체계를 유지하듯이,
                    <br /> BCSD 내에서 각자가 자신의 목표를 향해 나아가면서도,
                    <br /> 협력과 교류를 통해 함께 더 큰 성장을 이뤄나갑니다.
                  </p>
                </div>
                <div className="absolute top-0 left-100">
                  <MainIconPartner />
                </div>
                <div className="absolute top-16 left-0">
                  <MainIconPipe />
                </div>
                <div className="absolute top-32 right-32">
                  <MainIconArrow />
                </div>
              </div>
              <MentorSlider />
            </div>
            <div className="relative flex h-[980px] flex-col items-center justify-center bg-gradient-to-b from-white to-[#F5DBFF]">
              <div className="text-center">
                <p className="text-center text-[34px] font-medium text-[#414141]">중력과 유대, BCSD에서의 원동력.</p>
                <p className="mt-[14px] text-center text-[17px]">
                  행성들이 중력을 통해 서로 영향을 주고 받으며 균형을 유지하듯이,
                  <br /> BCSD에서는 비기너, 레귤러, 멘토가 각자의 위치에서 상호작용하며
                  <br />
                  서로를 성장시키는 원동력이 되어줍니다.
                </p>
              </div>
              <div className="mt-[64px]">
                <p className="text-center text-[34px] font-medium text-black">또 하나의 행성 할 사람?</p>
                <div className="text-center">
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfMP9HZIE4TzVpoWX_o3nnUB_tAthRSIsJTfKw72F4mftA62w/viewform?edit2=2_ABaOnueiLzcPk7-tUYyUJ6fU1Zxy5Kpyr2uACwdIkIHWchOsPBhTOHJlF74Oo37Skw"
                    className="inline-block rounded-[10px] bg-[#D365FD] p-[10px]"
                  >
                    <p className="text-[17px] text-[#FFF]">저요!</p>
                  </Link>
                </div>
              </div>
              <MainCharacter className="absolute bottom-0 left-0" />
            </div>
            <QnADropdown />
          </div>
        </div>
      </div>
    </div>
  );
}
