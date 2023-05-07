import { memo, SyntheticEvent, useState } from 'react';
import { Box } from '@mui/material';
import { FlexBox, ProcessTimeLine, SwitchField } from '@dfl/mui-react-common';
import { DemoProps } from '../../../../../types';
import withCodeSample from 'hocs/withCodeSample';
import { code } from './code';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const iconProps = {
  minWidth: 36,
  minHeight: 36,
  color: '#707070',
};

const process = [
  {
    title: 'Title 1',
    description:
      'Diam in accusam accusam sed velit vulputate dolore labore at justo sadipscing invidunt id kasd sanctus. Aliquyam luptatum sed dolore. Delenit ut sed ea qui lorem veniam sit ut sed vero gubergren ipsum ut lorem. Gubergren accusam duis dolore ea et lorem in dolore lorem consetetur nostrud eirmod. Elitr vel aliquip soluta elitr ut aliquyam voluptua et sed dolor et veniam sed assum stet et. Sea placerat et autem voluptua sadipscing dolor elitr invidunt accusam sadipscing magna sanctus dolor stet sadipscing. Erat sed nonummy amet dolor dolor labore eirmod. Invidunt luptatum aliquyam no lorem no ipsum sed ut wisi eirmod sit. Voluptua vero sit sed hendrerit et rebum ut amet et duo sed ullamcorper eirmod illum. Accumsan nonumy invidunt elitr sit sea stet illum iriure dolore ut dolore. Ea zzril est. Facilisis lorem accusam adipiscing et. Sit eos invidunt sed kasd kasd aliquyam takimata et ipsum iusto dolore voluptua. Et volutpat justo iriure molestie et nonumy dolore feugiat et option nonumy augue facilisi.',
    icon: <AccessTimeIcon sx={iconProps} />,
  },
  {
    title: 'Title 2',
    description:
      'At qui praesent sit invidunt duo. Dolores ut aliquam magna sit ea delenit sadipscing eirmod in assum. Clita nulla consetetur dolor eirmod est ipsum sed et kasd nam et eos aliquyam dolor sea. Lorem aliquyam lorem nonumy eos amet amet duo ipsum elitr gubergren duo voluptua amet dolore voluptua eum duo sed. Nisl at sed labore no at velit erat ipsum nulla dolores. Sanctus diam labore gubergren nonumy. Diam sadipscing lorem. Invidunt clita suscipit. Consetetur kasd eirmod at vel sanctus duo est ea dignissim labore kasd dolor minim stet. Rebum sed at ipsum kasd molestie kasd sed invidunt ea erat ea. Tincidunt elitr veniam vel lorem dolore quis diam sit amet velit. Labore sea et. Takimata dolor elitr erat cum ea nibh invidunt takimata dolore diam erat ea lorem ipsum et blandit accusam aliquam. Hendrerit ea erat duo ea vero justo. Tempor ipsum iriure erat dolore lorem aliquyam ea suscipit aliquyam amet quis duo feugiat. Velit elitr lorem quod gubergren sit at amet stet et. Rebum nonumy dolor eos nibh erat amet sadipscing lorem. Consequat veniam sit clita at enim diam rebum. Gubergren feugiat ea stet amet eros justo aliquyam ut tempor amet.',
    icon: <AccessTimeIcon sx={iconProps} />,
  },
  {
    title: 'Title 3',
    description:
      'Ea sanctus voluptua. Sit erat ea est labore dolor consetetur. Id accusam eirmod nibh kasd rebum erat eirmod et takimata. Lorem veniam tempor amet. Amet et et.',
    icon: <AccessTimeIcon sx={iconProps} />,
  },
  {
    title: 'Title 4',
    description:
      'Eos nulla suscipit et sanctus laoreet labore ipsum. Consetetur placerat et duis eos sea duo consectetuer invidunt dolore justo diam suscipit iriure eu vero. Ut nihil invidunt magna molestie tempor lorem erat dolor vel dolore feugait invidunt lorem. Dolor voluptua quod ipsum in ut diam laoreet amet illum consetetur sea. Iriure lorem sed esse aliquip kasd vero suscipit et consetetur at lobortis luptatum kasd accusam amet qui nonumy erat. Dolores no dolore tempor veniam magna eum clita at justo wisi sed duis. Eirmod ipsum lorem dolor sadipscing euismod. Amet invidunt magna ea luptatum kasd assum justo. Magna hendrerit quod at et labore sit duis no et invidunt clita dolore ea consetetur tempor sea. Feugiat sit sit gubergren nulla sadipscing. Dolores justo commodo voluptua ipsum justo est. Dolor nonumy voluptua dolor molestie illum dolor. Odio dolor sanctus nonumy option in ipsum. At vero sed kasd blandit ea accusam clita eleifend tempor.',
    icon: <AccessTimeIcon sx={iconProps} />,
  },
];

const Demo = (props: DemoProps) => {
  const [np, setNp] = useState(false);

  return (
    <FlexBox flexDirection={'column'} gap={4} alignItems={'center'} justifyContent={'center'}>
      <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
        <SwitchField
          label={'No Padding'}
          value={np}
          onChange={(evt: SyntheticEvent<Element, Event>, checked) => {
            setNp(checked);
          }}
        />
      </FlexBox>
      <Box width={'100%'}>
        <ProcessTimeLine process={process} np={np} />
      </Box>
    </FlexBox>
  );
};

Demo.defaultProps = {
  code,
};

export default memo(withCodeSample(Demo));
