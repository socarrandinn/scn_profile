import { Clear, Search } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
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
        startAdornment: <Search sx={{ color: (theme) => theme.palette.grey[700] }} />,
        endAdornment: searchTerm && (
          <IconButton
            onClick={() => {
              setSearchTerm('');
            }}
          >
            <Clear />
          </IconButton>
        ),
      }}
    />
  );
};

export default memo(ExcludeFilterSearch);
