import { useToggle } from '@dfl/hook-utils';
import { DropDown } from '@dfl/mui-react-common';
import { FilterFactory, InFilter } from '@dofleini/query-builder';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { OptionItem } from './OptionItem';
import ProductOfferBulkCreateModal from '../../containers/ProductOfferBulkCreateModal';
import ProductOfferBulkAddModal from '../../containers/ProductOfferBulkAddModal';

type AddProductsToOfferSelectorProps = {
  search: any;
  filters: any;
  selectedItems?: readonly string[];
  total?: number;
};

export const DropDownPaper = styled(Paper)(() => ({
  overflow: 'unset !important',
  position: 'relative',
  marginTop: 5,
}));

const menuProps = {
  PaperProps: {
    component: DropDownPaper,
  },
};

const AddProductsToOfferSelector = ({ filters, selectedItems, total }: AddProductsToOfferSelectorProps) => {
  const { isOpen, onOpen, onClose } = useToggle();
  const { t } = useTranslation('productDiscount');

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
      <ProductOfferBulkCreateModal
        open={isOpenCreateSelected}
        onClose={onCloseCreateSelected}
        filters={selectedFilter}
        total={selectedItems?.length || 0}
      />
      <ProductOfferBulkCreateModal
        open={isOpenCreateAll}
        onClose={onCloseCreateAll}
        filters={filters}
        total={total || 0}
      />
      <ProductOfferBulkAddModal
        open={isOpenUpdateSelected}
        onClose={onCloseUpdateSelected}
        filters={selectedFilter}
        total={selectedItems?.length || 0}
      />
      <ProductOfferBulkAddModal
        open={isOpenUpdateAll}
        onClose={onCloseUpdateAll}
        filters={filters}
        total={total || 0}
      />
      <DropDown
        variant={'contained'}
        label={t('productBulk.action')}
        id={'product-discount-options'}
        buttonProps={{}}
        open={isOpen}
        menuProps={menuProps}
        onOpen={onOpen}
        onClose={onClose}
      >
        <OptionItem
          add
          label={t('productBulk.menus.create')}
          onClose={onClose}
          selectedCount={selectedItems?.length || 0}
          allCount={total || 0}
          selectedAction={handleOpenCreateSelected}
          allAction={handleOpenCreateAll}
        />
        <OptionItem
          label={t('productBulk.menus.addTo')}
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

export default memo(AddProductsToOfferSelector);
