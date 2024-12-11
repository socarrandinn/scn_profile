import { memo } from 'react';
import { ExportButton } from '@dfl/mui-admin-layout';
import { useExportSupplierProducts } from 'modules/export/hooks/inventory/useInventoryExportToExcel';
import { ExportProviderProps } from 'modules/export/interfaces/common-export';
import DialogDownload from 'modules/export/components/Dialog/DialogDownload';
import { useExportPayload } from 'modules/export/hooks/common/useExportPayload';

const LogisticProductExportButton = (props: ExportProviderProps) => {
  const { isOpen, onClose, OpenExport, wFilters } = useExportPayload(props);

  const { mutateAsync: handleExport, error: errorExport } = useExportSupplierProducts({
    onClose,
    payload: {
      ...props,
      filters: wFilters,
    },
  });
  const handleExportMutate = () => {
    OpenExport?.();
    handleExport?.();
  };

  return (
    <>
      <ExportButton onClick={handleExportMutate} />
      <DialogDownload isOpen={isOpen} error={errorExport} onClose={onClose} />
    </>
  );
};

export default memo(LogisticProductExportButton);
