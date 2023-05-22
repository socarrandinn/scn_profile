import { EntityApiService, RequestConfig } from '@dfl/react-security';
import { IEmployeeTimeOff, IEmployeeTimeOffStat } from 'modules/rrhh/employee/common/interfaces/IEmployeeTimeOff';
import { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { searchResponseAdapter } from 'utils';
import { TimeOffStatusEnum } from 'modules/rrhh/employee/employee-detail/free-time/constants/timeoffStatus.enum';

type MockupDataStatsFnType = (employeeId: string) => IEmployeeTimeOffStat[];
type MockupDataFnType = (employeeId: string) => IEmployeeTimeOff[];

const getMockupDataStats: MockupDataStatsFnType = (employeeId) => {
  return [
    {
      _id: '1',
      employee: employeeId,
      policy: {
        name: 'Vacaciones',
        icon: 'ContactMailIcon',
      },
      accumulated: 8,
      consumption: 0,
      canApply: false,
      yearly: 30,
    },
    {
      _id: '2',
      employee: employeeId,
      policy: {
        name: 'Enfermedad',
        icon: 'ContactMailIcon',
      },
      accumulated: 4,
      consumption: 4,
      canApply: true,
      yearly: 15,
    },
    {
      _id: '3',
      employee: employeeId,
      policy: {
        name: 'Licencia Familiar',
        icon: 'ContactMailIcon',
      },
      accumulated: 5,
      consumption: 0,
      canApply: true,
      yearly: 5,
    },
  ];
};

const getMockupData: MockupDataFnType = (employeeId) => {
  return [
    {
      _id: '1',
      employee: employeeId,
      policy: {
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
        name: 'Vacaciones',
        icon: 'ContactMailIcon',
      },
      amount: 3,
      status: TimeOffStatusEnum.ACCEPTED,
      startDate: '2020-07-01T12:00:00.000Z',
      endDate: '2020-07-03T12:00:00.000Z',
    },
    {
      _id: '3',
      employee: employeeId,
      policy: {
        name: 'Enfermedad',
        icon: 'ContactMailIcon',
      },
      amount: 3,
      status: TimeOffStatusEnum.PENDING,
      startDate: '2022-09-01T12:00:00.000Z',
      endDate: '2022-09-08T12:00:00.000Z',
    },
    {
      _id: '4',
      employee: employeeId,
      policy: {
        name: 'Enfermedad',
        icon: 'ContactMailIcon',
      },
      amount: 1,
      status: TimeOffStatusEnum.IN_PROGRESS,
      startDate: '2022-09-01T12:00:00.000Z',
      endDate: '2022-09-08T12:00:00.000Z',
    },
  ];
};

class EmployeeTimeOffService extends EntityApiService<IEmployeeTimeOff[]> {
  searchStats = (employeeId: string, config?: RequestConfig) => {
    /* const path = this.getPath(`/${employeeId}/free-time/search`);
    return ApiClientService.post(path, config).then(({ data }) => {
      return data?.jobInformationHistory || [];
    }); */
    // const response = ApiClientService.post(this.getPath('/search');
    const response = new Promise<AxiosResponse<any>>((resolve) => {
      setTimeout(() => {
        const data = getMockupDataStats(employeeId);
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

  search = (employeeId: string, config?: RequestConfig) => {
    /* const path = this.getPath(`/${employeeId}/free-time/search`);
    return ApiClientService.post(path, config).then(({ data }) => {
      return data?.jobInformationHistory || [];
    }); */
    // const response = ApiClientService.post(this.getPath('/search');
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
