
function Cart({ cart, setCart }) {
  function removeItem(id) {
    const updatedCart = cart.filter(
      (product) => product.id !== id
    );

    setCart(updatedCart);
  }

  return (
    <main className="main-content">
      <h1>My Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-container">
          {cart.map((product, index) => (
            <div
              className="cart-item"
              key={`${product.id}-${index}`}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
              />

              <div className="cart-item-info">
                <h2>{product.title}</h2>

                <p>
                  Price: ${product.price}
                </p>

                <button className="buy-button">
                  Buy
                </button>

                <button
                  className="remove-button"
                  onClick={() => removeItem(product.id)}
                >
                  Remove item
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default Cart;

