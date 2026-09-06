import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getGame, listGames } from '@/api/games';
import GameInfoCard from '@/app/game/components/GameInfoCard';
import GameMembers from '@/app/game/components/GameMembers';
import GamePlayer from '@/app/game/components/GamePlayer';
import GameScreenshots from '@/app/game/components/GameScreenshots';
import RelatedGames from '@/app/game/components/RelatedGames';

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

  const relatedGames = allGames.filter((g) => g.slug !== slug).slice(0, 3);

  return (
    <main className="hide-scrollbar w-full overflow-x-auto">
      <div className="min-w-360">
        {game.activeBuild?.buildFileUrl ? (
          <GamePlayer
            buildFileUrl={game.activeBuild.buildFileUrl}
            name={game.name}
            version={game.activeBuild.version}
            canvasWidth={game.activeBuild.canvasWidth}
            canvasHeight={game.activeBuild.canvasHeight}
          />
        ) : (
          <div className="relative flex aspect-video w-full items-center justify-center bg-[#111]">
            {game.thumbnailUrl && (
              <Image src={game.thumbnailUrl} alt={game.name} fill sizes="100vw" className="object-cover opacity-40" priority />
            )}
            <p className="relative text-[15px] text-white">플레이 가능한 웹 빌드는 아직 준비 중입니다</p>
          </div>
        )}

        <div className="mx-auto max-w-300 px-6 py-14">
          <div className="grid grid-cols-[1fr_320px] gap-12">
            <div className="min-w-0">
              <h1 className="text-[32px] leading-[120%] font-bold">{game.name}</h1>
              <p className="mt-2 text-[15px] text-[#9d9d9d]">
                {game.teamLabel ?? game.trackName ?? 'BCSD'}
                {game.activeBuild && <> · v{game.activeBuild.version}</>}
              </p>

              <h2 className="mt-10 text-xl font-semibold">게임 소개</h2>
              <p className="mt-3 text-[17px] leading-[150%] text-[#555]">{game.oneLiner}</p>
              {game.description && (
                // 백엔드에서 jsoup safelist로 저장 시점에 정제한다(ADR-008 재사용).
                <div className="prose mt-6 max-w-none" dangerouslySetInnerHTML={{ __html: game.description }} />
              )}

              {game.members.length > 0 && (
                <section className="mt-10">
                  <h2 className="text-xl font-semibold">만든 사람들</h2>
                  <div className="mt-4">
                    <GameMembers members={game.members} />
                  </div>
                </section>
              )}

              {game.screenshots.length > 0 && (
                <section className="mt-10">
                  <h2 className="text-xl font-semibold">스크린샷</h2>
                  <div className="mt-4">
                    <GameScreenshots screenshots={game.screenshots} name={game.name} />
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
