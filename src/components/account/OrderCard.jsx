const OrderCard = () => {
  return (
    <div className="flex gap-3 p-3 border rounded-xl">

      <div className="w-16 h-16 bg-gray-200 rounded"></div>

      <div className="flex-1">
        <p className="text-sm font-medium">Regular Fit Shirt</p>
        <p className="text-xs text-gray-500">$120</p>
        <button className="text-xs mt-1 text-blue-500">
          Track Order
        </button>
      </div>

    </div>
  );
};

export default OrderCard;