import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindAdvertisements } from 'modules/rrhh/advertisement/hooks/useFindAdvertisements';
import { advertisementColumns } from 'modules/rrhh/advertisement/constants/advertisement.columns';
import { AdvertisementListToolbar } from 'modules/rrhh/advertisement/components/AdvertisementListToolbar';
import AdvertisementEditModal from 'modules/rrhh/advertisement/containers/AdvertisementEditModal';

const AdvertisementListContainer = () => {
  const { isLoading, error, data } = useFindAdvertisements();
  return (
    <Box>
      <AdvertisementListToolbar />
      <Table
        columns={advertisementColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
      <AdvertisementEditModal />
    </Box>
  );
};

export default memo(AdvertisementListContainer);
