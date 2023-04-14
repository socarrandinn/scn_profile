import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { IShippingContact } from 'modules/security/users/interfaces/IShippingContact';
import { pick } from 'lodash';

const parseContactToOrderShipping = (contact: IShippingContact): IShippingContact => {
  const cleanContact: IShippingContact = pick(contact, [
    '_id',
    'firstName',
    'lastName',
    'email',
    'identityNumber',
    'phone',
    'address',
    'address',
    'fullName',
    'owner',
  ]) as IShippingContact;
  cleanContact.type = 'SHIPPING_RULE';
  return cleanContact;
};
class ContactServices extends EntityApiService<IShippingContact> {
  search = (params?: any, config?: RequestConfig) => {
    const size = params?.size || 20;
    return this.handleSearchResponse(ApiClientService.post(this.getPath('/search?admin=true'), params, config), size);
  };

  createContact = (shipping: IShippingContact, config?: RequestConfig) => {
    const values = {
      ...shipping,
      email: shipping?.email?.trim(),
      phone: shipping?.phone?.trim(),
    };
    if (shipping._id) {
      return this.handleResponse(ApiClientService.patch(this.getPath(`/${shipping._id}`), values, config)).then(
        (data) => parseContactToOrderShipping(data),
      );
    }
    if (shipping.save) {
      return this.handleResponse(ApiClientService.post(this.getPath(''), values, config)).then((data) =>
        parseContactToOrderShipping(data),
      );
    }
    return Promise.resolve({ ...values, isNewContact: true, type: 'SHIPPING_RULE' });
  };

  invalidateContact = (shippingId: string, config?: RequestConfig) => {
    const values = {
      verification: {
        isValid: false,
      },
    };
    return this.handleResponse(ApiClientService.patch(this.getPath(`/${shippingId}`), values, config)).then((data) =>
      parseContactToOrderShipping(data),
    );
  };
}

export default new ContactServices('/ms-auth/api/shippings');
