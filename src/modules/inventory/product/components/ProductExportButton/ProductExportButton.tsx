import { memo, useState } from 'react';
import { ExportButton, useTableSelection } from '@dfl/mui-admin-layout';
import { MenuItem } from '@mui/material';
import Menu from '@mui/material/Menu';
import { useTranslation } from 'react-i18next';
import { useExportProducts } from 'modules/export/hooks/inventory/useExportProducts';
import { ProductExportProps } from 'modules/export/interfaces/common-export';
import DialogDownload from 'modules/export/components/Dialog/DialogDownload';
import { useToggle } from '@dfl/hook-utils';
import { useExportSelected } from 'hooks/useExportSelected';

const ProductExportButton = (props: ProductExportProps) => {
  const { t } = useTranslation('product');
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const { isOpen, onClose, onOpen: OpenExport } = useToggle();
  const { selected } = useTableSelection();
  const { wFilters } = useExportSelected(props.filters, selected);

  const handleClick = (event: any) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const { mutateAsync: handleExport, error: errorExport } = useExportProducts({
    onClose,
    payload: {
      size: props.total ?? 0,
      page: 0,
      search: props.search,
      filters: wFilters,
    },
  });
  const handleExportMutate = (isVariant: boolean) => {
    OpenExport?.();
    handleExport?.({
      isVariant,
    });
    setAnchor(null);
  };

  return (
    <>
      <ExportButton onClick={handleClick} />
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
          onClick={() => {
            handleExportMutate(true);
          }}
        >
          {t('whitVariant')}
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleExportMutate(false);
          }}
        >
          {t('noVariant')}
        </MenuItem>
      </Menu>

      <DialogDownload isOpen={isOpen} error={errorExport} onClose={onClose} />
    </>
  );
};

export default memo(ProductExportButton);
