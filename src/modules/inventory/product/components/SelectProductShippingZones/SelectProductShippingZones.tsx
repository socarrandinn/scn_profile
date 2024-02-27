import { FormSelectAutocompleteField, Small, useDFLForm } from '@dfl/mui-react-common';
import { memo, useEffect, useState } from 'react';
import { findMunicipalityByCode, findMunicipalityByStateAndMunicipality, findProvinceByStateCode } from '@dfl/location';
import { Grid, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from 'react-i18next';

import { SelectProductRadioComponent } from '../SelectProductRadioComponent';
import FormProvinceSelect from 'modules/common/components/ZoneSelect/ProvinceSelect';
import FormMunicipalitySelect from 'modules/common/components/ZoneSelect/MunicipalitySelect';

interface SelectProductShippingZonesProps {
  addPlace: any;
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

const SelectProductShippingZones = ({ addPlace }: SelectProductShippingZonesProps) => {
  const { t } = useTranslation('product');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { watch } = useDFLForm();
  const province = watch?.('province');
  const municipality = watch?.('municipality');

  const handleAddPlace = () => {
    if (municipality) {
      const newPlace = findMunicipalityByStateAndMunicipality(province, municipality);
      addPlace(newPlace);
    } else {
      const newState = findProvinceByStateCode(province);
      addPlace(newState);
    }
  };

  useEffect(() => {
    if (province) setIsButtonDisabled(false);
    else setIsButtonDisabled(true);
  }, [province, municipality]);

  return (
    <Grid container paddingLeft={2} spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12}>
        <Small>{t('section.shipping.allowedZones')}</Small>
      </Grid>
      <Grid item xs={12}>
        <SelectProductRadioComponent name={'shippingInfo.rules.via'} options={viaTypes} />
      </Grid>
      <Grid item container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12} sm={5.5}>
          <FormProvinceSelect name={'province'} label={t('provinces')} placeholder={t('provincePlaceholder')} />
        </Grid>
        <Grid item xs={12} sm={5.5}>
          <FormMunicipalitySelect
            state={province}
            name={'municipality'}
            label={t('municipality')}
            placeholder={t('municipalityPlaceholder')}
            helperText={!province && t('provinceFirst')}
          />
        </Grid>
        <Grid item xs={1}>
          <IconButton aria-label='add' onClick={handleAddPlace} disabled={isButtonDisabled}>
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
          options={[]}
          inputValue=''
          getOptionLabel={(tag) => {
            const province = findProvinceByStateCode(tag.state);
            const municipality = findMunicipalityByCode(tag.code);
            return `${municipality?.name ? municipality?.name + ', ' : ''} ${province?.name || ''}${
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              province?.country === '53' && ', Cuba'
            }`;
          }}
        />
      </Grid>
    </Grid>
  );
};

export default memo(SelectProductShippingZones);
