import { useParams } from 'react-router';
import { IncidenceCard } from '../components/IncidenceCard';
import { useFindIncidences } from '../hooks/useFindIncidences';
import { IIncidence } from '../interfaces';
import { Grid } from '@mui/material';

const IncidenceOrderContainer = () => {
  const { id } = useParams();
  const { data } = useFindIncidences(id);

  if (!data?.data) return <></>;

  return (
    <Grid container rowSpacing={2} mb={2}>
      {data?.data?.map((incidence: IIncidence) =>
        <Grid item xs={12} key={incidence?._id}>
          <IncidenceCard data={incidence} />
        </Grid>
      )}
    </Grid>
  );
};

export default IncidenceOrderContainer;
