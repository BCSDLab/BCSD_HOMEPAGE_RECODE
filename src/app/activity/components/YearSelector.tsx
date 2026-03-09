'use client';

import Selector from '@/components/Selector';

interface YearSelectProps {
  years: readonly string[];
  selectedYear: string;
  onSelect: (value: string) => void;
}

export default function YearSelect({ years, selectedYear, onSelect }: YearSelectProps) {
  const options = years.map((year) => ({ label: year, value: year }));

  return <Selector options={options} value={selectedYear} onSelect={onSelect} />;
}
