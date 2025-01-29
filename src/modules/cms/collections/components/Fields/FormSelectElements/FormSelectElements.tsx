import { memo } from 'react';
import { FormAsyncSelectAutocompleteField, IconPreview, imageUrl, LongText } from '@dfl/mui-react-common';
import { Avatar, Box, Checkbox, ListItemAvatar, ListItemText } from '@mui/material';
import { COLLECTION_CONTENT_TYPE } from 'modules/cms/collections/constants/collection-types';
import { CategoryService } from 'modules/inventory/settings/category/services';
import { TestimonyService } from 'modules/cms/testimony/services';
import { ProductService } from 'modules/inventory/product/services';
import { isOptionEqualToValue } from 'utils/comparing';
import { HideImageOutlined } from '@mui/icons-material';
import { ITestimony } from 'modules/cms/testimony/interfaces';
import { IProductCreate } from 'modules/inventory/product/interfaces/IProductCreate';
import { ICategory } from 'modules/inventory/settings/category/interfaces';

interface IFormSelectElements {
  name: string;
  label?: string;
  placeholder: string;
  contentType: COLLECTION_CONTENT_TYPE;
}

type IElement = Pick<ITestimony, 'title' | 'personName' | 'image'> &
Pick<IProductCreate, 'media'> &
Pick<ICategory, 'color' | 'icon'> & {
  _id: string;
  name: string;
};

const renderOption = (props: any, option: IElement, { selected }: any, contentType: COLLECTION_CONTENT_TYPE) => {
  const url = (option.media?.[0]?.thumb || option?.image?.thumb) as string;
  const title = option.name || option?.title;
  const secondaryTitle = option?.personName;

  const avatar = [COLLECTION_CONTENT_TYPE.PRODUCT, COLLECTION_CONTENT_TYPE.TESTIMONY].includes(contentType) && (
    <ListItemAvatar>
      <Avatar variant='rounded' alt={option.name} src={imageUrl(url)}>
        <HideImageOutlined />
      </Avatar>
    </ListItemAvatar>
  );

  const icon = contentType === COLLECTION_CONTENT_TYPE.CATEGORY && (
    <Box
      sx={{
        '.MuiSvgIcon-root': {
          fill: '#FFF',
        },
      }}
    >
      <IconPreview variant={'filled'} bgColor={option?.color} value={option?.icon} />
    </Box>
  );

  return (
    <li {...props} key={option._id}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {avatar}
      {icon}
      <ListItemText primary={<LongText lineClamp={1} maxCharacters={30} text={title} />} secondary={secondaryTitle} />
    </li>
  );
};

const renderLabel = (option: IElement, contentType: COLLECTION_CONTENT_TYPE) => {
  return option?.name || option?.title || '';
};

const service = {
  [COLLECTION_CONTENT_TYPE.BANNER]: TestimonyService,
  [COLLECTION_CONTENT_TYPE.PRODUCT]: ProductService,
  [COLLECTION_CONTENT_TYPE.CATEGORY]: CategoryService,
  [COLLECTION_CONTENT_TYPE.TESTIMONY]: TestimonyService,
};

const FormSelectElements = ({ name, label, contentType, ...props }: IFormSelectElements) => {
  const ServiceByType = service[contentType];

  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      name={name}
      id={`multiple-${name}`}
      label={label || ''}
      autoComplete
      multiple={true}
      // includeInputInList={true}
      fetchFunc={ServiceByType.search}
      fetchValueFunc={ServiceByType.search}
      loadValue
      fieldValue={'_id'}
      queryKey={`select-elements-${contentType}`}
      autoHighlight
      size='medium'
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={(option: any) => renderLabel(option, contentType)}
      renderOption={(props, option, { selected }) => renderOption(props, option, { selected }, contentType)}
      disableClearable={true}
    />
  );
};

export default memo(FormSelectElements);
