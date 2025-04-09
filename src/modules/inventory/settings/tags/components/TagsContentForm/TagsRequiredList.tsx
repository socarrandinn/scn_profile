import { useEffect, useMemo } from 'react';
import { Divider, Grid, Stack } from '@mui/material';
import TagsFormType from './TagsFormType';
import { useTagsFieldArray } from '../../hooks/useTagsFieldArray';
import { TAG_NAMES } from '../../interfaces';
import { ChildrenProps } from '@dfl/mui-react-common';

type TagsRequiredListProps = {
  control: any;
  name: TAG_NAMES;
  ruleRequired?: boolean;
  requiredTags: any[];
  formEdit: boolean;
};

export const TagsRequiredList = ({ control, name, ruleRequired, requiredTags, formEdit }: TagsRequiredListProps) => {
  const {
    fields,
    name: _name,
    onRemoveTag,
    replace,
  } = useTagsFieldArray({
    control,
    name: `tags.${name}`,
  });

  const content = useMemo(
    () => (
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
    ),
    [_name, fields, onRemoveTag, ruleRequired],
  );

  if (formEdit) {
    return <>{content}</>;
  }

  return (
    <CreateRequiredTags fields={fields} replace={replace} requiredTags={requiredTags}>
      {content}
    </CreateRequiredTags>
  );
};

type CreateProps = {
  replace: any;
  fields: any[];
} & Pick<TagsRequiredListProps, 'requiredTags'> &
ChildrenProps;
const CreateRequiredTags = ({ fields, replace, requiredTags, children }: CreateProps) => {
  useEffect(() => {
    if (requiredTags?.length === 0 || fields?.length === 0) {
      replace(requiredTags);
    }
  }, [fields?.length, replace, requiredTags]);

  if (requiredTags?.length === 0) return null;

  return <>{children}</>;
};
