import { useMemo, memo, useEffect } from 'react';
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
import { ITagsMap, TAG_NAMES } from 'modules/inventory/settings/tags/interfaces';
import { useMapperRequiredTags } from 'modules/inventory/settings/tags/hooks/useMapperRequiredTags';
import { useTagStore } from 'modules/inventory/settings/tags/contexts/useTagStore';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { SUPPLIER_PERMISSIONS } from '../../constants';

const SupplierTags = () => {
  const { t } = useTranslation('supplier');
  const { isOpen, onClose, onToggle } = useToggle(false);
  const { isLoading, error, providerProducts } = useProviderProductsDetail();
  const { mapperTagValue, totalTags } = useMapperRequiredTags(TAG_NAMES.SUPPLIER);
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

  if (isOpen) {
    return (
      <FormPaper title={t('tags:summary.select')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
        <SupplierTagsUpdateContainer
          // @ts-ignore
          initValue={payload}
          dataError={error}
          loadingInitData={isLoading}
          onClose={onClose}
          title='summary.providerTag'
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper
      title={t('tags:summary.select')}
      actions={
        <FormPaperAction
          onToggle={onToggle}
          open={isOpen}
          permissions={[SUPPLIER_PERMISSIONS.SUPPLIER_WRITE]}
        />
      }
    >
      {isLoading && <ProductGeneralOrganizationFormSkeleton />}
      {error && <HandlerError error={error} mapError={mapGetOneErrors} />}
      {!isLoading && !error && (
        <Stack gap={{ xs: 2, md: 3 }}>
          {supplierTags && supplierTags?.map((tag) => <TagItem key={tag?._id} tag={tag} />)}
        </Stack>
      )}
    </FormPaper>
  );
};

export default memo(SupplierTags);
