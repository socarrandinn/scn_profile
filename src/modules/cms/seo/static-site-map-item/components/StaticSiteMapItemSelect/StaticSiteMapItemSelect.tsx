import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { IStaticSiteMapItem } from 'modules/cms/seo/static-site-map-item/interfaces';
import { STATIC_SITE_MAP_ITEMS_LIST_KEY } from 'modules/cms/seo/static-site-map-item/constants';
import { StaticSiteMapItemService } from 'modules/cms/seo/static-site-map-item/services';

type StaticSiteMapItemSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IStaticSiteMapItem) => option.name || '';

const renderOption = (props: any, option: IStaticSiteMapItem, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const StaticSiteMapItemSelect = ({ name, required, multiple, label, placeholder, helperText }: StaticSiteMapItemSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      placeholder={placeholder}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={StaticSiteMapItemService.search}
      queryKey={STATIC_SITE_MAP_ITEMS_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? StaticSiteMapItemService.search : StaticSiteMapItemService.getOne}
      id='select-static-site-map-item'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(StaticSiteMapItemSelect);
