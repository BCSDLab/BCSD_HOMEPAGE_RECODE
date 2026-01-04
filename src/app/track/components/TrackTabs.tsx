import Link from 'next/link';
import type { TrackName } from '@/types/curriculum';
import clsx from 'clsx';

export const tracks = [
  { slug: 'frontend', label: 'Frontend' },
  { slug: 'backend', label: 'Backend' },
  { slug: 'android', label: 'Android' },
  { slug: 'ios', label: 'iOS' },
  { slug: 'design', label: 'Design' },
  { slug: 'game', label: 'Game' },
  { slug: 'data-analyst', label: 'Data Analyst' },
  { slug: 'product-manager', label: 'Product Manager' },
  { slug: 'security', label: 'Security' },
] as const;

interface TrackTabsProps {
  track: TrackName;
}

export default function TrackTabs({ track }: TrackTabsProps) {
  return (
    <div className="mx-auto mt-17 flex w-175 flex-wrap content-center justify-center gap-x-3.5 gap-y-3.75">
      {tracks.map(({ slug, label }) => {
        const isActive = track === slug;
        return (
          <Link
            key={slug}
            href={`/track/${slug}`}
            className={clsx('rounded-full px-6.5 py-2.5', isActive ? 'bg-[#d365fd] text-white' : 'bg-[#f6f6f6]')}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
