import { Box, Chip, FormControl, MenuItem } from '@mui/material';
import { Controller } from 'react-hook-form';
import { INCIDENCE_AUDIENCE_TARGET } from '../../interfaces';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FormSelectField } from '@dfl/mui-react-common';

type Props = {
  name: string;
  fields: any;
  index: number;
  control: any;
  required?: boolean;
};

const CausesIncidenceAudienceTargetSelect = ({ control, name, fields, index, required = false }: Props) => {
  const [availableOptions, setAvailableOptions] = useState<string[]>([]);
  const { t } = useTranslation('causesIncidence');

  useEffect(() => {
    const selectedTargets = fields.flatMap((a: any, i: number) => (i === index ? [] : a.target));
    setAvailableOptions(Object.keys(INCIDENCE_AUDIENCE_TARGET).filter((option) => !selectedTargets.includes(option)));
  }, [fields, index]);

  const renderLabel = (option: string) => t(`fields.target.${option}`);

  const _label = useMemo(
    () => (required ? t('notification.audience') + '*' : t('notification.audience')),
    [required, t],
  );

  return (
    <FormControl fullWidth>
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <FormSelectField
              size='small'
              required={required}
              name={name}
              label={_label}
              multiple
              onChange={(event) => {
                field.onChange(event.target.value);
              }}
              value={field?.value || []}
              renderValue={(selected: any) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  <div style={{ pointerEvents: 'none' }}>
                    {selected.map((value: string) => (
                      <Chip
                        sx={{ zIndex: 10, pointerEvents: 'auto' }}
                        key={value}
                        label={t(`fields.target.${value}`)}
                        onMouseDown={(e) => {
                          e.stopPropagation();
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        onDelete={(e) => {
                          e.stopPropagation();
                          field.onChange(field.value.filter((item: string) => item !== value));
                        }}
                      />
                    ))}
                  </div>
                </Box>
              )}
            >
              {availableOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {renderLabel(option)}
                </MenuItem>
              ))}
            </FormSelectField>
          );
        }}
      />
    </FormControl>
  );
};

export default CausesIncidenceAudienceTargetSelect;
