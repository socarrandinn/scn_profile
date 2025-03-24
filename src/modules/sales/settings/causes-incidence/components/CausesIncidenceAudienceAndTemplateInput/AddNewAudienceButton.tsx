import { UseFieldArrayAppend } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ICausesIncidence } from '../../interfaces';
import { Add } from '@mui/icons-material';
import { IconButton } from '@dfl/mui-react-common';

interface IAddNewAudienceButton {
  append: UseFieldArrayAppend<ICausesIncidence, 'notification.audience'>;
  disabled: boolean;
  hidden?: boolean;
}

const AddNewAudienceButton = ({ append, disabled = false, hidden = false }: IAddNewAudienceButton) => {
  const { t } = useTranslation('orderStatus');

  return (
    <IconButton
      onClick={() => {
        append({ target: [], template: '' });
      }}
      disabled={disabled}
      hidden={hidden}
      tooltip={t('fields.notification.addAudienceButton')}
      size='small'
      sx={{
        bgcolor: 'primary.main',
        color: 'common.white',
        ':hover': {
          bgcolor: 'primary.dark',
        },
        ':disabled': {
          bgcolor: 'background.default',
        },
        display: hidden ? 'none' : 'stack',
      }}
    >
      <Add fontSize='small' />
    </IconButton>
  );
};

export default AddNewAudienceButton;
