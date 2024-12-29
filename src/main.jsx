import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

// Define the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      {
        path: '/',
        element: <Shop />,
      },
      {
        path: '/mens',
        element: <ShopCategory banner={men_banner} category="men" />,
      },
      {
        path: '/womens',
        element: <ShopCategory banner={women_banner} category="women" />,
      },
      {
        path: '/kids',
        element: <ShopCategory  banner={kid_banner} category="kid" />,
      },
      {
        path: '/product',
        element: <Product />,
        children: [
          {
            path: '/product/:productId',
            element: <Product />,
          },
        ],
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/login',
        element: <LoginSignup />,
      },
    ],
  },
]);

// Render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      
    </RouterProvider>
  </StrictMode>
);
