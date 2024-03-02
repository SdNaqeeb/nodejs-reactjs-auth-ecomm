import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
    const [error,setError]=useState(false)

  const handleClick = async () => {
    
    if(!name || !price || !category || !company){
        setError(true)
        return false;
    }


    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:5000/add", {
      method: "post",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result)
    console.warn(userId)
  };

  return (
    <div>
      <h1>Add Product</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter product name"
        className="inputbox"
      />
      {error && !name?<span>Enter valid name!</span>:<></>}
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        type="text"
        placeholder="Enter product price"
        className="inputbox"
      />
       {error && !price?<span>Enter valid price!</span>:<></>}
      <input
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        type="text"
        placeholder="Enter product category"
        className="inputbox"
      />
       {error && !category?<span>Enter valid category!</span>:<></>}
      <input
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        type="text"
        placeholder="Enter product company"
        className="inputbox"
      />
      {error && !company?<span>Enter valid company!</span>:<></>}
      <button onClick={handleClick} className="appButton">
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
