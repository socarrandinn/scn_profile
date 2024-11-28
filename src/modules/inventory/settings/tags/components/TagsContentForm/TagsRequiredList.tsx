import { Divider, Grid, Stack } from '@mui/material';
import TagsFormType from './TagsFormType';
import { useTagsFieldArray } from '../../hooks/useTagsFieldArray';

type TagsRequiredListProps = {
  control: any;
  title?: string;
  name?: string;
};

export const TagsRequiredList = ({ control, title, name }: TagsRequiredListProps) => {
  const { fields, name: _name } = useTagsFieldArray({ control, name });

  if (fields?.length === 0) return <></>;

  return (
    <Stack gap={2} width={'100%'} divider={<Divider flexItem />}>
      {fields?.map((tag: any, index: number) => (
        <Grid item key={tag?.tagId} xs={12}>
          <TagsFormType tag={tag} name={`${_name}.${index}.value`} onRemoveTag={undefined} />
        </Grid>
      ))}
    </Stack>
    /*  <TagLayout title={t(title || 'summary.productTag')} pt={2}>
    </TagLayout> */
  );
};
