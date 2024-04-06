import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import App from './App';
import PlaygroundPage from './pages/PlaygroundPage';
import RegisterPage from './pages/RegisterPage';
import RegisterFormPage from './pages/RegisterFormPage';
import RegisterVerfiyPage from './pages/RegisterVerfiyPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/register/verify',
        element: <RegisterVerfiyPage />,
      },
      {
        path: '/register/:letterId',
        element: <RegisterFormPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/playground',
        element: <PlaygroundPage />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
