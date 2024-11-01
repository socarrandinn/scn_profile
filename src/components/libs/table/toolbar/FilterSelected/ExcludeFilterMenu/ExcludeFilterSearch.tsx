import { IconButton } from '@dfl/mui-react-common';
import { Clear, Search } from '@mui/icons-material';
import { TextField } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

type ExcludeFilterSearchProps = {
  setSearchTerm: (value: string) => void;
  searchTerm: string;
};

const ExcludeFilterSearch = ({ searchTerm, setSearchTerm }: ExcludeFilterSearchProps) => {
  const { t } = useTranslation('common');
  return (
    <TextField
      label={t('filterSearch')}
      value={searchTerm}
      onChange={(e) => {
        setSearchTerm(e.target.value);
      }}
      variant='outlined'
      size='small'
      InputProps={{
        startAdornment: <Search fontSize='small' sx={{ color: (theme) => theme.palette.grey[700] }} />,
        endAdornment: searchTerm && (
          <IconButton
            tooltip={t('clear')}
            size='small'
            onClick={() => {
              setSearchTerm('');
            }}
          >
            <Clear fontSize='inherit' />
          </IconButton>
        ),
      }}
    />
  );
};

export default memo(ExcludeFilterSearch);
