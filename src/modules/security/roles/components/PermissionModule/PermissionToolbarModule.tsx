import { AppBar, Box, Button, Checkbox, Container, FormControlLabel, FormGroup, Toolbar } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface Props {
  sections: string[];
  selectedBoxModules: string[];
  setSelectedBoxModules: (modules: string[] | ((prevModules: string[]) => string[])) => void;
  permissionsChanged?: boolean;
  handleSavePermissions?: () => void;
}

const PermissionToolbarModule = ({
  sections,
  selectedBoxModules,
  setSelectedBoxModules,
  permissionsChanged,
  handleSavePermissions,
}: Props) => {
  const { t } = useTranslation('role');

  const handleCheckboxChange = (module: string) => {
    setSelectedBoxModules((prevSelectedSections: string[]) => {
      if (prevSelectedSections.includes(module)) {
        return prevSelectedSections.filter((m) => m !== module);
      } else {
        return [...prevSelectedSections, module];
      }
    });
  };

  return (
    <AppBar position='static' sx={{ mb: { xs: 1, md: 2 }, bgcolor: 'background.paper' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <FormGroup sx={{ display: 'flex', flexDirection: 'row', color: 'black' }}>
              {sections.map((section) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedBoxModules.includes(section)}
                      onChange={() => {
                        handleCheckboxChange(section);
                      }}
                    />
                  }
                  label={t(`${section}`)}
                  key={section}
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
