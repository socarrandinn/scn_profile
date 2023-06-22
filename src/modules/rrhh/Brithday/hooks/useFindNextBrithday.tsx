import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import BrithdayService from 'modules/rrhh/Brithday/services/brithday.service';

const useFindNextBirthdar = () => {
  const fetch = useCallback(() => BrithdayService.nextBirthday(), []);
  return useQuery(['nextBirthday'], fetch);
}
export default useFindNextBirthdar;
