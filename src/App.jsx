import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Splash from "./pages/Splash.jsx";
import Onboarding from "./pages/Onboarding.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import VerifyCode from "./pages/VerifyCode.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";

// Core
import HomePage from "./pages/HomePage.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Search from "./pages/Search.jsx";
import Cart from "./pages/Cart.jsx";
import Reviews from "./pages/Reviews.jsx";

// Checkout
import CheckoutSummary from "./pages/CheckoutSummary.jsx";
import PaymentMethod from "./pages/PaymentMethod.jsx";
import AddCard from "./pages/AddCard.jsx";
import Address from "./pages/Address.jsx";
import OrderSuccess from "./pages/OrderSuccess.jsx";

// Account
import Account from "./pages/Account.jsx";
import MyDetails from "./pages/MyDetails.jsx";
import Orders from "./pages/Orders.jsx";
import TrackOrder from "./pages/TrackOrder.jsx";

// Support
import Notifications from "./pages/Notifications.jsx";
import FAQs from "./pages/FAQs.jsx";
import HelpCenter from "./pages/HelpCenter.jsx";
import CustomerService from "./pages/CustomerService.jsx";

// Saved
import SavedItems from "./pages/SavedItems.jsx";

// 👉 ONLY ADDED
import Logout from "./pages/Logout.jsx";

/* ================= PROTECTED ROUTE ================= */
const ProtectedRoute = ({ children }) => {
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Splash />} />

        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/saved-items" element={<SavedItems />} />

        <Route path="/checkout" element={<ProtectedRoute><CheckoutSummary /></ProtectedRoute>} />
        <Route path="/address" element={<ProtectedRoute><Address /></ProtectedRoute>} />
        <Route path="/payment" element={<ProtectedRoute><PaymentMethod /></ProtectedRoute>} />
        <Route path="/add-card" element={<ProtectedRoute><AddCard /></ProtectedRoute>} />
        <Route path="/order-success" element={<ProtectedRoute><OrderSuccess /></ProtectedRoute>} />

        <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
        <Route path="/my-details" element={<ProtectedRoute><MyDetails /></ProtectedRoute>} />
        <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
        <Route path="/track-order" element={<ProtectedRoute><TrackOrder /></ProtectedRoute>} />

        <Route path="/faqs" element={<FAQs />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/customer-service" element={<CustomerService />} />
        <Route path="/notifications" element={<Notifications />} />

        <Route path="/logout" element={<ProtectedRoute><Logout /></ProtectedRoute>} />

        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;