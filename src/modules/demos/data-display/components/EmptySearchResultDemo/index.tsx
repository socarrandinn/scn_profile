import { memo } from 'react';
import { FlexBox, NotSearchResult } from '@dfl/mui-react-common';
import { DemoProps } from '../../../../../types';
import withCodeSample from 'hocs/withCodeSample';
import { code } from './code';

const EmptySearchResultDemo = (props: DemoProps) => {
  return (
    <FlexBox alignItems={'center'} justifyContent={'center'}>
      <NotSearchResult
          title={'No search Result'}
          subtext={'Your search has not returned any results.'}
          suggest={'Suggest'}
          suggest1={'Verify that the parameters entered are correct.'}
          suggest2={'Specify other search parameters'}
          vertical={false}
          image={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/500px-Search_Icon.svg.png?20181016161702'}
          imageWidth={120}
          imageHeight={120}
      />
    </FlexBox>
  );
};

EmptySearchResultDemo.defaultProps = {
  code,
};

export default memo(withCodeSample(EmptySearchResultDemo));
