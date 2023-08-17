import React, { useEffect } from 'react';
import AvatarEditable, { AvatarEditableProps } from 'components/AvatarEditable/AvatarEditable';
import { useUploadImage } from 'modules/common/components/UploadImage/useUploadImage';
import { IImageMedia } from 'modules/common/interfaces';
import { FlexBox, FormFieldControl, HandlerError } from '@dfl/mui-react-common';
import { Button, FormHelperText } from '@mui/material';
import { useTranslation } from 'react-i18next';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import Box from '@mui/material/Box';
import { errorsMap } from 'modules/common/components/MediaUploader/utils/utils';

type AvatarUserProps = Omit<AvatarEditableProps, 'onSubmit' | 'isLoading' | 'avatar' | 'size'> & {
  value?: IImageMedia;
  size?: any;
  label?: string;
  avatarSize?: number;
  onSuccess?: () => void;
  onChange?: (data: any) => void;
  helperText?: string;
  error?: boolean;
  direction?: 'column' | 'row';
};

export const UploadImage = ({
  onSuccess,
  value,
  size,
  onChange,
  avatarSize = 90,
  label,
  error,
  helperText,
  direction = 'row',
  ...props
}: AvatarUserProps) => {
  const { mutate, isLoading, data, error: uploadError } = useUploadImage(onSuccess);
  const { t } = useTranslation('common');
  const onSubmit = (f: any) => {
    if (f.length) {
      mutate(f[0]);
    }
  };

  useEffect(() => {
    onChange?.({ target: { value: data } });
  }, [data]);

  return (
        <Box>
            <HandlerError error={uploadError} mapError={errorsMap}/>
            <FlexBox gap={direction === 'column' ? 3 : 5} alignItems={'center'} mb={1} flexDirection={direction}>
                <AvatarEditable variant={'square'} size={avatarSize} avatar={value} onSubmit={onSubmit}
                                isLoading={isLoading} {...props} />
                <div>
                    <Button component="label" variant={'outlined'} startIcon={<UploadFileOutlinedIcon/>}
                            size={size || 'small'}>
                        {label || t('uploadImage')}
                        <input type='file' accept='image/*' hidden onChange={(e) => {
                          onSubmit?.(e.target.files);
                        }}/>
                    </Button>
                </div>
            </FlexBox>
            {helperText ? <FormHelperText error={error}>{helperText}</FormHelperText> : <></>}
        </Box>
  );
};

export const FormUploadImage = (props: AvatarUserProps & { name: string }) => {
  return <FormFieldControl {...props} Component={UploadImage}/>;
};
