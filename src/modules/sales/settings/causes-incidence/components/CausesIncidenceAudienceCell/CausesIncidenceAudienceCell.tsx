import { useTranslation } from 'react-i18next';
import { ICausesIncidence } from '../../interfaces';
import { useMemo } from 'react';
import { TagList } from '@dfl/mui-react-common';

type Props = {
  value: ICausesIncidence['notification']['audience'] | [];
};
const CausesIncidenceAudienceCell = ({ value }: Props) => {
  const { t } = useTranslation('causesIncidence');

  const list = useMemo(() => {
    const uniqueTargets = new Set<string>();
    value?.forEach((item) => {
      item.target?.forEach((target) => {
        uniqueTargets.add(t(`fields.target.${target}`));
      });
    });

    const listOfTargets = Array.from(uniqueTargets);
    return listOfTargets;
  }, [t, value]);

  if (!value) return <>-</>;

  return <TagList value={list} limit={2} />;
};

export default CausesIncidenceAudienceCell;
