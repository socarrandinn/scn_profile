import * as Yup from 'yup';
import '@dfl/yup-validations';

export const productOfferSchema = Yup.object().shape({
  type: Yup.string(),
  offer: Yup.string(),
  from: Yup.date(),
  to: Yup.date(),
});
