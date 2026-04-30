const QuantityControl = ({ qty }) => {
  return (
    <div className="flex items-center gap-2">

      <button className="w-7 h-7 bg-gray-200 rounded">
        -
      </button>

      <span className="text-sm">{qty}</span>

      <button className="w-7 h-7 bg-gray-200 rounded">
        +
      </button>

    </div>
  );
};

export default QuantityControl;