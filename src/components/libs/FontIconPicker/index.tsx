/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date: 4/28/23
 */
import React, { memo, useMemo, useState, useCallback, useEffect } from 'react';
import { icons } from 'components/libs/FontIconPicker/icons';
import { FlexBox, FormFieldControl } from '@dfl/mui-react-common';
import { Button, Popover, Stack, TextField, Typography, IconButton, TextFieldProps } from '@mui/material';
import { Pagination } from '@mui/lab';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

const IconStyle = styled('div')(() => ({
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
  }
}));

const FontIconPicker = ({ value, readonly, size, onChange }: { readonly?: string; dark?: boolean } & TextFieldProps) => {
  const { t } = useTranslation('common');
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [iconSelected, setIconSelected] = useState(value || '');

  const iconsData = useMemo(() => {
    return icons?.map(item => {
      return {
        // @ts-ignore
        label: item?.type?.render?.displayName,
        Component: item
      }
    })
  }, [])

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  }

  const itemsPerPage = 36;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const IconSelected = useMemo(() => {
    const GetIcon = iconsData?.find(item => item?.label === iconSelected);
    if (GetIcon) {
      return (
          <IconStyle style={{ maxWidth: '48px', background: iconSelected === GetIcon.label ? '#1976d2' : '#eee', marginTop: '16px' }}>
            <GetIcon.Component style={{ width: '36px', height: '36px', color: iconSelected === GetIcon.label ? '#fff' : 'rgba(0, 0, 0, 0.87)' }}/>
          </IconStyle>
      )
    }
    return null;
  }, [iconSelected]);

  const SimpleIconSelected = useMemo(() => {
    const GetIcon = iconsData?.find(item => item?.label === iconSelected);
    if (GetIcon) {
      return (
          <GetIcon.Component style={{ width: '32px', height: '32px' }}/>
      )
    }
    return null;
  }, [iconSelected]);

  const [data, setData] = useState(iconsData);
  const [search, setSearch] = useState('');

  const onSearch = useCallback((search: string) => {
    const values = iconsData.filter(item => item.label.includes(search));
    setData(values);
    if (search) setCurrentPage(1);
  }, [iconsData, setData, setCurrentPage]);

  const handleClose = () => {
    setAnchorEl(null);
    setSearch('');
    setIconSelected('');
  };

  useEffect(() => {
    if (!data?.length && iconsData?.length && !search) setData(iconsData);
  }, [iconsData?.length, data?.length, search]);

  const showIconAction = useMemo(() => {
    if (!value) {
      if (readonly) {
        return <IconButton aria-label="delete" size={size || 'large'}>
          <AutoFixHighIcon fontSize="inherit" />
        </IconButton>
      }
      return (
          <IconButton aria-label="delete" size={size || 'large'} onClick={handleClick}>
            <AutoFixHighIcon fontSize="inherit" />
          </IconButton>
      )
    } else {
      if (readonly) {
        return <IconButton aria-label="delete" size={size || 'large'}>
          {SimpleIconSelected}
        </IconButton>
      }
      return (
          <IconButton aria-label="delete" size={size || 'large'} onClick={handleClick}>
            {SimpleIconSelected}
          </IconButton>
      )
    }
  }, [value]);

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
              alignItems="center"
              pt={3}
              px={3}
              justifyContent="center"
              flexDirection="column"
              sx={{ padding: '1rem', maxWidth: '400px', minWidth: '400px' }}
          >
            <Typography variant="subtitle2">
              {t('fontIconPicker.title')}
            </Typography>

            {IconSelected}

            <FlexBox alignItems="center" pt={3} justifyContent="center" width="100%">
              <TextField
                  label={t('fontIconPicker.searchLabel')}
                  placeholder={t('fontIconPicker.searchPlaceholder')}
                  fullWidth
                  onChange={(e) => {
                    onSearch(e?.target?.value);
                    setSearch(e?.target?.value);
                  }} />
            </FlexBox>

            <Stack direction="column">
              <FlexBox alignItems="center" justifyContent="center" gap={2} flexWrap="wrap" pt={3}>
                {data.slice(startIndex, endIndex).map((Icon, idx: number) => (
                    <IconStyle
                        key={idx}
                        style={{ background: iconSelected === Icon.label ? '#1976d2' : '#eee' }}
                        onClick={() => { setIconSelected(Icon.label); }}
                    >
                      {/* @ts-ignore */}
                      <Icon.Component style={{ width: '32px', height: '32px', color: iconSelected === Icon.label ? '#fff' : 'rgba(0, 0, 0, 0.87)' }} />
                    </IconStyle>
                ))}
              </FlexBox>

              <FlexBox alignItems="center" justifyContent="center" gap={2} flexWrap="wrap" pt={3}>
                <Stack spacing={2}>
                  <Pagination
                      count={data?.length ? parseInt(`${data?.length / 36 + 1}`) : 0}
                      color="primary"
                      page={currentPage}
                      onChange={handlePageChange}
                  />
                </Stack>
              </FlexBox>
            </Stack>

            <FlexBox alignItems="center" justifyContent="flex-end" gap={2} flexWrap="wrap" pt={3} width="100%">
              <Button onClick={handleClose}>
                {t('fontIconPicker.cancel')}
              </Button>
              <Button variant="contained" color="primary" onClick={() => {
                // @ts-ignore
                onChange?.({ target: { value: iconSelected } });
              }}>
                {t('fontIconPicker.confirm')}
              </Button>
            </FlexBox>
          </FlexBox>
        </Popover>
        </>
  );
};

export default memo(FontIconPicker);

export const FormFontIconPicker = (props: { readonly?: string } & any) => {
  return <FormFieldControl {...props} Component={FontIconPicker} />;
};
