import {
  /* InputsPage, */
  ValidationPage,
  AsyncValidationPage,
  ConditionalValidationPage,
  NestedFieldsFormPage,
  ListFieldsFormPage,
} from '../pages';

const routes = {
  /* InputsPage: {
    path: '/forms/inputs',
    component: InputsPage,
  }, */
  ValidationPage: {
    path: '/forms/validations',
    component: ValidationPage,
  },
  AsyncValidationPage: {
    path: '/forms/async-validation',
    component: AsyncValidationPage,
  },
  ConditionalValidationPage: {
    path: '/forms/conditional-validation',
    component: ConditionalValidationPage,
  },
  NestedFieldsFormPage: {
    path: '/forms/nested-fields',
    component: NestedFieldsFormPage,
  },
  ListFieldsFormPage: {
    path: '/forms/list-fields',
    component: ListFieldsFormPage,
  },
};

export default routes;
