import { Outlet, Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import AllCollections from './pages/AllCollections';
import Cart from './components/Cart/Cart';
import AppNavbar from './components/Utilities/AppNavbar';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route path='/' element={<Home />} />
        <Route path='/productdetails' element={<ProductDetails />} />
        <Route path='/allcollections' element={<AllCollections />} />
      </Route>
    )
  );

  return (
    <>
      <AppNavbar />
      <Cart placement="end" />
      <RouterProvider router={router} />
    </>
  );
}

const Root = () => {
  return <>
    <Outlet />
  </>
}

export default App;
