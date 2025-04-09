import { Fragment, memo } from 'react';
import { Grid, IconButton, Stack } from '@mui/material';
import { TagSelect } from './TagSelect';
import { useTranslation } from 'react-i18next';
import TagsFormType from './TagsFormType';
import { useTagsFieldArray } from '../../hooks/useTagsFieldArray';
import { TagsRequiredList } from './TagsRequiredList';
import { Add } from '@mui/icons-material';
import { TAG_NAMES } from '../../interfaces';
import { getTagDefaultValue } from '../../utils/parser-tags';
import { useFindTagByRequired } from '../../hooks/useFindTags';

type TagsFormProps = {
  control: any;
  name: TAG_NAMES;
  isEdit?: boolean;
  ruleRequired?: boolean;
  formEdit?: boolean;
};

const TagsForm = ({ control, name, isEdit = false, formEdit = false, ruleRequired }: TagsFormProps) => {
  const { t } = useTranslation('tags');
  const { data: requiredTags } = useFindTagByRequired(name);

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
            tagName={name || TAG_NAMES.PRODUCT}
            multiple
            label={t('summary.select')}
            control={control}
            remove={onRemoveTag}
            onChange={onAddTag}
          />
          <IconButton
            size='large'
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
      <TagListContent fields={otherFields} name={nameOther} onRemoveTag={onRemoveTag} />
      <TagsRequiredList
        control={control}
        name={name}
        ruleRequired={ruleRequired}
        requiredTags={getTagDefaultValue(requiredTags?.data)}
        formEdit={formEdit}
      />
    </Stack>
  );
};
export default memo(TagsForm);

type TagListContentProps = {
  name: string;
  fields: any[];
  onRemoveTag: (index: number) => void;
};

export const TagListContent = ({ name, fields, onRemoveTag }: TagListContentProps) => {
  if (fields?.length === 0) return <Fragment />;

  return (
    <Stack gap={{ xs: 1, md: 2 }} width={'100%'}>
      {fields?.map((tag: any, index: number) => (
        <Grid item key={tag?.tagId || index} xs={12}>
          <TagsFormType
            tag={tag}
            name={`${name}.${index}.value`}
            onRemoveTag={() => {
              onRemoveTag(index);
            }}
          />
        </Grid>
      ))}
    </Stack>
  );
};
