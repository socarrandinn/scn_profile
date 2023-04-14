// @ts-nocheck
import * as Yup from 'yup';
import '@dfl/yup-validations';

export const contactSelectionSchema = Yup.object().shape({
  shipping: Yup.object().nullable().required('order:shipping.required'),
});

export const contactSchema = Yup.object().shape({
  _id: Yup.string(),
  needCi: Yup.boolean(),
  firstName: Yup.string().min(2, 'min-2').max(255, 'max-255').required('required').name('invalidValue'), // name validation
  lastName: Yup.string().min(2, 'min-2').max(255, 'max-255').required('required').name('invalidValue'), // name validation
  identityNumber: Yup.string()
    .cubaCi('invalidCi')
    .when('needCi', {
      is: true,
      then: Yup.string().cubaCi('invalidCi').required('required'),
    }),
  email: Yup.string().required('required').trim().email('validEmail').max(255),
  phone: Yup.string().trim().cubaPhone().required('required'),
  address: Yup.object().shape({
    address: Yup.string().min(2, 'min-2').max(255, 'max-255').required('required'),
    state: Yup.string().nullable().required('required'),
    // .required('required').when('_id', ())
    // .oneOf([Yup.ref("shopRegion.state")], "regionMatch"),
    municipality: Yup.string().nullable().required('required'),
    country: Yup.string(),
  }),
  owner: Yup.string(),
});
