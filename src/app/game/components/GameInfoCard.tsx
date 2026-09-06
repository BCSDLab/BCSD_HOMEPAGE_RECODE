import type { GameDetail } from '@/api/games';

const RATING_LABELS: Record<NonNullable<GameDetail['rating']>['rating'], string> = {
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

/** arcade.codingbot.kr/play의 GAME INFO 카드 구조 — 기본 정보 + 등급 상세를 같은 카드 안에 둔다. */
export default function GameInfoCard({ game }: { game: GameDetail }) {
  const rating = game.rating;

  return (
    <div className="rounded-2xl bg-[#f9f9f9] p-6">
      <div className="text-[11px] font-semibold tracking-[.1em] text-[#9d9d9d]">GAME INFO</div>
      <dl className="mt-4 flex flex-col gap-3 text-[14px]">
        <Row label="트랙">{game.trackName ?? '-'}</Row>
        <Row label="팀">{game.teamLabel ?? '-'}</Row>
        <Row label="최신 빌드">{game.activeBuild ? `v${game.activeBuild.version}` : '—'}</Row>
      </dl>

      {rating && (
        <div className="mt-5 border-t border-[#eee] pt-5">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="rounded-lg bg-[#D365FD4D] px-2.5 py-1 text-xs font-semibold text-[#8911B6]">
              {RATING_LABELS[rating.rating]}
            </span>
            {rating.contentDescriptors.map((descriptor) => (
              <span key={descriptor} className="rounded-lg bg-[#eee] px-2 py-1 text-[11px] text-[#555]">
                {DESCRIPTOR_LABELS[descriptor] ?? descriptor}
              </span>
            ))}
          </div>
          <dl className="mt-4 flex flex-col gap-2.5 text-[13px]">
            {rating.businessName && <Row label="상호">{rating.businessName}</Row>}
            {rating.classificationNumber && <Row label="등급분류번호">{rating.classificationNumber}</Row>}
            {rating.classificationDate && <Row label="등급분류일자">{rating.classificationDate}</Row>}
            {rating.developerReportNumber && <Row label="개발자 신고번호">{rating.developerReportNumber}</Row>}
          </dl>
        </div>
      )}
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-[#9d9d9d]">{label}</dt>
      <dd className="text-right font-medium text-[#222]">{children}</dd>
    </div>
  );
}
