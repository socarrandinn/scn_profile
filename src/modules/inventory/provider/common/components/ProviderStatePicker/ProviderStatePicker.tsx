import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { memo, useCallback } from 'react';
import { CATEGORY_VISIBILITY, CATEGORY_VISIBILITY_MAP } from 'modules/inventory/settings/category/constants';
import { useTranslation } from 'react-i18next';
import useProviderUpdateVisibility from 'modules/inventory/provider/common/hooks/useProviderUpdateVisibility';
import { useToggle } from '@dfl/hook-utils';
import { ConfirmAction } from 'components/ConfirmAction';
import { IProvider } from '../../interfaces';

type ProviderStatePickerProps = {
  value: boolean;
  rowId: string;
  record: IProvider;
};

const ProviderStatePicker = ({ value, rowId, record }: ProviderStatePickerProps) => {
  const { t } = useTranslation('provider');
  const { isOpen, onOpen, onClose } = useToggle();
  const { mutate, isLoading } = useProviderUpdateVisibility(rowId, onClose);

  const handleConfirm = useCallback(() => {
    mutate(!value);
  }, [mutate, value]);

  return (
    <>
      <StatusPicker
        options={CATEGORY_VISIBILITY.map((option) => ({ ...option, title: t(option.title) }))}
        name='active'
        size={'small'}
        value={{
          ...(CATEGORY_VISIBILITY_MAP.get(value) as IStatus),
          title: t(CATEGORY_VISIBILITY_MAP.get(value)?.title as string),
        }}
        isLoading={isLoading}
        onChange={onOpen}
      />
      <ConfirmAction
        open={isOpen}
        onClose={onClose}
        onConfirm={handleConfirm}
        isLoading={isLoading}
        title={t('updateVisibility.title', { providerName: record.name })}
        confirmation={t('updateVisibility.description')}
      />
    </>
  );
};
export default memo(ProviderStatePicker);
