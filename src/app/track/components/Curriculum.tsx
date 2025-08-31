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
    <div className="flex w-300 justify-between">
      <div className="text-xl font-semibold">{formatWeekLabel(week.week)}</div>

      <div className="border-t">
        <div className="flex gap-25">
          <div className="flex w-full flex-col">
            {week.items.map((row, index) => (
              <div key={index} className="flex gap-25 border-b border-b-[#E7E7E7] py-[11px]">
                <div className="flex gap-7">
                  <div>{row.index}</div>
                  <div className="w-67 text-xl font-semibold whitespace-pre-line">{row.title}</div>
                </div>
                <div className="w-122">
                  {row.detail?.map((detailRow, index) => (
                    <div key={index}>{detailRow}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
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
