import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface IDeleteAudienceButton {
  handleClick: () => void;
}

const DeleteAudienceButton = ({ handleClick }: IDeleteAudienceButton) => {
  const { t } = useTranslation('orderStatus');
  return (
    <Button variant='outlined' fullWidth color='error' size='small' onClick={handleClick}>
      {t('fields.notification.deleteAudienceButton')}
    </Button>
  );
};

export default DeleteAudienceButton;
