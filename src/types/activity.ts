export type ActivityCategory = 'event' | 'game' | 'koin';

export interface Activity {
  id: number;
  month: string;
  title: string;
  description: string;
  images: string[];
}

export interface ActivityList {
  year: string;
  activities: Activity[];
}
