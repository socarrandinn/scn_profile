import { Collapse } from '@mui/material';
import { memo, ReactNode, useState } from 'react';
import { ExpandMore } from './styled';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ChildrenProps, DetailStack, DetailStackItemRecord } from '@dfl/mui-react-common';
import { usePaidOrderContext } from 'modules/sales/paid-order/contexts/PaidOrderContext';

type OrderInvoiceShippingDetailsProps = {
  onDetails: (actions: ReactNode) => DetailStackItemRecord[];
};
const OrderInvoiceShippingDetails = ({ onDetails, children }: OrderInvoiceShippingDetailsProps & ChildrenProps) => {
  const { order } = usePaidOrderContext();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <DetailStack
        p={0}
        details={onDetails(
          <ExpandMore
            size='small'
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'
            sx={{ marginTop: -0.8, p: 0 }}
          >
            <ExpandMoreIcon fontSize='small' />
          </ExpandMore>,
        )}
        data={order}
      />
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        {children}
      </Collapse>
    </>
  );
};

export default memo(OrderInvoiceShippingDetails);
