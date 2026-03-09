import { locationType } from '@/types/location';
import Link from 'next/link';

interface GlobalNavigationBarProps {
  location?: locationType;
}

export default function GlobalNavigationBar({ location }: GlobalNavigationBarProps) {
  return (
    <nav className="absolute top-12 right-16 flex items-center justify-between text-white">
      <div className="space-x-8">
        <Link href="/" className={`cursor-pointer hover:underline ${location === 'Main' ? 'text-[#C360F3]' : ''}`}>
          Main
        </Link>
        <Link
          href="/track/frontend"
          className={`cursor-pointer hover:underline ${location === 'Track' ? 'text-[#C360F3]' : ''}`}
        >
          Tracks
        </Link>
        <Link
          href="/activity/event"
          className={`cursor-pointer hover:underline ${location === 'Activity' ? 'text-[#C360F3]' : ''}`}
        >
          Activity
        </Link>
        <Link href="https://blog.bcsdlab.com" className="cursor-pointer hover:underline">
          Blog
        </Link>
        <Link
          href="/recruit"
          className={`cursor-pointer hover:underline ${location === 'Recruit' ? 'text-[#C360F3]' : ''}`}
        >
          Recruit
        </Link>
      </div>
    </nav>
  );
}
