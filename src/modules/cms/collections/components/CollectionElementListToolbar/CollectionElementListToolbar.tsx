import { memo, useCallback } from 'react';
import { TableToolbar } from '@dfl/mui-admin-layout';
import { useNavigate } from 'react-router';
import { TableHeaderOptions } from 'components/libs/table/toolbar/TableHeaderOptions';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { GeneralActions } from 'layouts/portals';
import { PermissionCheck } from '@dfl/react-security';
import { COLLECTIONS_PERMISSIONS } from '../../constants';
import CollectionAddElementButton from '../CollectionHeaderDetails/CollectionAddElementButton';
import { COLLECTION_CONTENT_TYPE, DYNAMIC_COLLECTION_TYPE } from '../../constants/collection-types';
import { ConditionContainer } from '@dfl/mui-react-common';
import { useCollectionDetails } from '../../context/CollectionContext';
import { Divider, Stack } from '@mui/material';
import { CollectionDynamicTypeStatus } from '../CollectionDynamicTypeStatus';
import { CollectionDynamicTypeChip } from '../CollectionDynamicTypeChip/CollectionDynamicTypeChip';

const defaultSettings: TableHeaderOptions = {
  actions: {
    create: false,
    export: false,
  },
  filter: {
    // defaultFilterKeys: getDefaultFilterKeys(),
    activeMenu: true,
  },
};
const useToolbarSetting = () => {
  const navigate = useNavigate();
  const handleAddAction = useCallback(() => {
    navigate('create');
  }, [navigate]);

  return {
    handleAddAction,
    settings: defaultSettings,
  };
};

type Props = {
  contentType: COLLECTION_CONTENT_TYPE;
};
const CollectionElementListToolbar = ({ contentType }: Props) => {
  const { settings } = useToolbarSetting();
  const { collection } = useCollectionDetails();

  return (
    <>
      <TableToolbar selectActions={<></>}>
        <TableToolbarActions settings={settings} />
        <GeneralActions>
          <PermissionCheck permissions={[COLLECTIONS_PERMISSIONS.COLLECTIONS_WRITE]}>
            <ConditionContainer
              active={!collection?.isDynamic}
              alternative={<ActionByDynamic contentType={contentType} />}
            >
              <CollectionAddElementButton contentType={contentType} />
            </ConditionContainer>
          </PermissionCheck>
        </GeneralActions>
      </TableToolbar>
    </>
  );
};

export default memo(CollectionElementListToolbar);

const ActionByDynamic = ({ contentType }: Props) => {
  const { collection } = useCollectionDetails();
  // const { t } = useTranslation('collection');
  return (
    <Stack
      sx={{ gap: 1, flexDirection: 'row', justifyContent: 'flex-end' }}
      divider={<Divider orientation='vertical' flexItem />}
    >
      <CollectionDynamicTypeChip isDynamic={collection?.isDynamic || false} />

      <Stack sx={{ gap: 0.5, flexDirection: 'row', alignItems: 'center' }}>
        {/* <Typography fontWeight={700}>{t('collection:fields.position') + ':'}</Typography> */}
        <CollectionDynamicTypeStatus
          status={collection?.dynamic ?? DYNAMIC_COLLECTION_TYPE.CUSTOM}
          collectionId={collection?._id || ''}
          isButton
          contentType={contentType as COLLECTION_CONTENT_TYPE.PRODUCT | COLLECTION_CONTENT_TYPE.CATEGORY}
        />
      </Stack>
    </Stack>
  );
};
