import { EntityApiService, RequestConfig } from '@dfl/react-security';
import { IEmployeeTimeOff } from 'modules/rrhh/employee/common/interfaces/IEmployeeTimeOff';
import { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { searchResponseAdapter } from 'utils';
import { TimeOffStatusEnum } from 'modules/rrhh/employee/employee-detail/free-time/constants/timeoffStatus.enum';
import { ITimeOffPolicies } from 'modules/rrhh/settings/time-off-policies/interfaces';
import { CommonIntervalsEnum, IntervalEnum } from 'modules/rrhh/settings/time-off-policies/constants/interval.enum';

type MockupDataFnType = (employeeId: string) => IEmployeeTimeOff[];

const mockupPolicy: ITimeOffPolicies = {
  name: 'Vacaciones',
  icon: 'ContactMailIcon',
  coverAmount: 'none',
  accumulate: {
    isAccumulative: false,
    value: 556,
    interval: IntervalEnum.year,
  },
  isPaid: false,
  needApproval: false,
  type: '645a4a66587fe7d3b5e4e879',
  rules: {
    limitTimeRule: {
      value: 76,
      valueInterval: CommonIntervalsEnum.days,
    },
    startApplyRuler: {
      value: 678,
      valueInterval: CommonIntervalsEnum.days,
    },
  },
};

// @ts-ignore
const getMockupData: MockupDataFnType = (employeeId: string) => {
  return [
    {
      _id: '1',
      employee: employeeId,
      policy: {
        ...mockupPolicy,
        name: 'Vacaciones',
        icon: 'ContactMailIcon',
      },
      amount: 5,
      status: TimeOffStatusEnum.PENDING,
      startDate: '2020-06-28T12:00:00.000Z',
      endDate: '2020-07-03T12:00:00.000Z',
    },
    {
      _id: '2',
      employee: employeeId,
      policy: {
        ...mockupPolicy,
        name: 'Vacaciones',
        icon: 'ContactMailIcon',
      },
      amount: 3,
      status: TimeOffStatusEnum.ACCEPTED,
      startDate: new Date('2020-07-01T12:00:00.000Z'),
      endDate: new Date('2020-07-03T12:00:00.000Z'),
    },
    {
      _id: '3',
      employee: employeeId,
      policy: {
        ...mockupPolicy,
        name: 'Enfermedad',
        icon: 'ContactMailIcon',
      },
      amount: 3,
      status: TimeOffStatusEnum.PENDING,
      startDate: new Date('2022-09-01T12:00:00.000Z'),
      endDate: new Date('2022-09-08T12:00:00.000Z'),
    },
    {
      _id: '4',
      employee: employeeId,
      policy: {
        ...mockupPolicy,
        name: 'Enfermedad',
        icon: 'ContactMailIcon',
      },
      amount: 1,
      status: TimeOffStatusEnum.IN_PROGRESS,
      startDate: new Date('2022-09-01T12:00:00.000Z'),
      endDate: new Date('2022-09-08T12:00:00.000Z'),
    },
  ];
};

class EmployeeTimeOffService extends EntityApiService<IEmployeeTimeOff[]> {
  search = (employeeId: string, config?: RequestConfig) => {
    const response = new Promise<AxiosResponse<any>>((resolve) => {
      setTimeout(() => {
        const data = getMockupData(employeeId);
        resolve({
          data: {
            data,
            total: data.length,
          },
          status: 200,
          statusText: 'Ok',
          headers: {},
          config: config as InternalAxiosRequestConfig,
        });
      }, 3000);
    });
    return searchResponseAdapter(response, 10);
  };
}

export default new EmployeeTimeOffService('/ms-rrhh/api/employees');
