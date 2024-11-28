import { ISummaryTags, TAG_TYPE_ENUM } from 'modules/inventory/settings/tags/interfaces';
import { Fragment, memo } from 'react';
import ProductTagTypeArraySelect from './TagTypeArraySelect';
import { ChildrenProps, FormDatePickerField, FormSwitchField, FormTextField } from '@dfl/mui-react-common';
import { IconButton, Stack, Tooltip } from '@mui/material';
import { Remove } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

type TagsFormTypeProps = {
  tag: ISummaryTags;
  name: string;
  onRemoveTag: any;
};

const TagsFormType = ({ tag, name, onRemoveTag }: TagsFormTypeProps) => {
  const { type, name: label, _id } = tag;

  switch (type) {
    case TAG_TYPE_ENUM.ARRAY:
      return (
        <TagFormLayout>
          <Fragment>
            <ProductTagTypeArraySelect required name={name} label={label} multiple tagId={_id as string} />
            <RemoveAction onRemove={onRemoveTag} />
          </Fragment>
        </TagFormLayout>
      );

    case TAG_TYPE_ENUM.STRING:
      return (
        <TagFormLayout>
          <Fragment>
            <FormTextField focused={false} required name={name} label={label} />
            <RemoveAction onRemove={onRemoveTag} />
          </Fragment>
        </TagFormLayout>
      );
    case TAG_TYPE_ENUM.NUMBER:
      return (
        <TagFormLayout>
          <Fragment>
            <FormTextField focused={false} required name={name} label={label} type={'number'} />
            <RemoveAction onRemove={onRemoveTag} />
          </Fragment>
        </TagFormLayout>
      );
    case TAG_TYPE_ENUM.BOOLEAN:
      return (
        <TagFormLayout>
          <Fragment>
            <FormSwitchField defaultChecked name={name} label={label} />
            <RemoveAction onRemove={onRemoveTag} />
          </Fragment>
        </TagFormLayout>
      );
    case TAG_TYPE_ENUM.DATE:
      return (
        <TagFormLayout>
          <Fragment>
            <FormDatePickerField defaultChecked name={name} label={label} minDate={new Date()} />
            <RemoveAction onRemove={onRemoveTag} />
          </Fragment>
        </TagFormLayout>
      );

    default:
      return <Fragment></Fragment>;
  }
};

export default memo(TagsFormType);

const TagFormLayout = ({ children }: ChildrenProps) => {
  return (
    <Stack gap={1} flexDirection={'row'} alignItems={'start'} justifyContent={'space-between'}>
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
        onClick={() => {
          onRemove();
        }}
      >
        <Remove />
      </IconButton>
    </Tooltip>
  );
};
