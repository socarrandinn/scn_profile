import { IUploadImage } from 'modules/common/components/MediaUploader/interfaces';

export const imageFileToMedia = (file: File): IUploadImage => ({
  thumb: URL.createObjectURL(file),
  url: URL.createObjectURL(file),
  isLoading: true
});

export const transformValue = (value: any) => ({ target: { value } })

export const eventClick = (e: any) => {
  e?.stopPropagation()
  e?.preventDefault()
}

export const errorsMap = (error: any) => {
  if (error.statusCode === 413) {
    return {
      title: 'errors:uploadFile.error',
      description: 'errors:uploadFile.toLarge1Mg'
    }
  }
  return error;
}
