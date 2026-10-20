import Image from 'next/image';
import clsx from 'clsx';
import type { TechStackItem } from '@/api/tracks';

interface TechStackProps {
  techStack: TechStackItem[];
}

export default function TechStack({ techStack }: TechStackProps) {
  const isEvenGrid = techStack.length >= 6 && techStack.length % 2 === 0;
  const cols = isEvenGrid ? techStack.length / 2 : undefined;

  return (
    <div>
      {techStack.length > 0 && <h3 className="title mt-20 max-lg:text-[26px] lg:mt-35">사용하는 기술스택</h3>}
      <div className="mt-10 flex content-center justify-center px-6 lg:px-0">
        <div
          className={clsx(
            // 모바일은 개수와 상관없이 줄바꿈 배치, 데스크톱은 기존 그리드·간격 유지
            'flex flex-wrap justify-center gap-x-8 gap-y-6',
            isEvenGrid
              ? clsx(
                  'lg:grid lg:place-items-center lg:justify-normal lg:gap-10',
                  cols === 3 && 'lg:grid-cols-3',
                  cols === 4 && 'lg:grid-cols-4',
                  cols === 5 && 'lg:grid-cols-5',
                )
              : 'lg:content-center lg:gap-20',
            !isEvenGrid && (techStack.length === 7 ? 'lg:max-w-190' : 'lg:max-w-250'),
          )}
        >
          {techStack.map((tech) => (
            <div key={tech.name} className="flex items-center justify-center">
              <Image
                src={tech.iconUrl}
                alt={tech.name}
                width={64}
                height={64}
                unoptimized
                className="w-12 lg:w-16"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
