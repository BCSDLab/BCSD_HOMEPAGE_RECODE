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
    <div className="flex w-full flex-col gap-3 lg:w-300 lg:flex-row lg:items-start lg:gap-10">
      <div className="shrink-0 text-lg font-semibold whitespace-nowrap tabular-nums lg:w-24 lg:pt-2.75 lg:text-xl">
        {formatWeekLabel(week)}
      </div>

      <div className="min-w-0 flex-1 border-t border-[#E7E7E7]">
        {week.topics.map((topic, index) => (
          <div
            key={`${index}-${topic.title}`}
            className="grid grid-cols-[1.5rem_1fr] items-start gap-x-3 gap-y-1 border-b border-[#E7E7E7] py-2.75 lg:grid-cols-[2.75rem_16.75rem_1fr] lg:gap-x-7 lg:gap-y-0"
          >
            <div className="text-right text-[15px] leading-[150%] text-neutral-200 tabular-nums lg:text-[17px]">
              {index + 1}
            </div>
            <div className="text-[17px] leading-[130%] font-semibold whitespace-pre-line lg:text-xl">{topic.title}</div>
            <div className="col-start-2 min-w-0 text-[15px] leading-[150%] wrap-break-word text-neutral-200 lg:col-start-auto lg:text-[17px]">
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
    <section className="mt-24 w-full place-items-center px-6 lg:mt-42.5 lg:w-auto lg:px-0">
      <h2 className="title mb-12 max-lg:text-[26px] lg:mb-24">
        <div>{curriculum.name} 비기너</div>
        <div>커리큘럼을 소개합니다</div>
      </h2>

      <div className="flex w-full flex-col gap-10 lg:w-auto lg:gap-16">
        {curriculum.weeks.map((week) => (
          <WeekBox key={`w-${week.weekFrom}-${week.weekTo ?? week.weekFrom}`} week={week} />
        ))}
      </div>
      <TechStack techStack={techStacks} />
    </section>
  );
}
