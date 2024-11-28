import { ISummaryTags, TAG_TYPE_ENUM } from 'modules/inventory/settings/tags/interfaces';
import { memo } from 'react';
import ProductTagTypeArraySelect from './TagTypeArraySelect';
import { ChildrenProps, FormDatePickerField, FormSwitchField, FormTextField } from '@dfl/mui-react-common';
import { IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import DeleteIcon from 'components/icons/DeleteIcon';

type TagsFormTypeProps = {
  tag: ISummaryTags;
  name: string;
  onRemoveTag: any;
};

const TagsFormType = ({ tag, name, onRemoveTag }: TagsFormTypeProps) => {
  const { type, name: label, _id } = tag;
  const { t } = useTranslation('tags');

  switch (type) {
    case TAG_TYPE_ENUM.ARRAY:
      return (
        <TagFormLayout label={label} onRemoveTag={onRemoveTag}>
          <ProductTagTypeArraySelect required name={name} label={t('list')} multiple tagId={_id as string} />
        </TagFormLayout>
      );

    case TAG_TYPE_ENUM.STRING:
      return (
        <TagFormLayout label={label} onRemoveTag={onRemoveTag}>
          <FormTextField focused={false} required name={name} label={t('name')} />
        </TagFormLayout>
      );
    case TAG_TYPE_ENUM.NUMBER:
      return (
        <TagFormLayout label={label} onRemoveTag={onRemoveTag}>
          <FormTextField focused={false} required name={name} label={t('name')} type={'number'} />
        </TagFormLayout>
      );
    case TAG_TYPE_ENUM.BOOLEAN:
      return (
        <TagFormLayout label={label} onRemoveTag={onRemoveTag}>
          <FormSwitchField defaultChecked name={name} label='' />
        </TagFormLayout>
      );
    case TAG_TYPE_ENUM.DATE:
      return (
        <TagFormLayout label={label} onRemoveTag={onRemoveTag}>
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
  label,
  onRemoveTag,
}: ChildrenProps & { label: string; onRemoveTag: () => void }) => {
  return (
    <Stack gap={1}>
      <Stack gap={2} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography>{label}</Typography>
        <RemoveAction onRemove={onRemoveTag} />
      </Stack>
      {children}
    </Stack>
  );
};

const RemoveAction = ({ onRemove }: { onRemove: () => void }) => {
  const { t } = useTranslation('tags');

  if (onRemove === undefined) return <></>;
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
