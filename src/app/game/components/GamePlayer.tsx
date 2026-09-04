export default function GamePlayer({ buildFileUrl, name }: { buildFileUrl: string; name: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
      <iframe
        src={buildFileUrl}
        title={`${name} 플레이`}
        allow="autoplay; fullscreen; gamepad"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
