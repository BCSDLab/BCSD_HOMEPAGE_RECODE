import Image from 'next/image';

export default function GameScreenshots({ screenshots, name }: { screenshots: string[]; name: string }) {
  if (screenshots.length === 0) {
    return null;
  }

  return (
    <div className="hide-scrollbar flex gap-4 overflow-x-auto pb-2">
      {screenshots.map((url, index) => (
        <div
          key={index}
          className="relative aspect-video w-72 flex-none overflow-hidden rounded-2xl bg-[#f4f4f4] lg:w-120"
        >
          <Image
            src={url}
            alt={`${name} 스크린샷 ${index + 1}`}
            fill
            sizes="(min-width: 1024px) 480px, 288px"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
