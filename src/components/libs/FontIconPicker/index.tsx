/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date: 4/28/23
 */
import React, { memo } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Icon from '@mui/material/Icon';

// const Icon = styled('span')({
//   marginRight: '8px',
// });

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FontIconPickerProps {

}

const FontIconPicker = ({ ...props }: FontIconPickerProps) => {
  // const iconOptions = Object.keys(icons);
  console.log('FontIconPickerProps+++++++', Icon);

  return (
        <div>
            {/* <Autocomplete */}
            {/*    options={iconOptions} */}
            {/*    renderInput={(params) => <TextField {...params} label="Select an Icon" />} */}
            {/*    renderOption={(option) => ( */}
            {/*        <> */}
            {/*            <Icon>{React.createElement(icons[option])}</Icon> */}
            {/*            {option} */}
            {/*        </> */}
            {/*    )} */}
            {/* /> */}
        </div>
  );
};

export default memo(FontIconPicker);
