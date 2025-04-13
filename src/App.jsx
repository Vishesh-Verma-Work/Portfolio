import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';
import Footer from './components/Footer';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Landing />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
