import { memo, ReactNode, useMemo } from 'react';
import { Card, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CurrencySelect } from 'modules/common/components/CurrencySelect';
import { FlexBox, useDFLForm } from '@dfl/mui-react-common';
import { translateValue } from 'hooks/useTranslateValue';
import { Controller } from 'react-hook-form';

type Props = {
  data: any;
  name: string;
  icon?: ReactNode;
  multiple?: boolean;
  title: string;
};

const TransferCardForm = ({ data, name, icon, multiple = false, title }: Props) => {
  const { watch, control } = useDFLForm();
  const { i18n } = useTranslation('locales');
  const locale = i18n?.language;

  const currencyValue = watch?.(`${name}.currency`) || [];

  const description = useMemo(() => {
    return translateValue(data?.description, locale);
  }, [locale, data?.description]);

  return (
    <Card sx={{ p: '20px', borderRadius: '8px', boxShadow: '0px 5px 10px 5px rgba(0, 0, 0, 0.07)' }}>
      <div className='flex items-center mb-4 justify-between'>
        <FlexBox alignItems={'flex-start'} sx={{ '.MuiFormControlLabel-root': { marginRight: 0 }, maxWidth: '403px' }}>
          <Controller
            name={`${name}.enabled`}
            control={control}
            defaultValue={data?.enabled || false}
            render={({ field }) => (
              <FormControlLabel
                sx={{ '.MuiCheckbox-root': { paddingTop: 0 } }}
                control={
                  <Checkbox
                    {...field}
                    checked={field.value}
                    onChange={(e) => {
                      field.onChange(e.target.checked);
                    }}
                  />
                }
                label={undefined}
              />
            )}
          />
          <div>
            <Typography variant='h3'>{title}</Typography>
            {data?.description && <Typography sx={{ mt: 0.5 }}>{description}</Typography>}
          </div>
        </FlexBox>
        {icon}
      </div>
      <CurrencySelect size='small' name={`${name}.currency`} multiple={multiple} value={currencyValue} />
    </Card>
  );
};

export default memo(TransferCardForm);
