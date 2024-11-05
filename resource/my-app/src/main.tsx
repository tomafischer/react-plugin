import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SecondRoute from './routes/second-route.tsx';

const router = createBrowserRouter([
  {
    path: '/plugins/react-apm-git/resource/my-app/dist/',
    element: <App />,
  },{
    path: '/plugins/react-apm-git/resource/my-app/dist/second-route',
    element: <SecondRoute />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
