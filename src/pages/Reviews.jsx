import { useMemo, useState } from "react";

const reviews = [
  { id: 1, name: "Wade Warren", time: "6 days ago", rating: 4, comment: "The item is very good, my son likes it very much." },
  { id: 2, name: "Guy Hawkins", time: "1 week ago", rating: 4, comment: "Fast delivery and good product quality." },
  { id: 3, name: "Robert Fox", time: "2 weeks ago", rating: 3, comment: "Product is decent but could be better." },
];

export default function ReviewsPage() {

  /* ================= FILTER STATE ================= */
  const [filter, setFilter] = useState("relevant");

  /* ================= FILTER LOGIC ================= */
  const filteredReviews = useMemo(() => {
    if (filter === "positive") return reviews.filter(r => r.rating >= 4);
    if (filter === "negative") return reviews.filter(r => r.rating <= 3);
    return reviews;
  }, [filter]);

  /* ================= AVG (MAX 4.0) ================= */
  const avgRaw =
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  const avg = Math.min(avgRaw, 4.0);

  const Star = ({ filled }) => (
    <span className={`text-yellow-500 ${!filled && "text-gray-300"}`}>★</span>
  );

  const RatingBar = ({ star, value }) => (
    <div className="flex items-center gap-3 text-sm">

      <div className="flex items-center gap-1 w-14">
        <span>{star}</span>
        <span className="text-yellow-500">★</span>
      </div>

      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-black" style={{ width: `${value}%` }} />
      </div>

      <span className="text-xs text-gray-500 w-10 text-right">
        {value}%
      </span>

    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      {/* HEADER */}
      <div className="border-b pb-6 mb-6">

        <h1 className="text-2xl md:text-3xl font-bold">
          Reviews
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-3">

          {/* CAPPED AVG */}
          <span className="text-4xl md:text-5xl font-semibold text-black">
            {avg.toFixed(1)}
          </span>

          <div className="flex text-lg">
            {[1,2,3,4,5].map((s) => (
              <Star key={s} filled={s <= Math.round(avg)} />
            ))}
          </div>

          <span className="text-sm text-gray-500">
            1034 global ratings
          </span>

        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* LEFT - BREAKDOWN */}
        <div className="lg:col-span-3 space-y-4 lg:sticky lg:top-20 h-fit">

          <h3 className="font-semibold text-sm text-gray-700">
            Rating Breakdown
          </h3>

          <RatingBar star={5} value={80} />
          <RatingBar star={4} value={60} />
          <RatingBar star={3} value={30} />
          <RatingBar star={2} value={15} />
          <RatingBar star={1} value={10} />

        </div>

        {/* CENTER - REVIEWS */}
        <div className="lg:col-span-6 space-y-6">

          {/* FILTER */}
          <div className="flex gap-2 overflow-x-auto pb-2">

            <button
              onClick={() => setFilter("relevant")}
              className={`px-4 py-2 text-sm rounded-full whitespace-nowrap ${
                filter === "relevant" ? "bg-black text-white" : "border"
              }`}
            >
              Most Relevant
            </button>

            <button
              onClick={() => setFilter("positive")}
              className={`px-4 py-2 text-sm rounded-full whitespace-nowrap ${
                filter === "positive" ? "bg-green-600 text-white" : "border"
              }`}
            >
              Positive
            </button>

            <button
              onClick={() => setFilter("negative")}
              className={`px-4 py-2 text-sm rounded-full whitespace-nowrap ${
                filter === "negative" ? "bg-red-500 text-white" : "border"
              }`}
            >
              Negative
            </button>

          </div>

          {/* REVIEWS */}
          {filteredReviews.map((r) => (
            <div key={r.id} className="border-b pb-5">

              <div className="flex justify-between">
                <h4 className="font-semibold text-sm">{r.name}</h4>
                <span className="text-xs text-gray-400">{r.time}</span>
              </div>

              <div className="flex mt-1 text-sm">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} filled={s <= r.rating} />
                ))}
              </div>

              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {r.comment}
              </p>

            </div>
          ))}

        </div>

        {/* RIGHT - SUMMARY */}
        <div className="lg:col-span-3 hidden lg:block">

          <div className="border rounded-2xl p-5 sticky top-20">

            <h3 className="font-semibold mb-4">
              Summary
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              Customers are generally satisfied with this product.
              Most reviews highlight good quality and fast delivery.
            </p>

            <div className="mt-4 text-sm space-y-1">
              <p className="text-green-600">✔ Good Quality</p>
              <p className="text-green-600">✔ Fast Delivery</p>
              <p className="text-red-500">✖ Some durability issues</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}