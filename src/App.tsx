import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
import { ApiClientService, DefaultTokenService } from '@dfl/react-security';
import Routes from 'routes';

ApiClientService.setup({
  TokenService: DefaultTokenService,
});

function App () {
  return <Routes />;
}

export default App;
