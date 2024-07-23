import { memo } from 'react';
import { IHandleErrorProductImport } from '../../interfaces/IProductImport';
import { HandlerError } from '@dfl/mui-react-common';
type HandleErrorProductImportProps = {
  errors: IHandleErrorProductImport[];
};

const HandleErrorProductImport = ({ errors }: HandleErrorProductImportProps) => {
  return (
    <>
      {errors?.map((error) => (
        <HandlerError key={error?.reason?.name} error={error} mapError={errorsMap} />
      ))}
    </>
  );
};

export default memo(HandleErrorProductImport);

export const errorsMap = (error: any) => {
  if (error.reason?.status === 400) {
    return {
      title: 'productUpload:errors.title',
      description: `productUpload:errors.${error?.reason?.message as string}`,
    };
  }
  return error;
};
