import { ArrowBackIosNew } from '@mui/icons-material';
import { IconButton, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

type SupplierNoRelationActionProps = {
  onClose: () => void;
  title: string;
};

const SupplierNoRelationAction = ({ onClose, title }: SupplierNoRelationActionProps) => {
  const { t } = useTranslation('stock');
  return (
    <Stack gap={1} direction='row' alignItems={'center'}>
      <IconButton onClick={onClose}>
        <ArrowBackIosNew />
      </IconButton>
      <Typography variant='h1'>{t(title)}</Typography>
    </Stack>
  );
};

export default memo(SupplierNoRelationAction);
