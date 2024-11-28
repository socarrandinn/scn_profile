import { Divider, Stack } from '@mui/material';
import { FormPaper } from 'modules/common/components/FormPaper';
import TagItem from 'modules/inventory/settings/tags/components/TagsContentForm/TagItem/TagItem';
import { ISummaryTags } from 'modules/inventory/settings/tags/interfaces';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import SupplierEmpty from './SupplierTagsEmpty';
type ProductSupplierTagsProps = {
  supplierTags?: ISummaryTags[];
};

const ProductSupplierTags = ({ supplierTags }: ProductSupplierTagsProps) => {
  const { t } = useTranslation('product');
  if (supplierTags?.length === 0) {
    return (
      <FormPaper title={t('section.summary.tags.supplier')}>
        <SupplierEmpty />
      </FormPaper>
    );
  }

  return (
    <FormPaper title={t('section.summary.tags.supplier')}>
      <Stack gap={{ xs: 1, md: 2 }} divider={<Divider flexItem />}>
        {supplierTags?.map((tag) => (
          <TagItem key={tag?._id} tag={tag} sx={{ background: '#E9E9E9', border: 'none' }} />
        ))}
      </Stack>
    </FormPaper>
  );
};

export default memo(ProductSupplierTags);
