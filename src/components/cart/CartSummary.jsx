const CartSummary = ({ total }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm h-fit">

      <h2 className="text-lg font-semibold mb-4">
        Order Summary
      </h2>

      <div className="space-y-2 text-sm">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${total}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>${total}</span>
        </div>

      </div>

      <button className="w-full mt-5 bg-black text-white py-2 rounded-lg">
        Checkout
      </button>

    </div>
  );
};

export default CartSummary;