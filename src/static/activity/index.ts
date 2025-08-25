import { ActivityList, ActivityCategory } from '@/types/activity';

export async function getActivity(category: ActivityCategory): Promise<ActivityList[]> {
  switch (category) {
    case 'event':
      return (await import('./event')).default;
    case 'game':
      return (await import('./game')).default;
    case 'koin':
      return (await import('./koin')).default;
    default:
      throw new Error(`Unknown category: ${category}`);
  }
}
