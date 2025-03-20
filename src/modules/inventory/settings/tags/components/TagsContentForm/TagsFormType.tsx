import { ISummaryTags, TAG_TYPE_ENUM } from 'modules/inventory/settings/tags/interfaces';
import { Fragment, memo, useMemo } from 'react';
import { ChildrenProps, FormDatePickerField, FormSwitchField, FormTextField } from '@dfl/mui-react-common';
import { IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import DeleteIcon from 'components/icons/DeleteIcon';
import TagArraySelect from './TagArraySelect/TagArraySelect';

type TagsFormTypeProps = {
  tag: ISummaryTags;
  name: string;
  onRemoveTag: any;
  ruleRequired?: boolean;
};

const TagsFormType = ({ tag, name, onRemoveTag, ruleRequired }: TagsFormTypeProps) => {
  const { t } = useTranslation('tags');
  const { type } = tag;
  const _tag = useMemo(() => {
    if (ruleRequired) {
      return { ...tag, ruleRequired };
    }

    return tag;
  }, [ruleRequired, tag]);

  switch (type) {
    case TAG_TYPE_ENUM.ARRAY:
      return (
        <TagFormLayout tag={_tag} onRemoveTag={onRemoveTag}>
          <TagArraySelect name={name} label={t('list')} tag={tag} />
        </TagFormLayout>
      );

    case TAG_TYPE_ENUM.STRING:
      return (
        <TagFormLayout tag={_tag} onRemoveTag={onRemoveTag}>
          <FormTextField focused={false} required name={name} label={t('name')} />
        </TagFormLayout>
      );
    case TAG_TYPE_ENUM.NUMBER:
      return (
        <TagFormLayout tag={_tag} onRemoveTag={onRemoveTag}>
          <FormTextField focused={false} required name={name} label={t('name')} type={'number'} />
        </TagFormLayout>
      );
    case TAG_TYPE_ENUM.BOOLEAN:
      return (
        <TagFormLayout tag={_tag} onRemoveTag={onRemoveTag} isBoolean>
          <FormSwitchField defaultChecked name={name} label='' sx={{ mr: 0 }} />
        </TagFormLayout>
      );
    case TAG_TYPE_ENUM.DATE:
      return (
        <TagFormLayout tag={_tag} onRemoveTag={onRemoveTag}>
          <FormDatePickerField defaultChecked name={name} label={t('name')} />
        </TagFormLayout>
      );

    default:
      return <Fragment />;
  }
};

export default memo(TagsFormType);

const TagFormLayout = ({
  children,
  tag,
  isBoolean,
  onRemoveTag,
}: ChildrenProps & { tag: ISummaryTags; onRemoveTag: () => void; isBoolean?: boolean }) => {
  return (
    <Stack gap={1}>
      <Stack gap={2} mb={1} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography>{tag.name}</Typography>
        <div>
          {isBoolean && children}
          <RemoveAction onRemove={onRemoveTag} ruleRequired={tag.ruleRequired} />
        </div>
      </Stack>
      {!isBoolean && children}
    </Stack>
  );
};

const RemoveAction = ({ onRemove, ruleRequired }: { onRemove: () => void; ruleRequired?: boolean }) => {
  const { t } = useTranslation('tags');
  if (onRemove === undefined) return <></>;

  return (
    <Tooltip title={t('remove')}>
      <IconButton
        disabled={ruleRequired}
        size='small'
        color='error'
        onClick={() => {
          onRemove();
        }}
      >
        <DeleteIcon fontSize='inherit' />
      </IconButton>
    </Tooltip>
  );
};
