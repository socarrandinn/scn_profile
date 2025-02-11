import { memo, useCallback, useMemo } from 'react';
import { TableToolbar } from '@dfl/mui-admin-layout';
import { useNavigate } from 'react-router';
import { TableHeaderOptions } from 'components/libs/table/toolbar/TableHeaderOptions';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { GeneralActions } from 'layouts/portals';
import { PermissionCheck } from '@dfl/react-security';
import { COLLECTIONS_PERMISSIONS } from '../../constants';
import { COLLECTION_CONTENT_TYPE, DYNAMIC_COLLECTION_TYPE } from '../../constants/collection-types';
import { ConditionContainer } from '@dfl/mui-react-common';
import { useCollectionDetails } from '../../context/CollectionContext';
import { Divider, Stack } from '@mui/material';
import { CollectionDynamicTypeStatus } from '../CollectionDynamicTypeStatus';
import CollectionAddElementButton from '../CollectionAddElement/CollectionAddElementButton';
import { ElementSizeChip } from '../ElementSizeChip/ElementSizeChip';

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

  const isCustom = useMemo(() => collection?.settings?.type === DYNAMIC_COLLECTION_TYPE.CUSTOM, [collection]);

  const componentType = useMemo(
    () => (
      <CollectionDynamicTypeStatus
        settings={collection?.settings as any}
        collectionId={collection?._id || ''}
        contentType={contentType as COLLECTION_CONTENT_TYPE.PRODUCT | COLLECTION_CONTENT_TYPE.CATEGORY}
      />
    ),
    [collection?._id, collection?.settings, contentType],
  );

  return (
    <>
      <TableToolbar selectActions={<></>}>
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        <PermissionCheck permissions={[COLLECTIONS_PERMISSIONS.COLLECTIONS_WRITE]}>
          <ConditionContainer
            active={isCustom}
            alternative={
              <Stack
                sx={{ gap: 1, flexDirection: 'row', justifyContent: 'flex-end' }}
                divider={<Divider orientation='vertical' flexItem />}
              >
                <ElementSizeChip size={collection?.settings?.size as number} />
                {componentType}
              </Stack>
            }
          >
            <Stack
              sx={{ gap: 1, flexDirection: 'row', justifyContent: 'flex-end' }}
              divider={<Divider orientation='vertical' flexItem />}
            >
              <CollectionAddElementButton contentType={contentType} />
              {componentType}
            </Stack>
          </ConditionContainer>
        </PermissionCheck>
      </GeneralActions>
    </>
  );
};

export default memo(CollectionElementListToolbar);
