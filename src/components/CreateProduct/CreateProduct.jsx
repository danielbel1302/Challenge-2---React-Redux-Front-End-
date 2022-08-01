import React from "react";
import { createProduct } from "../../redux/actions";
import * as ReactRedux from "react-redux";

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen.
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const CreateProduct = () => {
  const [product, setProduct] = React.useState({
    name: "",
    price: 0,
    description: "",
    stock: 0,
  });
  const dispatch = ReactRedux.useDispatch();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(createProduct(product));
      }}
    >
      <label>Name: </label>
      <input
        name="name"
        onChange={(e) =>
          setProduct({ ...product, [e.target.name]: e.target.value })
        }
      />
      <label>Price: </label>
      <input
        type="number"
        name="price"
        onChange={(e) =>
          setProduct({ ...product, [e.target.name]: e.target.value })
        }
      />
      <label>Description: </label>
      <textarea
        name="description"
        onChange={(e) =>
          setProduct({ ...product, [e.target.name]: e.target.value })
        }
      />
      <label>Stock: </label>
      <input
        type="number"
        name="stock"
        onChange={(e) =>
          setProduct({ ...product, [e.target.name]: e.target.value })
        }
      />
      <button type="submit">Create Product</button>
    </form>
  );
};

export default CreateProduct;
