import React, { memo, useMemo } from 'react';
import {
  TextFieldProps,
  Typography,
  IconButton,
  useTheme,
  TextField,
  Stack,
  Button,
  Popover,
  FormHelperText,
} from '@mui/material';
import { FlexBox, FormLabel } from '@dfl/mui-react-common';
import { Pagination } from '@mui/lab';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslation } from 'react-i18next';
import { IconStyle } from './index';

type FontIconPickerInLineProps = Omit<TextFieldProps, 'size' | 'color'> & {
  open: boolean;
  anchorEl: any;
  setAnchorEl: (val: HTMLButtonElement | null) => void;
  onClose: () => void;
  previewInLineCount?: number;
  iconsData: any[];
  getIconSize: number;
  getSize: number;
  iconSelected: string;
  shape?: 'circle' | 'square';
  bgColor?: string;
  setSearch?: (val: string) => void;
  setCurrentPage?: (val: number) => void;
  onSubmit?: (value: string) => void;
  id?: string;
  onSearch: (val: string) => void;
  data: any[];
  startIndex: number;
  endIndex: number;
  setIconSelected: (val: string) => void;
  color?: 'primary' | 'error' | 'secondary' | 'info' | 'success' | 'warning' | string;
  currentPage: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  defaultPreviewIcons?: string[];
  error?: any;
};
const FontIconPickerInLine = ({
  required,
  label,
  open,
  anchorEl,
  setAnchorEl,
  iconsData,
  previewInLineCount = 8,
  getIconSize,
  getSize,
  iconSelected,
  shape = 'square',
  bgColor,
  setSearch,
  onChange,
  onSubmit,
  setCurrentPage,
  value,
  onClose,
  id,
  onSearch,
  data,
  startIndex,
  endIndex,
  setIconSelected,
  color,
  currentPage,
  handlePageChange,
  handleClick,
  defaultPreviewIcons,
  error,
}: FontIconPickerInLineProps) => {
  const { t } = useTranslation('common');
  const { palette } = useTheme();

  const iconPreviews = useMemo(() => {
    let iconsToShow = [];
    const split = iconsData?.length >= previewInLineCount ? previewInLineCount : 8;

    if (defaultPreviewIcons?.length) {
      iconsToShow = iconsData?.filter((icon) => {
        if (defaultPreviewIcons?.includes(icon.label)) {
          return icon;
        }

        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        console.warn(`The icon ${icon.label} is not found in the list`);
        return undefined;
      });
    } else {
      iconsToShow = iconsData?.slice(0, split);
    }

    return iconsToShow?.map((Icon, idx) => (
      <IconButton
        key={idx}
        aria-label='delete'
        sx={{
          borderRadius: shape === 'square' ? 2 : '50%',
          height: getSize,
          width: getSize,
          background: bgColor || '#eee',
          border:
            iconSelected === Icon.label || value === Icon.label ? '2px solid var(--primary-color) !important' : 'none',
        }}
        onClick={() => {
          if (onSubmit) {
            // @ts-ignore
            onSubmit(Icon.label);
          } else {
            // @ts-ignore
            onChange?.({ target: { value: Icon.label } });
            setSearch?.('');
          }
          setAnchorEl(null);
          setCurrentPage?.(1);
        }}
      >
        <Icon.Component
          style={{
            width: getIconSize,
            height: getIconSize,
            fontSize: getIconSize,
            color:
              iconSelected === Icon.label || value === Icon.label
                ? palette.mode === 'dark'
                  ? 'var(--primary-color)'
                  : 'var(--primary-color)'
                : 'rgba(0, 0, 0, 0.57)',
          }}
        />
      </IconButton>
    ));
  }, [iconsData, previewInLineCount, iconSelected, getIconSize, getSize, bgColor, value]);

  return (
    <>
      <FormLabel required={required}>
        <Typography variant='subtitle2' sx={{ fontSize: '13px' }}>
          {label}
          {required && '*'}
        </Typography>
      </FormLabel>

      <FlexBox
        gap={1}
        flexWrap='wrap'
        sx={error?.type === 'required' ? { border: '1px solid #d32f2f', borderRadius: '4px' } : null}
      >
        {iconPreviews}

        <IconButton
          aria-label='delete'
          onClick={handleClick}
          sx={{
            borderRadius: shape === 'square' ? 2 : '50%',
            height: getSize,
            width: getSize,
            background: bgColor || '#eee',
            border:
              iconSelected === value
                ? '1px dashed var(--primary-color) !important'
                : '1px dashed rgba(0, 0, 0, 0.87) !important',
          }}
        >
          <KeyboardArrowDownIcon sx={{ color: 'rgba(0, 0, 0, 0.87)' }} />
        </IconButton>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={onClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <FlexBox
            alignItems='center'
            pt={3}
            px={3}
            justifyContent='center'
            flexDirection='column'
            sx={{ padding: '1rem', maxWidth: '370px', minWidth: '370px' }}
          >
            <FlexBox alignItems='center' pt={3} justifyContent='center' width='100%'>
              <TextField
                label={t('fontIconPicker.searchLabel')}
                placeholder={t('fontIconPicker.searchPlaceholder')}
                fullWidth
                onChange={(e) => {
                  onSearch(e?.target?.value);
                  setSearch?.(e?.target?.value);
                }}
              />
            </FlexBox>

            <Stack direction='column'>
              <FlexBox alignItems='center' justifyContent='center' gap={2} flexWrap='wrap' pt={3}>
                {data.slice(startIndex, endIndex).map((Icon: any, idx: number) => (
                  <IconStyle
                    key={idx}
                    style={{ background: iconSelected === Icon.label ? '#1976d2' : '#eee' }}
                    onClick={() => {
                      setIconSelected(Icon.label as string);
                    }}
                  >
                    {/* @ts-ignore */}
                    <Icon.Component
                      style={{
                        width: '32px',
                        height: '32px',
                        color: iconSelected === Icon.label ? '#fff' : 'rgba(0, 0, 0, 0.57)',
                      }}
                      color={color}
                    />
                  </IconStyle>
                ))}
              </FlexBox>

              <FlexBox alignItems='center' justifyContent='center' gap={2} flexWrap='wrap' pt={3}>
                <Stack spacing={2}>
                  <Pagination
                    count={data?.length ? parseInt(`${data?.length / 36 + 1}`) : 0}
                    color='primary'
                    page={currentPage}
                    onChange={handlePageChange}
                  />
                </Stack>
              </FlexBox>
            </Stack>

            <FlexBox alignItems='center' justifyContent='flex-end' gap={2} flexWrap='wrap' pt={3} width='100%'>
              <Button onClick={onClose}>{t('fontIconPicker.cancel')}</Button>
              <Button
                variant='contained'
                color='primary'
                onClick={(e) => {
                  if (onSubmit) {
                    // @ts-ignore
                    onSubmit(iconSelected);
                  } else {
                    // @ts-ignore
                    onChange?.({ target: { value: iconSelected } });
                  }
                  setAnchorEl(null);
                  handlePageChange(e, 1);
                }}
              >
                {t('fontIconPicker.confirm')}
              </Button>
            </FlexBox>
          </FlexBox>
        </Popover>
      </FlexBox>
      {/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
      {error?.message && <FormHelperText error={error}>{t(`errors:${error?.message}`)}</FormHelperText>}
    </>
  );
};

export default memo(FontIconPickerInLine);
