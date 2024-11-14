import { memo } from 'react';
import { Button } from '@mui/material';
import LanguageSelector from './LanguageSelector';
import { LanguageOutlined } from '@mui/icons-material';

const LanguageButton = () => {
  return (
    <LanguageSelector
      component={Button}
      mini
      compProps={{ variant: 'text', color: 'secondary' }}
      icon={<LanguageOutlined fontSize={'small'}  />}
    />
  );
};

export default memo(LanguageButton);
