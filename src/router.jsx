import { createBrowserRouter } from 'react-router-dom';
import App from './routes/App';
import HomePage from './routes/HomePage';
import LoginPage from './routes/LoginPage';
import ProfilePage from './routes/ProfilePage';
import ChatPage from './routes/ChatPage';

export const Router = createBrowserRouter([
  {path: '/', element: <App />, children: [
    {index: true, element: <HomePage />},
    {path: '/profile', element: <ProfilePage />}
  ]},
  {path: '/login', element: <LoginPage />},
  {path: '/chat', element: <ChatPage />}
])