import { memo } from 'react';
import { Grid, Stack } from '@mui/material';
import { ProductTagSelect } from './ProductTagSelect';
import { useTranslation } from 'react-i18next';
import ProductTagsFormType from './ProductTagsFormType';
import ProductTagLayout from './ProductTagItem/ProductTagLayout';
import { ITags } from 'modules/inventory/settings/tags/interfaces';
import { useFindTagsByProduct } from 'modules/inventory/settings/tags/hooks/useFindTags';
import { useTagsFiledArray } from './hooks/useTagsFiledArray';
import ProductTagsFormSkeleton from './ProductTagsFormSkeleton';

type ProductTagsFormProps = {
  control: any;
};

const ProductTagsForm = ({ control }: ProductTagsFormProps) => {
  const { t } = useTranslation('tags');
  const { fields, onRemoveTag, name, remove, onHandleTags } = useTagsFiledArray({ control });

  return (
    <>
      <Grid item xs={12} mb={2}>
        <ProductTagLayout title={t('summary.addTag')}>
          <Stack gap={1} alignItems={'center'} width={'100%'}>
            <ProductTagSelect
              name='selectedTag'
              multiple
              label={t('summary.select')}
              control={control}
              remove={remove}
              onChange={onHandleTags}
            />
            {/*  <Button fullWidth startIcon={<Add />} variant='outlined' onClick={onAddTag}>
              {t('add')}
            </Button> */}
          </Stack>
        </ProductTagLayout>
      </Grid>
      <TagListContent onRemoveTag={onRemoveTag} fields={fields} name={name} />
    </>
  );
};
export default memo(ProductTagsForm);

type TagListContentProps = {
  name: string;
  onRemoveTag: (index: number) => void;
  fields: any[];
};

export const TagListContent = ({ name, fields, onRemoveTag }: TagListContentProps) => {
  const { data, isLoading } = useFindTagsByProduct();
  const { t } = useTranslation('tags');
  if (isLoading) return <ProductTagsFormSkeleton />;

  if (fields?.length === 0) return <></>;

  return (
    <ProductTagLayout title={t('summary.productTag')} pt={2}>
      <Stack gap={2} width={'100%'}>
        {fields?.map((tag: any, index: number) => (
          <Grid item key={tag?.tagId} xs={12}>
            <ProductTagsFormType
              tag={tag}
              name={`${name}.${index}.value`}
              values={getValues(data?.data, tag?._id as string)}
              onRemove={() => {
                onRemoveTag(index);
              }}
            />
          </Grid>
        ))}
      </Stack>
    </ProductTagLayout>
  );
};

const getValues = (data: ITags[], id: string) => {
  const tag = data?.find((tag) => tag?._id === id);
  return tag?.values || [];
};
