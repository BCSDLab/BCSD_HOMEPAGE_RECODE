import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getGame, listGames } from '@/api/games';
import GameInfoCard from '@/app/game/components/GameInfoCard';
import GameMembers from '@/app/game/components/GameMembers';
import GamePlayer from '@/app/game/components/GamePlayer';
import GameRatingBadge from '@/app/game/components/GameRatingBadge';
import GameScreenshots from '@/app/game/components/GameScreenshots';
import RelatedGames from '@/app/game/components/RelatedGames';
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
  const [game, allGames] = await Promise.all([getGame(slug), listGames()]);

  if (!game) {
    notFound();
  }

  const relatedGames = allGames.filter((g) => g.slug !== slug).slice(0, 4);

  return (
    <main className="hide-scrollbar w-full overflow-x-auto">
      <div className="min-w-360">
        <header className="relative flex h-24 w-full items-center bg-[#111] pl-30">
          <Link href="/game" className="text-[13px] text-[#9d9d9d] hover:text-white hover:underline">
            ← 게임 목록으로
          </Link>
          <GlobalNavigationBar location="Game" />
        </header>

        <div className="mx-auto max-w-300 px-6 py-14">
          <div className="grid grid-cols-[1fr_320px] gap-12">
            <div className="min-w-0">
              {game.activeBuild?.buildFileUrl ? (
                <GamePlayer buildFileUrl={game.activeBuild.buildFileUrl} name={game.name} />
              ) : (
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#111]">
                  {game.thumbnailUrl && (
                    <Image src={game.thumbnailUrl} alt={game.name} fill sizes="900px" className="object-cover" priority />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-[15px] text-white">
                    플레이 가능한 웹 빌드는 아직 준비 중입니다
                  </div>
                </div>
              )}

              <h1 className="mt-8 text-[32px] leading-[120%] font-bold">{game.name}</h1>
              <p className="mt-2 text-[17px] text-[#777]">
                {game.trackName ?? '게임'} · {game.teamLabel ?? 'BCSD'}
              </p>

              {game.members.length > 0 && (
                <section className="mt-10">
                  <h2 className="text-xl font-semibold">만든 사람들</h2>
                  <div className="mt-4">
                    <GameMembers members={game.members} />
                  </div>
                </section>
              )}

              <section className="mt-10">
                <h2 className="text-xl font-semibold">게임 소개</h2>
                <p className="mt-3 text-[17px] leading-[150%] text-[#555]">{game.oneLiner}</p>
                {game.description && (
                  // 백엔드에서 jsoup safelist로 저장 시점에 정제한다(ADR-008 재사용).
                  <div className="prose mt-6 max-w-none" dangerouslySetInnerHTML={{ __html: game.description }} />
                )}
              </section>

              {game.screenshots.length > 0 && (
                <section className="mt-10">
                  <h2 className="text-xl font-semibold">스크린샷</h2>
                  <div className="mt-4">
                    <GameScreenshots screenshots={game.screenshots} name={game.name} />
                  </div>
                </section>
              )}

              {game.rating && (
                <section className="mt-10">
                  <h2 className="text-xl font-semibold">등급정보</h2>
                  <div className="mt-4">
                    <GameRatingBadge rating={game.rating} />
                  </div>
                </section>
              )}
            </div>

            <aside className="flex flex-none flex-col gap-6">
              <GameInfoCard game={game} />
              <RelatedGames games={relatedGames} />
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
