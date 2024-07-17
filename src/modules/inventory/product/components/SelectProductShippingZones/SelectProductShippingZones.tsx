import { memo } from 'react';
import { FormSelectAutocompleteField, Small, useDFLForm } from '@dfl/mui-react-common';
import { findMunicipalityByCode, findMunicipalityByStateAndMunicipality, findProvinceByStateCode } from '@dfl/location';
import { Grid, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from 'react-i18next';
import { SelectProductRadioComponent } from '../SelectProductRadioComponent';
import FormProvinceSelect from 'modules/common/components/ZoneSelect/ProvinceSelect';
import FormMunicipalitySelect from 'modules/common/components/ZoneSelect/MunicipalitySelect';
import { POLICY_ENUM } from '../../interfaces/IProductCreate';
import { toRegion } from 'utils/address';

interface SelectProductShippingZonesProps {
  addPlace: any;
  provinceInEdit?: string;
  municipalityInEdit?: string;
}

const viaTypes = [
  {
    value: POLICY_ENUM.ALLOW,
    label: 'section.shipping.allowLabel',
  },
  {
    value: POLICY_ENUM.DENIED,
    label: 'section.shipping.denyLabel',
  },
];

const SelectProductShippingZones = ({
  addPlace,
  municipalityInEdit,
  provinceInEdit,
}: SelectProductShippingZonesProps) => {
  const { t } = useTranslation('product');
  const { watch } = useDFLForm();
  const province = watch?.('province') || provinceInEdit;
  const municipality = watch?.('municipality') || municipalityInEdit;

  const handleAddPlace = () => {
    const place = municipality
      ? findMunicipalityByStateAndMunicipality(province, municipality)
      : findProvinceByStateCode(province);

    addPlace(toRegion(place as any));
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
        <SelectProductRadioComponent name={'rules.deliveryRules.policy'} options={viaTypes} />
      </Grid>
      <Grid item container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12} sm={5.5}>
          <FormProvinceSelect
            name={'province'}
            label={t('provinces')}
            placeholder={t('provincePlaceholder')}
            size='medium'
          />
        </Grid>
        <Grid item xs={12} sm={5.5}>
          <FormMunicipalitySelect
            state={province}
            name={'municipality'}
            label={t('municipality')}
            placeholder={t('municipalityPlaceholder')}
            helperText={!province && t('provinceFirst')}
            size='medium'
          />
        </Grid>
        <Grid item xs={1}>
          <IconButton aria-label='add' onClick={handleAddPlace} disabled={!province}>
            <AddIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item xs={12} mt={2}>
        <FormSelectAutocompleteField
          name='rules.deliveryRules.regions'
          includeInputInList={true}
          multiple
          freeSolo
          size='medium'
          options={[]}
          inputValue=''
          getOptionLabel={(tag) => renderOptionLabel(tag, province, municipality)}
          label={t('selectedRegions')}
        />
      </Grid>
    </Grid>
  );
};

export default memo(SelectProductShippingZones);
