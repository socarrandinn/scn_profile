import { DialogForm } from '@dfl/mui-react-common';
import { Button, DialogActions, DialogContent, Stack } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ZoneItem } from './ZoneItem';

type ZoneDialogProps = {
  locations: string[];
  onClose: () => void;
  open: boolean;
};

const ZoneDialog = ({ locations, onClose, open }: ZoneDialogProps) => {
  const { t } = useTranslation('store');
  return (
    <DialogForm
      open={open}
      maxWidth={'xs'}
      onClose={onClose}
      title={t('fields.locations')}
      aria-labelledby={'add-user-to-role-title'}
    >
      <DialogContent>
        <Stack gap={1} flexDirection={'row'} flexWrap={'wrap'}>
          {locations?.map((l) => (
            <ZoneItem key={l} state={l} />
          ))}
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>{t('common:cancel')}</Button>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(ZoneDialog);
