import { Divider, Grid, Stack } from '@mui/material';
import TagsFormType from './TagsFormType';
import { useTagsFieldArray } from '../../hooks/useTagsFieldArray';
import { TAG_NAMES } from '../../interfaces';

type TagsRequiredListProps = {
  control: any;
  name: TAG_NAMES;
  ruleRequired?: boolean;
};

export const TagsRequiredList = ({ control, name, ruleRequired }: TagsRequiredListProps) => {
  const { fields, name: _name, onRemoveTag } = useTagsFieldArray({ control, name: `tags.${name}` });

  if (fields?.length === 0) return <></>;

  return (
    <Stack gap={2} width={'100%'} divider={<Divider flexItem />}>
      {fields?.map((tag: any, index: number) => (
        <Grid item key={tag?.tagId} xs={12}>
          <TagsFormType
            tag={tag}
            name={`${_name}.${index}.value`}
            ruleRequired={ruleRequired}
            onRemoveTag={() => {
              onRemoveTag(index);
            }}
          />
        </Grid>
      ))}
    </Stack>
  );
};
