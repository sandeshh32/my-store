
import { useState } from "react";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  async function addProduct() { 
    const response = await fetch(
      "https://dummyjson.com/products/add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          price: Number(price),
        }),
      }
    );

    const data = await response.json();

    console.log(data);
  }

  return (
    <main className="main-content">
      <h1>Add Product</h1>

      <input
        type="text"
        placeholder="Product name"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />

      <button onClick={addProduct}>
        Add Product
      </button>
    </main>
  );
}

export default AddProduct;
