import { memo } from 'react';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MuiLink from '@mui/material/Link';
import { LanguageSelector } from '@dfl/mui-react-common';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const AuthOptions = () => {
  const { t } = useTranslation('authentication');
  return (
    <div className={'p-4 lg:mt-8 flex justify-center'}>
      <Stack direction='row' spacing={2} alignItems={'center'}>
        <LanguageSelector
          mini={false}
          compProps={{ underline: 'hover', className: 'flex items-center' }}
          icon={<LanguageOutlinedIcon fontSize={'small'} sx={{ mt: '-1px', mr: '2px' }} />}
        />
        <MuiLink
          to={'/terms-conditions'}
          component={Link}
          underline='hover'
          target='_blank'
          className={'flex items-center'}
        >
          <FiberManualRecordIcon sx={{ fontSize: '8px', mr: '2px' }} />
          {t('termsConditions')}
        </MuiLink>
      </Stack>
    </div>
  );
};

export default memo(AuthOptions);
