import type { CurriculumWeek, TrackName } from '@/types/curriculum';
import { getCurriculum } from '@/static/track';
import TechStack from './TechStack';

function formatWeekLabel(week: CurriculumWeek['week']) {
  if (typeof week === 'number') return `${week}주차`;
  return `${week.from}~${week.to}주차`;
}

interface WeekBoxProps {
  week: CurriculumWeek;
}

function WeekBox({ week }: WeekBoxProps) {
  return (
    <div className="flex w-300 items-start gap-10">
      <div className="w-24 shrink-0 pt-2.75 text-xl font-semibold whitespace-nowrap tabular-nums">
        {formatWeekLabel(week.week)}
      </div>

      <div className="min-w-0 flex-1 border-t border-[#E7E7E7]">
        {week.items.map((row) => (
          <div
            key={`${row.index}-${row.title}`}
            className="grid grid-cols-[2.75rem_16.75rem_1fr] items-start gap-x-7 border-b border-[#E7E7E7] py-2.75"
          >
            <div className="text-right text-[17px] leading-[150%] text-neutral-200 tabular-nums">{row.index}</div>
            <div className="text-xl leading-[130%] font-semibold whitespace-pre-line">{row.title}</div>
            <div className="min-w-0 text-[17px] leading-[150%] wrap-break-word text-neutral-200">
              {row.detail?.map((detailRow, index) => (
                <div key={index}>{detailRow}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface CurriculumProps {
  track: TrackName;
}

export default async function Curriculum({ track }: CurriculumProps) {
  const data = await getCurriculum(track);

  return (
    <div className="mt-42.5 place-items-center">
      <div className="title mb-24">
        <div>{data.displayName} 비기너</div>
        <div>커리큘럼을 소개합니다</div>
      </div>

      <div className="flex flex-col gap-16">
        {data.weeks.map((week) => (
          <WeekBox
            key={typeof week.week === 'number' ? `w-${week.week}` : `w-${week.week.from}-${week.week.to}`}
            week={week}
          />
        ))}
      </div>
      <TechStack techStack={data.techStack} />
    </div>
  );
}
