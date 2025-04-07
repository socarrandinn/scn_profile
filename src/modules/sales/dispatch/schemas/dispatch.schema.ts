import * as Yup from 'yup';

import '@dfl/yup-validations';

// common dispatch
export const dispatchSchema = Yup.object().shape({
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  filters: Yup.object(),
});

// create dispatch
export const dispatchCreateSchema = Yup.object()
  .shape({
    logistic: Yup.string()
      .required('required')
      .transform((l) => l?._id || l),

    space: Yup.string()
      .required('required')
      .transform((l) => l?._id || l),
  })
  .concat(dispatchSchema);

export const updateDispatchSchema = Yup.object().shape({
  dispatch: Yup.string()
    .required('required')
    .transform((d) => d?._id || d),
});
