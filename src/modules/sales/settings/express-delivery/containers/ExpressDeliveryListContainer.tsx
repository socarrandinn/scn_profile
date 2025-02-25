import { memo } from 'react';
import Box from '@mui/material/Box';
import { ExpressDeliveryListToolbar } from 'modules/sales/settings/express-delivery/components/ExpressDeliveryListToolbar';
import { ConditionContainer } from '@dfl/mui-react-common';
import EmptyLocationContainer from '../../common/containers/EmptyLocationContainer';
import DeliveryContainerTable from '../../common/containers/DeliveryContainerTable';
import { useFindExpressDeliveryPlaces } from '../hooks/useFindExpressDeliveryPlaces';
import ExpressDeliveryEditModal from './ExpressDeliveryEditModal';

const ExpressDeliveryListContainer = () => {
  const { isLoading, error, data } = useFindExpressDeliveryPlaces();

  return (
    <>
      <ConditionContainer active={data?.data?.length} alternative={<EmptyLocationContainer />}>
        <ExpressDeliveryListToolbar />
        <DeliveryContainerTable
          data={data}
          error={error}
          isLoading={isLoading}
        />
      </ConditionContainer>
      <ExpressDeliveryEditModal />
    </>
  );
};

export default memo(ExpressDeliveryListContainer);
