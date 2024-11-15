import { memo } from 'react';
import DeleteButton from 'components/Actions/DeleteAction/DeleteButton';
import { useClientDetails } from 'modules/crm/clients/context/ClientDetailsContext';
import { useDeleteClients } from 'modules/crm/clients/hooks/useDeleteClients';

const ClientDeleteButton = () => {
  const { clientId } = useClientDetails();
  const { mutate, isLoading } = useDeleteClients(clientId as string, () => {});
  return <DeleteButton isLoading={isLoading} onDelete={mutate} />;
};

export default memo(ClientDeleteButton);
