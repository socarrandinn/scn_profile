import { memo, useMemo } from 'react';
import { ReactLink, useSecurity } from '@dfl/react-security';
import { Stack, Typography } from '@mui/material';
import { ConditionContainer } from '@dfl/mui-react-common';

type Props = {
  value: string;
  record: any;
};

const OfferNameCell = ({ value, record }: Props) => {
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
      <ConditionContainer active={hasPermission(['OFFER_REPORT_VIEW'])} alternative={name}>
        <ReactLink to={`/sales/offers/settings/offer_orders/${record._id as string}`} underline={'hover'}>
          {name}
        </ReactLink>
      </ConditionContainer>
    </Stack>
  );
};

export default memo(OfferNameCell);
