import { useTranslation } from 'react-i18next';
import { ICausesIncidence } from '../../interfaces';
import { useMemo } from 'react';
import { TagList } from '@dfl/mui-react-common';
import { getAudienceTarget } from '../../../common/constants/common.utils';

type Props = {
  value: ICausesIncidence['notification']['audience'] | [];
};
const CausesIncidenceAudienceCell = ({ value }: Props) => {
  const { t } = useTranslation('causesIncidence');

  const list = useMemo(() => {
    const targets = getAudienceTarget(value);
    return targets?.map((target) => t(`fields.target.${target}`));
  }, [t, value]);

  if (!value) return <>-</>;

  return <TagList value={list} limit={2} />;
};

export default CausesIncidenceAudienceCell;
