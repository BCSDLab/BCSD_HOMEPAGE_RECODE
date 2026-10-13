import Image from 'next/image';

interface AvatarProps {
  name: string;
  imageUrl: string | null;
  sizes: string;
  /** 사진이 없을 때 이니셜의 글자 크기. */
  initialClassName?: string;
}

/**
 * 부모(relative + overflow-hidden)를 가득 채우는 프로필 사진. 사진이 없으면 이름 첫 글자를 보여준다.
 * 가입 전이거나 Slack 사진이 없는 멤버도 빈 칸으로 보이지 않게 한다.
 */
export default function Avatar({ name, imageUrl, sizes, initialClassName = 'text-xl' }: AvatarProps) {
  if (imageUrl) {
    return <Image src={imageUrl} alt={name} fill sizes={sizes} className="object-cover" />;
  }

  const initial = Array.from(name.trim())[0] ?? '';

  return (
    <span
      aria-hidden="true"
      className={`absolute inset-0 flex items-center justify-center bg-[#EBC4FC] font-semibold text-[#8911B6] ${initialClassName}`}
    >
      {initial}
    </span>
  );
}
