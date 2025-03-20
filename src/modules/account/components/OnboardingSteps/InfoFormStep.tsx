import { FileEditIcon } from 'components/icons/FileEditIcon';
import { UserGeneralInfo } from 'modules/security/users/components/UserGeneralInfo';
import { memo } from 'react';
import { StepsHeader } from './StepsHeader';

type Props = {
  form: any;
  isLoading?: boolean;
};

const OnboardingInfoForm = ({ form, isLoading }: Props) => {
  return (
    <UserGeneralInfo
      {...form}
      isLoadingUser={isLoading}
      isMe
      size='small'
      title={
        <StepsHeader
          icon={<FileEditIcon sx={{ mt: 0.5 }} />}
          title={'onboarding.infoForm.title'}
          subtitle={'onboarding.infoForm.subtitle'}
        />
      }
      className='p-[30px_27px_10px_27px]'
      buttonText='continue'
    />
  );
};

export default memo(OnboardingInfoForm);
