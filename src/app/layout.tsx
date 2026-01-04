import type { Metadata } from 'next';
import './globals.css';
import FooterCharacter from '@/assets/svg/footer/character-icon.svg';
import FacebookIcon from '@/assets/svg/footer/facebook-icon.svg';
import InstagramIcon from '@/assets/svg/footer/instagram-icon.svg';
import YoutubeIcon from '@/assets/svg/footer/youtube-icon.svg';
import Link from 'next/link';
import { URLS } from '@/constants/urls';

export const metadata: Metadata = {
  metadataBase: new URL('https://bcsdlab.com'),
  title: {
    default: 'BCSD - Build Communities, Share Dreams',
    template: '%s | BCSD',
  },
  icons: {
    icon: '/favicon.ico',
  },
  description:
    'BCSD는 코리아텍 IT 동아리입니다. Frontend, Backend, Android, iOS, Design, Game, Data Analyst, PM, Security 9개 트랙에서 함께 성장합니다.',
  keywords: [
    'BCSD',
    '코리아텍',
    'IT 동아리',
    '프로그래밍',
    '개발',
    'Frontend',
    'Backend',
    'Android',
    'iOS',
    'Design',
    'Game',
    'Data Analyst',
    'PM',
    'Security',
  ],
  authors: [{ name: 'BCSD' }],
  creator: 'BCSD',
  publisher: 'BCSD',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://bcsdlab.com',
    siteName: 'BCSD',
    title: 'BCSD - Build Communities, Share Dreams',
    description: '코리아텍 IT 동아리 BCSD, 9개 트랙에서 함께 성장하는 개발자 커뮤니티',
    images: [
      {
        url: 'https://image.bcsdlab.com/bcsd_main_page_image.png',
        width: 1440,
        height: 800,
        alt: 'BCSD 메인 이미지',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BCSD - Build Communities, Share Dreams',
    description: '코리아텍 IT 동아리 BCSD, 9개 트랙에서 함께 성장하는 개발자 커뮤니티',
    images: ['https://image.bcsdlab.com/bcsd_main_page_image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        {children}
        <footer className="flex justify-between bg-[#555] px-13.5">
          <div className="flex flex-col justify-center py-10">
            <FooterCharacter />
            <p className="text-xs font-normal text-[#C4C4C4]">© 2025 BCSD. ALL RIGHTS RESERVED.</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Link href={URLS.SOCIAL.FACEBOOK}>
              <FacebookIcon />
            </Link>
            <Link href={URLS.SOCIAL.INSTAGRAM}>
              <InstagramIcon />
            </Link>
            <Link href={URLS.SOCIAL.YOUTUBE}>
              <YoutubeIcon />
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
