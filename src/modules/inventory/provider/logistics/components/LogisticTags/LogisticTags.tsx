import { useMemo, memo, useCallback } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { Stack } from '@mui/material';
import { HandlerError } from '@dfl/mui-react-common';
import { mapGetOneErrors } from 'constants/errors';
import ProductGeneralOrganizationFormSkeleton from 'modules/inventory/product/components/ProductGeneralOrganizationForm/ProductGeneralOrganizationFormSkeleton';
import { useLogisticsDetailContext } from '../../context/LogisticDetail';
import LogisticTagsUpdateContainer from '../../containers/LogisticTagsUpdateContainer';
import TagItem from 'modules/inventory/settings/tags/components/TagsContentForm/TagItem/TagItem';
import { ISummaryTags } from 'modules/inventory/settings/tags/interfaces';

import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { LOGISTICS_PERMISSIONS } from '../../constants';
import { useMapperTagsList } from 'modules/inventory/settings/tags/hooks/useMapperTagsList';

const LogisticTags = () => {
  const { t } = useTranslation('supplier');
  const { isLoading, error, logistic, state, onOneToggle, onOneClose } = useLogisticsDetailContext();
  const open = useMemo(() => state?.form_4 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_4'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_4'), [onOneClose]);

  const { requiredTagList } = useMapperTagsList();

  if (open) {
    return (
      <FormPaper title={t('tags:summary.select')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
        <LogisticTagsUpdateContainer onClose={handleClose} />
      </FormPaper>
    );
  }

  return (
    <FormPaper
      title={t('tags:summary.select')}
      actions={
        <FormPaperAction onToggle={handleToggle} open={open} permissions={[LOGISTICS_PERMISSIONS.LOGISTICS_WRITE]} />
      }
    >
      {isLoading && <ProductGeneralOrganizationFormSkeleton />}
      {error && <HandlerError error={error} mapError={mapGetOneErrors} />}
      {!isLoading && !error && (
        <Stack gap={{ xs: 2, md: 3 }}>
          {logistic?.tags?.logistic &&
            requiredTagList(logistic?.tags?.logistic as unknown as Record<string, ISummaryTags>)?.map((tag) => (
              <TagItem key={tag?._id} tag={tag} />
            ))}
        </Stack>
      )}
    </FormPaper>
  );
};

export default memo(LogisticTags);
