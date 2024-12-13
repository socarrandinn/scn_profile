import { renderTagList } from '@dfl/mui-react-common';
import { IRules } from '../../interfaces';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const RulesTagList = ({ rules }: { rules: IRules }) => {
  const { t } = useTranslation('tags');

  const requiredRules = useMemo(() => Object.entries(rules)
    .filter(([, value]) => value?.required)
    .map(([key]) => t(`fields.rules.${key}`)), [rules, t]);

  return (
    <>
      {renderTagList(requiredRules, 3)}
    </>
  );
};

export default memo(RulesTagList);
