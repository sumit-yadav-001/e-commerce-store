const TrackOrder = () => {
  const steps = [
    { title: "Order Placed", time: "12 Jan, 10:00 AM", done: true },
    { title: "Packed", time: "12 Jan, 2:00 PM", done: true },
    { title: "Shipped", time: "13 Jan, 9:00 AM", done: true },
    { title: "Out for Delivery", time: "Today, 8:00 AM", done: false },
    { title: "Delivered", time: "Expected Today", done: false },
  ];

  return (
    <div className="p-4 max-w-xl mx-auto space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-xl font-bold">Track Order</h1>
        <p className="text-sm text-gray-500">
          Order #ORD123456 • Arriving Today
        </p>
      </div>

      {/* Map */}
      <div className="h-44 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 text-sm shadow-sm">
        Live Map Tracking
      </div>

      {/* Status Badge */}
      <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl">
        <p className="text-sm font-medium">Out for Delivery 🚚</p>
        <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
          On Time
        </span>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-xl p-4 shadow-sm space-y-5">

        {steps.map((step, index) => {
          const isActive = !step.done && steps[index - 1]?.done;

          return (
            <div key={index} className="flex gap-4">

              {/* Timeline Indicator */}
              <div className="flex flex-col items-center">

                <div
                  className={`w-4 h-4 rounded-full border-2 ${
                    step.done
                      ? "bg-black border-black"
                      : isActive
                      ? "border-black"
                      : "border-gray-300"
                  }`}
                />

                {index !== steps.length - 1 && (
                  <div
                    className={`w-[2px] flex-1 ${
                      step.done ? "bg-black" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>

              {/* Content */}
              <div>
                <p
                  className={`text-sm font-medium ${
                    step.done
                      ? "text-black"
                      : isActive
                      ? "text-black"
                      : "text-gray-400"
                  }`}
                >
                  {step.title}
                </p>
                <p className="text-xs text-gray-500">{step.time}</p>
              </div>
            </div>
          );
        })}

      </div>

      {/* Delivery Partner */}
      <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">

        {/* Avatar */}
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>

        {/* Info */}
        <div className="flex-1">
          <p className="text-sm font-semibold">Raj Kumar</p>
          <p className="text-xs text-gray-500">Delivery Partner</p>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm border rounded-lg">
            Chat
          </button>
          <button className="px-3 py-1 text-sm bg-black text-white rounded-lg">
            Call
          </button>
        </div>

      </div>

    </div>
  );
};

export default TrackOrder;