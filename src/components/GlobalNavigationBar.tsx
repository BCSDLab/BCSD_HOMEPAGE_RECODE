import { locationType } from '@/types/location';
import Link from 'next/link';
import { resolveDefaultTrackSlug } from '@/api/tracks';
import { resolveDefaultActivityCategorySlug } from '@/api/activities';
import MobileNavigation from '@/components/MobileNavigation';

export interface NavigationLink {
  label: string;
  href: string;
  location?: locationType;
}

interface GlobalNavigationBarProps {
  location?: locationType;
}

export default async function GlobalNavigationBar({ location }: GlobalNavigationBarProps) {
  const [trackSlug, activitySlug] = await Promise.all([
    resolveDefaultTrackSlug(),
    resolveDefaultActivityCategorySlug(),
  ]);

  const links: NavigationLink[] = [
    { label: 'Main', href: '/', location: 'Main' },
    { label: 'Tracks', href: `/track/${trackSlug}`, location: 'Track' },
    { label: 'Activity', href: `/activity/${activitySlug}`, location: 'Activity' },
    { label: 'Game', href: '/game', location: 'Game' },
    { label: 'Blog', href: 'https://blog.bcsdlab.com' },
    { label: 'Recruit', href: '/recruit', location: 'Recruit' },
  ];

  return (
    <>
      <nav className="absolute top-12 right-16 hidden items-center justify-between text-white lg:flex">
        <div className="space-x-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`cursor-pointer hover:underline ${link.location && location === link.location ? 'text-[#C360F3]' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
      <MobileNavigation links={links} location={location} />
    </>
  );
}
