import React,{useState,useEffect} from 'react';
import {useNavigate,Link} from 'react-router-dom';
import {getAllSKUs,deleteSKUById} from "../../Services/SKUService";
import {getRole} from '../../Services/LoginService';
import '../../DisplayView.css';
 
const SKUReport = () => {

let navigate = useNavigate();

const [role,setRole] = useState("");
const [skuList,setSkuList] = useState([]);

const setRoleData = () => {
getRole().then((response)=>{
setRole(response.data);
});
}

const setSKURecords = () => {
getAllSKUs().then((response)=>{
setSkuList(response.data);
});
}

useEffect(()=>{
setRoleData();
setSKURecords();
},[]);

const returnBack = () => {

if(role==='Admin')
navigate('/admin-menu');

else if(role==='Manager')
navigate('/manager-menu');

};

const deleteSKU = (id) => {

deleteSKUById(id).then(res => {

let remainSkus = skuList.filter((sku)=>sku.skuId!==id);

setSkuList(remainSkus);

});

};

return(

<div className="table-background">

<div className="table-card">

<h2 className="table-title">

{role==='Admin' ? "Admin SKU List" : "Manager SKU List"}

</h2>

<hr/>

<div className="table-responsive">

<table className="table table-striped table-bordered text-center">

<thead>

<tr>

<th>No.</th>
<th>SKU Id</th>
<th>Description</th>
<th>Category</th>

{role==='Admin' && <th>Action</th>}

</tr>

</thead>

<tbody>

{
skuList.map((sku,index)=>(

<tr key={sku.skuId}>

<td>{index+1}</td>
<td>{sku.skuId}</td>
<td>{sku.skuDescription}</td>
<td>{sku.category}</td>

{role==='Admin' &&

<td>

<Link to={`/update-sku/${sku.skuId}`}>

<button className="btn btn-info btn-sm">
Update
</button>

</Link>

&nbsp;

<button
className="btn btn-danger btn-sm"
onClick={()=>deleteSKU(sku.skuId)}
>

Delete

</button>

</td>

}

</tr>

))
}

</tbody>

</table>

</div>

<div className="text-center mt-4">

<button
className="btn btn-success"
onClick={returnBack}
>

Return

</button>

</div>

</div>

</div>

);

};

export default SKUReport;