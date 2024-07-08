import { IProductTags, TAG_TYPE_ENUM } from 'modules/inventory/settings/tags/interfaces';
import { Fragment, memo } from 'react';
import ProductTagTypeArraySelect from './ProductTagTypeArraySelect';
import { ChildrenProps, FormSwitchField, FormTextField } from '@dfl/mui-react-common';
import { Stack } from '@mui/material';

type ProductTagsFormTypeProps = {
  tag: IProductTags;
  name: string;
  onRemove?: () => void;
  values: any;
};

const ProductTagsFormType = ({ tag, name, onRemove, values }: ProductTagsFormTypeProps) => {
  const { type, name: label } = tag;

  switch (type) {
    case TAG_TYPE_ENUM.ARRAY:
      return (
        <TagFormLayout>
          <Fragment>
            <ProductTagTypeArraySelect required name={name} label={label as string} multiple options={values} />
            {/*  <RemoveAction onRemove={onRemove} /> */}
          </Fragment>
        </TagFormLayout>
      );

    case TAG_TYPE_ENUM.STRING:
      return (
        <TagFormLayout>
          <Fragment>
            <FormTextField focused={false} required name={name} label={label} />
            {/*  <RemoveAction onRemove={onRemove} /> */}
          </Fragment>
        </TagFormLayout>
      );
    case TAG_TYPE_ENUM.NUMBER:
      return (
        <TagFormLayout>
          <Fragment>
            <FormTextField focused={false} required name={name} label={label} type={'number'} />
            {/*   <RemoveAction onRemove={onRemove} /> */}
          </Fragment>
        </TagFormLayout>
      );
    case TAG_TYPE_ENUM.BOOLEAN:
      return (
        <TagFormLayout>
          <Fragment>
            <FormSwitchField defaultChecked name={name} label={label} />
            {/*    <RemoveAction onRemove={onRemove} /> */}
          </Fragment>
        </TagFormLayout>
      );

    default:
      return <Fragment></Fragment>;
  }
};

export default memo(ProductTagsFormType);

/* const RemoveAction = ({ onRemove }: { onRemove?: () => void }) => {
  const { t } = useTranslation('tags');
  return (
    <Tooltip title={t('remove')}>
      <IconButton onClick={onRemove}>
        <Remove />
      </IconButton>
    </Tooltip>
  );
}; */

const TagFormLayout = ({ children }: ChildrenProps) => {
  return (
    <Stack gap={1} flexDirection={'row'} alignItems={'start'} justifyContent={'space-between'}>
      {children}
    </Stack>
  );
};
