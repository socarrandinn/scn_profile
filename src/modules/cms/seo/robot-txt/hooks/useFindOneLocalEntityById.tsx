import { useMemo } from 'react';
import { useRobotTxtContext } from '../contexts/RobotTxtContext';

export const useFindOneRobotTxtById = () => {
  const { checkRobotTxt, data } = useRobotTxtContext();
  const robotTxt = useMemo(() => data?.data?.find((ent) => ent._id === checkRobotTxt), [checkRobotTxt, data]);

  return {
    robotTxt,
  };
};
