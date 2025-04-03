import { useEffect } from 'react';
import { Divider, Grid, Stack } from '@mui/material';
import TagsFormType from './TagsFormType';
import { useTagsFieldArray } from '../../hooks/useTagsFieldArray';
import { TAG_NAMES } from '../../interfaces';

type TagsRequiredListProps = {
  control: any;
  name: TAG_NAMES;
  ruleRequired?: boolean;
  requiredTags: any[];
};

export const TagsRequiredList = ({ control, name, ruleRequired, requiredTags }: TagsRequiredListProps) => {
  const {
    fields,
    name: _name,
    onRemoveTag,
    replace,
  } = useTagsFieldArray({
    control,
    name: `tags.${name}`,
  });

  useEffect(() => {
    if (requiredTags?.length === 0 || fields?.length === 0) {
      replace(requiredTags);
    }
  }, [requiredTags, replace, fields?.length]);

  if (requiredTags?.length === 0) return null;
  return (
    <Stack gap={2} width={'100%'} divider={<Divider flexItem />}>
      {fields.map((tag: any, index: number) => (
        <Grid item key={tag.tagId} xs={12}>
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
