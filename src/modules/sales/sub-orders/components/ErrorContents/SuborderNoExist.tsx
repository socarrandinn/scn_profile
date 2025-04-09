import { Chip, Stack } from '@mui/material';
import DetailHeaderAction from 'modules/inventory/product-stock/components/DetailHeaderAction/DetailHeaderAction';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  onInitialClose: () => void;
  title: string;
  label: string;
  items: string[];
};
const ErrorNoExist = ({ items, onInitialClose, title, label }: Props) => {
  const { t } = useTranslation('subOrder');

  const getLabel = useCallback(
    (_label: string) => {
      if (_label === null) return t(label);

      return _label;
    },
    [label, t],
  );

  if (items?.length === 0) return <></>;
  return (
    <Stack gap={1} minHeight={400} maxHeight={600}>
      <DetailHeaderAction onClose={onInitialClose} title={title} />
      <Stack mt={2} gap={1} flexDirection={'row'} flexWrap={'wrap'}>
        {items?.map((item) => (
          <Chip key={item} label={getLabel(item)} />
        ))}
      </Stack>
    </Stack>
  );
};

export default ErrorNoExist;
