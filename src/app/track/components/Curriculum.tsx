import type { Curriculum as CurriculumData, CurriculumWeek, TechStackItem } from '@/api/tracks';
import TechStack from './TechStack';

function formatWeekLabel(week: CurriculumWeek) {
  if (week.weekTo == null || week.weekTo === week.weekFrom) {
    return `${week.weekFrom}주차`;
  }
  return `${week.weekFrom}~${week.weekTo}주차`;
}

interface WeekBoxProps {
  week: CurriculumWeek;
}

function WeekBox({ week }: WeekBoxProps) {
  return (
    <div className="flex w-300 items-start gap-10">
      <div className="w-24 shrink-0 pt-2.75 text-xl font-semibold whitespace-nowrap tabular-nums">
        {formatWeekLabel(week)}
      </div>

      <div className="min-w-0 flex-1 border-t border-[#E7E7E7]">
        {week.topics.map((topic, index) => (
          <div
            key={`${index}-${topic.title}`}
            className="grid grid-cols-[2.75rem_16.75rem_1fr] items-start gap-x-7 border-b border-[#E7E7E7] py-2.75"
          >
            <div className="text-right text-[17px] leading-[150%] text-neutral-200 tabular-nums">{index + 1}</div>
            <div className="text-xl leading-[130%] font-semibold whitespace-pre-line">{topic.title}</div>
            <div className="min-w-0 text-[17px] leading-[150%] wrap-break-word text-neutral-200">
              {topic.details.map((detailRow, detailIndex) => (
                <div key={detailIndex}>{detailRow}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface CurriculumProps {
  curriculum: CurriculumData | null;
  techStacks: TechStackItem[];
}

export default function Curriculum({ curriculum, techStacks }: CurriculumProps) {
  if (!curriculum) {
    return null;
  }

  return (
    <section className="mt-42.5 place-items-center">
      <h2 className="title mb-24">
        <div>{curriculum.name} 비기너</div>
        <div>커리큘럼을 소개합니다</div>
      </h2>

      <div className="flex flex-col gap-16">
        {curriculum.weeks.map((week) => (
          <WeekBox key={`w-${week.weekFrom}-${week.weekTo ?? week.weekFrom}`} week={week} />
        ))}
      </div>
      <TechStack techStack={techStacks} />
    </section>
  );
}
