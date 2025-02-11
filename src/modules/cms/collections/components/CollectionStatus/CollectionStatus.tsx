import { memo, useMemo } from 'react';
import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { Box } from '@mui/material';
import useUpdateCollectionStatus from '../../hooks/useUpdateCollectionStatus';
import { COLLECTION_STATUS, COLLECTION_STATUS_MAP } from '../../constants/collection-status';
import { useTranslation } from 'react-i18next';
import { COLLECTION_CONTENT_TYPE } from '../../constants/collection-types';

type Props = {
  status: boolean;
  collectionId: string;
  contentType: COLLECTION_CONTENT_TYPE;
  isButton?: boolean;
  loading?: boolean;
};

const CollectionStatus = ({ status, collectionId, contentType, isButton: button, loading, ...props }: Props) => {
  const { mutateAsync, isLoading } = useUpdateCollectionStatus(collectionId, contentType);
  const { t } = useTranslation();
  const statusMap = useMemo(() => {
    const s = COLLECTION_STATUS_MAP.get(status) as IStatus;
    return {
      ...s,
      title: t(s?.title),
    };
  }, [status, t]);

  const options = useMemo(() => COLLECTION_STATUS?.map((option) => ({ ...option, title: t(option.title) })), [t]);

  return (
    <>
      <Box
        sx={{
          '.MuiButton-root': {
            borderRadius: button ? '5px !important' : '30px',
          },
          button: {
            minHeight: button ? 36 : 'auto',
            pl: 2,
          },
        }}
      >
        <StatusPicker
          options={options}
          name='active'
          size='small'
          isLoading={isLoading || loading}
          value={statusMap}
          onChange={(status: IStatus) => mutateAsync(status?._id)}
          {...props}
        />
      </Box>
    </>
  );
};

export default memo(CollectionStatus);
