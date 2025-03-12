import { memo, useMemo } from 'react';
import { ISubordersByRegion } from '../../interfaces';
import { TagList } from '@dfl/mui-react-common';
type Props = {
  value: ISubordersByRegion[];
};

const DispatchStateListCell = ({ value }: Props) => {
  const states = useMemo(() => value?.map((st) => st.state), [value]);
  return <TagList value={states} limit={2} />;
};

export default memo(DispatchStateListCell);
