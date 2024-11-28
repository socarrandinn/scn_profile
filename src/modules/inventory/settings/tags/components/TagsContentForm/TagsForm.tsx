import { memo } from 'react';
import { Grid, IconButton, Stack } from '@mui/material';
import { TagSelect } from './TagSelect';
import { useTranslation } from 'react-i18next';
import TagsFormType from './TagsFormType';
import TagLayout from './TagItem/TagLayout';
import { useTagsFieldArray } from '../../hooks/useTagsFieldArray';
import { TagsRequiredList } from './TagsRequiredList';
import { Add } from '@mui/icons-material';

type TagsFormProps = {
  control: any;
  title?: string;
  name?: string;
  isEdit?: boolean;
};

const TagsForm = ({ control, title, name, isEdit = false }: TagsFormProps) => {
  const { t } = useTranslation('tags');
  const {
    fields: otherFields,
    name: nameOther,
    onAddTag,
    onRemoveTag,
  } = useTagsFieldArray({ control, name: 'otherTags' });

  return (
    <Stack gap={{ xs: 2, md: 3 }}>
      {isEdit && (
        <Stack gap={1} flexDirection={'row'} alignItems={'center'}>
          <TagSelect
            name='selectedTag'
            multiple
            label={t('summary.select')}
            control={control}
            remove={onRemoveTag}
            onChange={onAddTag}
          />
          <IconButton
            sx={{
              backgroundColor: 'background.paper',
              boxShadow: (theme) => theme.shadows[1],
            }}
            onClick={() => {
              onAddTag();
            }}
          >
            <Add />
          </IconButton>
        </Stack>
      )}
      <TagsRequiredList control={control} title={title} name={name} />
      {otherFields && (
        <Stack gap={{ xs: 1, md: 2 }}>
          <TagListContent fields={otherFields} name={nameOther} />
        </Stack>
      )}
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
