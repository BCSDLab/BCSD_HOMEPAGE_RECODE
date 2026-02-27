import { getStudyInfo } from '@/static/track';
import type { StudyInfo, TrackName } from '@/types/curriculum';

function StudyCard({ title, descriptions, Icon }: StudyInfo) {
  return (
    <div className="flex h-98 w-96 flex-col justify-between rounded-[36px] bg-[#fcf3ff] px-9 py-11">
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-semibold whitespace-pre-line text-[#8911b6]">{title}</div>
        <div className="text-sm whitespace-pre-line text-[#777]">{descriptions}</div>
      </div>
      <Icon className="self-end" />
    </div>
  );
}

interface StudyCardsProps {
  track: TrackName;
}

export default async function StudyCards({ track }: StudyCardsProps) {
  const cards = await getStudyInfo(track);

  return (
    <div className="mt-21.5">
      <div className="title">WHAT WE STUDY</div>
      <div className="mt-15 flex gap-4.5">
        <div className="flex gap-4.5">
          {cards.map((card) => (
            <StudyCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}
