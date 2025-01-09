import { useParams } from 'react-router';
import InvitationAcceptanceContainer from 'modules/authentication/container/InvitationAcceptanceContainer';

const InvitationAcceptance = () => {
  const params = useParams();

  return <InvitationAcceptanceContainer admin={true} verifyKey={params.key as string}></InvitationAcceptanceContainer>;
};

export default InvitationAcceptance;
