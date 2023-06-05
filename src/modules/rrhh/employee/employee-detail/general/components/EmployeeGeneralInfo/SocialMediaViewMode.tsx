/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date: 4/25/23
 */
import React, { memo, useMemo } from 'react';
import DetailList from 'components/DetailList';
import { useTranslation } from 'react-i18next';
import { ISocialMediaInfo } from 'modules/rrhh/employee/common/interfaces';

interface ViewModeProps {
  data?: ISocialMediaInfo;
}
const SocialMediaViewMode = ({ data }: ViewModeProps) => {
  const { t } = useTranslation('employee');

  const socialsData = useMemo(() => {
    const keys = data ? Object.keys(data) : [];
    const values = data ? Object.values(data) : [];

    return (
      keys.map((key, index) => {
        return {
          key,
          label: t(`fields.social.${key}`),
          value: values[index],
        };
      }) || []
    );
  }, [t, data]);

  return (
    // @ts-ignore
    <DetailList data={socialsData} />
  );
};

export default memo(SocialMediaViewMode);
