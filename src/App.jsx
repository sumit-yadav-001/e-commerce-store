import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Splash from "./pages/Splash";
import Onboarding from "./pages/Onboarding";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyCode from "./pages/VerifyCode";
import ResetPassword from "./pages/ResetPassword";

// Core
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Reviews from "./pages/Reviews";

// Checkout
import CheckoutSummary from "./pages/CheckoutSummary";
import PaymentMethod from "./pages/PaymentMethod";
import AddCard from "./pages/AddCard";
import Address from "./pages/Address";
import OrderSuccess from "./pages/OrderSuccess";

// Account
import Account from "./pages/Account";
import MyDetails from "./pages/MyDetails";
import Orders from "./pages/Orders";
import TrackOrder from "./pages/TrackOrder";

// Support
import Notifications from "./pages/Notifications";
import FAQs from "./pages/FAQs";
import HelpCenter from "./pages/HelpCenter";
import CustomerService from "./pages/CustomerService";

// Saved
import SavedItems from "./pages/SavedItems";

// 👉 ONLY ADDED
import Logout from "./pages/Logout";

/* ================= PROTECTED ROUTE ================= */
const ProtectedRoute = ({ children }) => {
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ENTRY POINT */}
        <Route path="/" element={<Splash />} />

        {/* AUTH FLOW */}
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* CORE */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/saved-items" element={<SavedItems />} />

        {/* CHECKOUT */}
        <Route path="/checkout" element={<ProtectedRoute><CheckoutSummary /></ProtectedRoute>} />
        <Route path="/address" element={<ProtectedRoute><Address /></ProtectedRoute>} />
        <Route path="/payment" element={<ProtectedRoute><PaymentMethod /></ProtectedRoute>} />
        <Route path="/add-card" element={<ProtectedRoute><AddCard /></ProtectedRoute>} />
        <Route path="/order-success" element={<ProtectedRoute><OrderSuccess /></ProtectedRoute>} />

        {/* ACCOUNT */}
        <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
        <Route path="/my-details" element={<ProtectedRoute><MyDetails /></ProtectedRoute>} />
        <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
        <Route path="/track-order" element={<ProtectedRoute><TrackOrder /></ProtectedRoute>} />

        {/* SUPPORT */}
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/customer-service" element={<CustomerService />} />
        <Route path="/notifications" element={<Notifications />} />

        {/* 👉 ONLY ADDED ROUTE */}
        <Route path="/logout" element={<ProtectedRoute><Logout /></ProtectedRoute>} />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;