import { memo, SyntheticEvent, useState } from 'react';
import { ButtonOutlined, FlexBox, OwnChipProps, SwitchField, TagList, TextField } from '@dfl/mui-react-common';
import Box from '@mui/material/Box';
import { DemoProps } from '../../../../../types';
import withCodeSample from 'hocs/withCodeSample';
import { code } from './code';

type Language = {
  _id: string;
  name: string;
  popularityPlace: number;
};

const languages: Language[] = [
  {
    _id: '1',
    name: 'Java',
    popularityPlace: 2,
  },
  {
    _id: '2',
    name: 'Javascript',
    popularityPlace: 1,
  },
  {
    _id: '3',
    name: 'Typescript',
    popularityPlace: 3,
  },
  {
    _id: '4',
    name: 'Dart',
    popularityPlace: 20,
  },
  {
    _id: '5',
    name: 'Kotlin',
    popularityPlace: 10,
  },
  {
    _id: '6',
    name: 'C++',
    popularityPlace: 8,
  },
  {
    _id: '7',
    name: 'C#',
    popularityPlace: 9,
  },
];

const Demo = (props: DemoProps) => {
  const [limit, setLimit] = useState(3);
  const [ownChip, setOwnChip] = useState(false);

  const CustomChip = ({ text }: OwnChipProps) => {
    return <ButtonOutlined disableRipple={true}>{text}</ButtonOutlined>;
  };

  return (
    <FlexBox flexDirection={'column'} gap={4} alignItems={'center'} justifyContent={'center'}>
      <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
        <TextField
          label={'Limit'}
          value={limit}
          type={'number'}
          inputProps={{ min: 1, max: 10 }}
          onChange={(event) => {
            setLimit(+event?.target?.value);
          }}
        />
        <SwitchField
          label={'Custom Chip'}
          value={ownChip}
          onChange={(evt: SyntheticEvent<Element, Event>, checked) => {
            setOwnChip(checked);
          }}
        />
      </FlexBox>
      <Box>
        <TagList
          value={languages}
          propertyItemToShow={'name'}
          limit={limit}
          ownChip={ownChip ? CustomChip : undefined}
        />
      </Box>
    </FlexBox>
  );
};

Demo.defaultProps = {
  code,
};

export default memo(withCodeSample(Demo));
