import { useToggle } from '@dfl/hook-utils';
import { useTableSelection } from '@dfl/mui-admin-layout';
import { useExportSelected } from 'hooks/useExportSelected';
import { ExportProps } from 'modules/export/interfaces/common-export';

export const useExportPayload = ({ filters }: ExportProps) => {
  const { isOpen, onClose, onOpen: OpenExport } = useToggle();
  const { selected } = useTableSelection();
  const { wFilters } = useExportSelected(filters, selected);
  return {
    isOpen,
    onClose,
    OpenExport,
    wFilters,
  };
};
