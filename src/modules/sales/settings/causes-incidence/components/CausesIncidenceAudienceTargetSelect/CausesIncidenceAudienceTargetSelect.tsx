import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { INCIDENCE_AUDIENCE_TARGET } from '../../interfaces';
import { useMemo } from 'react';

interface ICausesIncidenceAudienceTargetSelect {
  name: string;
  selectedValues: string[];
}

const CausesIncidenceAudienceTargetSelect = ({ name, selectedValues }: ICausesIncidenceAudienceTargetSelect) => {
  const { t } = useTranslation('causesIncidence');
  const options = useMemo(() => {
    const options = Object.keys(INCIDENCE_AUDIENCE_TARGET);
    return options?.filter((o: string) => !selectedValues?.includes(o));
  }, [selectedValues]);

  const renderLabel = (option: string) => {
    return option ? t(`fields.target.${option}`) : '';
  };
  const renderOption = (props: any, option: string, { selected }: any) => {
    return (
      <ListItem {...props} key={option}>
        <ListItemIcon>
          <Checkbox checked={selected} />
        </ListItemIcon>
        <ListItemText primary={t(`fields.target.${option}`)} />
      </ListItem>
    );
  };

  return (
    <FormSelectAutocompleteField
      name={name}
      multiple={true}
      disableCloseOnSelect={true}
      inputProps={{
        placeholder: t('fields.notification.target'),
      }}
      options={options}
      fullWidth={true}
      autoHighlight
      id='select-audience-target'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      size='small'
    />
  );
};

export default CausesIncidenceAudienceTargetSelect;
