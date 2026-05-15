import { useEffect, useState } from "react";

import { getProducts } from "../api/productApi";

function ProductApi() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {

      const data = await getProducts();

      setProducts(data);

    };

    fetchProducts();

  }, []);

  return (

    <div style={{ padding: "40px" }}>

      <h1>API Products</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
      >

        {products.slice(0, 8).map((product) => (

          <div
            key={product.id}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "20px",
            }}
          >

            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "contain",
              }}
            />

            <h3>{product.title}</h3>

            <p>${product.price}</p>

          </div>

        ))}

      </div>

    </div>

  );
}

export default ProductApi;