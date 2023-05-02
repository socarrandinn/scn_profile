import { memo, SyntheticEvent, useState } from 'react';
import { AsyncSelectAutocompleteField, FlexBox, SwitchField } from '@dfl/mui-react-common';
import { Box, Checkbox } from '@mui/material';
import { IMovieGenre } from './interfaces';
import { DemoProps } from '../../../../../types';
import withCodeSample from 'hocs/withCodeSample';
import { code } from './code';

const QUERY_KEY: string = 'Data-Key';

const renderLabel = (option: IMovieGenre) => option.value || '';

const renderOption = (props: any, option: IMovieGenre, { selected }: any) => {
  return (
    <li {...props} key={option._id}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.value}
    </li>
  );
};

const loadDataFn = (_payload: any): Promise<any> => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            _id: 1,
            value: 'Action',
          },
          {
            _id: 2,
            value: 'Comedy',
          },
          {
            _id: 3,
            value: 'Drama',
          },
          {
            _id: 4,
            value: 'Fantasy',
          },
          {
            _id: 5,
            value: 'Horror',
          },
          {
            _id: 6,
            value: 'Mystery',
          },
          {
            _id: 7,
            value: 'Thriller',
          },
        ],
        page: 1,
        total: 7,
      });
    }, 5000);
  });
};

const Demo = (props: DemoProps) => {
  const [dark, setDark] = useState(false);
  const [multiple, setMultiple] = useState(false);
  const [hasHelperText, setHasHelperText] = useState(true);

  return (
    <FlexBox gap={4} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
      <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
        <SwitchField
          label={'Dark Style'}
          value={dark}
          onChange={(evt: SyntheticEvent<Element, Event>, checked) => {
            setDark(checked);
          }}
        />
        <SwitchField
          label={'Has helper Text'}
          value={hasHelperText}
          onChange={(evt: SyntheticEvent<Element, Event>, checked) => {
            setHasHelperText(checked);
          }}
        />
        <SwitchField
          label={'Multiple Selection'}
          value={multiple}
          onChange={(evt: SyntheticEvent<Element, Event>, checked) => {
            setMultiple(checked);
          }}
        />
      </FlexBox>
      <Box sx={{ width: '100%' }}>
        <AsyncSelectAutocompleteField
          dark={dark}
          multiple={multiple}
          queryKey={QUERY_KEY}
          fetchOption={{
            page: 1,
            size: 5,
          }}
          title={'Movie Genre'}
          fetchFunc={loadDataFn}
          getOptionLabel={renderLabel}
          renderOption={renderOption}
          helperText={hasHelperText ? 'Helper Text' : undefined}
        />
      </Box>
    </FlexBox>
  );
};

Demo.defaultProps = {
  code,
};

export default memo(withCodeSample(Demo));
