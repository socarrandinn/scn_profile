import { memo, useCallback, useMemo } from 'react';
import { Stack } from '@mui/material';
import { TableToolbar, AddButton } from '@dfl/mui-admin-layout';
import { TableHeaderOptions } from 'components/libs/table/toolbar/TableHeaderOptions';
import { DISTRIBUTION_CENTERS_PERMISSIONS } from 'modules/inventory/distribution-centers/constants/distribution-centers.permissions';
import { GeneralActions } from 'layouts/portals';
import { PermissionCheck } from '@dfl/react-security';
import { useNavigate } from 'react-router';
import { logisticSearchParam } from 'modules/inventory/warehouse/constants/warehouse.keys';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { getDefaultFilterKeys } from 'utils/custom-filters';
import { defaultDistributionCentersFilters } from '../../constants';
import DeleteButton from 'components/DeleteAction/DeleteButton';
import { useDeleteManyDistributionCenters } from '../../hooks/useDeleteManyDistributionCenters';
import ChangeManyStatusButton from 'components/VisibilityAction/ChangeManyStatusButton';
import { useVisibilityManyDistributionCenters } from '../../hooks/useVisibilityManyDistributionCenters';
import { useTranslation } from 'react-i18next';
import { CATEGORY_VISIBILITY } from 'modules/inventory/settings/category/constants';

type Props = {
  createPath?: string;
};
const useToolbarSetting = ({ createPath = 'create' }: Props) => {
  const navigate = useNavigate();
  const onOpen = useCallback(() => {
    navigate(createPath);
  }, [createPath, navigate]);
  const settings = useMemo<TableHeaderOptions>(() => {
    return {
      actions: {
        create: false,
        export: false,
      },
      filter: {
        activeMenu: true,
        defaultFilterKeys: getDefaultFilterKeys(defaultDistributionCentersFilters),
      },
    };
  }, []);

  return {
    onOpen,
    settings,
  };
};

type ToolbarProps = {
  logisticProviderId?: string;
};

const DistributionCentersListToolbar = ({ logisticProviderId }: ToolbarProps) => {
  const { t } = useTranslation('distributionCenters');
  const { settings, onOpen } = useToolbarSetting({
    createPath: logisticProviderId ? `create?${logisticSearchParam}=${logisticProviderId}` : undefined,
  });

  const { isLoading, mutate } = useDeleteManyDistributionCenters();
  const { isLoading: isVisibilityLoading, mutate: visibilityMutate } = useVisibilityManyDistributionCenters();

  return (
    <>
      <TableToolbar
        selectActions={
          <Stack direction={'row'} spacing={1}>
            <DeleteButton isLoading={isLoading} onDelete={mutate} many customConfirmation={t('distributionCenter.deleteMany')} />
            <ChangeManyStatusButton
              isLoading={isVisibilityLoading}
              onChange={visibilityMutate}
              title={t('common:visibilityMany')}
              options={CATEGORY_VISIBILITY?.map((s) => ({ ...s, title: t(s?.title) }))}
            />
          </Stack>
        }
      >
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        <PermissionCheck permissions={DISTRIBUTION_CENTERS_PERMISSIONS.DISTRIBUTION_CENTERS_WRITE}>
          <AddButton action={onOpen} />
        </PermissionCheck>
      </GeneralActions>
    </>
  );
};
export default memo(DistributionCentersListToolbar);
