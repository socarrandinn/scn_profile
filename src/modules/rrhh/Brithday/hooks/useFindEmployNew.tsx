import { useQuery } from '@tanstack/react-query';
import BrithdayService from '../services/brithday.service';

export const useFindEmployNew = () => {
  return useQuery(['NEW_Employer'], BrithdayService.newEmployer);
}
