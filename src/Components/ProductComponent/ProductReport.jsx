import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { displayAllProducts, deleteAProduct } from "../../Services/ProductService";
import "../../DisplayView.css";
import {getRole} from '../../Services/LoginService';
const ProductReport = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [role,setRole]=useState('');
  let[flag,setFlag]=useState(true);
  

  const setProductData=()=>{
    displayAllProducts().then((response)=>{
        setProducts(response.data);
    }).catch(error=>{
        alert('Error Occured while loading data'+error)
    })
  }


  const setRoleData=()=>{
    getRole().then((response)=>{
        setRole(response.data)
    })
  }
  /*useEffect(() => {
    loadProducts();
  }, []);*/

  useEffect(() => {
    setRoleData();
    setProductData();
  }, []);


  const removeProduct=(id)=>{
    deleteAProduct(id).then(res=>{
        let remainProducts=products.filter((product)=>(product.productId!==id));
        setProducts(remainProducts);
    })
    navigate('/product-repo')
  }

  /*const loadProducts = () => {
    displayAllProducts().then((response) => {
      setProducts(response.data);
    });
  };
*/
  const returnBack = () => {
    if(role==='Admin'){
        navigate('/admin-menu')
    }
    else if(role==='Manager'){
        navigate('/manager-menu')
    }
  };

return(
  <div className="text-center">
   <div>
    {role==='Admin'? <h2 className="text-center">Admin Product List</h2>:<h2 className="text-center">Manager Product List</h2>};
    <div className = "row">
      <table className = "table table-striped table-bordered">
       <thead>
        <tr>
          <th> Product Id</th>
          <th>SKU</th>
          <th> Product Name</th>
          <th> Vendor Id</th>
          <th> Purchase Price</th>
          <th> Sales Price</th>
          <th>Stock</th>
          <th>Reorder Level</th>
          <th>Stock Status</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
         {
           products.map((product, index) => (
        <tr key = {product.productId}>
        <td> {product.productId} </td>
        <td> {product.skuId} </td>    
        <td> {product.productName} </td>
        <td> {product.vendorId} </td>  
        <td> {product.purchasePrice}</td>
        <td> {product.salesPrice}</td>
        <td> {product.stock}</td>
        <td> {product.reorderLevel}</td>
        <td>{product.status===true ? <span  style={{textAlign: "center",color:"blue"}}>Permited to Issue</span>: <span style={{textAlign: "center",color:"red"}}>Reorder Level Reached</span> }</td>
        <td>
          {product.status===true? flag=false:flag=true}
          <Link to={`/edit-stock/${product.productId}/2`}><button style={{marginLeft: "10px"}} className="btn btn-warning" disabled={flag}>Issue</button></Link>
          <Link to={`/edit-stock/${product.productId}/1`}><button style={{marginLeft: "10px"}} className="btn btn-success">Purchase </button></Link>
          {role==='Admin'? <span><Link to={`/edit-price/${product.productId}`}><button style={{marginLeft: "10px"}}  className="btn btn-secondary">Price Update</button></Link><button style={{marginLeft: "10px"}} onClick={()=>removeProduct(product.productId)} className="btn btn-danger">Delete</button></span>
      :<span></span>
        };
       </td>
     </tr>                                        
     ))
     }                        
   </tbody>
   </table>  
   <div>
     <button style={{marginLeft: "10px"}} onClick={()=>returnBack()} className="btn btn-danger">Return</button>
    </div>        
  </div>
 </div>
</div>
);
 

 
};

export default ProductReport;