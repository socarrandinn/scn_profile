import { memo } from 'react';
import { ExportButton } from '@dfl/mui-admin-layout';
import { ExportProps } from 'modules/export/interfaces/common-export';
import { useExportPayload } from 'modules/export/hooks/common/useExportPayload';
import { useExportSuppliers } from 'modules/export/hooks/inventory/useInventoryExportToExcel';
import { DownloadFile } from 'modules/export/components/DownlandFile';
import { InventoryDownloadService } from 'modules/export/services';

const SupplerProductExportButton = ({ ...props }: ExportProps) => {
  const { isOpen, onClose, OpenExport, wFilters } = useExportPayload(props);

  const { data } = useExportSuppliers({
    isOpenModal: isOpen,
    payload: {
      total: props.total ?? 0,
      search: props.search,
      filters: wFilters,
    },
  });

  const fn = (path: string) => InventoryDownloadService._downloadFileToExcel(path, 'suppliers');

  return (
    <>
      <ExportButton onClick={OpenExport} />
      <DownloadFile isOpen={isOpen} onClose={onClose} fnDownloadService={fn} initResponse={data} />
    </>
  );
};

export default memo(SupplerProductExportButton);
