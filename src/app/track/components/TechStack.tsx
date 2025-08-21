import type { ComponentType, SVGProps } from 'react';
import clsx from 'clsx';

interface TechStackProps {
  techStack: ComponentType<SVGProps<SVGSVGElement>>[];
}

export default function TechStack({ techStack }: TechStackProps) {
  const isEvenGrid = techStack.length >= 6 && techStack.length % 2 === 0;
  const cols = isEvenGrid ? techStack.length / 2 : undefined;

  return (
    <div>
      {techStack.length > 0 && <h3 className="title mt-35">사용하는 기술스택</h3>}
      <div className="mt-10">
        <div
          className={clsx(
            isEvenGrid
              ? clsx(
                  'grid place-items-center gap-10',
                  cols === 3 && 'grid-cols-3',
                  cols === 4 && 'grid-cols-4',
                  cols === 5 && 'grid-cols-5',
                )
              : 'flex flex-wrap place-content-center gap-20',
            !isEvenGrid && (techStack.length === 7 ? 'max-w-190' : 'max-w-250'),
          )}
        >
          {techStack.map((Icon, i) => (
            <div key={i} className="flex items-center justify-center">
              <Icon aria-hidden />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
