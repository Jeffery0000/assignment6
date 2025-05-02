import './CartView.css';
import Header from '../components/Header';

function CartView() {
  return (
    <div className="cart">
      <Header />
      <div className="cart-container">
        {/* Cart content will go here */}
      </div>
    </div>
  );
}

export default CartView;