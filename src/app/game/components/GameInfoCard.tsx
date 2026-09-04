import type { GameDetail } from '@/api/games';

const RATING_LABELS: Record<NonNullable<GameDetail['rating']>['rating'], string> = {
  ALL: '전체이용가',
  OVER_12: '12세이용가',
  OVER_15: '15세이용가',
  OVER_18: '청소년이용불가',
};

export default function GameInfoCard({ game }: { game: GameDetail }) {
  return (
    <div className="rounded-2xl bg-[#f9f9f9] p-6">
      <div className="text-[11px] font-semibold tracking-[.1em] text-[#9d9d9d]">GAME INFO</div>
      <dl className="mt-4 flex flex-col gap-3 text-[14px]">
        <Row label="트랙">{game.trackName ?? '-'}</Row>
        <Row label="팀">{game.teamLabel ?? '-'}</Row>
        {game.activeBuild && <Row label="최신 버전">{game.activeBuild.version}</Row>}
        {game.rating && <Row label="이용등급">{RATING_LABELS[game.rating.rating]}</Row>}
      </dl>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-[#9d9d9d]">{label}</dt>
      <dd className="font-medium text-[#222]">{children}</dd>
    </div>
  );
}
