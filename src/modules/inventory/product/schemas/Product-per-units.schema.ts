import * as Yup from 'yup';

export const productPerUnitsSchema = Yup.object().shape({
  amount: Yup.number().min(0),
  offer: Yup.string(),
  from: Yup.string().nullable(),
  to: Yup.string().nullable(),
});
