import { IUploadImage } from 'modules/inventory/common/components/MediaUploader/interfaces';

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
