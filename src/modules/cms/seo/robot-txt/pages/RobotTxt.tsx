import { memo } from 'react';
import RobotTxtContainer from '../containers/RobotTxtContainer';
import { RobotTxtProvider } from '../contexts/RobotTxtContext';

const RobotTxt = () => {
  return (
    <RobotTxtProvider>
      <RobotTxtContainer />
    </RobotTxtProvider>
  );
};

export default memo(RobotTxt);
