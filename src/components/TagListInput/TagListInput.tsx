import React, { memo, useCallback, useState } from 'react';
import { Chip, TextFieldProps } from '@mui/material';
import { t } from 'i18next';
import { TextField } from '@dfl/mui-react-common';

export type TagListInputProps = Omit<TextFieldProps, 'onChange'> & {
  onChange?: ({ target: { value } }: { target: { value?: string[] } }) => void;
  value?: string[];
  name: string;
};

const TagListInput = ({ onChange, value = [], ...props }: TagListInputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }, []);

  const handleInputKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Backspace' && inputValue === '' && value.length > 0) {
        event.preventDefault();
        const updatedTags = value.slice(0, value.length - 1);
        onChange?.({ target: { value: updatedTags } });
      } else if (event.key === 'Enter' && inputValue.trim() !== '') {
        event.preventDefault();
        addTagsFromInputValue();
      }
    },
    [inputValue, value, onChange],
  );

  const addTagsFromInputValue = useCallback(() => {
    const newTags = inputValue
      .split(',')
      .map((val) => val.trim())
      .filter((val) => val !== '' && !value.includes(val));
    const updatedTags = [...value, ...newTags];
    onChange?.({ target: { value: updatedTags } });
    setInputValue('');
  }, [inputValue, value, onChange]);

  const handleTagDelete = useCallback(
    (tag: string) => {
      const updatedTags = value.filter((t) => t !== tag);
      onChange?.({ target: { value: updatedTags } });
    },
    [value, onChange],
  );

  return (
    <TextField
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleInputKeyDown}
      placeholder={t('common:tagListPlaceholder') || ''}
      InputProps={{
        endAdornment: value.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            onDelete={() => {
              handleTagDelete(tag);
            }}
            sx={{ m: '3px' }}
          />
        )),
        style: { flexWrap: 'wrap', padding: value.length > 0 ? '0 7px 7px 7px' : 'inherit' },
        ...props.InputProps,
      }}
      {...props}
    />
  );
};

export default memo(TagListInput);
