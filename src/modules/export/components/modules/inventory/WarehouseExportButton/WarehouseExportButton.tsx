import { memo } from 'react';
import { ExportButton } from '@dfl/mui-admin-layout';
import { useExportWarehouses } from 'modules/export/hooks/inventory/useInventoryExportToExcel';
import { ExportProps } from 'modules/export/interfaces/common-export';
import { useExportPayload } from 'modules/export/hooks/common/useExportPayload';
import { DownloadFile } from 'modules/export/components/DownlandFile';
import { InventoryDownloadService } from 'modules/export/services';

const WarehouseExportButton = (props: ExportProps) => {
  const { isOpen, onClose, OpenExport, wFilters } = useExportPayload(props);

  const { data } = useExportWarehouses({
    isOpenModal: isOpen,
    payload: {
      total: props.total ?? 0,
      search: props.search,
      filters: wFilters,
    },
  });

  const fnDownload = (path: string) => InventoryDownloadService._downloadFileToExcel(path, 'warehouses');

  return (
    <>
      <ExportButton onClick={OpenExport} />

      <DownloadFile isOpen={isOpen} onClose={onClose} fnDownloadService={fnDownload} initResponse={data} />
    </>
  );
};

export default memo(WarehouseExportButton);
