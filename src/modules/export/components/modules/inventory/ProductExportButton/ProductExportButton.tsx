import { memo } from 'react';
import { ExportButton } from '@dfl/mui-admin-layout';
import { useExportProducts } from 'modules/export/hooks/inventory/useInventoryExportToExcel';
import { ExportProps } from 'modules/export/interfaces/common-export';
import DialogDownload from 'modules/export/components/Dialog/DialogDownload';
import { useExportPayload } from 'modules/export/hooks/common/useExportPayload';

const ProductExportButton = (props: ExportProps) => {
  /* const { t } = useTranslation('product');
  const [anchor, setAnchor] = useState<null | HTMLElement>(null); */
  const { isOpen, onClose, OpenExport, wFilters } = useExportPayload(props);

  /*  const handleClick = (event: any) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  }; */

  const { mutateAsync: handleExport, error: errorExport } = useExportProducts({
    onClose,
    payload: {
      total: props.total ?? 0,
      search: props.search,
      filters: wFilters,
    },
  });
  const handleExportMutate = (isVariant: boolean) => {
    OpenExport?.();
    handleExport?.({
      isVariant,
    });
    // setAnchor(null);
  };

  return (
    <>
      <ExportButton
        onClick={() => {
          handleExportMutate(false);
        }}
      />
      {/* <Menu
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
      </Menu> */}

      <DialogDownload isOpen={isOpen} error={errorExport} onClose={onClose} />
    </>
  );
};

export default memo(ProductExportButton);
