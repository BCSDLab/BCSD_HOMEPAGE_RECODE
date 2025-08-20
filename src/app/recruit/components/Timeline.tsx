import { STEPS } from '@/static/recruit/timeLine';

export default function BeginnerTimeLine() {
  return (
    <>
      <div className="text-[34px] font-medium text-neutral-100">
        비기너에서 <span className="font-bold">레귤러</span>로
      </div>
      <div className="relative mt-28 h-42.5 w-full">
        <div className="relative flex h-full w-full justify-center gap-17">
          {STEPS.map((s) => (
            <div key={s.title} className="relative flex h-full w-62 flex-col pl-3">
              <div className="absolute top-0 left-0 h-full w-px bg-[#c7c7c7]" />
              <div className="min-h-14 w-42 text-[15px] leading-relaxed break-keep text-[#626262]">{s.description}</div>
              <div className="mt-auto mb-[15px] text-2xl font-bold">{s.title}</div>
              <div className="absolute bottom-0 left-0 z-10 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-black" />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-px w-full bg-black" />
      </div>
    </>
  );
}
