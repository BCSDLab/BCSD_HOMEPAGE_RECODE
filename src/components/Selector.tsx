'use client';

import { useId, useRef } from 'react';
import useHandleOutside from '@/hooks/useOutsideClick';
import ArrowDown from '@/assets/svg/polygon-icon.svg';
import useEscapeKeyDown from '@/hooks/useEscapeKeyDown';
import useBooleanState from '@/hooks/useBooleanState';

interface OptionList {
  label: string;
  value: string;
}

interface SelectorProps {
  options: OptionList[];
  value: string | null;
  onSelect: (value: string) => void;
}

export default function Selector({ options, value, onSelect }: SelectorProps) {
  const [isOpen, , closeMenu, triggerOpen] = useBooleanState(false);
  const listboxId = useId();

  const containerRef = useRef<HTMLDivElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  const handleOptionSelect = (value: string) => () => {
    onSelect(value);
    closeMenu();
  };

  const selectedOption = options.find((option) => option.value === value);
  const showLabel = selectedOption ? selectedOption.label : 'Select an option';

  useHandleOutside({
    containerRef,
    backgroundRef,
    onOutsideClick: closeMenu,
  });

  useEscapeKeyDown((e) => {
    e.stopPropagation();
    closeMenu();
  });

  return (
    <>
      {isOpen && <div ref={backgroundRef} className="fixed inset-0 z-10" />}

      <div ref={containerRef} className="relative z-20 inline-block w-61">
        <button
          type="button"
          onClick={triggerOpen}
          aria-haspopup="listbox"
          aria-controls={listboxId}
          aria-expanded={isOpen}
          className="relative flex w-full items-center justify-center rounded-full bg-[#f4f4f4] py-2"
        >
          <div className="mx-auto text-[17px]">{showLabel}</div>
          <ArrowDown
            className={`absolute right-4 transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>

        {isOpen && (
          <div id={listboxId} role="listbox" className="absolute mt-2 w-full rounded-[21px] bg-[#f4f4f4] px-7 shadow">
            {options.map((option) => {
              const isSelected = option.value === value;

              return (
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  key={option.value}
                  onClick={handleOptionSelect(option.value)}
                  className="w-full cursor-pointer border-b border-b-[#dbdbdb] py-2 text-center last:border-b-0"
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
