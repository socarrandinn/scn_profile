import { FormFieldControl, FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { compact, compose, uniqBy } from 'lodash/fp';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

const FormProductKeywordsField = (props: any) => {
  return <FormFieldControl {...props} Component={ProductKeywordsInput} />;
};

interface ISelectProductTagsProps {
  name: string;
  label: string;
  helperText?: string;
  onChange: any;
  size?: 'medium' | 'small';
}

const ProductKeywordsInput = ({ name, label, helperText, onChange, size = 'medium' }: ISelectProductTagsProps) => {
  const { t } = useTranslation('product');
  const [inputValues, setInputValues] = useState<string[]>([]);

  const notifyChange = useCallback(
    (data: any[] = []) => {
      const keywords = compose(uniqBy('keywords'), compact)(data);
      onChange && onChange(keywords);
    },
    [onChange],
  );

  const handleOnChange = useCallback(
    (event: any) => {
      const value = event.target?.value;
      if (!inputValues.includes(value)) return;

      if (event.key === 'Enter' && value) {
        // @ts-ignore
        setInputValues([...inputValues].push(value));
        notifyChange(value || []);
      }
    },
    [inputValues, notifyChange],
  );

  return (
    <FormSelectAutocompleteField
      name={name}
      autoComplete
      includeInputInList={true}
      multiple
      onKeyDown={handleOnChange}
      freeSolo
      options={[]}
      label={t(label)}
      isOptionEqualToValue={(option, value) => option === value}
      size={size}
      helperText={helperText}
    />
  );
};

export default memo(FormProductKeywordsField);
