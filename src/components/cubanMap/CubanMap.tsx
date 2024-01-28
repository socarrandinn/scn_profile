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
      <svg fill={FILL_COLOR} viewBox='0 0 400 400' height='172px' width='500px' stroke={STROKE_COLOR}>
        {provincePaths.map((path) => (
          <path
            key={path.id}
            d={path.d}
            id={path.id}
            className={classNames({ 'province-fill': selectedProvinceMap[path.id] })}
            name={path.name}
            fill={fillColor || FILL_COLOR}
            stroke={strokeColor || STROKE_COLOR}
          />
        ))}
      </svg>
    </CubanMapContainer>
  );
};
export default memo(SvgCubanMap);
