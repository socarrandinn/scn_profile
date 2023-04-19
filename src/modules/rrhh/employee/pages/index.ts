import { lazy } from 'react';

const loadEmployeeList = () => import('modules/rrhh/employee/pages/EmployeeList');
export const EmployeeList = lazy(loadEmployeeList);
