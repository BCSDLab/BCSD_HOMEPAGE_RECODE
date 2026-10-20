import Link from 'next/link';
import clsx from 'clsx';
import { listTracks } from '@/api/tracks';

interface TrackTabsProps {
  track: string;
}

export default async function TrackTabs({ track }: TrackTabsProps) {
  const tracks = await listTracks();

  return (
    <div className="mx-auto mt-10 flex w-full flex-wrap content-center justify-center gap-x-2 gap-y-2.5 px-6 lg:mt-17 lg:w-175 lg:gap-x-3.5 lg:gap-y-3.75 lg:px-0">
      {tracks.map(({ slug, name }) => {
        const isActive = track === slug;
        return (
          <Link
            key={slug}
            href={`/track/${slug}`}
            className={clsx(
              'rounded-full px-4 py-2 text-sm lg:px-6.5 lg:py-2.5 lg:text-base',
              isActive ? 'bg-[#d365fd] text-white' : 'bg-[#f6f6f6]',
            )}
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
}
