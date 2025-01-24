import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback, useEffect, useMemo } from 'react';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { ILogistics } from '../interfaces';
import useLogisticTagsForm from '../hooks/useLogisticTagsForm';
import SupplierTagsFormSkeleton from '../../supplier/components/SupplierTagsForm/SupplierTagsFormSkeleton';
import TagsEditForm from 'modules/inventory/settings/tags/components/TagsContentForm/TagsEditForm';
import { ITagsMap, TAG_NAMES } from 'modules/inventory/settings/tags/interfaces';
import { useLogisticsDetailContext } from '../context/LogisticDetail';
import { useTagStore } from 'modules/inventory/settings/tags/contexts/useTagStore';
import { useMapperRequiredTags } from 'modules/inventory/settings/tags/hooks/useMapperRequiredTags';

type LogisticTagsUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<ILogistics>;
  onClose: () => void;
  title?: string;
};

type Props = {
  onClose: VoidFunction;
};

const LogisticTagsUpdateContainer = ({ onClose }: Props) => {
  const { logistic, isLoading, error } = useLogisticsDetailContext();
  const { setTotalTag } = useTagStore();
  const { mapperTagValue, totalTags, isTagLoading } = useMapperRequiredTags(TAG_NAMES.LOGISTIC);

  const { payload, logisticTags } = useMemo(() => {
    const logisticTags = mapperTagValue((logistic?.tags?.logistic as unknown as ITagsMap) || {});

    return {
      logisticTags,
      payload: {
        _id: logistic?._id,
        tags: {
          logistic: logisticTags,
        },
      },
    };
  }, [logistic?._id, logistic?.tags?.logistic, mapperTagValue]);

  useEffect(() => {
    setTotalTag(logisticTags?.length === totalTags);
  }, [setTotalTag, logisticTags, totalTags]);

  return (
    <LogisticTagsUpdate
      initValue={payload}
      dataError={error}
      loadingInitData={isLoading || isTagLoading}
      onClose={onClose}
    />
  );
};

const LogisticTagsUpdate = ({ dataError, initValue, loadingInitData, onClose }: LogisticTagsUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset, formState } = useLogisticTagsForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<SupplierTagsFormSkeleton />}>
          <TagsEditForm
            error={error}
            isLoading={isLoading}
            control={control}
            onSubmit={onSubmit}
            tagName={TAG_NAMES.LOGISTIC}
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

export default memo(LogisticTagsUpdateContainer);
