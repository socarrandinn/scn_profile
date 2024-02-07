import {  useFindAuditLogsByEntity } from 'modules/security/audit-logs/hooks/useFindAuditLogsByEntity';
import {memo} from 'react'
import { useCategoryDetail } from '../context/CategoryDetailContext';

const CategoryHistoryChangeContainer = () => {
  const {categoryId} = useCategoryDetail()
  const {data} = useFindAuditLogsByEntity(categoryId as string)



return (
<div><pre> {JSON.stringify(data , null , 2 )} </pre></div>
);

}

export default memo(CategoryHistoryChangeContainer);