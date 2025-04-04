import { LoadingButton } from '@dfl/mui-react-common';
import { useParamsLink } from '@dfl/react-security';
import { EditOutlined } from '@mui/icons-material';
import { DeleteButton } from 'components/Actions/DeleteAction';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { useDeletePage } from '../../hooks/useDeletePage';
import { Stack } from '@mui/material';

const PageHeaderActions = () => {
  const { t } = useTranslation('common');
  const { id } = useParams();
  const handleEdit = useParamsLink({ edit: id });
  const { mutate } = useDeletePage(id as string);

  return (
    <Stack direction='row' spacing={1}>
      <LoadingButton loading={!id} startIcon={<EditOutlined />} variant='outlined' onClick={handleEdit}>
        {t('edit')}
      </LoadingButton>
      <DeleteButton isLoading={false} onDelete={mutate} />
    </Stack>
  );
};

export default memo(PageHeaderActions);
