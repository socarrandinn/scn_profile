import { ButtonOutlined, FlexBox, FormLabel, FormTextField, useDFLForm } from '@dfl/mui-react-common';
import { useFieldArray } from 'react-hook-form';
import FormHelperText from '@mui/material/FormHelperText';
import { Box, FormControl, IconButton, Stack, Tooltip } from '@mui/material';
import { t } from 'i18next';
import { RemoveCircleOutline } from '@mui/icons-material';
import React, { useCallback } from 'react';

type FormControlArrayProps = {
  name: string;
  label?: string;
  required?: boolean;
};

const SkillsFieldArray = ({ name, label, required }: FormControlArrayProps) => {
  const { control, isLoading, disabled, readOnly } = useDFLForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  const handleAdd = useCallback(() => {
    append('');
  }, []);

  const hasError = required && !fields.length;

  return (
    <FormLabel label={label} required={required}>
      <FormControl fullWidth error={hasError}>
        <Stack spacing={1}>
          {fields.map((field, index) => (
            <FlexBox key={field.id || index} gap={1} alignItems={'center'}>
              <Box className={'flex-1'}>
                <FormTextField name={`${name}.${index}`} />
                {hasError && <FormHelperText color={'red'}>{t('errors:atLeast1')}</FormHelperText>}
              </Box>
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
          {!(disabled || readOnly)
            ? (
            <FlexBox justifyContent={'end'} mt={1}>
              <ButtonOutlined onClick={handleAdd} disabled={isLoading}>
                {`Add ${name}`}
              </ButtonOutlined>
            </FlexBox>
              )
            : (
            <></>
              )}
        </Stack>
      </FormControl>
    </FormLabel>
  );
};

export default SkillsFieldArray;
