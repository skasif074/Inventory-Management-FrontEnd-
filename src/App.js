
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/LoginComponent/LoginPage';
import RegisterUser from './Components/LoginComponent/RegisterUser';
import AdminMenu from './Components/LoginComponent/AdminMenu';
import ManagerMenu from './Components/LoginComponent/ManagerMenu';
import VendorMenu from './Components/LoginComponent/VendorMenu';
import SKUEntry from './Components/SKUComponent/SKUEntry';
import SKUReport from './Components/SKUComponent/SKUReport';
import ProductEntry from './Components/ProductComponent/ProductEntry';
import ProductReport from './Components/ProductComponent/ProductReport';
import ProductPriceEdit from './Components/ProductComponent/ProductReport';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<LoginPage/>}></Route>
            <Route path = "/register" element = {<RegisterUser/>}></Route>
            <Route path = "/admin-menu" element = {<AdminMenu/>}></Route>
            <Route path = "/manager-menu" element = {<ManagerMenu/>}></Route>
            <Route path = "/vendor-menu" element = {<VendorMenu/>}></Route>
            <Route path = "/sku-entry" element = {<SKUEntry/>}></Route>
            <Route path = "/sku-list" element = {<SKUReport/>}></Route>
            <Route path = "/product-entry" element={<ProductEntry/>}></Route>
            <Route path = "/product-list" element={<ProductReport/>}></Route>
            <Route path = "/product-repo" element={<ProductReport/>}></Route>
            <Route path = "/edit-price/:pid" element={<ProductPriceEdit/>}></Route>
          </Routes>
          
      </BrowserRouter>
    </div>
  );
}

export default App;
