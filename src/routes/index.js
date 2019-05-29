import Homepage from '../views/Homepage';
import signUp from '../views/signUp';
import signIn from '../views/signIn';
import profile from '../views/profile';
import AddChild from '../views/AddChild'

const routes = [
  {
    path: '/',
    component: Homepage,
  },
  {
    path: '/register',
    component: signUp,
  },
  {
    path: '/signIn',
    component: signIn,
  },
  {
    path: '/profile',
    component: profile,
  },
  {
    path: '/add-child',
    component: AddChild,
  },
];

export default routes;
