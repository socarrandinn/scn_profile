import { memo } from 'react';
import { ChildrenProps, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { COLLECTION_CONTENT_TYPE } from '../../constants/collection-types';

import CollectionsDynamicUpdateModal from '../../containers/CollectionsDynamicUpdateModal';
import { useToggle } from '@dfl/hook-utils';
import { ICollection } from '../../interfaces';
import { Badge } from '@mui/material';

type Props = Pick<ICollection, 'settings'> & {
  collectionId: string;
  isStatus?: boolean;
  loading?: boolean;
  contentType: COLLECTION_CONTENT_TYPE.CATEGORY | COLLECTION_CONTENT_TYPE.PRODUCT;
  noBadge?: boolean;
  disabled?: boolean;
};

const CollectionDynamicTypeStatus = ({
  settings,
  collectionId,
  contentType,
  noBadge = false,
  isStatus = false,
  disabled = false,
}: Props) => {
  const { t } = useTranslation();
  const { isOpen, onClose, onOpen } = useToggle(false);

  return (
    <>
      <BadgeLayout noBadge={noBadge}>
        <LoadingButton
          sx={{
            ...(disabled && {
              '&.Mui-disabled': {
                color: '#ffff',
                backgroundColor: (theme) => `${theme.palette.primary.main} !important`,
              },
            }),
            ...(isStatus ? { borderRadius: '30px' } : {}),
          }}
          variant='contained'
          size='small'
          onClick={onOpen}
          disabled={disabled}
        >
          {t(`collection:dynamic.${contentType ?? 'PRODUCT'}.${settings?.type as string}`)}
        </LoadingButton>
      </BadgeLayout>
      <CollectionsDynamicUpdateModal
        title={t('collection:updateType')}
        open={isOpen}
        onClose={onClose}
        initValue={{
          _id: collectionId,
          settings,
          contentType,
        }}
      />
    </>
  );
};

export default memo(CollectionDynamicTypeStatus);

const BadgeLayout = ({ children, noBadge = false }: ChildrenProps & { noBadge?: boolean }) => {
  const { t } = useTranslation();
  if (noBadge) return <>{children}</>;
  return (
    <Badge
      badgeContent={t('collection:dynamic.title')}
      color='info'
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      sx={{
        '.MuiBadge-badge': {
          borderRadius: '4px',
        },
      }}
    >
      {children}
    </Badge>
  );
};
