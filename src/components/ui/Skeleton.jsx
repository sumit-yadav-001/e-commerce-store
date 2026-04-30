const Skeleton = ({ className = "", type = "rect" }) => {
  const baseClass = "animate-pulse bg-gray-200";
  
  if (type === "circle") {
    return <div className={`rounded-full ${baseClass} ${className}`} />;
  }
  
  if (type === "text") {
    return <div className={`h-4 rounded ${baseClass} ${className}`} />;
  }

  return <div className={`rounded-xl ${baseClass} ${className}`} />;
};

export default Skeleton;
