import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import NotFound from "../components/NotFound/NotFound";
import ProtectedRoute from "../pages/ProtectedRoute";
import MyBookings from "../components/Tasks/MyBookings";
import AddEvent from "../components/Tasks/AddEvents";
import BrowseEvents from "../components/Tasks/BrowseEvents";
import EventDetails from "../components/Tasks/EventDetails";
import MyEvents from "../components/Tasks/MyEvents";
import UpdateEvent from "../components/Tasks/UpdateEvent";

export default function AppRoutes() {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/browse-events" element={<BrowseEvents />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />

      {/* Protected Routes */}

      <Route
        path="/add-event"
        element={
          <ProtectedRoute user={user} token={token}>
            <AddEvent user={user} token={token} />
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-events"
        element={
          <ProtectedRoute user={user} token={token}>
            <MyEvents user={user} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/event-details/:id"
        element={
          <ProtectedRoute user={user} token={token}>
            <EventDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-bookings"
        element={
          <ProtectedRoute user={user} token={token}>
            <MyBookings></MyBookings>
          </ProtectedRoute>
        }
      />

      <Route
        path="/update-event/:id"
        element={
          <ProtectedRoute user={user} token={token}>
            <UpdateEvent />
          </ProtectedRoute>
        }
      />

      {/* Authentication Routes */}
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      <Route
        path="/register"
        element={!user ? <Register /> : <Navigate to="/" />}
      />
    </Routes>
  );
}
