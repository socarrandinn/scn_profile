import { memo, useMemo } from 'react';
import { ExportButton } from '@dfl/mui-admin-layout';
import { useExportLogisticProducts } from 'modules/export/hooks/inventory/useInventoryExportToExcel';
import { ExportProviderProps } from 'modules/export/interfaces/common-export';
import { useExportPayload } from 'modules/export/hooks/common/useExportPayload';
import { DownloadFile } from 'modules/export/components/DownlandFile';
import { InventoryDownloadService } from 'modules/export/services';
import { getFileName } from 'modules/export/utils/file';
const LogisticProductExportButton = (props: ExportProviderProps) => {
  const { isOpen, onClose, OpenExport, wFilters } = useExportPayload(props);
  const fileName = useMemo(() => getFileName(`${props?.name?.toLocaleLowerCase()}-products`), [props?.name]);

  const { data } = useExportLogisticProducts({
    isOpenModal: isOpen,
    payload: {
      ...props,
      filters: wFilters,
    },
  });

  const fnDownload = (path: string) => InventoryDownloadService._downloadFileToExcel(path, fileName);
  return (
    <>
      <ExportButton onClick={OpenExport} />
      <DownloadFile isOpen={isOpen} onClose={onClose} fnDownloadService={fnDownload} initResponse={data} />
    </>
  );
};

export default memo(LogisticProductExportButton);
