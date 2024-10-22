import { memo } from 'react';
import { Button } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { useTranslation } from 'react-i18next';

// todo definir useFindOneTransferWire
const OrderDownloadEvidence = ({ orderId }: { orderId: string }) => {
  const { t } = useTranslation('order');
  /* const { data } = useFindOneTransferWire(orderId);
  if (!data?.data?.[0]?.paymentEvidence || !data) return <></>; */
  return (
    <Button
      href={'#'} // {data?.data?.[0]?.paymentEvidence}
      download='file'
      target='_blank'
      variant='outlined'
      startIcon={<CloudDownloadIcon />}
    >
      {t('header.actions.clientEvidence')}
    </Button>
  );
};

export default memo(OrderDownloadEvidence);
