'use client';

import { useEffect } from 'react';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="text-[28px] font-semibold">페이지를 불러오지 못했습니다</h1>
      <p className="text-[#555]">잠시 후 다시 시도해 주세요.</p>
      <button
        type="button"
        onClick={reset}
        className="cursor-pointer rounded-[10px] bg-[#C360F3] px-5 py-3 text-white"
      >
        다시 시도
      </button>
    </main>
  );
}
