import React, { memo } from 'react';
import ManufactueDetailSkeleton
  from 'modules/provider/manufacture/components/ManufactureDetail/ManufactureDetailSkeleton';
import { HandlerError, ButtonOutlined, FlexBox } from '@dfl/mui-react-common';
import { Stack, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { PermissionCheck, ReactLink } from '@dfl/react-security';
import { useTranslation } from 'react-i18next';
import { LOGISTICS_PERMISSIONS } from 'modules/provider/logistics/constants';
import { LogistcisDetail } from 'modules/provider/logistics/context/LogisticDetail';
import { ContactPreview } from 'modules/store/store/components/ContactPreview';
import SubSectionTitle from 'modules/common/components/Titles/SubSectionTitle';
import { AddressValue } from 'modules/common/components/Address';
import { IAddress } from 'modules/common/interfaces';
import LogisticStatusTable from 'modules/provider/logistics/components/DataPickerLogistic/LogisticStatusTable';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import ImageLogistics from 'modules/provider/logistics/components/UploadImgaEdit/ImageLogistics';

const LogisticsDetailGeneral = () => {
  const {
    isLoading,
    error,
    logistic,
    logisticId
  } = LogistcisDetail();
  const { t } = useTranslation('logistics');
  useBreadcrumbName(logistic?._id || '', logistic?.name, isLoading);

  if (isLoading) {
    return <ManufactueDetailSkeleton />;
  }

  if (error) {
    return <HandlerError error={error} />;
  }

  return (
    <Stack p={2} pt={2} spacing={1}>
      <Stack direction="column" alignItems="center" spacing={0}>
        <ImageLogistics logistics={logistic}/>
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
      <SubSectionTitle sx={{ margintop: '0px' }} >{t('common:address')}</SubSectionTitle>
      <AddressValue
        value={logistic?.address as IAddress}
        showStreet={true}
        hideIcon={true}
      />
      <PermissionCheck permissions={LOGISTICS_PERMISSIONS.LOGISTICS_WRITE}>
        <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
          <ReactLink to={`/provider/logistics/${logisticId as string}/edit`}>
            <ButtonOutlined fullWidth={true} color={'success'} >
              {t('edit')}
            </ButtonOutlined>
          </ReactLink>
        </FlexBox>
      </PermissionCheck>
    </Stack>

  );
};
export default memo(LogisticsDetailGeneral);
