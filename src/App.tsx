import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayput from './pages/RootLayput';
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import AppProvider from './context/Context';
import SingleCocktail from './pages/SingleCocktail';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayput />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        { 
          path: '/cocktail/:id', 
          element: <SingleCocktail /> 
        },
        { path: '*', element: <Error /> },
      ],
    },
  ]);

  return (
    <>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </>
  );
}

export default App;
