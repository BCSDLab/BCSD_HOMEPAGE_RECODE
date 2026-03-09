import { permanentRedirect } from 'next/navigation';

export default function ActivityRoot() {
  permanentRedirect('/activity/event');
}
