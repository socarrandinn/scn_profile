import { memo, useMemo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import { IStore } from 'modules/inventory/store/interfaces';
import { StoreService } from 'modules/inventory/store/services';
import { LOGISTIC_STORES_LIST_KEY } from 'modules/inventory/provider/logistics/constants';
import { TermFilter } from '@dofleini/query-builder';
import { useLogisticsDetailContext } from '../../context/LogisticDetail';

type SelectLogisticStoresProps = {
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const renderLabel = (option: IStore) => option.name || '';

const renderOption = (props: any, option: IStore, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const isOptionEqualToValue = (option: IStore | any, value: IStore | any) => {
  const optionId = option?.store || option?._id || option;
  const valueId = value?.store || value?._id || value;
  return optionId === valueId;
};

const SelectLogisticStores = ({ name, multiple, label, helperText, ...props }: SelectLogisticStoresProps) => {
  const { logisticId } = useLogisticsDetailContext();

  const filters = useMemo(() => {
    return new TermFilter({ field: 'logistic._id', value: logisticId, objectId: true });
  }, [logisticId]);

  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={multiple}
      label={label}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={StoreService.search}
      fetchOption={{ filters }}
      queryKey={LOGISTIC_STORES_LIST_KEY}
      autoHighlight
      id='select-store'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
      isOptionEqualToValue={isOptionEqualToValue}
      loadValue
    />
  );
};

export default memo(SelectLogisticStores);
