import { useEffect } from 'react';

interface EscapeHandler {
  (e: KeyboardEvent): void;
}

const useEscapeKeyDown = (onEscape: EscapeHandler) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onEscape(e);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onEscape]);
};

export default useEscapeKeyDown;
