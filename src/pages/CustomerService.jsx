import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ added
import {
  FiArrowLeft,
  FiPhone,
  FiHome,
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiImage,
  FiSend,
  FiMic,
} from "react-icons/fi";

const CustomerService = () => {
  const navigate = useNavigate(); // ✅ navigation

  const [messages, setMessages] = useState(() => {
    // ✅ persist chat (localStorage)
    const saved = localStorage.getItem("chat_messages");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            type: "support",
            text: "Hello, good morning.",
            time: "10:41 pm",
          },
          {
            id: 2,
            type: "support",
            text: "I am Customer Service, how can I help you?",
            time: "10:41 pm",
          },
        ];
  });

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  // ✅ auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ✅ save messages
  useEffect(() => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  }, [messages]);

  const getTime = () =>
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  const sendMessage = () => {
    if (!input.trim() || loading) return;

    const newMsg = {
      id: Date.now(),
      type: "user",
      text: input,
      time: getTime(),
    };

    setMessages((prev) => [...prev, newMsg]);
    setInput("");
    setLoading(true);

    // ✅ simulate API response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: "support",
          text: generateReply(input),
          time: getTime(),
        },
      ]);
      setLoading(false);
    }, 1200);
  };

  // ✅ smart reply logic (production-like)
  const generateReply = (msg) => {
    const text = msg.toLowerCase();

    if (text.includes("order"))
      return "Please share your order ID so I can check.";

    if (text.includes("payment"))
      return "Payment issue? Please tell me which method you used.";

    if (text.includes("refund"))
      return "Refunds are processed within 5-7 business days.";

    return "Got it 👍 Can you explain a bit more?";
  };

  const handleKey = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="min-h-screen bg-white pb-32">

      {/* HEADER */}
      <div className="relative h-[120px] border-b border-gray-200">

        {/* ✅ back navigation */}
        <FiArrowLeft
          onClick={() => navigate(-1)}
          className="absolute left-6 top-[61px] text-xl cursor-pointer"
        />

        <h1 className="absolute left-1/2 -translate-x-1/2 top-[59px] text-xl font-semibold">
          Customer Service
        </h1>

        {/* ✅ call action */}
        <FiPhone
          onClick={() => alert("Calling support...")}
          className="absolute right-6 top-[61px] text-xl cursor-pointer"
        />
      </div>

      {/* ONLINE TAG */}
      <div className="flex justify-center mt-2">
        <span className="px-3 py-1 bg-gray-200 text-xs rounded-md">
          Online
        </span>
      </div>

      {/* CHAT AREA */}
      <div className="relative max-w-md mx-auto px-4 mt-6 space-y-4">

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col gap-1 ${
              msg.type === "user" ? "items-end" : "items-start"
            }`}
          >
            <div
              className={`px-4 py-3 rounded-xl max-w-[80%] text-sm ${
                msg.type === "user"
                  ? "bg-black text-white rounded-br-none"
                  : "bg-gray-200 text-black rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>

            <span className="text-[11px] text-gray-400">{msg.time}</span>
          </div>
        ))}

        {loading && (
          <div className="text-xs text-gray-400">typing...</div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* INPUT */}
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 w-[92%] max-w-md">

        <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-xl px-3 py-2">

          {/* ✅ image click */}
          <FiImage
            onClick={() => alert("Image upload coming soon")}
            className="text-xl text-gray-500 cursor-pointer"
          />

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Type your message..."
            className="flex-1 outline-none text-sm"
          />

          <button
            onClick={sendMessage}
            disabled={!input.trim() || loading}
            className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center disabled:opacity-50"
          >
            <FiSend />
          </button>
        </div>
      </div>

      {/* MIC BUTTON */}
      <button
        onClick={() => alert("Voice feature coming soon")}
        className="fixed right-5 bottom-24 w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center shadow-lg"
      >
        <FiMic className="text-white text-lg" />
      </button>

      {/* BOTTOM NAV */}
      <div className="fixed bottom-0 left-0 w-full h-[86px] bg-white border-t flex justify-around items-center">

        <div
          onClick={() => navigate("/")}
          className="flex flex-col items-center text-gray-500 cursor-pointer"
        >
          <FiHome />
          <span className="text-xs">Home</span>
        </div>

        <div
          onClick={() => navigate("/search")}
          className="flex flex-col items-center text-gray-500 cursor-pointer"
        >
          <FiSearch />
          <span className="text-xs">Search</span>
        </div>

        <div
          onClick={() => navigate("/saved")}
          className="flex flex-col items-center text-gray-500 cursor-pointer"
        >
          <FiHeart />
          <span className="text-xs">Saved</span>
        </div>

        <div
          onClick={() => navigate("/cart")}
          className="flex flex-col items-center text-gray-500 cursor-pointer"
        >
          <FiShoppingCart />
          <span className="text-xs">Cart</span>
        </div>

        <div
          onClick={() => navigate("/account")}
          className="flex flex-col items-center text-black font-medium cursor-pointer"
        >
          <FiUser />
          <span className="text-xs">Account</span>
        </div>
      </div>

      {/* HOME INDICATOR */}
      <div className="fixed bottom-1 left-1/2 -translate-x-1/2 w-[120px] h-[5px] bg-black rounded-full opacity-80"></div>

    </div>
  );
};

export default CustomerService;