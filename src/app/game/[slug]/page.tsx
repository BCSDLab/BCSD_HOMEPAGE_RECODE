import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getGame, listGames } from '@/api/games';
import GameMembers from '@/app/game/components/GameMembers';
import GameRatingBadge from '@/app/game/components/GameRatingBadge';
import GameScreenshots from '@/app/game/components/GameScreenshots';
import GlobalNavigationBar from '@/components/GlobalNavigationBar';

interface GameDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const games = await listGames();
  return games.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: GameDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = await getGame(slug);
  if (!game) {
    return { title: '게임' };
  }
  return {
    title: game.name,
    description: game.oneLiner,
  };
}

export default async function GameDetailPage({ params }: GameDetailPageProps) {
  const { slug } = await params;
  const game = await getGame(slug);

  if (!game) {
    notFound();
  }

  return (
    <main className="hide-scrollbar w-full overflow-x-auto">
      <div className="min-w-360">
        <header className="relative flex h-70 w-full items-end bg-[linear-gradient(180deg,#1a1a1a_0%,#3a1a4a_100%)] pb-10 pl-30">
          <div>
            <div className="text-sm text-[#d9a6f5]">{game.trackName ?? '게임'} · {game.teamLabel ?? 'BCSD'}</div>
            <h1 className="mt-1 text-[34px] leading-[120%] font-medium text-white">{game.name}</h1>
          </div>
          <GlobalNavigationBar location="Game" />
        </header>

        <article className="mx-auto max-w-200 px-6 pt-16 pb-30">
          <Link href="/game" className="text-[15px] text-[#9d9d9d] hover:underline">
            ← 게임 목록으로
          </Link>

          <p className="mt-4 text-[19px] text-[#555]">{game.oneLiner}</p>

          {game.thumbnailUrl && (
            <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl bg-[#f4f4f4]">
              <Image src={game.thumbnailUrl} alt={game.name} fill sizes="800px" className="object-cover" priority />
            </div>
          )}

          <div className="mt-8 rounded-2xl border border-[#eee] bg-[#fafafa] p-5 text-[15px] text-[#777]">
            플레이 가능한 웹 빌드는 아직 준비 중입니다. 빌드가 등록되면 이 페이지에서 바로 플레이할 수 있습니다.
          </div>

          {game.members.length > 0 && (
            <section className="mt-12">
              <h2 className="text-xl font-semibold">만든 사람들</h2>
              <div className="mt-4">
                <GameMembers members={game.members} />
              </div>
            </section>
          )}

          {game.screenshots.length > 0 && (
            <section className="mt-12">
              <h2 className="text-xl font-semibold">스크린샷</h2>
              <div className="mt-4">
                <GameScreenshots screenshots={game.screenshots} name={game.name} />
              </div>
            </section>
          )}

          {game.description && (
            // 백엔드에서 jsoup safelist로 저장 시점에 정제한다(ADR-008 재사용).
            <div className="prose mt-12 max-w-none" dangerouslySetInnerHTML={{ __html: game.description }} />
          )}

          {game.rating && (
            <section className="mt-12">
              <h2 className="text-xl font-semibold">등급정보</h2>
              <div className="mt-4">
                <GameRatingBadge rating={game.rating} />
              </div>
            </section>
          )}
        </article>
      </div>
    </main>
  );
}
