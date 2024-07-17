import { memo } from 'react';
import { Button, Grid, Stack } from '@mui/material';
import { TagSelect } from './TagSelect';
import { useTranslation } from 'react-i18next';
import TagsFormType from './TagsFormType';
import TagLayout from './TagItem/TagLayout';
import { useTagsFieldArray } from '../../hooks/useTagsFieldArray';
import { TagsRequiredList } from './TagsRequiredList';
import { Add } from '@mui/icons-material';

type TagsFormProps = {
  control: any;
  title?: string
};

const TagsForm = ({ control, title }: TagsFormProps) => {
  const { t } = useTranslation('tags');
  const {
    fields: otherFields,
    name: nameOther,
    onAddTag,
    onRemoveTag,
  } = useTagsFieldArray({ control, name: 'otherTags' });

  return (
    <Stack gap={{ xs: 2, md: 3 }}>
      <TagsRequiredList control={control} title={title}/>
      <Stack gap={{ xs: 1, md: 2 }}>
        <Grid item xs={12}>
          <TagLayout title={t('summary.addTag')}>
            <Stack gap={1} alignItems={'center'} width={'100%'}>
              <TagSelect
                name='selectedTag'
                multiple
                label={t('summary.select')}
                control={control}
                remove={onRemoveTag}
                onChange={onAddTag}
              />
              <Button
                startIcon={<Add />}
                fullWidth
                variant='outlined'
                onClick={() => {
                  onAddTag();
                }}
              >
                {t('add')}
              </Button>
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
            <TagsFormType tag={tag} name={`${name}.${index}.value`} onRemoveTag={undefined} />
          </Grid>
        ))}
      </Stack>
    </TagLayout>
  );
};
