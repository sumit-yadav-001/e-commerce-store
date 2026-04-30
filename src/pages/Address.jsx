import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaBell,
  FaMapMarkerAlt,
  FaCheckCircle
} from "react-icons/fa";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

const Address = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState("list");
  const [selected, setSelected] = useState(0);

  const [form, setForm] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: ""
  });

  const savedAddresses = [
    { label: "Home", address: "925 S Chugach St #APT 10" },
    { label: "Office", address: "2438 6th Ave, Ketchikan" },
    { label: "Apartment", address: "2551 Vista Dr #B301" },
    { label: "Parent’s House", address: "4821 Ridge Top Cir" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep("success");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* HEADER (no border) */}
      <div className="flex items-center justify-between px-4 py-4">
        <FaArrowLeft
          className="text-xl cursor-pointer"
          onClick={() => setStep("list")}
        />

        <h1 className="text-xl font-semibold">
          {step === "list" && "Address"}
          {step === "new" && "New Address"}
          {step === "map" && "Select Location"}
          {step === "success" && "Success"}
        </h1>

        <FaBell className="text-xl" />
      </div>

      {/* ================== LIST ================== */}
      {step === "list" && (
        <div className="p-4 space-y-4">

          <h2 className="font-semibold">Saved Address</h2>

          {savedAddresses.map((item, i) => (
            <div
              key={i}
              onClick={() => setSelected(i)}
              className="flex justify-between items-center rounded-xl p-4 cursor-pointer shadow-sm"
            >
              <div className="flex gap-3 items-center">
                <FaMapMarkerAlt className="text-gray-400" />
                <div>
                  <p className="font-semibold text-sm">{item.label}</p>
                  <p className="text-gray-500 text-sm">{item.address}</p>
                </div>
              </div>

              <div
                className={`w-5 h-5 rounded-full ${
                  selected === i ? "bg-black" : "bg-gray-300"
                }`}
              />
            </div>
          ))}

          <button
            onClick={() => setStep("new")}
            className="w-full rounded-xl py-4 flex justify-center items-center gap-2 bg-gray-100"
          >
            + Add New Address
          </button>

          <Button fullWidth size="lg" onClick={() => navigate("/payment")}>
            Continue
          </Button>
        </div>
      )}

      {/* ================== NEW ADDRESS ================== */}
      {step === "new" && (
        <div className="flex-1 flex justify-center">

          <div className="w-full max-w-md px-4 py-6">

            <form onSubmit={handleSubmit} className="space-y-4">

              <Input label="Full Name" value={form.name}
                onChange={e => setForm({...form, name: e.target.value})} required />

              <Input label="Street" value={form.street}
                onChange={e => setForm({...form, street: e.target.value})} required />

              <div className="grid grid-cols-2 gap-4">
                <Input label="City" value={form.city}
                  onChange={e => setForm({...form, city: e.target.value})} required />

                <Input label="State" value={form.state}
                  onChange={e => setForm({...form, state: e.target.value})} required />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input label="ZIP" value={form.zip}
                  onChange={e => setForm({...form, zip: e.target.value})} required />

                <Input label="Country" value={form.country}
                  onChange={e => setForm({...form, country: e.target.value})} required />
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5 accent-black" />
                <span className="text-gray-500 text-sm">
                  Make this default address
                </span>
              </div>

              <Button type="submit" fullWidth size="lg">
                Save Address
              </Button>
            </form>

            <button
              onClick={() => setStep("map")}
              className="mt-4 w-full rounded-xl py-3 bg-gray-100"
            >
              Pick from Map
            </button>

          </div>
        </div>
      )}

      {/* ================== MAP ================== */}
      {step === "map" && (
        <div className="flex-1 relative">

          <div className="bg-gray-200 h-full flex items-center justify-center">
            <p className="text-gray-500">Map Placeholder</p>
          </div>

          <div className="absolute bottom-0 w-full bg-white rounded-t-3xl p-4 shadow-lg">
            <Button fullWidth onClick={() => setStep("new")}>
              Confirm Location
            </Button>
          </div>
        </div>
      )}

      {/* ================== SUCCESS ================== */}
      {step === "success" && (
        <div className="flex-1 flex items-center justify-center px-4">

          <div className="w-full max-w-sm bg-white rounded-2xl p-6 shadow-md flex flex-col items-center gap-6">

            <div className="relative flex items-center justify-center">
              <div className="absolute w-20 h-20 bg-green-600 opacity-20 rounded-full"></div>
              <FaCheckCircle className="text-green-600 text-5xl z-10" />
            </div>

            <div className="text-center space-y-2">
              <h2 className="text-lg font-semibold">
                Congratulations!
              </h2>
              <p className="text-gray-500 text-sm">
                Your new address has been added.
              </p>
            </div>

            <button
              onClick={() => setStep("list")}
              className="w-full bg-black text-white py-4 rounded-xl font-medium"
            >
              Continue
            </button>

          </div>
        </div>
      )}

    </div>
  );
};

export default Address;