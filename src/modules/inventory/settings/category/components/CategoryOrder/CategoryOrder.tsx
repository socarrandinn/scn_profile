import { memo } from 'react';
import { IconButton } from '@dfl/mui-react-common';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';

type CategoryOrderProps = {
  rowId: string;
};

const CategoryOrder = ({ rowId }: CategoryOrderProps) => {
  const { t } = useTranslation('common');

  return (
    <Stack direction='row' spacing={1}>
      <IconButton tooltip={t('up')}>
        <ExpandLessIcon />
      </IconButton>
      <IconButton tooltip={t('down')}>
        <ExpandMoreIcon />
      </IconButton>
    </Stack>
  );
};

export default memo(CategoryOrder);
