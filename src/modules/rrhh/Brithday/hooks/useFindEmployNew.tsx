import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react'
import BrithdayService from '../services/brithday.service';

export const useFindEmployNew = () => {
  const fecht = useCallback(() => BrithdayService.newEmployer(), []);
  return useQuery(['NEW_Employer'], fecht);
}
