import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@dfl/hook-utils';
import { HandlerError } from '@dfl/mui-react-common';
import { mapGetOneErrors } from 'constants/errors';
import ProductGeneralOrganizationFormSkeleton from 'modules/inventory/product/components/ProductGeneralOrganizationForm/ProductGeneralOrganizationFormSkeleton';
import { useProviderProductsDetail } from '../../context/ProviderProductDetail';
import SupplierTagsUpdateContainer from '../../containers/SupplierTagsUpdateContainer';
import { Stack } from '@mui/material';
import TagItem from 'modules/inventory/settings/tags/components/TagsContentForm/TagItem/TagItem';
import { ISummaryTags } from 'modules/inventory/settings/tags/interfaces';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { SUPPLIER_PERMISSIONS } from '../../constants';
import { useMapperTagsList } from 'modules/inventory/settings/tags/hooks/useMapperTagsList';

const SupplierTags = () => {
  const { t } = useTranslation('supplier');
  const { isOpen, onClose, onToggle } = useToggle(false);
  const { isLoading, error, providerProducts } = useProviderProductsDetail();
  const { requiredTagList } = useMapperTagsList();

  if (isOpen) {
    return (
      <FormPaper title={t('tags:summary.select')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
        <SupplierTagsUpdateContainer onClose={onClose} />
      </FormPaper>
    );
  }

  return (
    <FormPaper
      title={t('tags:summary.select')}
      actions={
        <FormPaperAction onToggle={onToggle} open={isOpen} permissions={[SUPPLIER_PERMISSIONS.SUPPLIER_WRITE]} />
      }
    >
      {isLoading && <ProductGeneralOrganizationFormSkeleton />}
      {error && <HandlerError error={error} mapError={mapGetOneErrors} />}
      {!isLoading && !error && (
        <Stack gap={{ xs: 2, md: 3 }}>
          {providerProducts?.tags?.supplier &&
            requiredTagList(providerProducts?.tags?.supplier as unknown as Record<string, ISummaryTags>)?.map((tag) => (
              <TagItem key={tag?._id} tag={tag} />
            ))}
        </Stack>
      )}
    </FormPaper>
  );
};

export default memo(SupplierTags);
