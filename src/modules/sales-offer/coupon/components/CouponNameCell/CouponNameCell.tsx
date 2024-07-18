import { memo, useMemo } from 'react';
import { ReactLink, useSecurity } from '@dfl/react-security';
import { Stack, Typography } from '@mui/material';
import { ConditionContainer } from '@dfl/mui-react-common';
import { COUPON_PERMISSIONS } from '../../constants/coupon.permissions';

type Props = {
  value: string;
  record: any;
};

const CouponNameCell = ({ value, record }: Props) => {
  const { hasPermission } = useSecurity();

  const name = useMemo(
    () => (
      <Typography className={'truncate'} title={value} maxWidth={400}>
        {value}
      </Typography>
    ),
    [value],
  );

  return (
    <Stack direction={'row'} alignItems={'center'} spacing={2}>
      <ConditionContainer active={hasPermission([COUPON_PERMISSIONS.COUPON_WRITE])} alternative={name}>
        <ReactLink to={`/sales/offers/settings/coupons/${record._id as string}`} underline={'hover'}>
          {name}
        </ReactLink>
      </ConditionContainer>
    </Stack>
  );
};

export default memo(CouponNameCell);
