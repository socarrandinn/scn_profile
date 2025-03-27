import { memo, useCallback, useMemo, useRef } from 'react';
import { MenuItem } from '@mui/material';
import { DropDown } from '@dfl/mui-react-common';
import { useToggle } from '@dfl/hook-utils';
import { useTranslation } from 'react-i18next';
import { InFilter } from '@dofleini/query-builder';
import { menuProps } from 'modules/sales/common/constants/drop-down-styled';
import SubOrderStatusChangeModal from '../../containers/SubOrderStatusChangeModal';

type Props = {
  filters: any;
  selectedItems?: readonly string[];
  total?: number;
};

const SubOrderStatusChange = ({ filters, selectedItems, total }: Props) => {
  const filterToUse = useRef(selectedItems);
  const isAllOption = useRef(false);
  const { isOpen, onOpen, onClose } = useToggle();
  const { t } = useTranslation('subOrder');

  const selectedFilter = useMemo(() => {
    if (Array.isArray(selectedItems) && selectedItems.length > 0) {
      return new InFilter({
        field: '_id',
        objectId: true,
        value: selectedItems,
        type: 'IN',
      });
    }
    return filters;
  }, [selectedItems, filters]);
  const { isOpen: isOpenModal, onOpen: onOpenModal, onClose: onCloseCreateSelected } = useToggle();

  const handleAllSelection = useCallback(() => {
    isAllOption.current = true;
    filterToUse.current = filters;
    onOpenModal();
    onClose();
  }, [filters, onClose, onOpenModal]);

  const handleSelection = useCallback(() => {
    isAllOption.current = false;
    filterToUse.current = selectedFilter;
    onOpenModal();
    onClose();
  }, [onClose, onOpenModal, selectedFilter]);

  return (
    <>
      <DropDown
        variant={'contained'}
        label={t('changeStatus.title')}
        id={'status-change-options'}
        buttonProps={{}}
        open={isOpen}
        menuProps={menuProps}
        onOpen={onOpen}
        onClose={onClose}
      >
        <MenuItem value={10} onClick={handleSelection} disabled={!selectedItems?.length}>
          {t('changeStatus.selected', { count: selectedItems?.length || 0 })}
        </MenuItem>
        <MenuItem value={10} onClick={handleAllSelection}>
          {t('changeStatus.all', { count: total || 0 })}
        </MenuItem>
      </DropDown>

      <SubOrderStatusChangeModal
        isAll={isAllOption.current}
        total={isAllOption.current ? total : selectedItems?.length}
        open={isOpenModal}
        onClose={onCloseCreateSelected}
        filters={filterToUse?.current}
      />
    </>
  );
};

export default memo(SubOrderStatusChange);
