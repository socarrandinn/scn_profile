import { memo, useCallback, useEffect, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { useParamsLink } from '@dfl/react-security';
import { useDeleteTags } from 'modules/inventory/settings/tags/hooks/useDeleteTags';
import { DeleteRowAction, EditRowActions } from '@dfl/mui-admin-layout';
import { ERROR_TAGS, TAG_DELETE_CONFIRM, TAGS_ERRORS } from '../../constants';
import { ConfirmDialog } from 'components/ConfirmActions';
import { useTranslation } from 'react-i18next';
import ACTION_IMAGES from 'assets/images/actions';

type UserStatusProps = {
  rowId: string;
};

const TagsRowActions = ({ rowId }: UserStatusProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const handleEdit = useParamsLink({ edit: rowId });
  const { onDelete, onForceDelete, isLoading, error, reset } = useDeleteTags(rowId, onClose);

  const handleClose = useCallback(() => {
    onClose();
    reset();
  }, [onClose, reset]);

  const { isAssociated } = useMemo(() => {
    // @ts-ignore
    const reference = error?.reference;
    const isAssociated = [ERROR_TAGS.TAGS_ASSOCIATED_BY_PRODUCTS, ERROR_TAGS.TAGS_ASSOCIATED_BY_PROVIDER].includes(
      reference,
    );

    return {
      isAssociated,
      reference,
    };
  }, [error]);

  return (
    <>
      <Stack direction='row' spacing={1}>
        <EditRowActions onClick={handleEdit} />
        <DeleteRowAction
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={handleClose}
          error={error}
          isLoading={isLoading}
          onDelete={onDelete}
          errors={TAGS_ERRORS}
        />
        <ForceDelete
          open={isAssociated}
          isLoading={isLoading}
          onForceDelete={onForceDelete}
          handleClose={handleClose}
        />
      </Stack>
    </>
  );
};

export default memo(TagsRowActions);

type Props = {
  isLoading?: boolean;
  onForceDelete: () => void;
  open: boolean;
  handleClose: () => void;
};
const ForceDelete = ({ open, onForceDelete, isLoading, handleClose }: Props) => {
  const { isOpen, onClose, onOpen } = useToggle(open);
  const { t } = useTranslation('tags');

  useEffect(() => {
    if (open) {
      onOpen();
    }
  }, [onOpen, open]);

  return (
    <ConfirmDialog
      open={isOpen}
      title={t(TAG_DELETE_CONFIRM?.title)}
      confirmationMessage={t(TAG_DELETE_CONFIRM?.description)}
      onClose={onClose}
      isLoading={isLoading}
      onConfirm={onForceDelete}
      confirmButtonText={t('common:confirmation.confirm')}
      imageUrl={ACTION_IMAGES.warningImage}
    />
  );
};
