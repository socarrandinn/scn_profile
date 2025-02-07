import { memo, useEffect, useMemo } from 'react';
import { useToggle } from '@dfl/hook-utils';

import { COLLECTION_ERRORS, ERRORS } from '../../constants/collection-errors';
import { ConfirmDialog } from 'modules/cms/medias/components/DeleteBannerElementRowAction';

import { useTranslation } from 'react-i18next';
import warning from 'assets/images/collection/warning.webp';
import { HandlerError } from '@dfl/mui-react-common';
type StockHandleErrorProps = {
  error: any;
  isLoading: boolean;
  onConfirm: () => void;
  noHandleError?: boolean;
};

const CollectionHandlerError = ({ error, isLoading, onConfirm, noHandleError = false }: StockHandleErrorProps) => {
  const { t } = useTranslation('common');
  const positionAlreadyOccupied = useMemo(
    () => [ERRORS.POSITION_IS_ALREADY_OCCUPIED].includes(error?.reference),
    [error],
  );
  const { isOpen, onClose, onOpen } = useToggle(false);
  useEffect(() => {
    if (positionAlreadyOccupied) {
      onOpen();
    }
  }, [onOpen, positionAlreadyOccupied]);

  const handleSubmit = (e?: React.BaseSyntheticEvent) => {
    onConfirm();
    onClose();
  };

  if (positionAlreadyOccupied) {
    return (
      <ConfirmDialog
        open={isOpen}
        title={t('collection:confirmForcePosition.title')}
        confirmationMessage={t('collection:confirmForcePosition.subtitle')}
        onClose={onClose}
        isLoading={isLoading}
        onConfirm={handleSubmit}
        confirmButtonText={t('confirmation.confirm')}
        imageUrl={warning}
      />
    );
  }

  if (noHandleError) {
    return null;
  }

  return <HandlerError error={error} errors={COLLECTION_ERRORS} />;
};

export default memo(CollectionHandlerError);
