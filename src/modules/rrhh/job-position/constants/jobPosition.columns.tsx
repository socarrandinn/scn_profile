import { JobPositionRowActions } from 'modules/rrhh/job-position/components/JobPositionRowActions';
import { CellType, HeadCell } from '@dfl/mui-admin-layout';
import { ReactLink } from '@dfl/react-security';

export const jobPositionColumns: HeadCell[] = [
  {
    field: 'name',
    headerName: 'jobPositions:name',
    disablePadding: true,
    renderCell: (name, data) => (
      <ReactLink to={`/rrhh/jobPositions?edit=${data._id}`} underline={'hover'}>
        {name}
      </ReactLink>
    ),
  },
  {
    field: 'description',
    headerName: 'jobPositions:description',
  },
  {
    field: 'createdAt',
    type: CellType.DATE,
    headerName: 'common:createdAt',
  },
  {
    field: 'actions',
    sortable: false,
    width: 100,
    headerName: 'common:actions',
    disablePadding: true,
    component: JobPositionRowActions,
  },
];
