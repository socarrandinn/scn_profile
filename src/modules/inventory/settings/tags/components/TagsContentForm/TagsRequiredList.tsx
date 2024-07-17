import { Grid, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import TagsFormType from './TagsFormType';
import TagLayout from './TagItem/TagLayout';
import { useTagsFieldArray } from '../../hooks/useTagsFieldArray';

type TagsRequiredListProps = {
  control: any;
  title?: string
};

export const TagsRequiredList = ({ control, title }: TagsRequiredListProps) => {
  const { t } = useTranslation('tags');
  const { fields, name, /* onRemoveTag */ } = useTagsFieldArray({ control });

  if (fields?.length === 0) return <></>;

  return (
    <TagLayout title={t(title || 'summary.productTag')} pt={2}>
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
