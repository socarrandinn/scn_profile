import { IconButton, Tooltip } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useDFLForm } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { FormOtherCostInputStyle } from './FormOtherCostInputStyle';
import { useWatch } from 'react-hook-form';
import FormDiscountField from 'modules/inventory/product/components/FormDiscountField/FormDiscountField';
import FormSelectProviderType from 'modules/inventory/provider/common/components/FormSelectProviderType/FormSelectProviderType';
import { ProvidersByTypeSelect } from 'modules/inventory/provider/common/components/ProvidersByTypeSelect';

type FormContactInputProps = {
  name: string;
  onRemove?: () => void;
  setValue: any;
  readOnlyParent?: boolean;
};

function FormOtherCostInput({ name, onRemove, setValue, readOnlyParent }: FormContactInputProps) {
  const { t } = useTranslation('provider');
  const { isLoading, disabled, readOnly, size, control } = useDFLForm();
  const hasRemove = !!onRemove;

  const selectedOwnershipType = useWatch({ name: `${name}.ownershipType`, control });
  const otherCostType = useWatch({ name: `${name}.type`, control });

  return (
    <FormOtherCostInputStyle size={size}>
      <FormSelectProviderType
        readOnly={readOnlyParent}
        name={`${name}.ownershipType`}
        className={'ownership-type-select'}
      />
      <ProvidersByTypeSelect
        size='medium'
        readOnly={readOnlyParent}
        setValue={setValue}
        control={control}
        key={selectedOwnershipType}
        name={`${name}.ownership`}
        type={selectedOwnershipType}
        label={t('common:provider.title')}
        placeholder={t('selectProvider')}
        parentName={name}
      />
      <FormDiscountField
        readOnly={readOnlyParent}
        initPriceType={otherCostType}
        fullWidth
        name={name}
        label={readOnlyParent ? undefined : t('section.prices.otherCost')}
        size='medium'
      />
      <div className={'ownership-type-options'}>
        {hasRemove && !readOnly && (
          <Tooltip title={t('remove')}>
            <IconButton onClick={onRemove} disabled={isLoading || disabled}>
              <DeleteOutlinedIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </FormOtherCostInputStyle>
  );
}

export default FormOtherCostInput;
