import { useQueryClient } from '@tanstack/react-query';
import { useState, useEffect } from 'react';

type UseLocalStorageReturn = {
  value: string | null;
  setValue: (value: string) => void;
  removeValue: () => void;
};

const useLocalStorageDataLang = (key: string, initialValue: string): UseLocalStorageReturn => {
  const queryClient = useQueryClient();
  const [storedValue, setStoredValue] = useState<string | null>(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (!item) {
        window.localStorage.setItem(key, initialValue);
        queryClient.invalidateQueries();
        return initialValue;
      }
      try {
        return JSON.parse(item);
      } catch {
        return item;
      }
    } catch (error) {
      console.error('Error reading localStorage:', error);
      return initialValue;
    }
  });

  const setValue = (value: string) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, value);
    } catch (error) {
      console.error(error);
    }
  };

  const removeValue = () => {
    try {
      setStoredValue(null);
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        setStoredValue(event.newValue ? JSON.parse(event.newValue) : null);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key]);

  return { value: storedValue, setValue, removeValue };
};

export default useLocalStorageDataLang;
