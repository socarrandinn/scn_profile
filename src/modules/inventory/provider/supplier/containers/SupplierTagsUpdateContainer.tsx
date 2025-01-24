import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback, useEffect, useMemo } from 'react';
import { ISupplier } from '../interfaces';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import SupplierTagsFormSkeleton from '../components/SupplierTagsForm/SupplierTagsFormSkeleton';
import useSupplierTagsForm from '../hooks/useSupplierTagsForm';
import TagsEditForm from 'modules/inventory/settings/tags/components/TagsContentForm/TagsEditForm';
import { ITagsMap, TAG_NAMES } from 'modules/inventory/settings/tags/interfaces';
import { useProviderProductsDetail } from '../context/ProviderProductDetail';
import { useMapperRequiredTags } from 'modules/inventory/settings/tags/hooks/useMapperRequiredTags';
import { useTagStore } from 'modules/inventory/settings/tags/contexts/useTagStore';

type SupplierTagsUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<ISupplier>;
  onClose: () => void;
  title?: string;
};

type Props = {
  onClose: VoidFunction;
};

const SupplierTagsUpdateContainer = ({ onClose }: Props) => {
  const { isLoading, error, providerProducts } = useProviderProductsDetail();
  const { mapperTagValue, totalTags, isTagLoading } = useMapperRequiredTags(TAG_NAMES.SUPPLIER);
  const { setTotalTag } = useTagStore();
  const { payload, supplierTags } = useMemo(() => {
    const supplierTags = mapperTagValue((providerProducts?.tags?.supplier as unknown as ITagsMap) || {});

    return {
      supplierTags,
      payload: {
        _id: providerProducts?._id,
        tags: {
          supplier: supplierTags,
        },
      },
    };
  }, [mapperTagValue, providerProducts?._id, providerProducts?.tags?.supplier]);

  useEffect(() => {
    setTotalTag(supplierTags?.length === totalTags);
  }, [setTotalTag, supplierTags, totalTags]);

  return (
    <SupplierTagsUpdate
      initValue={payload}
      dataError={error}
      loadingInitData={isLoading || isTagLoading}
      onClose={onClose}
    />
  );
};

const SupplierTagsUpdate = ({ dataError, initValue, loadingInitData, onClose }: SupplierTagsUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset, formState } = useSupplierTagsForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<SupplierTagsFormSkeleton />}>
          <TagsEditForm
            error={error}
            isLoading={isLoading}
            control={control}
            onSubmit={onSubmit}
            tagName={TAG_NAMES.SUPPLIER}
          />
        </ConditionContainer>
      )}

      <Stack mt={{ xs: 1, md: 3 }} gap={1} justifyContent={'end'} direction={'row'}>
        <Button variant='grey' onClick={handleClose}>
          {t('common:cancel')}
        </Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!formState?.isDirty || !!dataError}
          form='form-tags'
        >
          {t('common:save')}
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default memo(SupplierTagsUpdateContainer);
