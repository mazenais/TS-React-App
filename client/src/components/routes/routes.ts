import IRoute from '../../interfaces/route';
import AllUsersGrid from '../screens/AllUsersGrid';
import MyProfile from '../screens/MyProfile';
import Register from '../auth/Register';
import Login from '../auth/Login';

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home',
        component: AllUsersGrid,
        exact: true
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        exact: true 
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        exact: true 
    },
    {
        path: '/user/:id"',
        name: 'My Profile',
        component: MyProfile,
        exact: true 
    }
]

export default routes;