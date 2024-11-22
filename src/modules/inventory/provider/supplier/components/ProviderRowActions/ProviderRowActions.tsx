import { memo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { ReactLink } from '@dfl/react-security';
import { useDeleteProducts } from 'modules/inventory/provider/supplier/hooks/useDeleteProducts';
import { DeleteRowAction, EditRowActions } from '@dfl/mui-admin-layout';
import { IProvider } from 'modules/inventory/provider/common/interfaces';
import { DELETE_PROVIDER_ERRORS } from 'modules/inventory/provider/common/constants/provider-errors';

type ProviderRowActionsProps = {
  provider: IProvider;
};

const ProviderRowActions = ({ provider }: ProviderRowActionsProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const { mutate, isLoading, error } = useDeleteProducts(provider._id || '', onClose);

  return (
    <>
      <Stack direction='row' spacing={1}>
        <ReactLink to={`/inventory/settings/suppliers/${provider._id || ''}/general?edit=true`}>
          <EditRowActions />
        </ReactLink>
        <DeleteRowAction
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          error={error}
          isLoading={isLoading}
          onDelete={mutate}
          errors={DELETE_PROVIDER_ERRORS}
        />
      </Stack>
    </>
  );
};

export default memo(ProviderRowActions);
