import { memo, useCallback, useMemo } from 'react';
import { ChildrenProps, IStatus, StatusPicker } from '@dfl/mui-react-common';
import { Badge, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
  COLLECTION_BANNERS_POSITION,
  COLLECTION_CONTENT_TYPE,
  COLLECTION_POSITION,
  COLLECTION_PRODUCTS_POSITION,
  POSITION_COLLECTION_COLORS,
} from '../../constants/collection-types';
import useUpdateCollectionPositionStatus from '../../hooks/useUpdateCollectionPositionStatus';
import CollectionHandlerError from '../HandleErrors/CollectionHandlerError';

type Props = {
  status: COLLECTION_POSITION;
  collectionId: string;
  isButton?: boolean;
  noBadge?: boolean;
  loading?: boolean;
  readOnly?: boolean;
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
  noBadge = false,
  readOnly = false,
  ...props
}: Props) => {
  const { mutateAsync, isLoading, error, variables } = useUpdateCollectionPositionStatus(collectionId, contentType);
  const { t } = useTranslation();
  const statusMap = useMemo(() => {
    return {
      _id: status,
      title: t(`collection:position.${contentType ?? 'PRODUCT'}.${status}`),
      color: POSITION_COLLECTION_COLORS[status],
    };
  }, [contentType, status, t]);

  const options = useMemo(
    () =>
      positionsOptions[contentType]?.map((option) => ({
        _id: option,
        title: t(`collection:position.${contentType ?? 'PRODUCT'}.${option}`),
        color: POSITION_COLLECTION_COLORS[option],
      })),
    [contentType, t],
  );

  const handleForce = useCallback(
    () =>
      mutateAsync({
        position: variables?.position as COLLECTION_POSITION,
        force: true,
      }),
    [mutateAsync, variables],
  );

  return (
    <>
      <CollectionHandlerError error={error} isLoading={isLoading} onConfirm={handleForce} noHandleError />
      <Box
        sx={{
          '.MuiButton-root': {
            borderRadius: button ? '5px !important' : '30px',
          },
          button: {
            minHeight: button ? 36 : 30,
            pl: 2,
          },
          '.MuiChip-root': {
            minHeight: button ? 36 : 30,
          },
        }}
      >
        <BadgeLayout noBadge={noBadge}>
          <StatusPicker
            readOnly={readOnly}
            options={options}
            name='position'
            size='small'
            isLoading={isLoading || loading}
            value={statusMap}
            onChange={(status: IStatus) => mutateAsync({ position: status?._id as COLLECTION_POSITION })}
            {...props}
          />
        </BadgeLayout>
      </Box>
    </>
  );
};

export default memo(CollectionPositionStatus);

const BadgeLayout = ({ children, noBadge = false }: ChildrenProps & { noBadge?: boolean }) => {
  const { t } = useTranslation();
  if (noBadge) return <>{children}</>;
  return (
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
      {children}
    </Badge>
  );
};
