import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ErrorPage from './components/ErrorPage.jsx';
import Contact, { getChat as loaderChat } from './components/componentChat/Contact.jsx';
import Chat from './components/componentChat/Chat.jsx';
import MyPage, { loaderHeader } from './components/MyPage/MyPage.jsx';
import PageEdit from './components/MyPage/Edit.jsx';
import Music from './components/MusicComponents/Music.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/contacts',
        element: <Contact />,
      },
      {
        path: '/contacts/:contactId',
        loader: loaderChat,
        element: <Chat />
      },
      {
        path: '/page/:contactId',
        loader: loaderHeader,
        element: <MyPage />,
      },
      {
        path: '/page/:contactId/edit',
        loader: loaderHeader,
        element: <PageEdit />,
      },
      {
        path: '/music',
        element: <Music/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
