import { useSearchParams } from 'react-router-dom';

export const useSearchParamsCategoryParentId = () => {
  const [searchParams] = useSearchParams();
  return searchParams.get('edit');
};
