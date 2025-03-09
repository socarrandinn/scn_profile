/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date:
 */
import React, { memo, useState } from 'react';
import AddressMapMarket from 'components/AddressMapFormFields/AddressMapMarket';
import AddressMap from 'components/AddressMapFormFields/AddressMap';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

type Props = {
  collapsibleMap?: boolean;
  setCoordinates?: (position: any) => void;
  coordinates?: { lat: number; lng: number } | null;
};

const AddressMapContainer = ({ coordinates, setCoordinates, collapsibleMap }: Props) => {
  const { t } = useTranslation('common');

  const [expanded, setExpanded] = useState<boolean>(false);

  if (collapsibleMap) {
    return (
      <div className='relative'>
        <Accordion
          defaultExpanded={false}
          expanded={expanded}
          onChange={(_, expanded) => {
            setExpanded(expanded);
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1-content' id='panel1-header'>
            <Typography component='span'>{t('seeMapDetails')}</Typography>
          </AccordionSummary>
          <AccordionDetails className={classNames('w-full relative', expanded ? 'h-[300px]' : 'h-[0px]')}>
            <AddressMap
              key={JSON.stringify({ coordinates, expanded })}
              lat={coordinates?.lat ?? 0}
              lng={coordinates?.lng ?? 0}
              className={classNames('w-full relative', expanded ? 'h-[300px]' : 'h-[0px]')}
              market={
                <AddressMapMarket
                  position={{
                    lat: coordinates?.lat ?? 0,
                    lng: coordinates?.lng ?? 0,
                  }}
                  setPosition={setCoordinates}
                />
              }
            />
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }

  return (
    <AddressMap
      key={JSON.stringify(coordinates)}
      lat={coordinates?.lat ?? 0}
      lng={coordinates?.lng ?? 0}
      className='w-full h-[300px]'
      // isLoading={isLoadingGeo}
      market={
        <AddressMapMarket
          position={{
            lat: coordinates?.lat ?? 0,
            lng: coordinates?.lng ?? 0,
          }}
          setPosition={setCoordinates}
        />
      }
    />
  );
};

export default memo(AddressMapContainer);
