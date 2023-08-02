import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { IProductProvider } from '../interfaces/IProductProvider';

class ProductProviderService extends EntityApiService<IProductProvider> {
  getAllProductProvider = (config?: RequestConfig): Promise<any> => {
    return this.handleResponse(ApiClientService.get(this.getPath('/search'), config))
  };

  // save = (params: IProductCreate, config?: RequestConfig): Promise<IProduct> => {
  //   const newProduct = params;
  //   console.log('Sericio Producto [Create]: ', newProduct);
  // params.jobInformation.dateActivated = params.hiring.date;
  // const ciParsed = parseCI(params.general.ci);
  // params.general.birthday = ciParsed.birthday;
  // params.general.gender = ciParsed.gender;

  // const newEmployee: Omit<IEmployee, '_id' | 'email' | 'phone'> = {
  //   ...params,
  //   hiring: {
  //     ...params.hiring,
  //     recommended: params.hiring.recommended === RecommendedEnum.recommended,
  //   },
  //   // @ts-ignore
  //   compensation: params.compensation,
  //   // @ts-ignore
  //   jobInformation: params.jobInformation,
  // };
  //   return this.handleResponse(ApiClientService.post(this.getPath(null), newProduct, config));
  // };

  // updateGeneralInfo = (
  //   employeeId: string,
  //   params: IEmployeeGeneralInfo,
  //   config?: RequestConfig,
  // ): Promise<IEmployeeGeneralInfo> => {
  //   const ciParsed = parseCI(params.ci);
  //   params.birthday = ciParsed.birthday;
  //   return this.handleResponse(ApiClientService.patch(this.getPath(`/${employeeId}/general`), params, config));
  // };

  // updateAddressInfo = (employeeId: string, params: IAddress, config?: RequestConfig): Promise<IAddress> => {
  //   return this.handleResponse(ApiClientService.patch(this.getPath(`/${employeeId}/address`), params, config));
  // };

  // updateContactsInfo = (
  //   employeeId: string,
  //   params: IEmployeeContactInfo,
  //   config?: RequestConfig,
  // ): Promise<IEmployeeContactInfo> => {
  //   return this.handleResponse(ApiClientService.put(this.getPath(`/${employeeId}/contacts`), params, config));
  // };

  // updateSocialMediaInfo = (
  //   employeeId: string,
  //   params: ISocialMediaInfo,
  //   config?: RequestConfig,
  // ): Promise<ISocialMediaInfo> => {
  //   return this.handleResponse(ApiClientService.patch(this.getPath(`/${employeeId}/social`), params, config));
  // };

  // getListNewEmploy = (config?: RequestConfig): Promise<any> => {
  //   return this.handleResponse(ApiClientService.get(this.getPath('/new/employ'), config))
  // };
}

export default new ProductProviderService('/ms-inventory/api/product-provider');
