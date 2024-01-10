import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Control } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { IOrderStatus } from 'modules/order-status/interfaces';
import { OrderStatusService } from 'modules/order-status/services';
import { Checkbox } from '@mui/material';
import { ORDER_STATUSES_LIST_KEY } from 'modules/order-status/constants';
import { isOptionEqualToValue } from 'utils/comparing';

interface IAllowedToSelect {
  control: Control<IOrderStatus, any>;
}

const AllowedToSelect = ({ control }: IAllowedToSelect) => {
  const { t } = useTranslation('orderStatus');

  const renderLabel = (option: any) => {
    return option.title
  };
  const renderOption = (props: any, option: IOrderStatus, { selected }: any) => {
    return (
        <li {...props} key={option._id as string}>
          <Checkbox style={{ marginRight: 8 }} checked={selected}/>
          {option.title}
        </li>
    );
  };

  return (
    <FormAsyncSelectAutocompleteField
      fullWidth={true}
      name='allowTo'
      control={control}
      label={t('fields.allowedTo')}
      multiple={true}
      fetchFunc={OrderStatusService.search}
      fetchValueFunc={OrderStatusService.search}
      renderOption={renderOption}
      getOptionLabel={renderLabel}
      queryKey={ORDER_STATUSES_LIST_KEY}
      fieldValue={'_id'}
      disableCloseOnSelect={true}
      loadValue
      isOptionEqualToValue={isOptionEqualToValue}
    />
  );
};

export default AllowedToSelect;
