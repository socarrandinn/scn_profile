import { memo } from 'react';
import { FormSelectAutocompleteField, Small, useDFLForm } from '@dfl/mui-react-common';
import { findMunicipalityByCode, findMunicipalityByStateAndMunicipality, findProvinceByStateCode } from '@dfl/location';
import { Grid, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from 'react-i18next';

import { SelectProductRadioComponent } from '../SelectProductRadioComponent';
import FormProvinceSelect from 'modules/common/components/ZoneSelect/ProvinceSelect';
import FormMunicipalitySelect from 'modules/common/components/ZoneSelect/MunicipalitySelect';

interface SelectProductShippingZonesProps {
  addPlace: any;
  provinceInEdit?: string;
  municipalityInEdit?: string;
}

const viaTypes = [
  {
    value: 'ALLOW',
    label: 'section.shipping.allowLabel',
  },
  {
    value: 'DENY',
    label: 'section.shipping.denyLabel',
  },
];

const SelectProductShippingZones = ({
  addPlace,
  provinceInEdit,
  municipalityInEdit,
}: SelectProductShippingZonesProps) => {
  const { t } = useTranslation('product');
  const { watch } = useDFLForm();
  const province = watch?.('shippingInfo.province') || provinceInEdit;
  const municipality = watch?.('shippingInfo.municipality') || municipalityInEdit;

  const handleAddPlace = () => {
    const newPlace = municipality
      ? findMunicipalityByStateAndMunicipality(province, municipality)
      : findProvinceByStateCode(province);

    addPlace(newPlace);
  };

  const renderOptionLabel = (tag: any, provinceInEdit: any, municipalityInEdit: any) => {
    const province = findProvinceByStateCode(tag.state || provinceInEdit);
    const municipality = findMunicipalityByCode(tag.code || municipalityInEdit);
    return `${municipality?.name ? municipality?.name + ', ' : ''} ${province?.name || ''}${
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      province?.country === '53' && ', Cuba'
    }`;
  };

  return (
    <Grid container marginBottom={2} paddingTop={2} spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12}>
        <Small>{t('section.shipping.allowedZones')}</Small>
      </Grid>
      <Grid item xs={12}>
        <SelectProductRadioComponent name={'shippingInfo.rules.via'} options={viaTypes} />
      </Grid>
      <Grid item container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12} sm={5.5}>
          <FormProvinceSelect
            name={'shippingInfo.province'}
            label={t('provinces')}
            placeholder={t('provincePlaceholder')}
            size='small'
          />
        </Grid>
        <Grid item xs={12} sm={5.5}>
          <FormMunicipalitySelect
            state={province}
            name={'shippingInfo.municipality'}
            label={t('municipality')}
            placeholder={t('municipalityPlaceholder')}
            helperText={!province && t('provinceFirst')}
            size='small'
          />
        </Grid>
        <Grid item xs={1}>
          <IconButton aria-label='add' onClick={handleAddPlace} disabled={!province}>
            <AddIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <FormSelectAutocompleteField
          name='shippingInfo.rules.place'
          includeInputInList={true}
          multiple
          freeSolo
          size='small'
          options={[]}
          inputValue=''
          getOptionLabel={(tag) => renderOptionLabel(tag, provinceInEdit, municipalityInEdit)}
        />
      </Grid>
    </Grid>
  );
};

export default memo(SelectProductShippingZones);
