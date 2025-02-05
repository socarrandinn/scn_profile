import { useEffect } from 'react';
import AvatarEditable, { AvatarEditableProps } from 'components/AvatarEditable/AvatarEditable';
import { useUploadImage } from 'modules/common/components/UploadImage/useUploadImage';
import { IImageMedia } from 'modules/common/interfaces';
import { FormFieldControl } from '@dfl/mui-react-common';
import { FormHelperText } from '@mui/material';
import { useTranslation } from 'react-i18next';

type AvatarUserProps = Omit<AvatarEditableProps, 'onSubmit' | 'isLoading' | 'avatar'> & {
  value?: IImageMedia;
  onSuccess?: () => void;
  error?: any;
  onChange?: (data: any) => void;
  hook?: any;
};

export const UploadImage = ({
  onSuccess,
  value,
  onChange,
  error,
  hook = useUploadImage,
  ...props
}: AvatarUserProps) => {
  const { t } = useTranslation('errors');
  const { mutate, isLoading, data } = useUploadImage(onSuccess);

  const onSubmit = (f: any) => {
    if (f.length) {
      mutate(f[0]);
    }
  };

  useEffect(() => {
    onChange?.({ target: { value: data } });
  }, [data, onChange]);

  return (
    <div>
      <AvatarEditable avatar={value} onSubmit={onSubmit} isLoading={isLoading} {...props} />
      {error?.message && (
        <FormHelperText error sx={{ textAlign: 'center', mt: 1 }}>
          {t(error.message)}
        </FormHelperText>
      )}
    </div>
  );
};

export const FormUploadImage = (props: AvatarUserProps & { name: string }) => {
  return <FormFieldControl {...props} Component={UploadImage} />;
};
