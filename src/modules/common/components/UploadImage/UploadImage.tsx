import { useEffect } from 'react';
import AvatarEditable, { AvatarEditableProps } from 'components/AvatarEditable/AvatarEditable';
import { useUploadImage } from 'modules/common/components/UploadImage/useUploadImage';
import { IImageMedia } from 'modules/common/interfaces';
import { FormFieldControl } from '@dfl/mui-react-common';

type AvatarUserProps = Omit<AvatarEditableProps, 'onSubmit' | 'isLoading' | 'avatar'> & {
  value?: IImageMedia,
  onSuccess?: () => void,
  onChange?: (data: any) => void
};

export const UploadImage = ({ onSuccess, value, onChange, ...props }: AvatarUserProps) => {
  const { mutate, isLoading, data } = useUploadImage(onSuccess);

  const onSubmit = (f: any) => {
    if (f.length) {
      mutate(f[0])
    }
  }

  useEffect(() => {
    onChange?.({ target: { value: data } });
  }, [data])

  return (
        <div>
            <AvatarEditable avatar={value} onSubmit={onSubmit}
                            isLoading={isLoading} {...props}/>
        </div>
  );
};

export const FormUploadImage = (props: AvatarUserProps & { name: string }) => {
  return <FormFieldControl {...props} Component={UploadImage}/>;
};
