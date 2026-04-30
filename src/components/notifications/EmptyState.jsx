const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-20">

      {/* ICON */}
      <div className="w-[64px] h-[64px] flex items-center justify-center mb-6">
        <span className="text-5xl">🔔</span>
      </div>

      {/* TITLE */}
      <h1 className="text-[#1A1A1A] text-[16px] font-semibold leading-[140%] mb-2">
        You haven’t gotten any notifications yet!
      </h1>

      {/* DESCRIPTION */}
      <p className="text-[#808080] text-[16px] font-normal leading-[140%] max-w-[252px]">
        We’ll alert you when something cool happens.
      </p>

    </div>
  );
};

export default EmptyState;