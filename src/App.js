import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import AllCollections from './pages/AllCollections';
import PageNotFound from './components/Utilities/PageNotFound';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/Utilities/Layout';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/productdetails/:id' element={<ProductDetails />} />
            <Route path='/allcollections' element={<AllCollections />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </>

  );
}

export default App;
