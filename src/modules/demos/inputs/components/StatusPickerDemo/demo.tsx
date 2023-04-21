import { memo, SyntheticEvent, useCallback, useState } from 'react';
import { FlexBox, IStatus, StatusPicker, SwitchField } from '@dfl/mui-react-common';
import {
  CheckCircleOutlineOutlined,
  ErrorOutlineOutlined,
  InfoOutlined,
  WarningAmberOutlined,
} from '@mui/icons-material';
import Box from '@mui/material/Box';

const options: IStatus[] = [
  {
    _id: '1',
    title: 'Success',
    icon: <CheckCircleOutlineOutlined />,
    color: '#005000',
  },
  {
    _id: '2',
    title: 'Info',
    icon: <InfoOutlined />,
    color: '#000050',
  },
  {
    _id: '3',
    title: 'Warning',
    icon: <WarningAmberOutlined />,
    color: '#877c00',
  },
  {
    _id: '4',
    title: 'Error',
    icon: <ErrorOutlineOutlined />,
    color: '#500000',
  },
];

const Demo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [small, setSmall] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = useCallback((value: IStatus) => {
    setSelectedOption(value);
  }, []);

  return (
    <FlexBox flexDirection={'column'} gap={4} alignItems={'center'} justifyContent={'center'}>
      <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
        <SwitchField
          label={'Is Loading'}
          value={isLoading}
          onChange={(evt: SyntheticEvent<Element, Event>, checked) => {
            setIsLoading(checked);
          }}
        />
        <SwitchField
          label={'Readonly'}
          value={readOnly}
          onChange={(evt: SyntheticEvent<Element, Event>, checked) => {
            setReadOnly(checked);
          }}
        />
        <SwitchField
          label={'Small'}
          value={small}
          onChange={(evt: SyntheticEvent<Element, Event>, checked) => {
            setSmall(checked);
          }}
        />
      </FlexBox>
      <Box>
        <StatusPicker
          name={'logLevel'}
          options={options}
          value={selectedOption}
          onChange={handleChange}
          isLoading={isLoading}
          readOnly={readOnly}
          size={small ? 'small' : 'medium'}
        />
      </Box>
    </FlexBox>
  );
};

export default memo(Demo);
