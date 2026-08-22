import Link from 'next/link';
import clsx from 'clsx';
import { listTracks } from '@/api/tracks';

interface TrackTabsProps {
  track: string;
}

export default async function TrackTabs({ track }: TrackTabsProps) {
  const tracks = await listTracks();

  return (
    <div className="mx-auto mt-17 flex w-175 flex-wrap content-center justify-center gap-x-3.5 gap-y-3.75">
      {tracks.map(({ slug, name }) => {
        const isActive = track === slug;
        return (
          <Link
            key={slug}
            href={`/track/${slug}`}
            className={clsx('rounded-full px-6.5 py-2.5', isActive ? 'bg-[#d365fd] text-white' : 'bg-[#f6f6f6]')}
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
}
