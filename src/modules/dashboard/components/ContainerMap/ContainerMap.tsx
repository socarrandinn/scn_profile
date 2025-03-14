import MapContainerCmp from 'components/MapContainer/MapContainerCmp';
import MarketList from 'modules/dashboard/components/MarketMap/MarketList';
import { useMapContext } from 'modules/dashboard/contexts/SelectItemContext';
import { useFindStores } from 'modules/inventory/warehouse/hooks/useFindStores';
import { useFindDistributionCenters } from 'modules/inventory/distribution-centers/hooks/useFindDistributionCenters';
import { memo, useMemo } from 'react';
import { TypeMapView } from 'modules/dashboard/constant/TypeViewMap';
import { OperatorFilter, TermFilter } from '@dofleini/query-builder';
import { useFindStoresByDistributionCenters } from 'modules/inventory/distribution-centers/hooks/useFindStoresByDistributionCenters';
import MarkerClusterGroup from 'react-leaflet-cluster';
// @ts-ignore
import Choropleth from 'react-leaflet-choropleth';
import geoJsonProvinces from 'modules/dashboard/components/ContainerMap/cubaMapGeoJsonPROV.json';
import useDFLTour from 'hooks/useDFLTour';
import { StepsGroup } from 'services/tour-service';

const style = {
  fillColor: 'rgba(0,0,0,0.5)',
  weight: 1.5,
  opacity: 0.4,
  color: '#767677FF',
  dashArray: '3',
  fillOpacity: 0.7,
};

const ContainerMap = () => {
  const { typeView, select } = useMapContext();

  const dataStores = useFindStores();
  const dataDistributionCenters = useFindDistributionCenters();

  const filterDistributionCenters = useMemo(() => {
    if (!select || typeView === TypeMapView.DISTRIBUTION_CENTER) return {};

    return new OperatorFilter({
      type: 'OR',
      filters: select?.distributionCenters?.length
        ? select?.distributionCenters?.map(
            (e: any) =>
              new TermFilter({
                field: '_id',
                value: e,
                objectId: true,
              }),
          )
        : [],
    });
  }, [select, typeView]);

  const { data: DistributionCenters } = useFindDistributionCenters(filterDistributionCenters);

  const { data: StoreDistribution } = useFindStoresByDistributionCenters(
    typeView === TypeMapView.DISTRIBUTION_CENTER ? select?._id : undefined,
  );

  const { data, isLoading: isLoadingData } = useMemo(() => {
    return typeView === TypeMapView.STORE ? dataStores : dataDistributionCenters;
  }, [typeView, dataStores, dataDistributionCenters]);

  const dataChildren = typeView === TypeMapView.STORE ? DistributionCenters : StoreDistribution;

  const finalGeoJsonProvinces = useMemo(() => {
    return {
      type: 'FeatureCollection',
      features: geoJsonProvinces.features.filter((feature) =>
        select?.locations?.[0]?.states?.includes(feature.properties.DPA_province_code),
      ),
    };
  }, [select]);

  const launchTour = useMemo(() => {
    return Boolean(dataStores && dataDistributionCenters);
  }, [dataDistributionCenters, dataStores]);

  useDFLTour(StepsGroup.mainLayout, launchTour);
  return (
    <MapContainerCmp style={{ height: '800px', width: '100%' }} isLoading={isLoadingData} maxZoom={13}>
      <MarkerClusterGroup chunkedLoading spiderfyDistanceMultiplier={3}>
        <MarketList listNode={data?.data || []} dataChildren={dataChildren?.data || []} />
      </MarkerClusterGroup>
      {typeView === TypeMapView.DISTRIBUTION_CENTER && (
        <Choropleth
          data={finalGeoJsonProvinces}
          onEachFeature={(feature: any, layer: any) => {
            layer.bindPopup(feature.properties.province);
          }}
          scale={['#b3cde0', '#b3cde0']}
          steps={8}
          mode='e'
          style={style}
          valueProperty={(feature: any) => feature.properties.DPA_province_code || 0}
        />
      )}
    </MapContainerCmp>
  );
};

export default memo(ContainerMap);
