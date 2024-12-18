import { Controller, useFieldArray, useWatch } from 'react-hook-form';
import { Box, Button, Chip, Paper, Stack, Tooltip } from '@mui/material';
import { TwitterPicker, ChromePicker } from 'react-color';
import { useDFLForm } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { Add, ColorLens } from '@mui/icons-material';
import { colorList } from './colors';

type Props = {
  name: string;
  label?: string;
};

const FormColorPickerField = ({ name }: Props) => {
  const { t } = useTranslation('common');
  const { control } = useDFLForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  const currentColors = useWatch({ control, name });

  return (
    <Stack>
      <Controller
        name='currentColor'
        control={control}
        defaultValue='#ff0000'
        render={({ field }) => (
          <Stack gap={1} flexDirection={'column'} justifyContent={'end'}>
            <Stack direction='row' flexDirection={'row'} gap={1}>
              {/* TwitterPicker */}
              <TwitterPicker
                width='100%'
                color={field.value}
                colors={colorList}
                onChange={(color) => {
                  field.onChange(color.hex);
                }}
              />

              {/* Tooltip with ChromePicker */}
              <Paper
                sx={{
                  padding: 1,
                  minHeight: '100%',
                  display: 'flex',
                  width: '100px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 4px',
                  borderRadius: '4px',
                  flex: 1,
                }}
              >
                <Tooltip
                  title={
                    <ChromePicker
                      color={field.value}
                      onChange={(color) => {
                        field.onChange(color.hex);
                      }}
                    />
                  }
                >
                  <ColorLens
                    sx={{
                      fontSize: 60,
                      color: 'primary.main',
                      ':hover': {
                        cursor: 'pointer',
                      },
                    }}
                  />
                </Tooltip>
              </Paper>
            </Stack>
            {/* Add Color Button */}
            <Button
              variant='outlined'
              startIcon={<Add />}
              sx={{ ml: 'auto' }}
              onClick={() => {
                if (!currentColors.includes(field.value)) {
                  append(field.value);
                }
              }}
            >
              {t('addColor')}
            </Button>
          </Stack>
        )}
      />

      {/* Display Selected Colors */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
        {fields.map((field, index) => (
          <Chip
            key={field.id}
            label={currentColors[index]}
            sx={{
              backgroundColor: currentColors[index],
              color: '#fff',
            }}
            onDelete={() => {
              remove(index);
            }}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default FormColorPickerField;
