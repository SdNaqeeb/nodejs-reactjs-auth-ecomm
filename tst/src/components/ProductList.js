import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/product-list");
    result = await result.json();
    setProducts(result);
  };
  
  const deleteProduct=async (id)=>{
    
    let result=await fetch(`http://localhost:5000/product/${id}`,{
      method:"Delete"
    });
    result=await result.json()
    console.warn(result)
    if(result){
      getProducts()
    }
  }
  return (
    <div className="list">
      <h3>Product List</h3>
      <ul>
        <li>S. No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operate</li>
      </ul>
      {
        products.map((item,index)=><ul key={item._id}>
        <li>{index+1}</li>
        <li>{item.name}</li>
        <li>{item.price}</li>
        <li>{item.category}</li>
        <li><button onClick={()=>{deleteProduct(item._id)}} className="dad">delete</button></li>
      </ul>)
      }
    </div>
  );
};

export default ProductList;
