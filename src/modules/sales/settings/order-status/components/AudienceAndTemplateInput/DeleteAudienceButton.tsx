import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface IDeleteAudienceButton {
  handleClick: () => void;
}

const DeleteAudienceButton = ({ handleClick }: IDeleteAudienceButton) => {
  const { t } = useTranslation('orderStatus');
  return (
    <Button sx={{ width: '100%', margin: '0 auto 1rem auto' }} color='error' size='small' onClick={handleClick}>
      {t('fields.notification.deleteAudienceButton')}
    </Button>
  );
};

export default DeleteAudienceButton;
