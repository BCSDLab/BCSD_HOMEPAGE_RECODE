import { STEPS } from '@/static/recruit/timeLine';

export default function BeginnerTimeLine() {
  return (
    <>
      <h2 className="title max-lg:text-[26px]">
        비기너에서 <span className="font-bold">레귤러</span>로
      </h2>
      {/* 모바일은 왼쪽 세로선을 따라 내려가는 타임라인, 데스크톱은 가로 기준선 위에 단계를 나란히 배치 */}
      <div className="relative mt-12 w-full px-6 lg:mt-28 lg:h-42.5 lg:px-0">
        <div className="relative flex w-full flex-col lg:h-full lg:flex-row lg:justify-center lg:gap-17">
          {STEPS.map((s) => (
            <div key={s.title} className="relative flex flex-col pb-8 pl-6 last:pb-0 lg:h-full lg:w-62 lg:pb-0 lg:pl-3">
              <div className="absolute top-0 left-0 h-full w-px bg-[#c7c7c7]" />
              <div className="order-2 mt-1 text-[15px] leading-relaxed break-keep text-[#626262] lg:order-none lg:mt-0 lg:min-h-14 lg:w-42">
                {s.description}
              </div>
              <div className="order-1 text-xl font-bold lg:order-none lg:mt-auto lg:mb-3.75 lg:text-2xl">{s.title}</div>
              <div className="absolute top-2.5 left-0 z-10 h-2 w-2 -translate-x-1/2 rounded-full bg-black lg:top-auto lg:bottom-0 lg:translate-y-1/2" />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 z-0 hidden h-px w-full bg-black lg:block" />
      </div>
    </>
  );
}
