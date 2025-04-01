import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar, AddButton } from '@dfl/mui-admin-layout';
import CollectionsCreateModal from 'modules/cms/collections/containers/CollectionsCreateModal';
import { COLLECTIONS_PERMISSIONS } from 'modules/cms/collections/constants/collections.permissions';
import { GeneralActions } from 'layouts/portals';
import { PermissionCheck } from '@dfl/react-security';
import { useTranslation } from 'react-i18next';
import { COLLECTION_CONTENT_TYPE } from '../../constants/collection-types';
import { initCollectionValues } from '../../hooks/useCollectionsCreateForm';
import { TableHeaderOptions } from 'components/libs/table';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { getDefaultFilterKeys } from 'utils/custom-filters';
import { collectionsProductFilters } from '../../constants';

const useToolbarSetting = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  const settings = useMemo<TableHeaderOptions>(() => {
    return {
      actions: {
        create: false,
        export: false,
        menuFilter: false,
      },
      filter: {
        activeMenu: true,
        defaultFilterKeys: getDefaultFilterKeys(collectionsProductFilters),
      },
    };
  }, []);

  return {
    isOpen,
    onOpen,
    onClose,
    settings,
  };
};

type Props = {
  contentType: COLLECTION_CONTENT_TYPE;
};
const CollectionsListToolbar = ({ contentType }: Props) => {
  const { t } = useTranslation('collection');
  const { isOpen, settings, onClose, onOpen } = useToolbarSetting();

  return (
    <>
      <TableToolbar selectActions={<Stack direction={'row'} spacing={1}></Stack>}>
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        <PermissionCheck permissions={COLLECTIONS_PERMISSIONS.COLLECTIONS_WRITE}>
          <AddButton action={onOpen}>{t('create')}</AddButton>
        </PermissionCheck>
      </GeneralActions>
      <CollectionsCreateModal
        title='modal.create'
        open={isOpen}
        onClose={onClose}
        initValue={{ ...initCollectionValues, contentType }}
      />
    </>
  );
};

export default memo(CollectionsListToolbar);
