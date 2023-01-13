import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/catalogue/ItemListContainer';
import CartWidget from './components/navBar/CartWidget';
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';
import Footer from './components/Footer';
import ItemDetailContainer from './components/productDetail/ItemDetailContainer';
import { CartContextProvider } from './components/cart/CartContext';
import CartView, { ThemeProvider } from './components/cart/CartView';
import Checkout from './components/cart/Checkout';
import Signin from './components/navBar/Signin';
import Registration from './components/navBar/Registration';

function App() {
  return (
    <CartContextProvider>
      <ThemeProvider>
        <BrowserRouter>
          <NavBar>
            <CartWidget/>
          </NavBar>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/registration' element={<Registration/>}/>
          </Routes>
          <CartView/>
          <Footer/>
        </BrowserRouter>
      </ThemeProvider>
    </CartContextProvider>
  );
}

export default App;
