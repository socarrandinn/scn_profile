import { useWarehouseDetail } from '../../context/WarehouseContext';

const WarehouseUserTabList = () => {
  const { warehouseId } = useWarehouseDetail();
  return (<div>{warehouseId}</div>
  // <PageTabPaperLayout
  //   prefix={`/inventory/warehouses/${warehouseId}/users`}
  //   tabs={commonUserInviteTabs('/inventory/warehouses')}
  // >
  //   <Suspense fallback={<PageLoader size={'screen'} />}>
  //     <RouteLoader
  //       routes={warehouseUserTabRoutes}
  //       notfoundRedirect={`/inventory/warehouses/${warehouseId}/users/users`}
  //     />
  //   </Suspense>
  // </PageTabPaperLayout>
  );
};
export default WarehouseUserTabList;
