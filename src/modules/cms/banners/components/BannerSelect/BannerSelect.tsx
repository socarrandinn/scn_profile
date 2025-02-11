import { memo } from 'react';
import { FormAsyncSelectAutocompleteField, imageUrl } from '@dfl/mui-react-common';
import { Avatar, Checkbox, ListItemAvatar, ListItemText } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { BannerService } from '../../services';
import { BANNERS_LIST_KEY } from '../../constants';
import { IBanner } from '../../interfaces';
import { HideImageOutlined } from '@mui/icons-material';

type BannerSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IBanner) => option.name || '';

const renderOption = (props: any, option: IBanner, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      <ListItemAvatar>
        <Avatar variant='rounded' alt={option.name} src={imageUrl(option.desktopImage?.thumb as string)}>
          <HideImageOutlined />
        </Avatar>
      </ListItemAvatar>
      <ListItemAvatar>
        <Avatar variant='rounded' alt={option.name} src={imageUrl(option.mobileImage?.thumb as string)}>
          <HideImageOutlined />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={option.name} />
    </li>
  );
};

const BannerSelect = ({ name, required, multiple, label, helperText }: BannerSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={BannerService.search}
      queryKey={BANNERS_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? BannerService.search : BannerService.getOne}
      id='select-banners'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(BannerSelect);
