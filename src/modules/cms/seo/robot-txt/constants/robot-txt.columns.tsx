import { RobotTxtRowActions } from 'modules/cms/seo/robot-txt/components/RobotTxtRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IRobotTxt } from 'modules/cms/seo/robot-txt/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { ROBOT_TXT_PERMISSIONS } from 'modules/cms/seo/robot-txt/constants/robot-txt.permissions';

export const robotTxtNameColumn: HeadCell<IRobotTxt> = {
  field: 'name',
  headerName: 'robotTxt:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: IRobotTxt) => (<EditLink entityId={data._id as string}>{name}</EditLink>),
};

export const robotTxtDescriptionColumn: HeadCell<IRobotTxt> = {
  field: 'description',
  headerName: 'robotTxt:fields.description',
};

export const robotTxtActionsColumn: HeadCell<IRobotTxt> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: ROBOT_TXT_PERMISSIONS.ROBOT_TXT_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: RobotTxtRowActions,
};

export const robotTxtColumns: Array<HeadCell<any>> = [
  robotTxtNameColumn,
  robotTxtDescriptionColumn,
  createdATColumn,
  robotTxtActionsColumn
];
