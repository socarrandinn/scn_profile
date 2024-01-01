import { useMemo } from 'react';
import { styled } from '@mui/material/styles';
import classNames from 'classnames';
import { provincePaths } from 'components/cubanMap/constant/provinces';

type CubanMapProps = {
  provinciasIds?: string[];
  fillColor?: string;
  strokeColor?: string;
  fillSelectedColor?: string;
};

export const SvgCubanMap = ({
  provinciasIds,
  fillColor = '#dcdcdc',
  strokeColor = '#000',
  fillSelectedColor,
}: CubanMapProps) => {
  const CubanMapContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    marginBottom: 5,
    paddingLeft: 2,
    svg: {
      width: '80%',
      height: { md: 200, xs: 120 },
    },
    '.province-fill': {
      fill: fillSelectedColor || theme.palette.primary.main,
    },
  }));
  const selectedProvinceMap = useMemo(() => {
    const map: Record<string, boolean> = {};
    provinciasIds?.forEach((province) => {
      map[province] = true;
    });
    return map;
  }, [provinciasIds]);

  return (
    <CubanMapContainer>
      <svg
        fill={fillColor}
        viewBox='0 0 400 400'
        height='172px'
        width= '500px'
        stroke={strokeColor}
        version='1.2'
        xmlns='http://www.w3.org/2000/svg'
      >
        {provincePaths.map((path) => (
          <path
            key={path.id}
            d={path.d}
            id={path.id}
            className={classNames({ 'province-fill': selectedProvinceMap[path.id] })}
            name={path.name}
            fill={fillColor}
          />
        ))}
      </svg>
    </CubanMapContainer>
  );
};
