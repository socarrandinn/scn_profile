import { FC, memo } from 'react';
import { Skeleton, Stack, StackProps } from '@mui/material';
import { FormPaper } from 'modules/common/components/FormPaper';

const SupplierStoreProductTabSkeleton = () => {
  return (
    <FormPaper title=''>
      <Stack gap={2}>
        <Section gap={2} flexDirection={'row'} />
        <Section gap={2} variant='text' />
      </Stack>
    </FormPaper>
  );
};

export default memo(SupplierStoreProductTabSkeleton);

type Props = StackProps & {
  variant?: 'text' | 'rectangular' | 'rounded' | 'circular';
};
const Section: FC<Props> = ({ variant, ...props }: Props) => {
  return (
    <Stack {...props}>
      {Array(6)
        .fill('')
        .map((sk) => (
          <Skeleton variant={variant || 'rectangular'} sx={{ width: '100%', height: 30 }} key={sk} />
        ))}
    </Stack>
  );
};
