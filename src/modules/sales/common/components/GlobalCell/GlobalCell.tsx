import { Switch } from '@mui/material';
import { IHomeDelivery, ILocation } from 'modules/sales/settings/home-delivery/interfaces';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  data: IHomeDelivery;
};

const GlobalCell = ({ data }: Props) => {
  const { t } = useTranslation('homeDelivery');

  return (
    <>
      <Switch checked={data?.global} />
      {t(`global.${data?.location?.type}`)}
    </>
  )
};

export default memo(GlobalCell);
