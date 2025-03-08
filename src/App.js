import './App.css';
import NavbarMenu from './components/NavbarMenu';
import ShowProducs from './components/ShowProducs';
import AddProduct from './components/AddProduct';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import ProductDetail from './components/ProductDetail';
import UpdateProduct from './components/UpdateProduct';


function App() {
  return (
    <div className="App">
      <Router>
        <NavbarMenu/>
        <Routes>
          <Route exact path="/" element={<ShowProducs/>}/>
          <Route exact path="/addProduct" element={<AddProduct/>}/>
          <Route exact path="/:id" element={<ProductDetail/>}/>
          <Route exact path="/:id/update" element={<UpdateProduct/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
