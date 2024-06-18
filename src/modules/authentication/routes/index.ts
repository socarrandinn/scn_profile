import { Login, SignUp, Verify, RecoveryInit, RecoveryFinish } from 'modules/authentication/pages';
import InviteSignUp from '../pages/InviteSignUp';

const routes = {
  Login: {
    path: '/login',
    component: Login,
  },
  SignUp: {
    path: '/signup',
    component: SignUp,
  },
  Verify: {
    path: '/verify/:key',
    component: Verify,
  },
  forgotPassword: {
    path: '/reset-password/init',
    component: RecoveryInit,
  },
  forgotPasswordFinish: {
    path: '/reset_password/:key',
    component: RecoveryFinish,
  },
  signUpInvite: {
    path: '/user-invite/:key',
    component: InviteSignUp,
  },
  // Rest: {
  //   path: "*",
  //   authenticated: true, //this is to save the location state in order to restore it after login
  //   component: () => "path",
  // },
};

export default routes;
