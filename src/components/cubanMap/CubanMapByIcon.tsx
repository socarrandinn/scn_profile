import { memo, useMemo } from 'react';
import { styled } from '@mui/system';
import classNames from 'classnames';
import { gs, paths } from 'components/cubanMap/constant';

const FILL_COLOR = '#f3f3f3';
const STROKE_COLOR = '#000';

type CubanMapByIconProps = {
  selectedProvincesIds?: string[];
  activeProvincePoint?: string[];
  fillColor?: string;
  fillSelectedColor?: string;
  strokeColor?: string;
};

const CubanMapByIconContainer = styled('div')<CubanMapByIconProps>(({ theme, fillSelectedColor }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  svg: {
    width: '100%',
    height: 'auto',
    // maxWidth: 1200,
  },
  '.province-fill': {
    fill: fillSelectedColor || theme.palette.primary.main,
  },
  '.point-4': {
    fill: theme.palette.primary.dark,
  },
  '.point-1': {
    fill: theme.palette.background.paper,
  },
}));

const SvgCubanMapByIcon = ({
  selectedProvincesIds,
  activeProvincePoint,
  fillColor,
  fillSelectedColor,
  strokeColor,
}: CubanMapByIconProps) => {
  const provincePoint = useMemo(() => gs.filter((g) => activeProvincePoint?.includes(g.id)), [activeProvincePoint, gs]);

  return (
    <CubanMapByIconContainer fillSelectedColor={fillSelectedColor}>
      <svg fill={FILL_COLOR} viewBox='0 0 839.68 301.06'>
        {paths.map((path) => (
          <a key={path.id}>
            <path
              d={path.d}
              key={path.id}
              id={path.id}
              className={classNames({ 'province-fill': selectedProvincesIds?.includes(path.id) })}
              name={path.name}
              fill={fillColor || FILL_COLOR}
              stroke={strokeColor || STROKE_COLOR}
            />
            <title> {path.name} </title>
          </a>
        ))}
        {provincePoint.map((g) => (
          <g key={g.id} id={g.id} data-name={g.id}>
            <path id='subtraction' className='point-4' data-name='Subtraction' d={g.d} />
            <ellipse id='ellipse' className='point-1' data-name='Ellipse' cx={g.cx} cy={g.cy} rx='6.07' ry='5.88' />
          </g>
        ))}
      </svg>
    </CubanMapByIconContainer>
  );
};
export default memo(SvgCubanMapByIcon);
