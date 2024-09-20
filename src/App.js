import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Brochures from './pages/Brochures';
import Certificate from './pages/Certificate';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';

function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/certificate' element={<Certificate/>}/>
        <Route path='/brochures' element={<Brochures/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/productdetails' element={<ProductDetails />}/>
      </Routes>
    </>
  );
}

export default App;
