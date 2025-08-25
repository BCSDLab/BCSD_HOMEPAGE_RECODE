import type { Metadata } from 'next';
import './globals.css';
import FooterCharacter from '@/assets/svg/footer/character-icon.svg';
import FacebookIcon from '@/assets/svg/footer/facebook-icon.svg';
import InstagramIcon from '@/assets/svg/footer/instagram-icon.svg';
import YoutubeIcon from '@/assets/svg/footer/youtube-icon.svg';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'BCSD',
  description: 'Build Communities, Share Dreams',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        {children}
        <footer className="flex justify-between bg-[#555] px-[54px]">
          <div className="flex flex-col justify-center py-10">
            <FooterCharacter />
            <p className="text-xs font-normal text-[#C4C4C4]">© 2025 BCSD. ALL RIGHTS RESERVED.</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Link href="https://www.facebook.com/bcsdlab/?locale=ko_KR">
              <FacebookIcon />
            </Link>
            <Link href="https://www.instagram.com/bcsdlab/">
              <InstagramIcon />
            </Link>
            <Link href="https://www.youtube.com/@bcsdlab">
              <YoutubeIcon />
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
