import { lazy } from 'react';

const loadEmployeeList = () => import('modules/store/employee/management/pages/EmployeeList');
export const EmployeeList = lazy(loadEmployeeList);

const loadCreateEmployee = () => import('modules/store/employee/management/pages/CreateEmployee');
export const CreateEmployee = lazy(loadCreateEmployee);

const loadEmployeeDetails = () => import('modules/store/employee/employee-detail/common/pages/EmployeeDetails');
export const EmployeeDetails = lazy(loadEmployeeDetails);
