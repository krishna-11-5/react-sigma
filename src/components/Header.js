import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-indigo-600 p-4 text-white flex justify-between">
      <h1 className="text-lg font-bold">Six Sigma Services</h1>
      <div className="space-x-4">
        <NavLink to="/partner/signup" className="hover:underline">Partner Signup</NavLink>
        <NavLink to="/partner/login" className="hover:underline">Partner Login</NavLink>
        <NavLink to="/customer/apply" className="hover:underline">Apply Loan</NavLink>
        <NavLink to="/employee/signup" className="hover:underline">Employee Signup</NavLink>
        <NavLink to="/employee/login" className="hover:underline">Employee Login</NavLink>
      </div>
    </nav>
  );
}
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { auth, logout } = useAuth();

  return (
    <nav className="bg-indigo-600 p-4 text-white flex justify-between">
      <h1 className="text-lg font-bold">Six Sigma Services</h1>
      <div className="space-x-4">
        {/* Add routes here */}
        {auth && (
          <button onClick={logout} className="hover:underline">
            Logout ({auth.role})
          </button>
        )}
      </div>
    </nav>
  );
}
