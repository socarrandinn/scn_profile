import { lazy } from 'react';

const loadEmployeeList = () => import('modules/rrhh/employee/management/pages/EmployeeList');
export const EmployeeList = lazy(loadEmployeeList);

const loadCreateEmployee = () => import('modules/rrhh/employee/management/pages/CreateEmployee');
export const CreateEmployee = lazy(loadCreateEmployee);

const loadEmployeeDetails = () => import('modules/rrhh/employee/management/pages/EmployeeDetails');
export const EmployeeDetails = lazy(loadEmployeeDetails);
