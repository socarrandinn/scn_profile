import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { TAG_RULES_ENUM, TAG_STATUS } from '../../constants/tags-status';
import useTagUpdateStatus from '../../hooks/useTagUpdateStatus';

type TagRequiredProductStatusPickerProps = {
  value: IStatus;
  tagId: string;
  statusColor?: string;
  isLoading?: boolean;
  isError?: boolean;
  readOnly?: boolean;
  rule: TAG_RULES_ENUM
};

const TagRequiredProductStatusPicker = ({ value, tagId, readOnly = false, rule }: TagRequiredProductStatusPickerProps) => {
  const { t } = useTranslation('tags');
  const { mutateAsync, isLoading: loadingChange } = useTagUpdateStatus(tagId, rule);

  return (
    <StatusPicker
      readOnly={readOnly}
      options={TAG_STATUS.map((option) => ({ ...option, title: t(option.title) }))}
      name='active'
      size={'small'}
      value={{ ...value, title: t(value?.title) }}
      isLoading={loadingChange}
      onChange={(status: IStatus) => mutateAsync(status?._id)}
    />
  );
};

export default memo(TagRequiredProductStatusPicker);
