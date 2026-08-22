import Image from 'next/image';
import type { StudyPoint } from '@/api/tracks';

function StudyCard({ title, description, iconImageUrl }: StudyPoint) {
  return (
    <div className="flex h-98 w-96 flex-col justify-between rounded-[36px] bg-[#fcf3ff] px-9 py-11">
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-semibold whitespace-pre-line text-[#8911b6]">{title}</div>
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
          className="h-auto w-[178px] self-end"
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
    <section className="mt-21.5">
      <h2 className="title">WHAT WE STUDY</h2>
      <div className="mt-15 flex gap-4.5">
        <div className="flex gap-4.5">
          {studyPoints.map((card) => (
            <StudyCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
