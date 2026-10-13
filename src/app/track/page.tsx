import { redirect } from 'next/navigation';
import { resolveDefaultTrackSlug } from '@/api/tracks';

export default async function TrackRoot() {
  redirect(`/track/${await resolveDefaultTrackSlug()}`);
}
