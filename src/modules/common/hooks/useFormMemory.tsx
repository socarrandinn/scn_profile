import { useCallback, useEffect, useMemo } from 'react';
import { useSearchParamsChange } from '@dfl/react-security';

const generateFormId = (): string => {
  return Date.now().toString();
};

/**
 * A custom hook that allows storing and retrieving form data in local storage with a unique form ID.
 * @param field - A string representing the key to be used for the form ID in the query params. Defaults to 'formId'.
 * @param defaultValue - The default form data to be used if there is no existing data in local storage.
 * @returns An object containing the form ID and the form data retrieved from or stored in local storage.
 */
export const useFormMemory = (field = 'formId', defaultValue: object) => {
  const { value: formId, replace } = useSearchParamsChange(field);

  useEffect(() => {
    if (!formId) {
      replace({ [field]: generateFormId() });
    }
  }, [formId]);

  const value = useMemo(() => {
    if (!formId) return defaultValue;
    try {
      const formValuesFromStorage = localStorage.getItem(formId as string);
      if (formValuesFromStorage) {
        return JSON.parse(formValuesFromStorage);
      } else {
        localStorage.setItem(formId as string, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (e) {
      return defaultValue;
    }
  }, [formId, defaultValue]);

  const reset = useCallback(() => {
    localStorage.removeItem(formId as string);
  }, [field]);

  return {
    formId,
    value,
    reset,
  };
};
