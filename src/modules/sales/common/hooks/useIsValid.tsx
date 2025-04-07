import { useMemo } from 'react';

export const useIsValid = (initValue: any, data: any) => {
  const { isValid } = useMemo(() => {
    /* is edit */
    if (initValue?._id) {
      return {
        isValid: false,
      };
    }
    if (data) {
      return {
        isValid: !data?.isValid,
      };
    }
    return {
      isValid: true,
    };
  }, [data, initValue?._id]);

  return {
    isValid,
  };
};
