import * as Yup from 'yup';

export const productOfferSchema = Yup.object().shape({
  type: Yup.string(),
  offer: Yup.string(),
  from: Yup.date(),
  to: Yup.date(),
});
