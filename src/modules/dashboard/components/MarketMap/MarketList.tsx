import { memo, useEffect, useMemo, useRef } from 'react';
import { Circle, Marker, Polyline, Popup, useMap } from 'react-leaflet';
import { useMapContext } from 'modules/dashboard/contexts/SelectItemContext';
import IconButton from '@mui/material/IconButton';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import L from 'leaflet';

type MarketListProps = {
  listNode: any[];
  dataChildren: any[];
};

const customIcon = new L.Icon({
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  iconUrl: require('./location.svg').default,
  iconSize: new L.Point(40, 47),
});

const MarketList = ({ listNode, dataChildren }: MarketListProps) => {
  const limeOptions = { color: '#62b842', weight: 2 };
  const fillBlueOptions = { fillColor: 'blue' };
  const map = useMap();
  const { select, setSelect } = useMapContext();
  const markerRef = useRef<any>(null);

  const finalListNode = useMemo(() => {
    return select ? [select] : listNode;
  }, [select, listNode]);

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.openPopup();
    }
  }, [select]);

  return (
    <>
      {finalListNode?.map((item: any, index: number) => (
        <Marker
          key={index}
          icon={customIcon}
          ref={select?._id === item._id ? markerRef : null}
          eventHandlers={{
            click: () => {
              setSelect(item);
              map.setView(
                [
                  item.address?.location?.coordinates?.[0],
                  item.address?.location?.coordinates?.[1],
                ],
                11,
              );
            },
          }}
          position={[
            item?.address?.location?.coordinates?.[0],
            item?.address?.location?.coordinates?.[1],
          ]}
        >
          <Popup closeButton={false} autoPan={false}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>{item?.name}</span>
              <IconButton
                aria-label="visibility"
                size="small"
                onClick={() => {
                  setSelect(null);
                  map.setView(
                    [
                      item.address?.location?.coordinates?.[0],
                      item.address?.location?.coordinates?.[1],
                    ],
                    7,
                  );
                }}
              >
                <VisibilityOffIcon fontSize="small" />
              </IconButton>
            </div>
          </Popup>
        </Marker>
      ))}
      {select !== null &&
        dataChildren !== null &&
        dataChildren?.map((item: any, index: any) => (
          <>
            <Circle
              center={[
                item?.address?.location?.coordinates?.[0],
                item?.address?.location?.coordinates?.[1],
              ]}
              pathOptions={fillBlueOptions}
              radius={map?.getZoom() * 60}
            />
            <Polyline
              key={index}
              pathOptions={limeOptions}
              positions={[
                [
                  item?.address?.location?.coordinates?.[0],
                  item?.address?.location?.coordinates?.[1],
                ],
                [
                  select?.address?.location?.coordinates?.[0],
                  select?.address?.location?.coordinates?.[1],
                ],
              ]}
            />
          </>
        ))}
    </>
  );
};

export default memo(MarketList);
