import { IconButton } from '@dfl/mui-react-common';
import DeleteIcon from 'components/icons/DeleteIcon';
import { useTranslation } from 'react-i18next';

interface IDeleteAudienceButton {
  handleClick: () => void;
  disabled?: boolean;
}

const DeleteAudienceButton = ({ handleClick, disabled = false }: IDeleteAudienceButton) => {
  const { t } = useTranslation('orderStatus');
  return (
    <IconButton
      tooltip={t('fields.notification.deleteAudienceButton')}
      color='error'
      size='small'
      onClick={handleClick}
      disabled={disabled}
      sx={{
        bgcolor: 'error.main',
        color: 'common.white',
        ':hover': {
          bgcolor: 'error.dark',
        },
        ':disabled': {
          bgcolor: 'background.default',
        },
      }}
    >
      <DeleteIcon fontSize='small' />
    </IconButton>
  );
};

export default DeleteAudienceButton;
