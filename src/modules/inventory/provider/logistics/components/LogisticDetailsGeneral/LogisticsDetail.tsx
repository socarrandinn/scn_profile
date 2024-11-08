import React, { memo } from 'react';
import { HandlerError, ButtonOutlined, FlexBox } from '@dfl/mui-react-common';
import { Stack, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { PermissionCheck, ReactLink } from '@dfl/react-security';
import { useTranslation } from 'react-i18next';
import { LOGISTICS_PERMISSIONS } from 'modules/inventory/provider/logistics/constants';
import { useLogisticsDetailContext } from 'modules/inventory/provider/logistics/context/LogisticDetail';
import { ContactPreview } from 'modules/common/components/ContactPreview';
import SubSectionTitle from 'modules/common/components/Titles/SubSectionTitle';
import { AddressValue } from 'modules/common/components/Address';
import { IAddress } from 'modules/common/interfaces';
import LogisticStatusTable from 'modules/inventory/provider/logistics/components/DataPickerLogistic/LogisticStatusTable';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import ImageLogistics from 'modules/inventory/provider/logistics/components/UploadImgaEdit/ImageLogistics';
import ManufactureDetailSkeleton from 'modules/inventory/provider/manufacture/components/ManufactureDetail/ManufactureDetailSkeleton';

const LogisticsDetailGeneral = () => {
  const { isLoading, error, logistic, logisticId } = useLogisticsDetailContext();
  const { t } = useTranslation('logistics');
  useBreadcrumbName(logistic?._id || '', logistic?.name, isLoading);

  if (isLoading) {
    return <ManufactureDetailSkeleton />;
  }

  if (error) {
    return <HandlerError error={error} />;
  }

  return (
    <Stack p={2} pt={2} spacing={1}>
      <Stack direction='column' alignItems='center' spacing={0}>
        <ImageLogistics logistics={logistic} />
        <Typography variant={'h3'} mt={1}>
          {logistic?.name}
        </Typography>
      </Stack>
      <Divider sx={{ margin: '15px 0px' }} />
      <FlexBox display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant={'h3'} mt={1}>
          {t('fields.status')}
        </Typography>
        <LogisticStatusTable rowId={logisticId as string} value={logistic?.active ?? false} />
      </FlexBox>
      <Divider sx={{ margin: '15px 0px' }} />
      <ContactPreview contacts={logistic?.contacts ?? undefined} />
      <SubSectionTitle sx={{ margintop: '0px' }}>{t('common:address')}</SubSectionTitle>
      <AddressValue value={logistic?.address as IAddress} hideIcon={true} />
      <PermissionCheck permissions={LOGISTICS_PERMISSIONS.LOGISTICS_WRITE}>
        <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
          <ReactLink to={`/provider/logistics/${logisticId as string}/edit`}>
            <ButtonOutlined fullWidth={true} color={'success'}>
              {t('edit')}
            </ButtonOutlined>
          </ReactLink>
        </FlexBox>
      </PermissionCheck>
    </Stack>
  );
};
export default memo(LogisticsDetailGeneral);
