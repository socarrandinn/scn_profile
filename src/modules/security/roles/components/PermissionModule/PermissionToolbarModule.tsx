import { AppBar, Box, Button, Checkbox, Container, FormControlLabel, FormGroup, Toolbar } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface Props {
  modules: string[];
  selectedBoxModules: string[];
  setSelectedBoxModules: (modules: string[] | ((prevModules: string[]) => string[])) => void;
  permissionsChanged?: boolean;
  handleSavePermissions?: () => void;
}

const PermissionToolbarModule = ({
  modules,
  selectedBoxModules,
  setSelectedBoxModules,
  permissionsChanged,
  handleSavePermissions,
}: Props) => {
  const { t } = useTranslation('role');

  const handleCheckboxChange = (module: string) => {
    setSelectedBoxModules((prevSelectedModules: string[]) => {
      if (prevSelectedModules.includes(module)) {
        return prevSelectedModules.filter((m) => m !== module);
      } else {
        return [...prevSelectedModules, module];
      }
    });
  };

  return (
    <AppBar position='static' sx={{ mb: 4, bgcolor: 'background.paper' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <FormGroup sx={{ display: 'flex', flexDirection: 'row', color: 'black' }}>
              {modules.map((module) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedBoxModules.includes(module)}
                      onChange={() => {
                        handleCheckboxChange(module);
                      }}
                    />
                  }
                  label={t(`${module}`)}
                  key={module}
                />
              ))}
            </FormGroup>
          </Box>
          <Button
            disabled={!permissionsChanged}
            sx={{ flexGrow: 0 }}
            variant={'outlined'}
            color={'primary'}
            onClick={handleSavePermissions}
          >
            {t('savePermissions')}
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default PermissionToolbarModule;
