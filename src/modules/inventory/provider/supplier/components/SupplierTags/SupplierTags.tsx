import { useMemo, memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@dfl/hook-utils';
import { HandlerError } from '@dfl/mui-react-common';
import { mapGetOneErrors } from 'constants/errors';
import ProductGeneralOrganizationFormSkeleton from 'modules/inventory/product/components/ProductGeneralOrganizationForm/ProductGeneralOrganizationFormSkeleton';
import { useProviderProductsDetail } from '../../context/ProviderProductDetail';
import ProductDetailTagsUpdateContainer from '../../containers/ProductDetailTagsUpdateContainer';
import ProvidersFormPaperActions from 'modules/inventory/product/components/ProductGeneralProviders/ProvidersFormPaperActions';
import { Stack } from '@mui/material';
import TagItem from 'modules/inventory/settings/tags/components/TagsContentForm/TagItem/TagItem';

const SupplierTags = () => {
  const { t } = useTranslation('supplier');
  const { isOpen, onClose, onToggle } = useToggle(false);
  const { isLoading, error, providerProducts } = useProviderProductsDetail();

  const payload = useMemo(
    () => ({
      _id: providerProducts?._id,
      tags: providerProducts?.tags,
      // selectedTag: providerProducts?.tags,
    }),
    [providerProducts],
  );

  if (isOpen) {
    return (
      <FormPaper
        nm
        actions={<ProvidersFormPaperActions label={t('section.tags.title')} onToggle={onToggle} open={isOpen} />}
      >
        <ProductDetailTagsUpdateContainer
          // @ts-ignore
          initValue={payload}
          dataError={error}
          loadingInitData={isLoading}
          onClose={onClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper
      nm
      actions={<ProvidersFormPaperActions label={t('section.tags.title')} onToggle={onToggle} open={isOpen} />}
    >
      {isLoading && <ProductGeneralOrganizationFormSkeleton />}
      {error && <HandlerError error={error} mapError={mapGetOneErrors} />}
      {!isLoading && !error && (
        <Stack gap={{ xs: 2, md: 3 }}>
          {providerProducts?.tags?.map((tag) => (
            <TagItem key={tag?._id} tag={tag} />
          ))}
        </Stack>
      )}
    </FormPaper>
  );
};

export default memo(SupplierTags);
