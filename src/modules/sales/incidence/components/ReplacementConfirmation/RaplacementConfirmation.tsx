/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date:
 */
import React, { memo } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import BeforeProductsTable from 'modules/sales/incidence/components/BeforeProductsTable/BeforeProductsTable';
import ReplacementProductsTable from 'modules/sales/incidence/components/ReplacementProductsTable/ReplacementProductsTable';
import { IncidenceActionType } from 'modules/sales/incidence/constants/incidence-action.enum';
import IncidenceActionSummary from 'modules/sales/incidence/components/IncidenceActionSummary/IncidenceActionSummary';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  products?: any[];
};

const ReplacementConfirmation = ({ isOpen, onClose, products }: Props) => {
  const { t } = useTranslation('incidence');

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle id='alert-dialog-title'>{t('areYouSureToReplaceThisProduct')}</DialogTitle>
      <FlexBox width='100%' className='px-4 -mt-4 max-w-[450px]'>
        <Typography variant='body1'>{t('areYouSureToReplaceThisProductDescription')}</Typography>
      </FlexBox>
      <DialogContent className='w-full md:w-[450px] pb-4 pt-2'>
        <Box width='100%' className='flex flex-col gap-2'>
          <BeforeProductsTable products={products} />
        </Box>

        <FlexBox width='100%' className='flex gap-2'>
          <ReplacementProductsTable products={products} />
        </FlexBox>

        <IncidenceActionSummary type={IncidenceActionType.REIMBURSEMENTS} />

        <FlexBox mt={2} alignItems={'center'} justifyContent={'space-between'}>
          <Typography variant='body1' className='text-center text-[16px] font-light text-secondary'>
            {t('assignedTo')}:
          </Typography>

          <FlexBox bgcolor='#E9EBEF' borderRadius={16} alignItems={'center'} gap={0.5} pr={1}>
            <FlexBox
              alignItems='center'
              justifyContent='center'
              className='bg-primary text-white rounded-full w-[32px] h-[32px] mr-2'
            >
              A
            </FlexBox>
            <Typography>Proveedor Logístico: </Typography>
            <Typography className='text-primary'>Pesca Caribe</Typography>
          </FlexBox>
        </FlexBox>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t('common:cancel')}</Button>
        <Button variant='contained' autoFocus>
          {t('common:save')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default memo(ReplacementConfirmation);
