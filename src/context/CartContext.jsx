import { createContext, useState, useEffect } from "react";

export const CartCtx = createContext();

const CartContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Funcion para agregar productos al carrito
  const addToCart = (idProduct, selectedQuantity) => {
    const findProduct = products.find((product) => product.id === idProduct);

    const productInCart = cart.find((product) => product.id === idProduct);

    if (productInCart) {
      const updatedCart = cart.map((product) =>
        product.id === idProduct
          ? { ...product, selectedQuantity: product.selectedQuantity + selectedQuantity }
          : product
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...findProduct, id: idProduct, selectedQuantity }]);
    }
  };

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartCtx.Provider value={{ products, setProducts, cart, setCart, addToCart }}>
      {children}
    </CartCtx.Provider>
  );
};

export default CartContext;