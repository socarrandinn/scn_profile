import { memo, useCallback, useMemo, useState } from 'react';
import { IconButton, useDFLForm } from '@dfl/mui-react-common';
import { Autocomplete, Checkbox, FormHelperText, InputAdornment, Stack, TextField } from '@mui/material';
import { useFieldArray, useFormState } from 'react-hook-form';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { isEmpty } from 'lodash';
import { useTranslation } from 'react-i18next';
import { onTagsMap, TAGS_DEFAULT } from '../../constants/tags-values-default';
import { TagChip } from './styled';

type FormTagValuesFieldProps = {
  name: string;
  label: string;
  multiple?: boolean;
};

const renderLabel = (option: any) => option.value;

const renderOption = (props: any, option: { value: string }, { selected }: any) => {
  return (
    <li {...props} key={option.value}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.value}
    </li>
  );
};

const FormTagValuesField = ({ name, label, multiple = false }: FormTagValuesFieldProps) => {
  const { t } = useTranslation('errors');
  const { control } = useDFLForm();
  const { remove, fields } = useFieldArray({ control, name });
  const [value, setValue] = useState<any | null>([]);
  const { errors } = useFormState({ control });

  const errorCategory = useMemo(
    // @ts-ignore
    () => isEmpty(fields) && errors?.economicData?.businessCategory?.type === 'min',
    [errors, fields],
  );

  const options = useMemo(() => {
    const tags = onTagsMap(TAGS_DEFAULT);
    const selected = fields?.map((field: any) => field?.value);
    return tags?.filter((tag) => !selected.includes(tag?.value));
  }, [fields]);

  const onDelete = useCallback(
    (index: number) => {
      remove(index);
    },
    [remove],
  );

  // add object
  const onAppend = useCallback((val: string) => {
    // append({ value: val });
  }, []);

  const onAdd = useCallback(() => {
    setValue([]);
    onAppend(value);
  }, [value, onAppend]);

  const onEnter = useCallback(
    (event: any) => {
      if (event.key === 'Enter' && value) {
        event.preventDefault();
        onAdd();
      }
    },
    [onAdd, value],
  );

  const onBlur = useCallback(
    (event: any) => {
      if (event.type === 'blur' && value) {
        event.preventDefault();
        onAdd();
      }
    },
    [onAdd, value],
  );

  return (
    <Stack gap={1}>
      <Autocomplete
        fullWidth
        multiple={multiple}
        value={value}
        filterSelectedOptions
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onBlur={onBlur}
        onKeyDown={onEnter}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        disableCloseOnSelect={multiple}
        id='select-tags'
        options={options}
        getOptionLabel={renderLabel}
        renderOption={renderOption}
        freeSolo
        renderInput={({ InputProps, ...rest }) => (
          <TextField
            InputProps={{
              ...InputProps,
              endAdornment: (
                <>
                  <InputAdornment position='end'>
                    <IconButton tooltip={t('common:add')} size='small' onClick={onAdd}>
                      <AddCircleOutlineOutlinedIcon />
                    </IconButton>
                  </InputAdornment>
                  {InputProps.endAdornment}
                </>
              ),
            }}
            {...rest}
            label={label}
          />
        )}
      />
      {errorCategory && <FormHelperText sx={{ color: 'red' }}>{t('errors:minOneBusinessCategory')}</FormHelperText>}
      <Stack flexDirection={'row'} gap={1} justifyContent={'start'} flexWrap={'wrap'}>
        {fields?.map((cat: any, index: number) => (
          <TagChip
            key={cat}
            label={cat.value}
            onDelete={() => {
              onDelete(index);
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default memo(FormTagValuesField);
