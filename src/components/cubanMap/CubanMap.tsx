import { useMemo, memo } from 'react';
import { styled } from '@mui/system';
import classNames from 'classnames';
import { provincePaths } from 'components/cubanMap/constant/provinces';

const FILL_COLOR = '#dcdcdc';
const STROKE_COLOR = '#000';

type CubanMapProps = {
  selectedProvincesIds?: string[];
  fillColor?: string;
  fillSelectedColor?: string;
  strokeColor?: string;
};

const CubanMapContainer = styled('div')<CubanMapProps>(({ theme, fillSelectedColor }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  svg: {
    width: '100%',
    height: 'auto',
    maxWidth: 600,
  },
  '.province-fill': {
    fill: fillSelectedColor || theme.palette.primary.main,
  },
}));

const SvgCubanMap = ({ selectedProvincesIds, fillColor, fillSelectedColor, strokeColor }: CubanMapProps) => {
  const selectedProvinceMap = useMemo(() => {
    const map: Record<string, boolean> = {};
    selectedProvincesIds?.forEach((province) => {
      map[province] = true;
    });
    return map;
  }, [selectedProvincesIds]);

  return (
    <CubanMapContainer fillSelectedColor={fillSelectedColor}>
      <svg fill={FILL_COLOR} viewBox='0 0 1050 400' height='172px' width='500px' stroke={STROKE_COLOR}>
        {provincePaths.map((path) => (
          <a key={path.id}>
            <path
              d={path.d}
              key={path.id}
              id={path.id}
              className={classNames({ 'province-fill': selectedProvinceMap[path.id] })}
              name={path.name}
              fill={fillColor || FILL_COLOR}
              stroke={strokeColor || STROKE_COLOR}
            />
            <title> {path.name} </title>
          </a>
        ))}
      </svg>
    </CubanMapContainer>
  );
};
export default memo(SvgCubanMap);
