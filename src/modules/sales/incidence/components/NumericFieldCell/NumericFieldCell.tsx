/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date:
 */
import React, { memo, useState } from 'react';
import { TextField } from '@dfl/mui-react-common';

type Props = { value?: number };

const NumericFieldCell = ({ value }: Props) => {
  const [val, setVal] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(+e.target.value);
  };

  return (
    <TextField
      value={val}
      onChange={handleChange}
      inputProps={{ type: 'number' }}
      className='!h-[40px] w-[90px] rounded-[10px]'
    />
  );
};

export default memo(NumericFieldCell);
