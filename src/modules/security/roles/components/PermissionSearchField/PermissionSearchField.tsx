import { Search } from '@mui/icons-material';
import { TextField } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
type PermissionSearchProps = {
  searchTerm: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const PermissionSearchField = ({ handleSearchChange, searchTerm }: PermissionSearchProps) => {
  const { t } = useTranslation('common');
  return (
    <TextField
      label={t('common:search')}
      variant='outlined'
      fullWidth
      value={searchTerm}
      onChange={handleSearchChange}
      sx={{ mb: 1 }}
      InputProps={{
        startAdornment: <Search sx={{ color: (theme) => theme.palette.grey[700], mr: 1 }} />,
        placeholder: t('common:search'),
      }}
    />
  );
};

export default memo(PermissionSearchField);
