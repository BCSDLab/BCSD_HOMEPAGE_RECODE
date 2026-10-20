import Image from 'next/image';
import type { StudyPoint } from '@/api/tracks';

function StudyCard({ title, description, iconImageUrl }: StudyPoint) {
  return (
    <div className="flex w-full flex-col justify-between gap-6 rounded-3xl bg-[#fcf3ff] px-7 py-8 lg:h-98 lg:w-96 lg:gap-0 lg:rounded-[36px] lg:px-9 lg:py-11">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold whitespace-pre-line text-[#8911b6] lg:text-2xl">{title}</div>
        <div className="text-sm whitespace-pre-line text-[#777]">{description}</div>
      </div>
      {iconImageUrl && (
        <Image
          src={iconImageUrl}
          alt=""
          aria-hidden="true"
          width={178}
          height={167}
          loading="lazy"
          unoptimized
          className="h-auto w-28 self-end lg:w-[178px]"
        />
      )}
    </div>
  );
}

interface StudyCardsProps {
  studyPoints: StudyPoint[];
}

export default function StudyCards({ studyPoints }: StudyCardsProps) {
  return (
    <section className="mt-16 w-full px-6 lg:mt-21.5 lg:w-auto lg:px-0">
      <h2 className="title max-lg:text-[26px]">WHAT WE STUDY</h2>
      <div className="mt-10 flex gap-4.5 lg:mt-15">
        <div className="flex w-full flex-col gap-4 md:flex-row lg:w-auto lg:gap-4.5">
          {studyPoints.map((card) => (
            <StudyCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
