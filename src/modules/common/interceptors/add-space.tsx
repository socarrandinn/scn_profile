import { RequestConfig } from '@dfl/react-security';

export const AddSpace = (body: any, workspace: string): RequestConfig => {
  return {
    ...body,
    space: workspace,
  };
};
