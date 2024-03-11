import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Landing from "./components/Landing";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import Profile from "./components/Profile";
import AddExpense from "./components/AddExpense";
import PageNotFound from "./pages/PageNotFound";
import SignupForm from "./pages/SignupForm";
import EmployeeDashboard from "./components/EmployeeDashboard";
import AccessDeniedPage from "./components/AccessDenied";
import ManagerDashboard from "./components/ManagerDashboard";
import Loading from "./components/Loading";
import Reports from "./pages/Reports";

function App() {
  const manager = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="admin" element={<AccessDeniedPage />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<SignupForm />} />
          <Route path="home" element={<Home />}>
            <Route
              index
              element={manager ? <ManagerDashboard /> : <EmployeeDashboard />}
            />
            <Route exact path="profile" element={<Profile />} />
            <Route exact path="add-expense" element={<AddExpense />} />
            <Route exact path="expenses" element={<Loading />} />
            <Route exact path="reports" element={<Reports />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
