import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Checkbox, ListItemText } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { PERIOD_RULE_OFFER_TYPE } from 'modules/sales-offer/offer/interfaces/offer.type.enum';

type FromPeriodSelectProps = {
  name: string;
  label: string;
  multiple?: boolean;
  options?: PERIOD_RULE_OFFER_TYPE[];
  exclude?: PERIOD_RULE_OFFER_TYPE[];
  disabled?: boolean;
  sx?: any;
};

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const FromPeriodSelect = ({
  label,
  exclude = [],
  options = [],
  name,
  multiple = false,
  disabled = false,
  sx,
}: FromPeriodSelectProps) => {
  const { t } = useTranslation('');

  const _options = useMemo(() => {
    const defaultOptions = options || Object.keys(PERIOD_RULE_OFFER_TYPE);
    return defaultOptions.filter((item) => !exclude.includes(item));
  }, [exclude, options]);

  const renderLabel = (option: string) => t(`offerOrder:period.${option}`);

  const renderOption = (props: any, option: string, { selected }: any) => {
    return (
      <li {...props} key={option}>
        <ListItemText primary={t(`offerOrder:period.${option}`)} />
        {multiple && <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />}
      </li>
    );
  };

  return (
    <FormSelectAutocompleteField
      fullWidth
      sx={sx || {}}
      multiple={multiple}
      disableCloseOnSelect={multiple}
      id={`multiple-${name}`}
      disableClearable={true}
      name={name}
      label={label}
      options={_options || []}
      disabled={disabled}
      renderOption={renderOption}
      getOptionLabel={renderLabel}
    />
  );
};

export default memo(FromPeriodSelect);
