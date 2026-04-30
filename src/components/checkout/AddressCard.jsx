const AddressCard = ({ title, desc, selected }) => {
  return (
    <div className={`p-4 border rounded-xl flex justify-between ${selected ? "border-black" : ""}`}>
      <div>
        <p className="font-medium text-sm">{title}</p>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>
      <input type="radio" checked={selected} readOnly />
    </div>
  );
};

export default AddressCard;