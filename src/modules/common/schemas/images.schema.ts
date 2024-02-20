import * as Yup from 'yup';

export const ImageItemScheme = Yup.object().shape({
  isLoading: Yup.boolean().isTrue('waitUploading').nullable(),
  isError: Yup.boolean().isTrue('errorUpload').nullable(),
  thumb: Yup.string().required('required'),
  url: Yup.string().required('required'),
});

export const ImagesScheme = Yup.array()
  .max(5, 'Number of images cannot exceed 5')
  .test('isError', 'uploadFile.hasErrors', function (array) {
    return !array?.some((item) => item.isError);
  }).nullable()
  .test('isLoading', 'waitUploading', function (array) {
    return !array?.some((item) => item.isLoading);
  }).nullable();
