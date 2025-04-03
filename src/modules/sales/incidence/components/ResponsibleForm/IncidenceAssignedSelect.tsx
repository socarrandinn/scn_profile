import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import {
  CircularProgress,
  IconButton,
  InputAdornment,
  ListItemAvatar,
  ListItemText,
  TextField,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useUpdateIncidenceAssigned from '../../hooks/useUpdateIncidenceAssigned';
import { UserAdminService } from 'modules/security/users/services';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { AvatarMedia } from 'components/AvatarMedia';
import { USERS_CLEAN_LIST_KEY } from 'modules/security/users/constants/queries';

type IncidenceAssignedSelectProps = {
  incidenceId: string;
  fullWidth?: boolean;
  data?: IUser;
};

const isOptionEqualToValue = (option: any, value: any | string) => {
  const optionId = option?._id || option;
  const valueId = value?._id || value;
  return optionId === valueId;
};
const handleChange = (ev: any, changeFn: any) => {
  if (ev.target?.value) changeFn(ev.target.value?.id);
};

const IncidenceAssignedSelect = ({
  data,
  incidenceId,
}: IncidenceAssignedSelectProps) => {
  const { mutateAsync, isLoading } = useUpdateIncidenceAssigned(incidenceId);
  const { t } = useTranslation('incidence');

  const [inputElement, setInputElement] = useState<HTMLInputElement | null>(null);

  const openAutocomplete = useCallback(() => {
    if (inputElement) {
      inputElement.focus();
      const event = new KeyboardEvent('keydown', {
        key: 'ArrowDown',
        bubbles: true,
      });
      inputElement.dispatchEvent(event);
    }
  }, [inputElement]);

  return (
    <FormAsyncSelectAutocompleteField
      name='responsible'
      defaultValue={data}
      id={'select-responsible'}
      autoComplete
      readOnly={isLoading}
      includeInputInList={false}
      fetchFunc={UserAdminService.searchClean}
      queryKey={USERS_CLEAN_LIST_KEY}
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={(option: any) => option?.fullName || option || ''}
      renderOption={(props, option) => {
        return (
          <li {...props} key={option?._id}>
            <ListItemAvatar>
              <AvatarMedia name={option?.fullName} avatar={option?.avatar} />
            </ListItemAvatar>
            <ListItemText primary={option?.fullName} />
          </li>
        );
      }}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            fullWidth
            size="small"
            inputRef={(input) => { setInputElement(input); }}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start" sx={{ pl: '6px' }}>
                  <AvatarMedia name={data?.fullName} avatar={data?.avatar} sx={{ height: '32px', width: '32px' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <span style={{
                    position: 'absolute',
                    right: '0px',
                    top: '0px%',
                  }}>
                    <IconButton onClick={openAutocomplete} size="small">
                      {isLoading ? <CircularProgress color="inherit" /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                  </span>
                </InputAdornment>
              ),

            }}
            placeholder={t('assignedTo')}
            variant="outlined"
          />
        );
      }}
      size="small"
      sx={{
        '.MuiInputBase-root': {
          minHeight: '50px',
        },
        '.MuiInputBase-input': {
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
      }}
      onChange={(ev: any) => { handleChange(ev, mutateAsync); }}
    />
  );
};

export default memo(IncidenceAssignedSelect);
