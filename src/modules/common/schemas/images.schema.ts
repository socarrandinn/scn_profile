import * as Yup from 'yup';

export const ImageItemScheme = Yup.object().shape({
  isLoading: Yup.boolean().isTrue('waitUploading').nullable(),
  isError: Yup.boolean().isTrue('errorUpload').nullable(),
  thumb: Yup.string().required('required'),
  url: Yup.string().required('required'),
});

export const ImagesScheme = Yup.array().test('isError', 'uploadFile.hasErrors', function (array) {
  return !array?.some(item => item.isError)
}).test('isLoading', 'waitUploading', function (array) {
  return !array?.some(item => item.isLoading)
});
