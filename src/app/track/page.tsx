import { permanentRedirect } from 'next/navigation';

export default function TrackRoot() {
  permanentRedirect('/track/frontend');
}
