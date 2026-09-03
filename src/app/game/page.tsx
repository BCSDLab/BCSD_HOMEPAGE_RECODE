import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { listGames } from '@/api/games';
import GlobalNavigationBar from '@/components/GlobalNavigationBar';

export const metadata: Metadata = {
  title: '게임',
  alternates: {
    canonical: '/game',
  },
  description: 'BCSD 부원들이 직접 기획하고 만든 게임들을 소개합니다.',
};

export default async function GameListPage() {
  const games = await listGames();

  return (
    <main className="hide-scrollbar w-full overflow-x-auto">
      <div className="min-w-360">
        <header className="relative flex h-70 w-full items-end bg-[linear-gradient(180deg,#1a1a1a_0%,#3a1a4a_100%)] pb-10 pl-30">
          <h1 className="text-[34px] leading-[120%] font-medium text-white">BCSD가 만든 게임</h1>
          <GlobalNavigationBar location="Game" />
        </header>

        <div className="px-30 py-20">
          {games.length === 0 ? (
            <p className="py-20 text-center text-[#9d9d9d]">아직 소개된 게임이 없습니다.</p>
          ) : (
            <div className="grid grid-cols-3 gap-8">
              {games.map((game) => (
                <Link key={game.slug} href={`/game/${game.slug}`} className="group flex flex-col">
                  <div className="relative aspect-video overflow-hidden rounded-2xl bg-[#f4f4f4]">
                    {game.thumbnailUrl && (
                      <Image
                        src={game.thumbnailUrl}
                        alt={game.name}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    )}
                  </div>
                  <div className="mt-4 text-xl font-semibold">{game.name}</div>
                  <div className="mt-1 text-[15px] text-[#777]">{game.oneLiner}</div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
