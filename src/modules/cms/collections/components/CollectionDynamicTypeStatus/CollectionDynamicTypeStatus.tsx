import { memo, useMemo } from 'react';
import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { Badge, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { COLLECTION_CONTENT_TYPE, DYNAMIC_COLLECTION_TYPE } from '../../constants/collection-types';
import useUpdateCollectionDynamicTypeStatus from '../../hooks/useUpdateCollectionDynamicTypeStatus';
import { GREEN } from 'settings/theme';

type Props = {
  status: DYNAMIC_COLLECTION_TYPE;
  collectionId: string;
  isButton?: boolean;
  loading?: boolean;
  contentType: COLLECTION_CONTENT_TYPE.CATEGORY | COLLECTION_CONTENT_TYPE.PRODUCT;
};

type COLLECTION = 'CATEGORY' | 'PRODUCT';

const dynamicOptions: Record<COLLECTION, DYNAMIC_COLLECTION_TYPE[]> = {
  [COLLECTION_CONTENT_TYPE.PRODUCT]: Object.values(DYNAMIC_COLLECTION_TYPE),
  [COLLECTION_CONTENT_TYPE.CATEGORY]: Object.values(DYNAMIC_COLLECTION_TYPE),
};
const CollectionDynamicTypeStatus = ({
  status,
  collectionId,
  isButton: button,
  loading,
  contentType,
  ...props
}: Props) => {
  const { mutateAsync, isLoading } = useUpdateCollectionDynamicTypeStatus(collectionId, contentType);
  const { t } = useTranslation();
  const statusMap = useMemo(() => {
    return {
      _id: status,
      title: t(`collection:dynamic.${contentType ?? 'PRODUCT'}.${status}`),
      color: GREEN,
    };
  }, [contentType, status, t]);

  const options = useMemo(
    () =>
      dynamicOptions[contentType]?.map((option) => ({
        _id: option,
        title: t(`collection:dynamic.${contentType ?? 'PRODUCT'}.${option}`),
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
          badgeContent={t('collection:dynamic.title')}
          color='info'
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          sx={{
            '.MuiBadge-badge': {
              borderRadius: '4px',
            },
          }}
        >
          <StatusPicker
            options={options}
            name='settings.type'
            size='small'
            isLoading={isLoading || loading}
            value={statusMap}
            onChange={(status: IStatus) => mutateAsync(status?._id as DYNAMIC_COLLECTION_TYPE)}
            {...props}
          />
        </Badge>
      </Box>
    </>
  );
};

export default memo(CollectionDynamicTypeStatus);
