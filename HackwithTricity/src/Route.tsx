import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import PlantDetails from './pages/PlantDetails';
import Collection from './pages/Collection';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
export const router = createBrowserRouter([
  {
    path: '/',
    element:<Home/>,
    },
  {
	path: '/login',
	element:<Login  />,
  },
  {
    path: '/register',
    element:<Register  />,
    },
    {
      path:"/plant/:id",
      element:<PlantDetails />,
      },
       {
      path:"collection",
      element:<Collection />,
      },
       {
      path:"/explore",
      element:<Explore />,
      },
       {
      path:"/profile",
      element:<Profile/>,
      },
]);
