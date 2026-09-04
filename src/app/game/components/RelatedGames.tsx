import Image from 'next/image';
import Link from 'next/link';
import type { GameSummary } from '@/api/games';

export default function RelatedGames({ games }: { games: GameSummary[] }) {
  if (games.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="text-[11px] font-semibold tracking-[.1em] text-[#9d9d9d]">이어서 플레이</div>
      <div className="mt-4 flex flex-col gap-2">
        {games.map((game) => (
          <Link
            key={game.slug}
            href={`/game/${game.slug}`}
            className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-[#f4f4f4]"
          >
            <div className="relative h-12 w-20 flex-none overflow-hidden rounded-lg bg-[#f4f4f4]">
              {game.thumbnailUrl && (
                <Image src={game.thumbnailUrl} alt={game.name} fill sizes="80px" className="object-cover" />
              )}
            </div>
            <div className="min-w-0">
              <div className="truncate text-sm font-medium">{game.name}</div>
              <div className="truncate text-xs text-[#9d9d9d]">{game.oneLiner}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
