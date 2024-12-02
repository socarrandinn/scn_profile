import { useMemo, memo, useCallback, useEffect } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { Stack } from '@mui/material';
import { HandlerError } from '@dfl/mui-react-common';
import { mapGetOneErrors } from 'constants/errors';
import ProductGeneralOrganizationFormSkeleton from 'modules/inventory/product/components/ProductGeneralOrganizationForm/ProductGeneralOrganizationFormSkeleton';
import { useLogisticsDetailContext } from '../../context/LogisticDetail';
import LogisticTagsUpdateContainer from '../../containers/LogisticTagsUpdateContainer';
import ProvidersFormPaperActions from 'modules/inventory/product/components/ProductGeneralProviders/ProvidersFormPaperActions';
import TagItem from 'modules/inventory/settings/tags/components/TagsContentForm/TagItem/TagItem';
import { ITagsMap, TAG_NAMES } from 'modules/inventory/settings/tags/interfaces';
import { useMapperRequiredTags } from 'modules/inventory/settings/tags/hooks/useMapperRequiredTags';
import { useTagStore } from 'modules/inventory/settings/tags/contexts/useTagStore';

const LogisticTags = () => {
  const { t } = useTranslation('supplier');
  const { isLoading, error, logistic, state, onOneToggle, onOneClose } = useLogisticsDetailContext();
  const open = useMemo(() => state?.form_4 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_4'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_4'), [onOneClose]);
  const { setTotalTag } = useTagStore();
  const { mapperTagValue, totalTags } = useMapperRequiredTags(TAG_NAMES.LOGISTIC);

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

  if (open) {
    return (
      <FormPaper
        actions={<ProvidersFormPaperActions label={t('tags:summary.select')} onToggle={handleToggle} open={open} />}
      >
        <LogisticTagsUpdateContainer
          // @ts-ignore
          initValue={payload}
          dataError={error}
          loadingInitData={isLoading}
          onClose={handleClose}
          title='summary.providerTag'
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper
      actions={<ProvidersFormPaperActions label={t('tags:summary.select')} onToggle={handleToggle} open={open} />}
    >
      {isLoading && <ProductGeneralOrganizationFormSkeleton />}
      {error && <HandlerError error={error} mapError={mapGetOneErrors} />}
      {!isLoading && !error && (
        <Stack gap={{ xs: 2, md: 3 }}>
          {logisticTags && logisticTags?.map((tag) => <TagItem key={tag?._id} tag={tag} />)}
        </Stack>
      )}
    </FormPaper>
  );
};

export default memo(LogisticTags);
