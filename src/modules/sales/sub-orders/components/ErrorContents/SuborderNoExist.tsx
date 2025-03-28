import { Chip, Stack } from '@mui/material';
import DetailHeaderAction from 'modules/inventory/product-stock/components/DetailHeaderAction/DetailHeaderAction';

type Props = {
  onInitialClose: () => void;
  title: string;
  items: string[];
};
const ErrorNoExist = ({ items, onInitialClose, title }: Props) => {
  if (items?.length === 0) return <></>;
  return (
    <Stack gap={1} minHeight={400} maxHeight={600}>
      <DetailHeaderAction onClose={onInitialClose} title={title} />
      <Stack mt={2} gap={1} flexDirection={'row'} flexWrap={'wrap'}>
        {items?.map((item) => (
          <Chip key={item} label={item} />
        ))}
      </Stack>
    </Stack>
  );
};

export default ErrorNoExist;
