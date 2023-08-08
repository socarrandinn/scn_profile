import { memo } from 'react';
import { ManufactureDetail } from 'modules/provider/manufacture/context/ManufactureDetail';
import ManufactureDetailSkeleton
  from 'modules/provider/manufacture/components/ManufactureDetail/ManufactureDetailSkeleton';
import { HandlerError, ButtonOutlined, FlexBox } from '@dfl/mui-react-common';
import { Stack, Typography } from '@mui/material';
import { ManufactureBand } from 'modules/provider/manufacture/components/ManufactureBand';
import Divider from '@mui/material/Divider';
import { PermissionCheck, useSearchParamsChange } from '@dfl/react-security';
import { useTranslation } from 'react-i18next';
import AvatarEditable from 'components/AvatarEditable/AvatarEditable';
import { useUploadAvatar } from 'modules/security/users/components/AvatarUser/useUploadAvatar';
import { MANUFACTURE_PERMISSIONS } from 'modules/provider/manufacture/constants';
import ManufactureEditModal from 'modules/provider/manufacture/containers/ManufactureEditModal';
import ActionsManufacture from 'modules/provider/manufacture/components/ActionManufacture/ActionsManufacture';

const ManufactureDetailC = () => {
  const { isLoading, error, manufacture, manufacturerId } = ManufactureDetail();
  const { t } = useTranslation('manufacture');
  const { mutate } = useUploadAvatar(manufacture?._id as string);
  const { update } = useSearchParamsChange('edit');

  const handleEdit = () => {
    update({ edit: manufacturerId });
  }

  if (isLoading) {
    return <ManufactureDetailSkeleton/>
  }

  if (error) {
    return <HandlerError error={error}/>;
  }
  const onSubmit = (f: any) => {
    if (f.length) {
      mutate(f[0])
    }
  }

  return (
        <Stack p={2} pt={5} spacing={2}>
            <Stack direction='column' alignItems='center' spacing={0}>
                <AvatarEditable avatar={manufacture?.avatar} onSubmit={onSubmit} isLoading={isLoading} variant={'rounded'}/>
                <Typography variant={'h3'} mt={1}>
                    {manufacture?.name}
                </Typography>
            </Stack>
            <ManufactureBand bands={manufacture?.brand ?? []}/>
          <ActionsManufacture check={false} />
            <Divider/>
            <PermissionCheck permissions={MANUFACTURE_PERMISSIONS.MANUFACTURE_WRITE}>
                <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
                    <ButtonOutlined fullWidth={true} color={'success'} onClick={handleEdit}>
                        {t('edit')}
                    </ButtonOutlined>
                </FlexBox>
                <ManufactureEditModal/>
            </PermissionCheck>
        </Stack>
  );
}
export default memo(ManufactureDetailC);
