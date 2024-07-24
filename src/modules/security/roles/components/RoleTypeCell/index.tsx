/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date:
 */
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { getCustomLabel } from 'modules/security/roles/components/SelectRoleProviderType/SelectRoleProviderType';

type Props = {
  type: string;
};

const RoleTypeCell = ({ type }: Props) => {
  const { t } = useTranslation('role');
  return <>{getCustomLabel(type, t)}</>;
};

export default memo(RoleTypeCell);
