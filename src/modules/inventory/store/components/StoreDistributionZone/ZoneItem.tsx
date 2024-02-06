import { useMemo } from 'react';
import { Chip, styled } from '@mui/material';
import { findProvinceByStateCode } from '@dfl/location';
import ZoneDialog from './ZoneDialog';
import { useToggle } from '@dfl/hook-utils';
import { useTranslation } from 'react-i18next';

type ZoneItemProps = {
  state: string;
};

const ZoneChip = styled(Chip)(({ theme }) => ({
  borderRadius: 4,
}));

const MoreChip = styled(ZoneChip)(({ theme }) => ({
  ':hover': {
    cursor: 'pointer',
  },
}));

export const ZoneItem = ({ state }: ZoneItemProps) => {
  const name = useMemo(() => findProvinceByStateCode(state)?.name || state, [findProvinceByStateCode, state]);
  if (!state) return <></>;
  return <ZoneChip size='small' variant='filled' label={name} color='primary' />;
};

export const ZoneMoreItem = ({ locations }: { locations: string[] }) => {
  const { isOpen, onOpen, onClose } = useToggle(false);
  const counter = useMemo(() => locations?.length - 3, [locations]);
  if (counter <= 0) return <></>;
  return (
    <>
      <MoreChip onClick={onOpen} size='small' variant='outlined' label={`+${counter}`} color='primary' />
      <ZoneDialog locations={locations} onClose={onClose} open={isOpen} />
    </>
  );
};

export const NoZoneItem = () => { 
  const {t} = useTranslation('store')
  return <ZoneChip size='small' variant='outlined' label={t('noLocation')} color='default' />;
};