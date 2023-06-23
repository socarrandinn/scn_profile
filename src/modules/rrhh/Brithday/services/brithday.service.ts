import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { INaoBrithday } from '../Interface/INaoBrithday';
import { INestBrithday } from '../Interface/INextBrithday';
interface IResultBrithday {
  brithdayNow: INaoBrithday[],
  nextBrithday: INestBrithday[]
}
class BrithdayService extends EntityApiService<any> {
  nextBirthday = (): IResultBrithday => {
    const currentDate = new Date();
    const resultBrithday: IResultBrithday = { brithdayNow: [], nextBrithday: [] };
    this.handleResponse(ApiClientService.get(this.getPath('/birthday'))).then((result: []) => {
      result.map((res: any) => {
        // Si estamos en un cumpleaños
        if (currentDate.getMonth() === new Date(res.general.birthday).getMonth() && currentDate.getDate() === new Date(res.general.birthday).getDate()) {
          resultBrithday.brithdayNow.push({ name: res.general.firstName, avatar: res.general.avatar?._id })
        } else {
          resultBrithday.nextBrithday.push({ name: res.general.firstName, avatar: res.general.avatar?._id, brithday: res.general.birthday, occupation: res.jobInformation.position.name })
        }
      });
    });
    return resultBrithday;
  };

  newEmployer = (): Promise<any[]> => {
    return this.handleResponse(ApiClientService.get(this.getPath('/new-employees')));
  };
}

export default new BrithdayService('/ms-rrhh/api/common-analytics');
