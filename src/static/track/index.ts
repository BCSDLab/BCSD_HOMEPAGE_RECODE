import type { Curriculum, StudyInfo, TrackName } from '@/types/curriculum';
import { Member } from '@/types/trackMember';

export async function getCurriculum(track: TrackName): Promise<Curriculum> {
  switch (track) {
    case 'frontend':
      return (await import('./frontend/curriculum')).default;
    case 'backend':
      return (await import('./backend/curriculum')).default;
    case 'android':
      return (await import('./android/curriculum')).default;
    case 'ios':
      return (await import('./ios/curriculum')).default;
    case 'design':
      return (await import('./design/curriculum')).default;
    case 'game':
      return (await import('./game/curriculum')).default;
    case 'data-analyst':
      return (await import('./dataAnalyst/curriculum')).default;
    case 'product-manager':
      return (await import('./productManager/curriculum')).default;
    case 'security':
      return (await import('./security/curriculum')).default;
    default:
      throw new Error(`Unknown track: ${track}`);
  }
}

export async function getStudyInfo(track: TrackName): Promise<StudyInfo[]> {
  switch (track) {
    case 'frontend':
      return (await import('./frontend/studyInfo')).default;
    case 'backend':
      return (await import('./backend/studyInfo')).default;
    case 'android':
      return (await import('./android/studyInfo')).default;
    case 'ios':
      return (await import('./ios/studyInfo')).default;
    case 'design':
      return (await import('./design/studyInfo')).default;
    case 'game':
      return (await import('./game/studyInfo')).default;
    case 'data-analyst':
      return (await import('./dataAnalyst/studyInfo')).default;
    case 'product-manager':
      return (await import('./productManager/studyInfo')).default;
    case 'security':
      return (await import('./security/studyInfo')).default;
    default:
      throw new Error(`Unknown track: ${track}`);
  }
}

export async function getTrackMembers(track: TrackName): Promise<Member[]> {
  switch (track) {
    case 'frontend':
      return (await import('./frontend/member')).default;
    case 'backend':
      return (await import('./backend/member')).default;
    case 'android':
      return (await import('./android/member')).default;
    case 'ios':
      return (await import('./ios/member')).default;
    case 'design':
      return (await import('./design/member')).default;
    case 'game':
      return (await import('./game/member')).default;
    case 'data-analyst':
      return (await import('./dataAnalyst/member')).default;
    case 'product-manager':
      return (await import('./productManager/member')).default;
    case 'security':
      return (await import('./security/member')).default;
    default:
      throw new Error(`Unknown track: ${track}`);
  }
}
