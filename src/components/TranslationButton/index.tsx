import { memo } from 'react';
import { Button } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import TranslationSelector from './TranslationSelector';

const TranslationButton = () => {
  return (
    <TranslationSelector
      component={Button}
      mini
      compProps={{ variant: 'text', color: 'secondary' }}
      icon={<TranslateIcon fontSize={'small'} />}
    />
  );
};

export default memo(TranslationButton);
