import type { GameRating } from '@/api/games';

const RATING_LABELS: Record<GameRating['rating'], string> = {
  ALL: '전체이용가',
  OVER_12: '12세이용가',
  OVER_15: '15세이용가',
  OVER_18: '청소년이용불가',
};

const DESCRIPTOR_LABELS: Record<string, string> = {
  sexuality: '선정성',
  violence: '폭력성',
  fear: '공포',
  language: '언어',
  drugs: '약물',
  crime: '범죄',
  gambling: '사행성',
};

export default function GameRatingBadge({ rating }: { rating: GameRating }) {
  return (
    <div className="rounded-2xl bg-[#f9f9f9] p-6">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-lg bg-[#D365FD4D] px-3 py-1.5 text-sm font-semibold text-[#8911B6]">
          {RATING_LABELS[rating.rating]}
        </span>
        {rating.contentDescriptors.map((descriptor) => (
          <span key={descriptor} className="rounded-lg bg-[#eee] px-2.5 py-1 text-xs text-[#555]">
            {DESCRIPTOR_LABELS[descriptor] ?? descriptor}
          </span>
        ))}
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1.5 text-[13px] text-[#777]">
        {rating.classificationNumber && (
          <div className="flex gap-2">
            <dt className="text-[#9d9d9d]">등급분류번호</dt>
            <dd>{rating.classificationNumber}</dd>
          </div>
        )}
        {rating.classificationDate && (
          <div className="flex gap-2">
            <dt className="text-[#9d9d9d]">등급분류일자</dt>
            <dd>{rating.classificationDate}</dd>
          </div>
        )}
        {rating.businessName && (
          <div className="flex gap-2">
            <dt className="text-[#9d9d9d]">상호</dt>
            <dd>{rating.businessName}</dd>
          </div>
        )}
        {rating.developerReportNumber && (
          <div className="flex gap-2">
            <dt className="text-[#9d9d9d]">개발사 신고번호</dt>
            <dd>{rating.developerReportNumber}</dd>
          </div>
        )}
      </dl>
    </div>
  );
}
