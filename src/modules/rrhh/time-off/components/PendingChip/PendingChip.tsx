import { memo } from 'react'
import { Chip, Typography } from '@mui/material';
import { useCountPendingTimeOffRequest } from 'modules/rrhh/time-off/hooks/useCountPendingTimeOffRequest';

const PendingChip = () => {
  const { isLoading, data } = useCountPendingTimeOffRequest()
  if (isLoading || !data) return <></>
  return (
        <Chip color='primary'
              label={
                  <Typography
                      sx={{
                        fontSize: '10px',
                        fontWeight: '600'
                      }}
                  >
                      {data}
                  </Typography>
              }
              size='small'
        />
  )
}

export default memo(PendingChip);
