const OrderTabs = () => {
  return (
    <div className="flex gap-2">
      <button className="px-3 py-1 bg-black text-white rounded-full text-sm">
        Ongoing
      </button>
      <button className="px-3 py-1 border rounded-full text-sm">
        Completed
      </button>
    </div>
  );
};

export default OrderTabs;