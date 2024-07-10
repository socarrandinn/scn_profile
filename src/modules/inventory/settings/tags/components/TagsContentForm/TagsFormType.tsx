import { IProductTags, TAG_TYPE_ENUM } from 'modules/inventory/settings/tags/interfaces';
import { Fragment, memo } from 'react';
import ProductTagTypeArraySelect from './TagTypeArraySelect';
import { ChildrenProps, FormSwitchField, FormTextField } from '@dfl/mui-react-common';
import { Stack } from '@mui/material';

type TagsFormTypeProps = {
  tag: IProductTags;
  name: string;
};

const TagsFormType = ({ tag, name }: TagsFormTypeProps) => {
  const { type, name: label, _id } = tag;

  switch (type) {
    case TAG_TYPE_ENUM.ARRAY:
      return (
        <TagFormLayout>
          <Fragment>
            <ProductTagTypeArraySelect required name={name} label={label as string} multiple tagId={_id} />
          </Fragment>
        </TagFormLayout>
      );

    case TAG_TYPE_ENUM.STRING:
      return (
        <TagFormLayout>
          <Fragment>
            <FormTextField focused={false} required name={name} label={label} />
          </Fragment>
        </TagFormLayout>
      );
    case TAG_TYPE_ENUM.NUMBER:
      return (
        <TagFormLayout>
          <Fragment>
            <FormTextField focused={false} required name={name} label={label} type={'number'} />
          </Fragment>
        </TagFormLayout>
      );
    case TAG_TYPE_ENUM.BOOLEAN:
      return (
        <TagFormLayout>
          <Fragment>
            <FormSwitchField defaultChecked name={name} label={label} />
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
