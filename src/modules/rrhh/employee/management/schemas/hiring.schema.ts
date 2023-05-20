import * as Yup from 'yup';
import { RecommendedEnum } from 'modules/rrhh/employee/management/constants/recomended.enum';

export const HiringInfoSchema = Yup.object().shape({
  recommended: Yup.mixed().oneOf(Object.values(RecommendedEnum)).required('required'),
  recommendedBy: Yup.string().when('recommended', {
    is: RecommendedEnum.recommended,
    then: (schema) => schema.required('required'),
    otherwise: (schema) => schema.nullable(),
  }),
  date: Yup.date().required('required'),
});
