import { PermissionCheck } from '@dfl/react-security';
import { Typography } from '@mui/material';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { TAGS_PERMISSIONS } from '../../constants';
import { AddButton } from '@dfl/mui-admin-layout';
import { useNavigate } from 'react-router';
import { InfoOutlined, ListAltOutlined } from '@mui/icons-material';

const EmptyTags = () => {
  const { t } = useTranslation('tags');
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate('/inventory/settings/tags');
  }, [navigate]);

  return (
    <>
      <div className='flex gap-2 items-center'>
        <InfoOutlined fontSize='small' />
        <Typography variant='h3'>{t('emptyTags.title')}</Typography>
      </div>
      <PermissionCheck permissions={TAGS_PERMISSIONS.TAGS_WRITE}>
        <Typography sx={{ my: 1 }}>{t('emptyTags.description')}</Typography>
        <AddButton action={handleClick}>{t('create')}</AddButton>
      </PermissionCheck>
    </>
  );
};

export default memo(EmptyTags);
