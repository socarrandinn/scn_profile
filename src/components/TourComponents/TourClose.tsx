import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useTourContext } from 'contexts/TourProvider';
import tourService from 'services/tour-service';

const TourCloseButton = ({ ...props }: any) => {
  const { stepsGroup } = useTourContext();
  const { setIsOpen } = props;

  const handleCloseTour = () => {
    // todo: send seen steps to server
    tourService.sendSeenSteps(stepsGroup);
    setIsOpen(false);
  };

  return (
    <div className='text-right mt-[-20px]'>
      <IconButton onClick={handleCloseTour} {...props}>
        <Close />
      </IconButton>
    </div>
  );
};

export default TourCloseButton;
