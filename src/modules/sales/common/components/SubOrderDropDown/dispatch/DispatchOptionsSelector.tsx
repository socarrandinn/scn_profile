import { memo, useCallback, useMemo } from 'react';
import { DropDown } from '@dfl/mui-react-common';
import { useToggle } from '@dfl/hook-utils';
import { useTranslation } from 'react-i18next';
import { FilterFactory, InFilter } from '@dofleini/query-builder';
import DispatchCreateModal from '../../../../dispatch/containers/DispatchCreateModal';
import DispatchUpdateModal from '../../../../dispatch/containers/DispatchUpdateModal';
import { OptionItem } from '../OptionItem';
import { menuProps } from 'modules/sales/common/constants/drop-down-styled';

type Props = {
  filters: any;
  selectedItems?: readonly string[];
  total?: number;
};

const DispatchOptionsSelector = ({ filters, selectedItems, total }: Props) => {
  const { isOpen, onOpen, onClose } = useToggle();
  const { t } = useTranslation('dispatch');

  const selectedFilter = useMemo(() => {
    if (Array.isArray(selectedItems) && selectedItems.length > 0) {
      return FilterFactory.add(
        filters,
        new InFilter({
          field: '_id',
          objectId: true,
          value: selectedItems,
          type: 'IN',
        }),
      );
    }
    return filters;
  }, [selectedItems, filters]);

  const { isOpen: isOpenCreateSelected, onOpen: onOpenCreateSelected, onClose: onCloseCreateSelected } = useToggle();
  const { isOpen: isOpenCreateAll, onOpen: onOpenCreateAll, onClose: onCloseCreateAll } = useToggle();

  const handleOpenCreateSelected = useCallback(() => {
    onOpenCreateSelected();
  }, [onOpenCreateSelected]);

  const handleOpenCreateAll = useCallback(() => {
    onOpenCreateAll();
  }, [onOpenCreateAll]);

  const { isOpen: isOpenUpdateSelected, onOpen: onOpenUpdateSelected, onClose: onCloseUpdateSelected } = useToggle();
  const { isOpen: isOpenUpdateAll, onOpen: onOpenUpdateAll, onClose: onCloseUpdateAll } = useToggle();

  const handleOpenUpdateSelected = useCallback(() => {
    onOpenUpdateSelected();
  }, [onOpenUpdateSelected]);

  const handleOpenUpdateAll = useCallback(() => {
    onOpenUpdateAll();
  }, [onOpenUpdateAll]);

  return (
    <>
      <DispatchCreateModal open={isOpenCreateSelected} onClose={onCloseCreateSelected} filters={selectedFilter} />
      <DispatchCreateModal open={isOpenCreateAll} onClose={onCloseCreateAll} filters={filters} />
      <DispatchUpdateModal open={isOpenUpdateSelected} onClose={onCloseUpdateSelected} filters={selectedFilter} />
      <DispatchUpdateModal open={isOpenUpdateAll} onClose={onCloseUpdateAll} filters={filters} />
      <DropDown
        variant={'contained'}
        label={t('dropdown.action')}
        id={'dispatch-options'}
        buttonProps={{}}
        open={isOpen}
        menuProps={menuProps}
        onOpen={onOpen}
        onClose={onClose}
      >
        <OptionItem
          label={t('dropdown.menus.create.title')}
          add={true}
          onClose={onClose}
          selectedCount={selectedItems?.length || 0}
          allCount={total || 0}
          selectedAction={handleOpenCreateSelected}
          allAction={handleOpenCreateAll}
        />
        <OptionItem
          label={t('dropdown.menus.addTo.title')}
          add={false}
          onClose={onClose}
          selectedCount={selectedItems?.length || 0}
          allCount={total || 0}
          selectedAction={handleOpenUpdateSelected}
          allAction={handleOpenUpdateAll}
        />
      </DropDown>
    </>
  );
};

export default memo(DispatchOptionsSelector);
