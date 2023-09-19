import './App.css';
import Header from './Components/Header';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotal } from './App/feacture/cartSlice';
import { useEffect } from 'react';
function App() {
  const {ArrayItems} = useSelector(state => state.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculateTotal())
  }, [ArrayItems])
  
  return (
    <>
    <Router>
      <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    </Router>
    
    
    </>
  );
}

export default App;
