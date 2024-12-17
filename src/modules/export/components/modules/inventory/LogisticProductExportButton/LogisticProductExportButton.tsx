import { memo } from 'react';
import { ExportButton } from '@dfl/mui-admin-layout';
import { useExportLogisticProducts } from 'modules/export/hooks/inventory/useInventoryExportToExcel';
import { ExportProviderProps } from 'modules/export/interfaces/common-export';
import { useExportPayload } from 'modules/export/hooks/common/useExportPayload';
import { DownloadFile } from 'modules/export/components/DownlandFile';
import { InventoryDownloadService } from 'modules/export/services';
const LogisticProductExportButton = (props: ExportProviderProps) => {
  const { isOpen, onClose, OpenExport, wFilters } = useExportPayload(props);

  const { data } = useExportLogisticProducts({
    isOpenModal: isOpen,
    payload: {
      ...props,
      filters: wFilters,
    },
  });

  const fnDownload = (path: string) => InventoryDownloadService._downloadFileToExcel(path, 'logistic-products');
  return (
    <>
      <ExportButton onClick={OpenExport} />
      <DownloadFile isOpen={isOpen} onClose={onClose} fnDownloadService={fnDownload} initResponse={data} />
    </>
  );
};

export default memo(LogisticProductExportButton);
