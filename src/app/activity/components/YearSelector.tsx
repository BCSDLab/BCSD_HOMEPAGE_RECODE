'use client';

import { usePathname, useRouter } from 'next/navigation';
import Selector from '@/components/Selector';

interface YearSelectProps {
  years: readonly string[];
  selectedYear: string;
  defaultYear: string;
}

export default function YearSelect({ years, selectedYear, defaultYear }: YearSelectProps) {
  const router = useRouter();
  const pathname = usePathname();

  const options = years.map((year) => ({ label: year, value: year }));

  const handleSelect = (value: string) => {
    const params = new URLSearchParams(window.location.search);

    if (value === defaultYear) {
      params.delete('year');
    } else {
      params.set('year', value);
    }

    const queryString = params.toString();
    router.replace(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false });
  };

  return <Selector options={options} value={selectedYear} onSelect={handleSelect} />;
}
