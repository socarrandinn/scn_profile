import { memo } from 'react';
import AvatarEditable from 'components/AvatarEditable/AvatarEditable';
import { IEmployeeUpdate } from 'modules/rrhh/employee/common/interfaces';
import { useUploadAvatar } from 'modules/rrhh/employee/employee-detail/common/components/AvatarEmployee/useUploadAvatar';

type AvatarEmployeeProps = {
  employee: IEmployeeUpdate;
  readyOnly?: boolean;
};

const AvatarUser = ({ employee, readyOnly }: AvatarEmployeeProps) => {
  const { mutate, isLoading } = useUploadAvatar(employee?._id);

  const onSubmit = (f: any) => {
    console.log(f)
    if (f.length) {
      mutate(f[0])
    }
  }

  return (
        <div>
            <AvatarEditable avatar={employee?.general?.avatar} onSubmit={onSubmit}
                            isLoading={isLoading}
                            readOnly={readyOnly}/>
        </div>
  );
};

export default memo(AvatarUser);
