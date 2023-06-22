import { useQuery } from '@tanstack/react-query';
import BrithdayService from 'modules/rrhh/Brithday/services/brithday.service';

const useFindNextBirthdar = () => {
  return useQuery(['nextBirthday'], BrithdayService.nextBirthday);
}
export default useFindNextBirthdar;
