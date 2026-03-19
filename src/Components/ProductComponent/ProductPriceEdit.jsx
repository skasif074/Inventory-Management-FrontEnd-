import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { getProductById, editProductPrice } from '../../Services/ProductService';
import '../../DisplayView.css';

const ProductPriceEdit = () => {
  const param = useParams();
  let naviage = useNavigate();
  const [newPrice, setNewPrice] = useState(0.0);
  const [product, setProduct] = useState({
    productId: "",
    productName: "",
    skuId: "",
    purchasePrice: 0.0,
    salesPrice: 0.0,
    reorderLevel: 0.0,
    stock: 0.0,
    vendorId: "",
    status: true
  });
  const [flag, setFlag] = useState(false);
  //const [isProductFound, setIsProductFound] = useState(false);
  //const [errors, setErrors] = useState({});
  //const [searchError, setSearchError] = useState("");
  let navigate = useNavigate();

  const setProductData = () => {
    getProductById(param.pid).then(response => {
      setProduct(response.data);
    });
  }

  useEffect(() => {
    setFlag = false;
    setProductData();
  }, []);

  const returnBack = () => {
    navigate('/product-repo');
  }

  const onChangeHandler = (event) => {
    setNewPrice(event.target.value);
  }

  const updatePrice = (event) => {
    event.preventDefault();
    product.purchasePrice = newPrice;
    editProductPrice(product).then(response => {
      setFlag(true);
    });
  }

  return (
    <div>
      <br />
      <div className='card col-md-6' offset-md-3>
        <h3 className='text-center'>
          EDIT PRODUCT PRICE
        </h3>
        
        <div className='row'>
          <label>Product Id: &nbsp; {product.productId}</label>
        </div>

        <div className='row'>
          <label>SKU Id: &nbsp; {product.skuId}</label>
        </div>

        <div className='row'>
          <label>Product Name: &nbsp; {product.productName}</label>
        </div>

        <div className='row'>
          <label>Purchase Price: &nbsp; {product.purchasePrice}</label>
        </div>

        <div className='row'>
          <label>Sales Price: &nbsp; {product.salesPrice}</label>
        </div>

        <div className='row'>
          <label>Re-orderLevel: &nbsp; {product.reorderLevel}</label>
        </div>

        <div className='row'>
          <label>Stock: &nbsp; {product.stock}</label>
        </div>

        <div className='row'>
          <label>Vendor: &nbsp; {product.vendorId}</label>
        </div>

        <div className="form-group">
          <label>Enter new Purchase Price: </label>
          <input placeholder="new price" name="newPrice" className="form-control" value={newPrice} onChange={onChangeHandler} />
        </div>

        <div>
          {flag && <p style={{ color: "blue" }}>Product Price Updated... </p>}
        </div>
        
        <div>
          <button className="btn btn-success" onClick={updatePrice}>Save</button>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <button className="btn btn-warning" onClick={returnBack}>Return</button>                    
        </div>
      </div>  
    </div>
  );
}

export default ProductPriceEdit;