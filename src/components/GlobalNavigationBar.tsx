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
  /** 데스크톱 메뉴가 놓이는 배경. 히어로 이미지 없이 흰 배경 위에 둘 때는 onLight */
  variant?: 'onDark' | 'onLight';
}

export default async function GlobalNavigationBar({ location, variant = 'onDark' }: GlobalNavigationBarProps) {
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
      <nav
        className={`absolute top-12 right-16 hidden items-center justify-between lg:flex ${variant === 'onLight' ? 'text-neutral-100' : 'text-white'}`}
      >
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
