import { LANGUAGE } from 'constants/code-block';

export const code = [
  {
    language: LANGUAGE.TSX,
    code: `import { FlexBox, NotSearchResult } from '@dfl/mui-react-common';

const EmptySearchResultDemo = () => {
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

export default EmptySearchResultDemo;

`,
  },
];
