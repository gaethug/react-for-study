import { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://pickax.space/api/kmong/fruit/list")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setProducts(response.fruitList);
      });
  }, []);

  return (
    <div>
      <ul>
        {products.map((product) => {
          return <li key={product.id}>{product.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default ProductList;
