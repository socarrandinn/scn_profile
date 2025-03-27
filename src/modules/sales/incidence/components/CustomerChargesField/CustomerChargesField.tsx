/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date:
 */
import React, { memo, useCallback, useMemo, useState } from 'react';
import { FlexBox, IconButton, TextField, ToggleButtonGroup } from '@dfl/mui-react-common';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputAdornment,
  ToggleButton,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import PriceCell from 'modules/security/audit-logs/components/TableCells/PriceCell';
import { useToggle } from '@dfl/hook-utils';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

enum ChargeType {
  PERCENTAGE = 'percentage',
  FIXED = 'fixed',
}

type ICharge = {
  _id?: string;
  text: string;
  value: number;
  type: ChargeType;
};

const defaultCharge: ICharge = {
  text: '',
  value: 0,
  type: ChargeType.FIXED,
};

const CustomerChargesField = () => {
  const { t } = useTranslation('incidence');

  const { isOpen, onOpen, onClose } = useToggle();

  const [currentCharge, setCurrentCharge] = useState<ICharge | null>(defaultCharge);

  const [charges, setCharges] = useState<ICharge[]>([]);

  const onRemove = useCallback((index: number) => {
    setCharges((prev) => prev.filter((item, i) => i !== index));
  }, []);

  const onEdit = useCallback(
    (field: string, value: string) => {
      // @ts-ignore
      setCurrentCharge({ ...currentCharge, [field]: value || '' });
    },
    [currentCharge],
  );

  const onSave = useCallback(() => {
    // @ts-ignore
    setCharges((prev: ICharge[]) => [...(prev || []), currentCharge]);
    onClose?.();
    setCurrentCharge(defaultCharge);
  }, [currentCharge, onClose]);

  const total = useMemo(() => {
    return charges?.reduce((prev, curr) => prev + +curr.value, 0) || 0;
  }, [charges]);

  return (
    <FlexBox bgcolor='#F6F7F9' py={'20px'} borderRadius='10px' flexDirection={'column'}>
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle id='alert-dialog-title'>{t('customCharges.modal.title')}</DialogTitle>
        <DialogContent className='w-full md:w-[450px] lg:w-[550px] pb-4 pt-2'>
          <FlexBox width='100%' className='flex flex-col gap-6'>
            <Box width='100%' className='flex flex-col gap-2'>
              <TextField
                label={t('customCharges.modal.field')}
                value={currentCharge?.text || ''}
                onChange={(e) => {
                  onEdit('text', e?.target?.value);
                }}
              />
            </Box>

            <FlexBox width='100%' className='flex gap-2'>
              <ToggleButtonGroup
                exclusive
                defaultValue={currentCharge?.type}
                value={currentCharge?.type}
                onChange={(e: any) => {
                  onEdit('type', e?.target?.value);
                }}
              >
                <ToggleButton
                  value={ChargeType.PERCENTAGE}
                  className={currentCharge?.type === ChargeType.PERCENTAGE ? 'bg-primary text-white' : ''}
                >
                  {t('customCharges.modal.percentage')}
                </ToggleButton>
                <ToggleButton
                  value={ChargeType.FIXED}
                  className={currentCharge?.type === ChargeType.FIXED ? 'bg-primary text-white' : ''}
                >
                  {t('customCharges.modal.fixed')}
                </ToggleButton>
              </ToggleButtonGroup>

              <TextField
                label={t('customCharges.modal.value')}
                fullWidth
                value={currentCharge?.value || 0}
                onChange={(e) => {
                  onEdit('value', e?.target?.value);
                }}
                InputProps={{
                  type: 'number',
                  endAdornment: (
                    <InputAdornment position='end'>
                      {currentCharge?.type === ChargeType.PERCENTAGE ? '%' : '$'}
                    </InputAdornment>
                  ),
                }}
              />
            </FlexBox>
          </FlexBox>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>{t('common:cancel')}</Button>
          <Button variant='contained' onClick={onSave} autoFocus>
            {t('common:save')}
          </Button>
        </DialogActions>
      </Dialog>

      <FlexBox flexDirection={'column'} gap={1}>
        <FlexBox gap={1} alignItems={'center'} px={'25px'} justifyContent={'space-between'} mb={2}>
          <FlexBox alignItems={'center'}>
            <Typography fontSize={16} color='#2B3445' fontWeight={600}>
              {t('customCharges.title')}
            </Typography>
          </FlexBox>

          <FlexBox alignItems={'center'}>
            <IconButton
              className='bg-primary'
              sx={{ width: '31px', height: '31px', color: '#fff', fontSize: '23px' }}
              tooltip={t('customCharges.add')}
              onClick={() => {
                onOpen();
              }}
            >
              +
            </IconButton>
          </FlexBox>
        </FlexBox>

        <FlexBox flexDirection={'column'} gap={0.7}>
          {charges?.map((item, idx) => (
            <FlexBox
              key={item?._id || idx}
              gap={1}
              alignItems={'center'}
              justifyContent={'space-between'}
              bgcolor='#E9EBEF'
              borderRadius='10px'
              px='25px'
              py='8px'
            >
              <FlexBox gap={0.5} alignItems={'center'} justifyContent={'space-between'} width='100%'>
                <FlexBox gap={0.5} alignItems={'center'}>
                  <Typography fontSize={14}>{item?.text}</Typography>
                </FlexBox>

                <FlexBox gap={1} alignItems={'center'}>
                  <Typography fontSize={14}>{`${item?.value}${
                    item?.type === ChargeType.PERCENTAGE ? '%' : '$'
                  }`}</Typography>

                  <IconButton
                    sx={{
                      width: '25px',
                      height: '25px',
                      color: '#fff',
                      fontSize: '16px',
                      bgcolor: '#F94A44',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    tooltip={t('bills.remove')}
                    onClick={() => {
                      onRemove(idx);
                    }}
                  >
                    <DeleteOutlinedIcon sx={{ color: '#fff', fontSize: '16px' }} />
                  </IconButton>
                </FlexBox>
              </FlexBox>
            </FlexBox>
          ))}
        </FlexBox>
      </FlexBox>

      <FlexBox gap={1} alignItems={'center'} justifyContent={'space-between'} mt={2} px={'25px'}>
        <Typography fontSize={16} color='#2B3445' fontWeight={600}>
          {t('customCharges.total')}
        </Typography>
        <Typography fontSize={16} color='#2B3445' fontWeight={600}>
          <PriceCell value={total ? total?.toFixed(2) : 0} />
        </Typography>
      </FlexBox>
    </FlexBox>
  );
};

export default memo(CustomerChargesField);
