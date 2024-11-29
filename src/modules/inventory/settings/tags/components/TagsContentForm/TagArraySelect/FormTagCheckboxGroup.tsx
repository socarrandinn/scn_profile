import { useDFLForm } from '@dfl/mui-react-common';
import { Checkbox, FormControlLabel, FormGroup, FormHelperText } from '@mui/material';
import { memo } from 'react';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
type FormTagCheckboxGroupProps = {
  label: string;
  name: string;
  options: string[];
};

const FormTagCheckboxGroup = ({ name, options }: FormTagCheckboxGroupProps) => {
  const { control } = useDFLForm();
  const { t } = useTranslation();

  return (
    <>
      <FormGroup>
        <Controller
          name={name}
          defaultValue={[]}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              {options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      {...field}
                      value={option}
                      checked={field?.value?.includes(option) || false}
                      onChange={(e) => {
                        const value = e.target.value || false;
                        field.onChange(
                          e.target.checked
                            ? [...field.value, value]
                            : field.value.filter((item: string) => item !== value),
                        );
                      }}
                    />
                  }
                  label={option}
                />
              ))}
              {error && <FormHelperText error>{t(error.message as string)}</FormHelperText>}
            </>
          )}
        />
      </FormGroup>
    </>
  );
};

export default memo(FormTagCheckboxGroup);
