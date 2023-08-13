import logo from './logo.svg';
import styles from './App.css';
import { Outlet, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import AllCollections from './pages/AllCollections';
import Cart from './components/Cart/Cart';
import AppNavbar from './components/Utilities/AppNavbar';
import AppHeader from './components/Home/AppHeader';

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
