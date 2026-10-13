import Link from 'next/link';
import type { HomeRecruitLink } from '@/api/home';

interface ApplyButtonProps {
  className?: string;
  label?: string;
  recruit: HomeRecruitLink | null;
}

const DEFAULT_CLOSED_MESSAGE = '모집이 마감되었습니다.';

/** 모집 중이면 구글폼으로, 아니면 마감 메시지를 보여준다(FR-8.3). */
export default function ApplyButton({ className, label = '지원하기', recruit }: ApplyButtonProps) {
  if (!recruit || !recruit.isOpen) {
    return (
      <span className={`${className} pointer-events-none inline-block opacity-60`} aria-disabled="true">
        {recruit?.closedMessage || DEFAULT_CLOSED_MESSAGE}
      </span>
    );
  }

  return (
    <Link
      href={recruit.googleFormUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} inline-block`}
    >
      {label}
    </Link>
  );
}
