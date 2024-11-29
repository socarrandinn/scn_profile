import { ISummaryTags, TAG_TYPE_ENUM } from 'modules/inventory/settings/tags/interfaces';
import { memo } from 'react';
import { ChildrenProps, FormDatePickerField, FormSwitchField, FormTextField } from '@dfl/mui-react-common';
import { IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import DeleteIcon from 'components/icons/DeleteIcon';
import TagArraySelect from './TagArraySelect/TagArraySelect';

type TagsFormTypeProps = {
  tag: ISummaryTags;
  name: string;
  onRemoveTag: any;
};

const TagsFormType = ({ tag, name, onRemoveTag }: TagsFormTypeProps) => {
  const { type } = tag;
  const { t } = useTranslation('tags');

  switch (type) {
    case TAG_TYPE_ENUM.ARRAY:
      return (
        <TagFormLayout tag={tag} onRemoveTag={onRemoveTag}>
          <TagArraySelect name={name} label={t('list')} tag={tag} />
        </TagFormLayout>
      );

    case TAG_TYPE_ENUM.STRING:
      return (
        <TagFormLayout tag={tag} onRemoveTag={onRemoveTag}>
          <FormTextField focused={false} required name={name} label={t('name')} />
        </TagFormLayout>
      );
    case TAG_TYPE_ENUM.NUMBER:
      return (
        <TagFormLayout tag={tag} onRemoveTag={onRemoveTag}>
          <FormTextField focused={false} required name={name} label={t('name')} type={'number'} />
        </TagFormLayout>
      );
    case TAG_TYPE_ENUM.BOOLEAN:
      return (
        <TagFormLayout tag={tag} onRemoveTag={onRemoveTag}>
          <FormSwitchField defaultChecked name={name} label='' />
        </TagFormLayout>
      );
    case TAG_TYPE_ENUM.DATE:
      return (
        <TagFormLayout tag={tag} onRemoveTag={onRemoveTag}>
          <FormDatePickerField defaultChecked name={name} label={t('name')} minDate={new Date()} />
        </TagFormLayout>
      );

    default:
      return undefined;
  }
};

export default memo(TagsFormType);

const TagFormLayout = ({
  children,
  tag,
  onRemoveTag,
}: ChildrenProps & { tag: ISummaryTags; onRemoveTag: () => void }) => {
  return (
    <Stack gap={1}>
      <Stack gap={2} mb={1} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography>{tag.name}</Typography>
        <RemoveAction onRemove={onRemoveTag} ruleRequired={tag.ruleRequired} />
      </Stack>
      {children}
    </Stack>
  );
};

const RemoveAction = ({ onRemove, ruleRequired }: { onRemove: () => void; ruleRequired?: boolean }) => {
  const { t } = useTranslation('tags');

  if (onRemove === undefined) return <></>;
  if (ruleRequired === true) return <></>;

  return (
    <Tooltip title={t('remove')}>
      <IconButton
        size='small'
        onClick={() => {
          onRemove();
        }}
      >
        <DeleteIcon fontSize='inherit' color='error' />
      </IconButton>
    </Tooltip>
  );
};
