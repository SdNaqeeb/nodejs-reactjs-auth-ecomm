import { BrowserRouter,Route,Routes } from "react-router-dom";
import Nav from './components/Nav';
import './App.css';
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import PrivateComp from "./components/PrivateComp";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Nav />
     <Routes>
     <Route element={<PrivateComp />} >
     <Route path="/" element={<ProductList />} />
     <Route path="/add" element={<AddProduct />} />
     <Route path="/update" element=<h1>update components</h1> />
     <Route path="/logout" element=<h1>logout</h1> />
     <Route path="/profile" element=<h1>profile components</h1> />
     </Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
     
     </Routes>
     </BrowserRouter>
     <Footer />
    </div>
  );
}

export default App;
