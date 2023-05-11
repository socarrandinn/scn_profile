/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date: 4/28/23
 */
import React, { memo, useMemo, useState, useCallback, useEffect } from 'react';
import { icons } from 'components/libs/FontIconPicker/icons';
import { FlexBox, FormFieldControl, FormLabel } from '@dfl/mui-react-common';
import {
  Button,
  Popover,
  Stack,
  TextField,
  Typography,
  IconButton,
  TextFieldProps,
  useTheme,
  FormHelperText,
} from '@mui/material';
import { Pagination } from '@mui/lab';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import EditIcon from '@mui/icons-material/Edit';
import { isNumber } from 'lodash';
import FontIconPickerInLine from 'components/libs/FontIconPicker/FontIconPickerInLine';

export const IconStyle = styled('div')(() => ({
  background: '#eee',
  padding: 6,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  cursor: 'pointer',
  transition: '0.1s all',
  '&:hover': {
    background: '#ddecfa',
  },
}));

export const EditingIconStyle = styled('div')(() => ({
  width: '36px',
  height: '36px',
  right: 0,
  top: 0,
  padding: 6,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: '0.1s all',
  position: 'absolute',
  borderRadius: '50%',
  background: '#fff',
  boxShadow: '1px 0px 14px 4px rgba(0,0,0,0.1)',
}));

type FontIconPickerProps = Omit<TextFieldProps, 'size' | 'color'> & {
  readOnly?: boolean;
  dark?: boolean;
  shape?: 'circle' | 'square';
  size?: 'small' | 'medium' | 'large' | number;
  onSubmit?: (value: string) => void;
  bgColor?: string;
  color?: 'primary' | 'error' | 'secondary' | 'info' | 'success' | 'warning' | string;
  showPreviewInLine?: boolean;
  previewInLineCount?: number;
  defaultPreviewIcons?: string[];
  error?: any;
};

const FontIconPicker = ({
  value,
  readOnly,
  size,
  onChange,
  defaultValue,
  onSubmit,
  color,
  label,
  shape,
  bgColor,
  showPreviewInLine,
  required,
  previewInLineCount,
  defaultPreviewIcons,
  error,
}: FontIconPickerProps) => {
  const { palette } = useTheme();
  const { t } = useTranslation('common');
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [iconSelected, setIconSelected] = useState(defaultValue || value || '');

  const iconsData = useMemo(() => {
    return icons?.map((item) => {
      return {
        label:
          // @ts-ignore
          item?.type?.render?.displayName || item?.type?.render()?.props?.['data-testid'],
        Component: item,
      };
    });
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const itemsPerPage = 36;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const getSize = useMemo(() => {
    if (size === 'large') return 92;
    if (size === 'medium') return 48;
    if (size === 'small') return 32;
    if (isNumber(size)) return size;
    return 48;
  }, [size]);

  const getIconSize = useMemo(() => {
    if (size === 'large') return 64;
    if (size === 'medium') return 32;
    if (size === 'small') return 24;
    if (isNumber(size)) return size ? size - 12 : 32;
    return size ? size - 12 : 32;
  }, [size]);

  const IconSelected = useMemo(() => {
    const GetIcon = iconsData?.find((item: any) => item?.label === iconSelected);
    if (GetIcon) {
      return (
        <IconStyle
          style={{
            width: getIconSize,
            height: getIconSize,
            fontSize: getIconSize,
            background: iconSelected === GetIcon.label ? '#1976d2' : '#eee',
            marginTop: '16px',
          }}
        >
          <GetIcon.Component
            style={{
              width: getIconSize,
              height: getIconSize,
              fontSize: getIconSize,
              color: iconSelected === GetIcon.label ? '#fff' : 'rgba(0, 0, 0, 0.57)',
            }}
          />
        </IconStyle>
      );
    }
    return null;
  }, [iconSelected, iconsData, color, getIconSize]);

  const SimpleIconSelected = useMemo(() => {
    const GetIcon = iconsData?.find((item: any) => item?.label === iconSelected);
    if (GetIcon) {
      return (
        <GetIcon.Component
          style={{
            width: getIconSize,
            height: getIconSize,
            fontSize: getIconSize,
            color: palette.mode === 'dark' ? '#fff' : color || 'rgba(0, 0, 0, 0.57)',
          }}
        />
      );
    }
    return null;
  }, [iconSelected, color, getIconSize, palette?.mode]);

  const [data, setData] = useState(iconsData);
  const [search, setSearch] = useState('');

  const onSearch = useCallback(
    (search: string) => {
      const values = iconsData.filter((item: any) => item.label.includes(search));
      setData(values);
      if (search) setCurrentPage(1);
    },
    [iconsData, setData, setCurrentPage, color],
  );

  const handleClose = () => {
    setAnchorEl(null);
    setSearch('');
    setIconSelected('');
  };

  useEffect(() => {
    if (!data?.length && iconsData?.length && !search) setData(iconsData);
  }, [iconsData?.length, data?.length, search]);

  const showIconAction = useMemo(() => {
    if (!value && !defaultValue) {
      if (readOnly) {
        return (
          <IconButton
            aria-label='delete'
            sx={{
              borderRadius: shape === 'square' ? 0 : '50%',
              height: getSize,
              width: getSize,
              background: palette.mode === 'dark' ? '#1E2732' : bgColor || '#eee',
            }}
          >
            <AutoFixHighIcon
              fontSize='inherit'
              sx={{
                fontSize: getIconSize,
                width: getIconSize,
                height: getIconSize,
                background: palette.mode === 'dark' ? '#1E2732' : bgColor || '#eee',
              }}
            />
          </IconButton>
        );
      }
      return (
        <FlexBox flexDirection='column' justifyContent='center' alignItems='flex-start'>
          <FormLabel required={required}>
            <Typography variant='subtitle2' sx={{ fontSize: '13px' }}>
              {label}
              {required && '*'}
            </Typography>
          </FormLabel>

          <IconButton
            aria-label='delete'
            onClick={handleClick}
            sx={{
              borderRadius: shape === 'square' ? 0 : '50%',
              height: getSize,
              width: getSize,
              background: palette.mode === 'dark' ? '#1E2732' : bgColor || '#eee',
            }}
          >
            <EditingIconStyle style={{ border: error?.type === 'required' ? '1px solid #d32f2f' : 'auto' }}>
              <EditIcon sx={{ color: 'rgba(0, 0, 0, 0.57)' }} />
            </EditingIconStyle>
            <AutoFixHighIcon
              fontSize='inherit'
              sx={{
                width: getIconSize,
                height: getIconSize,
              }}
            />
          </IconButton>
        </FlexBox>
      );
    } else {
      if (readOnly) {
        return (
          <IconButton
            aria-label='delete'
            sx={{
              borderRadius: shape === 'square' ? 0 : '50%',
              height: getSize,
              width: getSize,
              background: palette.mode === 'dark' ? '#1E2732' : bgColor || '#eee',
            }}
          >
            {SimpleIconSelected}
          </IconButton>
        );
      }
      return (
        <FlexBox flexDirection='column' justifyContent='center' alignItems='flex-start'>
          <FormLabel required={required}>
            <Typography variant='subtitle2' sx={{ fontSize: '13px' }}>
              {label}
              {required && '*'}
            </Typography>
          </FormLabel>
          <IconButton
            aria-label='delete'
            onClick={handleClick}
            sx={{
              borderRadius: shape === 'square' ? 0 : '50%',
              height: getSize,
              width: getSize,
              background: palette.mode === 'dark' ? '#1E2732' : bgColor || '#eee',
            }}
          >
            <EditingIconStyle style={{ border: error?.type === 'required' ? '1px solid #d32f2f' : 'auto' }}>
              <EditIcon
                sx={{
                  color: palette.mode === 'dark' ? '#fff' : 'rgba(0, 0, 0, 0.57)',
                }}
              />
            </EditingIconStyle>
            {SimpleIconSelected}
          </IconButton>
        </FlexBox>
      );
    }
  }, [value, defaultValue, label, shape, getSize, bgColor, palette?.mode, error?.type]);

  if (showPreviewInLine || defaultPreviewIcons?.length) {
    return (
      <FontIconPickerInLine
        required={required}
        open={open}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        onClose={handleClose}
        label={label}
        previewInLineCount={previewInLineCount}
        iconsData={iconsData}
        iconSelected={iconSelected as string}
        getIconSize={getIconSize}
        shape={shape}
        getSize={getSize}
        bgColor={bgColor}
        value={value}
        onChange={onChange}
        setSearch={setSearch}
        onSubmit={onSubmit}
        setCurrentPage={setCurrentPage}
        id={id}
        data={data}
        onSearch={onSearch}
        startIndex={startIndex}
        endIndex={endIndex}
        setIconSelected={setIconSelected}
        color={color}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        handleClick={handleClick}
        defaultPreviewIcons={defaultPreviewIcons}
        error={error}
      />
    );
  }

  return (
    <>
      {showIconAction}

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
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
          <Typography variant='subtitle2'>{t('fontIconPicker.title')}</Typography>

          {IconSelected}

          <FlexBox alignItems='center' pt={3} justifyContent='center' width='100%'>
            <TextField
              label={t('fontIconPicker.searchLabel')}
              placeholder={t('fontIconPicker.searchPlaceholder')}
              fullWidth
              onChange={(e) => {
                onSearch(e?.target?.value);
                setSearch(e?.target?.value);
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
                      color: iconSelected === Icon.label ? '#fff' : 'rgba(0, 0, 0, 0.87)',
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
            <Button onClick={handleClose}>{t('fontIconPicker.cancel')}</Button>
            <Button
              variant='contained'
              color='primary'
              onClick={() => {
                if (onSubmit) {
                  // @ts-ignore
                  onSubmit(iconSelected);
                } else {
                  // @ts-ignore
                  onChange?.({ target: { value: iconSelected } });
                }
                setAnchorEl(null);
                setCurrentPage(1);
              }}
            >
              {t('fontIconPicker.confirm')}
            </Button>
          </FlexBox>
        </FlexBox>
      </Popover>
      {/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
      {error?.message && <FormHelperText error={error}>{t(`errors:${error?.message}`)}</FormHelperText>}
    </>
  );
};

export default memo(FontIconPicker);

export const FormFontIconPicker = (props: { readonly?: string } & any) => {
  return <FormFieldControl {...props} Component={FontIconPicker} />;
};
