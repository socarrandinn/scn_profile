import { memo } from 'react';
import { Stack } from '@mui/material';
import { RowActions } from '@dfl/mui-admin-layout';
import { useTranslation } from 'react-i18next';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import useInvalidateContact from '../../hooks/useInvalidateContact';
import { IShippingContact } from '../../interfaces/IShippingContact';

type ContactStatusProps = {
  rowId: string;
  record: IShippingContact;
};

const ContactRowActions = ({ rowId, record }: ContactStatusProps) => {
  const { t } = useTranslation('users');
  const { mutate: invalidate } = useInvalidateContact(rowId);

  return (
    <Stack direction='row' spacing={1}>
      <RowActions
        disabled={!record.verification?.isValid}
        tooltip={t('shipping.verification.invalidate')}
        // @ts-ignore
        onClick={invalidate}
        icon={PersonOffIcon}
      />
    </Stack>
  );
};

export default memo(ContactRowActions);
