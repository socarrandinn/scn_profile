import { memo, useMemo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox, Chip, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { TagsService } from 'modules/inventory/settings/tags/services';
import { TermFilter } from '@dofleini/query-builder';
import { ITags } from 'modules/inventory/settings/tags/interfaces';
import { TAGS_LIST_KEY } from 'modules/inventory/settings/tags/constants';
import { useWatch } from 'react-hook-form';
import { TagTypeNameCell } from 'modules/inventory/settings/tags/components/TagTypeNameCell';

type TagSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
  control: any;
  remove: any;
  onChange: (e: any) => void;
};

const renderLabel = (option: ITags) => option.name || '';

const renderOption = (props: any, option: ITags, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <ListItem
        sx={{
          padding: 0,
          margin: 0,
        }}
      >
        <ListItemIcon>
          <Checkbox style={{ marginRight: 8 }} checked={selected} />
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{ fontWeight: 600 }}
          primary={option.name}
          secondary={<TagTypeNameCell size='small' type={option?.type} />}
        />
      </ListItem>
    </li>
  );
};

const TagSelect = ({ name, required, multiple, label, helperText, control, remove, ...props }: TagSelectProps) => {
  const { tags } = useWatch({ control });
  const excludeTags = useMemo(() => tags?.map((tag: any) => tag?._id), [tags]);

  const filters = useMemo(
    () => new TermFilter({ field: '_id', value: { $nin: excludeTags } }).toQuery(),
    [excludeTags],
  );

  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={multiple}
      required={required}
      label={label}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={TagsService.search}
      fetchOption={{ filters }}
      queryKey={TAGS_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      // fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? TagsService.search : TagsService.getOne}
      id='select-tags'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
      filterSelectedOptions
      disableClearable
      renderTags={(value: readonly string[], getTagProps) =>
        value.map((option: any, index: number) => {
          const { key, onDelete, tabIndex, ...tagProps } = getTagProps({ index });
          return (
            <Chip
              variant='outlined'
              onDelete={(e) => {
                onDelete(e);
                remove(index);
              }}
              label={option?.name}
              key={key}
              {...tagProps}
            />
          );
        })
      }
    />
  );
};

export default memo(TagSelect);
