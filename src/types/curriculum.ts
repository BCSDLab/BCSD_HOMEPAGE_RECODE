import type { ComponentType, SVGProps } from 'react';

export type TrackName =
  | 'frontend'
  | 'backend'
  | 'android'
  | 'ios'
  | 'design'
  | 'game'
  | 'data-analyst'
  | 'product-manager'
  | 'security';

export interface StudyInfo {
  title: string;
  descriptions: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export interface CurriculumItem {
  index: number;
  title: string;
  detail?: string[];
}

export interface WeekRange {
  from: number;
  to: number;
}

export interface CurriculumWeek {
  week: number | WeekRange;
  items: CurriculumItem[];
}

export interface Curriculum {
  track: TrackName;
  displayName: string;
  weeks: CurriculumWeek[];
  techStack: ComponentType<SVGProps<SVGSVGElement>>[];
}
