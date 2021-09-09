import { addUserRoute } from '../Features/Admin/Users/Add User/route';
import { loginRoute, signUpRoute, resetPasswordRoute, forgetPasswordRoute } from '../Features/Auth/route';
import { dashboardRoute } from '../Features/Dashboard/route';
import { homeRoute } from '../Features/Home';
import { profileRoute } from '../Features/Profile';

const routeConfig = {
  auth: [loginRoute, homeRoute, signUpRoute, resetPasswordRoute, resetPasswordRoute, forgetPasswordRoute, addUserRoute],
  orderPlacer: [dashboardRoute],
  officeBoy: [],
  common: [profileRoute, resetPasswordRoute],
};

export default routeConfig;
