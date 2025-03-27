/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date:
 */
import React, { memo, useMemo } from 'react';
import { FlexBox } from '@dfl/mui-react-common';
import { IncidenceActionType } from 'modules/sales/incidence/constants/incidence-action.enum';
import { Divider, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PaperContent } from 'modules/inventory/common/components/StoreBoxs/common';

type Props = {
  type: IncidenceActionType;
};

const IncidenceActionSummary = ({ type }: Props) => {
  const { t } = useTranslation('incidence');

  const otherInfo = useMemo(() => {
    if (type === IncidenceActionType.REIMBURSEMENTS) {
      return (
        <>
          <FlexBox alignItems={'center'} gap={1} justifyContent={'space-between'}>
            <Typography fontSize={14} color='#2B3445' fontWeight={500}>
              {t('summary.reimbursements')}
            </Typography>
            <Typography fontSize={14} color='#2B3445'>
              $4.00
            </Typography>
          </FlexBox>
          <Divider className='mt-3 mb-3' />
          <FlexBox alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
            <Typography fontSize={14} color='#2B3445' fontWeight={500} className='flex-1'>
              {t('summary.customerCharges')}
            </Typography>
            <FlexBox gap={1} alignItems={'flex-end'} justifyContent={'flex-end'}>
              <Typography fontSize={14} color='#fff' bgcolor='#72B62F' borderRadius={10} px={1}>
                -10%
              </Typography>
              <Typography fontSize={14} color='#2B3445'>
                $4.00
              </Typography>
            </FlexBox>
            <Divider className='mt-3 mb-3' />
          </FlexBox>
        </>
      );
    }
    return null;
  }, [t, type]);

  return (
    <FlexBox flexDirection={'column'}>
      <PaperContent sx={{ mt: 2, borderRadius: 2, bgcolor: '#D4EECC' }}>
        <FlexBox borderRadius={2} flexDirection={'column'}>
          <FlexBox alignItems={'center'} gap={1} justifyContent={'space-between'}>
            <Typography fontSize={14} color='#2B3445' fontWeight={500}>
              {t('summary.products')}
            </Typography>
            <Typography fontSize={14} color='#2B3445'>
              $100.00
            </Typography>
          </FlexBox>
          <FlexBox alignItems={'center'} gap={1} justifyContent={'space-between'}>
            <Typography fontSize={14} color='#2B3445' fontWeight={500}>
              {t('summary.shipping')}
            </Typography>
            <Typography fontSize={14} color='#2B3445'>
              $4.00
            </Typography>
          </FlexBox>
          <FlexBox alignItems={'center'} gap={1} justifyContent={'space-between'}>
            <Typography fontSize={14} color='#2B3445' fontWeight={500}>
              {t('summary.discount')}
            </Typography>
            <Typography fontSize={14} color='#2B3445'>
              $4.00
            </Typography>
          </FlexBox>
          <Divider className='mt-3 mb-3' />
          {otherInfo}

          {type === IncidenceActionType.REIMBURSEMENTS ? (
            <>
              <Divider className='mt-3 mb-3' />
              <FlexBox alignItems={'center'} gap={1} justifyContent={'space-between'}>
                <Typography fontSize={14} color='#2B3445' fontWeight={700}>
                  {t('summary.reimbursementsTotal')}
                </Typography>
                <Typography fontSize={14} color='#2B3445' fontWeight={700}>
                  $4.00
                </Typography>
              </FlexBox>
            </>
          ) : (
            <>
              <Divider className='mt-3 mb-3' />
              <FlexBox alignItems={'center'} gap={1} justifyContent={'space-between'}>
                <Typography fontSize={14} color='#2B3445' fontWeight={700}>
                  {t('summary.total')}
                </Typography>
                <Typography fontSize={14} color='#2B3445' fontWeight={700}>
                  $4.00
                </Typography>
              </FlexBox>
            </>
          )}
        </FlexBox>
      </PaperContent>

      <PaperContent sx={{ mt: 2, borderRadius: 2, bgcolor: '#D4EECC' }}>
        <FlexBox borderRadius={2} flexDirection={'column'}>
          <FlexBox alignItems={'center'} gap={1} justifyContent={'space-between'}>
            <Typography fontSize={14} color='#2B3445' fontWeight={500}>
              {t('summary.operatingExpenses')}
            </Typography>
            <Typography fontSize={14} color='#2B3445'>
              $100.00
            </Typography>
          </FlexBox>
          <FlexBox alignItems={'center'} gap={1} justifyContent={'space-between'}>
            <Typography fontSize={14} color='#2B3445' fontWeight={500}>
              {t('summary.shippingExpenses')}
            </Typography>
            <Typography fontSize={14} color='#2B3445'>
              $4.00
            </Typography>
          </FlexBox>
        </FlexBox>
        <Divider className='mt-3 mb-3' />
        <FlexBox alignItems={'center'} gap={1} justifyContent={'space-between'}>
          <Typography fontSize={14} color='#2B3445' fontWeight={700}>
            {t('summary.expensesTotal')}
          </Typography>
          <Typography fontSize={14} color='#2B3445' fontWeight={700}>
            $4.00
          </Typography>
        </FlexBox>
      </PaperContent>
    </FlexBox>
  );
};

export default memo(IncidenceActionSummary);
