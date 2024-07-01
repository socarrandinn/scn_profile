import { memo } from 'react';
import { useProviderMapperData } from './useProviderMapperData';
import { USER_PROVIDER_DETAILS_SUMMARY } from '../../constants';
import { DetailStack } from '@dfl/mui-react-common';

const UserProviderDetail = () => {
  const { logistic } = useProviderMapperData();
  return <DetailStack details={USER_PROVIDER_DETAILS_SUMMARY} data={logistic} />;
};

export default memo(UserProviderDetail);
