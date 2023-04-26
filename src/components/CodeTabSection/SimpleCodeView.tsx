import React, { memo } from 'react';
import { CopyBlock, tomorrowNight } from 'react-code-blocks';
import { LANGUAGE } from 'constants/code-block';

type Props = {
  code?: string;
  language: LANGUAGE;
  showLineNumber: boolean;
};

const SimpleCodeView = ({ code, language, showLineNumber }: Props) => {
  return (
      <CopyBlock text={code} language={language} showLineNumbers={showLineNumber} theme={tomorrowNight} />
  );
};

SimpleCodeView.defaultProps = {
}

export default memo(SimpleCodeView);
