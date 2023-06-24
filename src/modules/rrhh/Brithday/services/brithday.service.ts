import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IEmployee } from 'modules/rrhh/employee/common/interfaces';

interface IResultBrithday {
  birthdayNow: IEmployee[],
  nextBirthday: IEmployee[]
}

class BrithdayService extends EntityApiService<any> {
  nextBirthday = (): Promise<IResultBrithday> => {
    const currentDate = new Date();
    return this.handleResponse(ApiClientService.get(this.getPath('/birthday')))
      .then((result: any[]) => {
        const resultBrithday: IResultBrithday = { birthdayNow: [], nextBirthday: [] };
        result.forEach((item: any) => {
          // Si estamos en un cumpleaños
          if (currentDate.getMonth() === new Date(item.general.birthday).getMonth() && currentDate.getDate() === new Date(item.general.birthday).getDate()) {
            resultBrithday.birthdayNow.push(item)
          } else {
            resultBrithday.nextBirthday.push(item)
          }
        });
        return resultBrithday;
      });
  }

  newEmployer = (): Promise<any[]> => {
    return this.handleResponse(ApiClientService.get(this.getPath('/new-employees')));
  };
}

export default new BrithdayService('/ms-rrhh/api/common-analytics');
