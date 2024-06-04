import { EntityApiService } from '@dfl/react-security';
import { IReportCause } from 'modules/crm/report-cause/interfaces';

class ReportCauseService extends EntityApiService<IReportCause> {}

export default new ReportCauseService('/ms-inventory/api/admin/reviews/settings/report-cause');
