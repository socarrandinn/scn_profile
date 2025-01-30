import { memo, useMemo } from 'react';
import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { Badge, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
  COLLECTION_BANNERS_POSITION,
  COLLECTION_CONTENT_TYPE,
  COLLECTION_POSITION,
  COLLECTION_PRODUCTS_POSITION,
} from '../../constants/collection-types';
import useUpdateCollectionPositionStatus from '../../hooks/useUpdateCollectionPositionStatus';
import { GREEN } from 'settings/theme';

type Props = {
  status: COLLECTION_POSITION;
  collectionId: string;
  isButton?: boolean;
  loading?: boolean;
  contentType: COLLECTION_CONTENT_TYPE.BANNER | COLLECTION_CONTENT_TYPE.PRODUCT;
};

type COLLECTION = 'BANNER' | 'PRODUCT';

const positionsOptions: Record<COLLECTION, COLLECTION_POSITION[]> = {
  [COLLECTION_CONTENT_TYPE.BANNER]: Object.values(COLLECTION_BANNERS_POSITION),
  [COLLECTION_CONTENT_TYPE.PRODUCT]: Object.values(COLLECTION_PRODUCTS_POSITION),
};
const CollectionPositionStatus = ({
  status,
  collectionId,
  isButton: button,
  loading,
  contentType,
  ...props
}: Props) => {
  const { mutateAsync, isLoading } = useUpdateCollectionPositionStatus(collectionId, contentType);
  const { t } = useTranslation();
  const statusMap = useMemo(() => {
    return {
      _id: status,
      title: t(`collection:position.${contentType ?? 'PRODUCT'}.${status}`),
      color: GREEN,
    };
  }, [contentType, status, t]);

  const options = useMemo(
    () =>
      positionsOptions[contentType]?.map((option) => ({
        _id: option,
        title: t(`collection:position.${contentType ?? 'PRODUCT'}.${option}`),
        color: GREEN,
      })),
    [contentType, t],
  );

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
        <Badge
          badgeContent={t('collection:position.title')}
          color='info'
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          sx={{
            '.MuiBadge-badge': {
              borderRadius: '4px',
              right: 20,
              top: -4,
            },
          }}
        >
          <StatusPicker
            options={options}
            name='position'
            size='small'
            isLoading={isLoading || loading}
            value={statusMap}
            onChange={(status: IStatus) => mutateAsync(status?._id as COLLECTION_POSITION)}
            {...props}
          />
        </Badge>
      </Box>
    </>
  );
};

export default memo(CollectionPositionStatus);
