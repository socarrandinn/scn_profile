import { useMutation } from '@tanstack/react-query';
import { ProductExportPayloadProps } from 'modules/export/interfaces/common-export';
import { ProductExportService } from 'modules/export/services';

export const useExportProducts = ({
  onClose,
  payload,
}: {
  payload: ProductExportPayloadProps;
  onClose?: () => void;
}) => {
  return useMutation(
    ({ isVariant }: { isVariant: boolean }) => ProductExportService.exportToExcel(payload, isVariant),
    {
      onSuccess: () => {
        onClose?.();
      },
    },
  );
};
