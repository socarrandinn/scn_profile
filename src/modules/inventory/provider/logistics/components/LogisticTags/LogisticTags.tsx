import { useMemo, memo, useCallback } from 'react';
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

const LogisticTags = () => {
  const { t } = useTranslation('supplier');
  const { isLoading, error, logistic, state, onOneToggle, onOneClose } = useLogisticsDetailContext();
  const open = useMemo(() => state?.form_4 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_4'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_4'), [onOneToggle]);

  const payload = useMemo(
    () => ({
      _id: logistic?._id,
      tags: logistic?.tags,
      selectedTag: logistic?.tags,
    }),
    [logistic],
  );

  if (open) {
    return (
      <FormPaper
        nm
        actions={<ProvidersFormPaperActions label={t('section.tags.title')} onToggle={handleToggle} open={open} />}
      >
        <LogisticTagsUpdateContainer
          // @ts-ignore
          initValue={payload}
          dataError={error}
          loadingInitData={isLoading}
          onClose={handleClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper
      nm
      actions={<ProvidersFormPaperActions label={t('section.tags.title')} onToggle={handleToggle} open={open} />}
    >
      {isLoading && <ProductGeneralOrganizationFormSkeleton />}
      {error && <HandlerError error={error} mapError={mapGetOneErrors} />}
      {!isLoading && !error && (
        <Stack gap={{ xs: 2, md: 3 }}>
          {logistic?.tags?.map((tag) => (
            <TagItem key={tag?._id} tag={tag} />
          ))}
        </Stack>
      )}
    </FormPaper>
  );
};

export default memo(LogisticTags);
