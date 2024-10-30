import { memo, useState } from 'react';
import { ExportButton } from '@dfl/mui-admin-layout';
import { MenuItem } from '@mui/material';
import Menu from '@mui/material/Menu';
import { useTranslation } from 'react-i18next';

const ProductExportButton = () => {
  const { t } = useTranslation('product');
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);

  const handleClick = (event: any) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  return (
    <>
      <ExportButton className={'w-'} onClick={handleClick} disabled />
      <Menu
        id='basic-menu'
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          onClick={(e) => {
            // @ts-ignore
            handleExportMutate?.(e);
          }}
        >
          {t('whitVariant')}
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            // @ts-ignore
            handleExportMutate?.(e);
          }}
        >
          {t('noVariant')}
        </MenuItem>
      </Menu>
    </>
  );
};

export default memo(ProductExportButton);
