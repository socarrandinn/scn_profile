import { EntityApiService } from '@dfl/react-security';
import { ISupplier } from 'modules/inventory/provider/supplier/interfaces';

class SupplierService extends EntityApiService<ISupplier> {}

export default new SupplierService('/ms-inventory/api/product-provider');
