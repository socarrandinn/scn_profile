import { memo } from 'react';
import { Grid, Stack } from '@mui/material';
import { TagSelect } from './TagSelect';
import { useTranslation } from 'react-i18next';
import TagsFormType from './TagsFormType';
import TagLayout from './TagItem/TagLayout';
import { useTagsFiledArray } from './hooks/useTagsFiledArray';
import { TagsRequiredList } from './TagsRequiredList';

type TagsFormProps = {
  control: any;
  filterOption?: any;
};

const TagsForm = ({ control, filterOption }: TagsFormProps) => {
  const { t } = useTranslation('tags');
  const {
    fields: otherFields,
    name: nameOther,
    remove,
    onHandleTags,
  } = useTagsFiledArray({ control, name: 'otherTags' });

  return (
    <Stack gap={{ xs: 2, md: 3 }}>
      <TagsRequiredList control={control} />
      <Stack gap={{ xs: 1, md: 2 }}>
        <Grid item xs={12}>
          <TagLayout title={t('summary.addTag')}>
            <Stack gap={1} alignItems={'center'} width={'100%'}>
              <TagSelect
                name='selectedTag'
                multiple
                label={t('summary.select')}
                control={control}
                remove={remove}
                onChange={onHandleTags}
                filterOption={filterOption}
              />
            </Stack>
          </TagLayout>
        </Grid>
        <TagListContent fields={otherFields} name={nameOther} />
      </Stack>
    </Stack>
  );
};
export default memo(TagsForm);

type TagListContentProps = {
  name: string;
  fields: any[];
};

export const TagListContent = ({ name, fields }: TagListContentProps) => {
  const { t } = useTranslation('tags');
  if (fields?.length === 0) return <></>;

  return (
    <TagLayout title={t('summary.productOtherTag')} pt={2}>
      <Stack gap={2} width={'100%'}>
        {fields?.map((tag: any, index: number) => (
          <Grid item key={tag?.tagId} xs={12}>
            <TagsFormType tag={tag} name={`${name}.${index}.value`} />
          </Grid>
        ))}
      </Stack>
    </TagLayout>
  );
};
