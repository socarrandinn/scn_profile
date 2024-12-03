import { memo } from 'react';
import { ExportButton } from '@dfl/mui-admin-layout';
import { ExportProps } from 'modules/export/interfaces/common-export';
import { useExportPayload } from 'modules/export/hooks/common/useExportPayload';
import { useExportSuppliers } from 'modules/export/hooks/inventory/useInventoryExportToExcel';
import DialogDownload from 'modules/export/components/Dialog/DialogDownload';

const SupplerProductExportButton = ({ ...props }: ExportProps) => {
  const { isOpen, onClose, OpenExport, wFilters } = useExportPayload(props);

  const { mutateAsync: handleExport, error: errorExport } = useExportSuppliers({
    onClose,
    payload: {
      total: props.total ?? 0,
      search: props.search,
      filters: wFilters,
    },
  });

  const handleExportMutate = () => {
    OpenExport?.();
    handleExport?.();
    // setAnchor(null);
  };

  return (
    <>
      <ExportButton onClick={handleExportMutate} />
      <DialogDownload isOpen={isOpen} error={errorExport} onClose={onClose} />
    </>
  );
};

export default memo(SupplerProductExportButton);
