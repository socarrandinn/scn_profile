import { ChangeEvent, memo, useRef } from 'react';
import AvatarUploadBase, { AvatarUploadBaseProps } from 'components/UploadFiles/AvatarUploadBase';
import { useSecurity } from '@dfl/react-security';

type AvatarUploadProps = Omit<AvatarUploadBaseProps, 'onClick'> & {
  handleAvatarOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const AvatarUploadFile = ({ handleAvatarOnChange, ...props }: AvatarUploadProps) => {
  const { hasPermission } = useSecurity();
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    hiddenFileInput?.current?.click();
  };

  return (
    <>
      <AvatarUploadBase {...props} onClick={handleUploadClick} />
      <input
        type='file'
        hidden
        ref={hiddenFileInput}
        onChange={handleAvatarOnChange}
        accept='image/png, image/gif, image/jpeg'
        disabled={!hasPermission('USER_ADMIN')}
      />
    </>
  );
};

export default memo(AvatarUploadFile);
