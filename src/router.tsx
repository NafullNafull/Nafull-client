import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import App from './App';
import PlaygroundPage from './pages/PlaygroundPage';
import RegisterPage from './pages/RegisterPage';
import RegisterFormPage from './pages/RegisterFormPage';
import RegisterVerfiyPage from './pages/RegisterVerfiyPage';
import SendPage from './pages/SendPage';
import SendCompletePage from './pages/SendCompletePage';
import LetterPage from './pages/LetterPage';
import { letterApi } from './api';
import MyPage from './pages/MyPage';

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
        path: '/send',
        element: <SendPage />,
      },
      {
        path: '/send/complete',
        element: <SendCompletePage />,
      },
      {
        path: '/mypage',
        element: <MyPage />,
      },
      {
        path: '/letter/:letterId',
        element: <LetterPage />,
        loader: async ({ params }) => {
          return letterApi.get(params.letterId!);
        },
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
