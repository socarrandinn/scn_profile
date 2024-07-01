import { memo } from 'react';
import FormProvinceSelect from 'modules/common/components/Address/ProvinceSelect';
import FormMunicipalitySelect from 'modules/common/components/Address/MunicipalitySelect';
import { FlexBox, FormLabel } from '@dfl/mui-react-common';
import { useForm, useFieldArray } from 'react-hook-form';
import { FormControl, IconButton, Stack, Tooltip } from '@mui/material';
import { t } from 'i18next';
import { AddOutlined, RemoveCircleOutline } from '@mui/icons-material';

/* const defaultValues: any = {
  firstName: '',
  lastName: '',
  skills: [],
}; */

type FormControlArrayProps = {
  name: any;
  label?: string;
  required?: boolean;
  dark?: boolean;
  stateValue?: string;
};

const ZoneInput = ({ name, label, required, dark, stateValue, ...rest }: FormControlArrayProps) => {
  const { control, watch } = useForm({
    // defaultValues: {
    //   zone: [{ state: '', municipality: '' }],
    // },
  });
  // const { control, isLoading, disabled, readOnly, watch } = useDFLForm({
  //    defaultValues: {
  //     name: [{ state: '', municipality: '' }]
  //   }
  // });
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  // const getState = (index: number) => {
  //   const state = watch?.(`zone`) ? watch?.(`zone`)[index].state : stateValue;
  //   console.log("state", state)
  //   return state;
  // };

  // if (stateTemp) console.log("State of zone", stateTemp[0].state);

  // const handleAdd = useCallback(() => {
  //   append();
  // }, []);

  const hasError = required && !fields.length;
  const state = watch?.('zone') || stateValue;

  return (
    <FormLabel label={label} required={required}>
      <FormControl fullWidth error={hasError}>
        <Stack spacing={1}>
          {fields.map((field, index) => (
            <FlexBox key={field.id || index} gap={1} alignItems={'center'}>
              <FormProvinceSelect
                {...rest}
                dark={dark}
                // name={`${name}.${index}.state`}
                name={`zone.${index}.state`}
                label={t('provinces')}
                placeholder={t('provincePlaceholder')}
              />
              <FormMunicipalitySelect
                {...rest}
                dark={dark}
                state={state}
                // name={`${name}.${index}.municipality`}
                name={`zone.${index}.municipality`}
                label={t('municipality')}
                placeholder={t('municipalityPlaceholder')}
                helperText={!state && t('provinceFirst')}
              />
              <Tooltip title={'Remove Element'}>
                <IconButton
                  onClick={() => {
                    remove(index);
                  }}
                >
                  <RemoveCircleOutline />
                </IconButton>
              </Tooltip>
            </FlexBox>
          ))}
          <FlexBox justifyContent={'end'} mt={1}>
            {/* <ButtonOutlined
              onClick={() => {
                append({ state: '', municipality: '' });
              }}
            >
              {`Add ${name as string}`}
            </ButtonOutlined> */}
            <IconButton
              title={'Add Zone'}
              // disabled={false}
              color={'primary'}
              onClick={() => {
                append({ state: '', municipality: '' });
              }}
            >
              <AddOutlined />
            </IconButton>
          </FlexBox>
          {/*  {!(disabled || readOnly) ? (
            <FlexBox justifyContent={'end'} mt={1}>
              <ButtonOutlined onClick={handleAdd} disabled={isLoading}>
                {`Add ${name}`}
              </ButtonOutlined>
            </FlexBox>
          ) : (
            <></>
          )} */}
        </Stack>
      </FormControl>
    </FormLabel>
  );
};

export default memo(ZoneInput);
