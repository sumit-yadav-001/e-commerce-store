const MenuItem = ({ title }) => {
  return (
    <div className="flex justify-between items-center p-4 border-b cursor-pointer hover:bg-gray-50">
      <p className="text-sm">{title}</p>
      <span>›</span>
    </div>
  );
};

export default MenuItem;