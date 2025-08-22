'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Selector from '@/components/Selector';

interface YearSelectProps {
  years: readonly string[];
  selectedYear: string;
  defaultYear: string;
}

export default function YearSelect({ years, selectedYear, defaultYear }: YearSelectProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParameters = useSearchParams();

  const options = years.map((year) => ({ label: year, value: year }));

  const handleSelect = (value: string) => {
    const parameters = new URLSearchParams(searchParameters);

    if (value === defaultYear) {
      parameters.delete('year');
    } else {
      parameters.set('year', value);
    }

    const queryString = parameters.toString();
    router.replace(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false });
  };

  return <Selector options={options} value={selectedYear} onSelect={handleSelect} />;
}
