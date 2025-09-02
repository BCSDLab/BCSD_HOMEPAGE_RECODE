import clsx from 'clsx';
import { type Benefit, BENEFITS } from '@/static/recruit/benefit';

function BenefitCard({ title, descriptions, Icon, offset }: Benefit) {
  return (
    <div
      className={clsx(
        'h-100 w-70 rounded-[20px] bg-[linear-gradient(180deg,#F5DBFF_0%,#F9E8FF_100%)] pt-8',
        'flex flex-col items-center',
        offset && 'translate-y-8',
      )}
    >
      <div className="text-primary-100 text-2xl font-medium">{title}</div>
      <div className="mt-1.5 pb-25 text-center text-[17px] leading-[150%] whitespace-pre-line text-neutral-200">
        {descriptions}
      </div>
      <Icon />
    </div>
  );
}

export default function BenefitCards() {
  return (
    <div className="mt-70 place-items-center">
      <div className="title">
        <span className="font-bold">궤도</span>에 오르면
        <div>얻을 수 있는 것들</div>
      </div>

      <div className="mt-21 flex content-center justify-center gap-4.5">
        {BENEFITS.map((benefit) => (
          <BenefitCard key={benefit.title} {...benefit} />
        ))}
      </div>
    </div>
  );
}
