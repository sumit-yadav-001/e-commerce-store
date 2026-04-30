import QuantityControl from "./QuantityControl";

const CartItem = ({ item }) => {
  return (
    <div className="flex gap-4 bg-white p-4 rounded-xl shadow-sm">

      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg"
      />

      <div className="flex-1">

        <h2 className="text-sm font-semibold">
          {item.name}
        </h2>

        <p className="text-sm text-gray-500">
          ${item.price}
        </p>

        <div className="mt-2">
          <QuantityControl qty={item.qty} />
        </div>

      </div>

      <button className="text-red-500 text-sm">
        Remove
      </button>

    </div>
  );
};

export default CartItem;