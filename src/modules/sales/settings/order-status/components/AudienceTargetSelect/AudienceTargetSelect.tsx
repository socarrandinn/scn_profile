import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { Checkbox } from '@mui/material';
import { OrderStatusService } from 'modules/sales/settings/order-status/services';
import { IOrderStatus } from '../../interfaces';
import { Control } from 'react-hook-form';

interface IAudienceTargetSelect {
  name: string;
  control: Control<IOrderStatus, any>;
  selectedValues: string[] | [];
}

const AudienceTargetSelect = ({ name, control, selectedValues }: IAudienceTargetSelect) => {
  const { t } = useTranslation('orderStatus');

  const renderLabel = (option: string) => { return option ? t(`fields.audienceTarget.${option}`) : '' };
  const renderOption = (props: any, option: string, { selected }: any) => {
    return (
      !selectedValues.includes(option as never) &&
          <li {...props} key={option}>
            <Checkbox style={{ marginRight: 8 }} checked={selected} />
            {t(`fields.audienceTarget.${option}`)}
          </li>

    );
  };

  return (
    <FormAsyncSelectAutocompleteField
      name={name}
      control={control}
      multiple={false}
      disableCloseOnSelect={true}
      placeholder={t('fields.notification.audienceTarget')}
      fetchFunc={OrderStatusService.searchAudience}
      fullWidth={true}
      autoHighlight
      queryKey=''
      id='select-audience-target'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      size='small'
    />
  );
};

export default AudienceTargetSelect;
