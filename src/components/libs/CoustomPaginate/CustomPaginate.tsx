import { Stack, TablePagination } from '@mui/material';
import { ChangeEvent, memo } from 'react';
import { useTranslation } from 'react-i18next';

type CustomPaginateProps = {
  total: number;
  isLoading: boolean;
  onPageChange: (event: unknown, newPage: number) => void;
  onRowsPerPageChange: (event: ChangeEvent<HTMLInputElement>) => void;
  page: number;
  rowsPerPage: number;
  rowsPerPageOptions?: number[];
};

const CustomPaginate = ({
  total,
  isLoading,
  onPageChange,
  onRowsPerPageChange,
  page,
  rowsPerPage,
  rowsPerPageOptions,
}: CustomPaginateProps) => {
  const { t } = useTranslation('common');
  return (
    <>
      {isLoading ? undefined : (
        <Stack
          justifyContent={'center'}
          width={'100%'}
          alignItems={'center'}
          sx={(theme) => ({
            // borderTop: `1px solid ${theme.palette.divider}`,
            paddingTop: 1,
            marginTop: 'auto',
          })}
        >
          <TablePagination
            rowsPerPageOptions={rowsPerPageOptions ?? [3, 5, 10, 25]}
            labelRowsPerPage={t('pages')}
            component='div'
            count={total || 0}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={onPageChange}
            onRowsPerPageChange={onRowsPerPageChange}
          />
        </Stack>
      )}
    </>
  );
};

export default memo(CustomPaginate);
