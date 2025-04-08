import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, FormTextField, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { Box, Button, Chip, IconButton, InputAdornment, Menu, MenuItem, MenuProps, Stack, styled, Typography } from '@mui/material';
import { INCIDENCE_ACTION_ENUM, INCIDENCE_ACTIONS_VALUES } from '../../constants/incidence-action.enum';
import { Add, Close } from '@mui/icons-material';
import useIncidenceAddActions from '../../hooks/useIncidenceAddActions';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 5,
    minWidth: 200,
    marginTop: 4,
    boxShadow: '0px 0px 11.3px 5px rgba(43, 52, 69, 0.08)',
    '& .MuiMenu-list': {
      padding: '8px 0',
    },
    '& .MuiMenuItem-root': {
      '&:hover': {
        borderLeft: `5px solid ${theme.palette.primary.main}`,
        backgroundColor: '#F1F8EB',
      },
      '&:active': {
        backgroundColor: '#F1F8EB',
        borderLeft: `5px solid ${theme.palette.primary.main}`,
      },
    },
    ...theme.applyStyles('dark', {
      color: theme.palette.grey[300],
    }),
  },
}));

const IncidenceActions = ({ id }: { id: string }) => {
  const { t } = useTranslation('incidence');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [selectedAction, setSelectedAction] = useState<INCIDENCE_ACTION_ENUM | null>(null);

  const { onSubmit, control, watch, setValue, error, isLoading, reset } = useIncidenceAddActions(id, { actionType: selectedAction as INCIDENCE_ACTION_ENUM });

  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
    reset()
  }, [reset]);

  const handleSelectAction = useCallback((action: INCIDENCE_ACTION_ENUM) => {
    setSelectedAction(action);
    setAnchorEl(null);
  }, []);

  const handleDeleteAction = useCallback(() => {
    setSelectedAction(null);
    reset();
  }, [reset]);

  return (
    <Form onSubmit={onSubmit} control={control} isLoading={isLoading} setValue={setValue} watch={watch} id={'form'}>
      <HandlerError error={error} />
      <FormTextField
        name='note'
        label={t('common:optionalNote')}
        placeholder={t('common:addNote')}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{
                  backgroundColor: 'primary.main',
                  '&:hover': { backgroundColor: 'primary.dark' },
                }}
              >
                <Add sx={{ color: 'white' }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {selectedAction && (
        <>
          <Box mt={2}>
            <Chip
              label={<Typography sx={{ mr: 1.5 }}>{t(`actions.${selectedAction}`)}</Typography>}
              onDelete={handleDeleteAction}
              deleteIcon={
                <IconButton
                  size="small"
                  onClick={handleDeleteAction}
                  sx={{ backgroundColor: '#D4D6DB', width: 24, height: 24 }}
                >
                  <Close fontSize="small" sx={{ color: '#888A92' }} />
                </IconButton>
              }
            />
          </Box>

          <Stack gap={1} flexDirection={'row'} sx={{ justifyContent: 'end', mt: 2 }}>
            <Button variant='grey' onClick={handleDeleteAction}>
              {t('common:cancel')}
            </Button>
            <LoadingButton
              loading={isLoading}
              variant='contained'
              type='submit'
              form='form'
            >
              {t('common:save')}
            </LoadingButton>
          </Stack>
        </>
      )}

      <StyledMenu
        id='incidence-actions'
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        {INCIDENCE_ACTIONS_VALUES.map((type: INCIDENCE_ACTION_ENUM) => (
          <MenuItem key={type} value={type} onClick={() => handleSelectAction(type)}>
            {t(`actions.${type}`)}
          </MenuItem>
        ))}
      </StyledMenu>
    </Form>
  );
};

export default memo(IncidenceActions);
