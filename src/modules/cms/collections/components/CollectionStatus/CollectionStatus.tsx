import { memo } from 'react';
import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { Box } from '@mui/material';
import useUpdateCollectionStatus from '../../hooks/useUpdateCollectionStatus';
import { COLLECTION_STATUS, COLLECTION_STATUS_MAP } from '../../constants/collection-status';

type Props = {
  status: boolean;
  collectionId: string;
  isButton?: boolean;
  loading?: boolean;
};

const CollectionStatus = ({ status, collectionId, isButton: button, loading, ...props }: Props) => {
  const { mutateAsync, isLoading } = useUpdateCollectionStatus(collectionId);

  return (
    <>
      <Box
        sx={{
          '.MuiButton-root': {
            borderRadius: button ? '5px !important' : '30px',
          },
          button: {
            minHeight: button ? 36 : 'auto',
            pl: 2
          },
        }}
      >
        <StatusPicker
          options={COLLECTION_STATUS}
          name='active'
          size='small'
          isLoading={isLoading || loading}
          value={COLLECTION_STATUS_MAP.get(status) as IStatus}
          onChange={(status: IStatus) => mutateAsync(status?._id)}
          {...props}
        />
      </Box>
    </>
  );
};

export default memo(CollectionStatus);
