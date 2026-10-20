import Image from 'next/image';
import clsx from 'clsx';
import { type Benefit, BENEFITS } from '@/static/recruit/benefit';

function BenefitCard({ title, descriptions, iconSrc, offset }: Benefit) {
  return (
    <div
      className={clsx(
        'w-full rounded-[20px] bg-[linear-gradient(180deg,#F5DBFF_0%,#F9E8FF_100%)] px-3 py-6 lg:h-100 lg:w-70 lg:px-0 lg:pt-8 lg:pb-0',
        'flex flex-col items-center',
        offset && 'lg:translate-y-8',
      )}
    >
      <div className="text-primary-100 text-lg font-medium lg:text-2xl">{title}</div>
      <div className="mt-1.5 pb-6 text-center text-sm leading-[150%] whitespace-pre-line text-neutral-200 lg:pb-25 lg:text-[17px]">
        {descriptions}
      </div>
      <Image src={iconSrc} alt="" aria-hidden className="mt-auto w-24 lg:mt-0 lg:w-auto" />
    </div>
  );
}

export default function BenefitCards() {
  return (
    <section className="mt-24 place-items-center lg:mt-70">
      <h2 className="title max-lg:text-[26px]">
        <span className="font-bold">궤도</span>에 오르면
        <div>얻을 수 있는 것들</div>
      </h2>

      <div className="mt-12 grid grid-cols-2 content-center justify-center gap-3 px-6 md:grid-cols-4 lg:mt-21 lg:flex lg:gap-4.5 lg:px-0">
        {BENEFITS.map((benefit) => (
          <BenefitCard key={benefit.title} {...benefit} />
        ))}
      </div>
    </section>
  );
}
