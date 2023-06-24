import { memo, useEffect, useRef, useState } from 'react';
import { useUploadImage } from 'components/UploadFiles/useUploadImage';
import { FormFieldControl, FormTextFieldProps } from '@dfl/mui-react-common';
import AvatarUploadFile from 'components/UploadFiles/AvatarUploadFile';
import { IImageMedia } from 'modules/common/interfaces';

type FormUploadAvatarProps = {
  value: IImageMedia | string | undefined;
  alt?: string;
  size?: number | 'small' | 'large';
  type?: 'circular' | 'rounded' | 'square';
  onChange: (event: any) => Promise<any>;
  loading?: boolean;
  readyOnly?: boolean;
};

const defaultData = {
  url: '',
  thumb: '',
};

const defaultSize = (size: string | number | undefined): number => {
  if (size === 'small') return 90;
  if (size === 'large') return 115;
  return Number(size) || 90;
};

export const UploadAvatar = ({
  value = defaultData,
  size,
  onChange,
  loading,
  alt,
  readyOnly = false,
  type,
  ...rest
}: FormUploadAvatarProps) => {
  const [innerValue, setValue] = useState<string>();
  const { isLoading, upload, data } = useUploadImage();
  const change = useRef(onChange);

  useEffect(() => {
    change.current = onChange;
  }, [onChange]);

  const reactSize = defaultSize(size);

  useEffect(() => {
    setValue(typeof value === 'string' ? value : reactSize > 150 ? value?.url : value?.thumb);
  }, [value, reactSize]);

  useEffect(() => {
    if (data?.thumb) {
      let prev: any;
      setValue((prevState) => {
        prev = prevState;
        return data?.thumb;
      });
      const promise: Promise<any> = change.current?.({ target: { value: data } });

      if (promise?.catch) {
        promise.catch(() => {
          setValue(prev);
        });
      }
    }
  }, [data]);

  return (
    <AvatarUploadFile
      {...rest}
      readyOnly={readyOnly}
      alt={alt}
      src={innerValue}
      size={reactSize}
      variant={type}
      isLoading={isLoading || Boolean(loading)}
      handleAvatarOnChange={upload}
    />
  );
};

const FormUploadAvatar = (props: FormTextFieldProps & { type?: string; icon?: any }) => {
  return <FormFieldControl {...props} Component={UploadAvatar} />;
};

export default memo(FormUploadAvatar);
