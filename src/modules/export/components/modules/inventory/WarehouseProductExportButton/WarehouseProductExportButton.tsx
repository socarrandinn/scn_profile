import { memo } from 'react';
import { ExportButton } from '@dfl/mui-admin-layout';
import { useExportWarehouseProducts } from 'modules/export/hooks/inventory/useInventoryExportToExcel';
import { ExportWarehouseProps } from 'modules/export/interfaces/common-export';
import { useExportPayload } from 'modules/export/hooks/common/useExportPayload';
import { InventoryDownloadService } from 'modules/export/services';
import { DownloadFile } from 'modules/export/components/DownlandFile';

const WarehouseProductExportButton = (props: ExportWarehouseProps) => {
  const { isOpen, onClose, OpenExport, wFilters } = useExportPayload(props);

  const { data } = useExportWarehouseProducts({
    isOpenModal: isOpen,
    payload: {
      ...props,
      filters: wFilters,
    },
  });

  const fnDownload = (path: string) => InventoryDownloadService._downloadFileToExcel(path, 'supplier-products');
  return (
    <>
      <ExportButton onClick={OpenExport} />
      <DownloadFile isOpen={isOpen} onClose={onClose} fnDownloadService={fnDownload} initResponse={data} />
    </>
  );
};

export default memo(WarehouseProductExportButton);
