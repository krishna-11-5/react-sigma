import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


export default function PartnerLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
   const { login } = useAuth();
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    const partners = JSON.parse(localStorage.getItem("partners") || "[]");
    const match = partners.find(p => p.username === username && p.password === password);
    if (match) {
      alert("Login successful!");
      // Redirect to dashboard logic can go here
    } else {
      alert("Invalid credentials");
    }
    const users = JSON.parse(localStorage.getItem("partners") || "[]");
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      login(user, "partner");
      history.push("/partner/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="max-w-sm mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Partner Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-gray-600">Username</label>
          <input type="text" required value={username} onChange={e => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:ring focus:ring-indigo-200" />
        </div>
        <div>
          <label className="block text-gray-600">Password</label>
          <input type="password" required value={password} onChange={e => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:ring focus:ring-indigo-200" />
        </div>
        <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
          Login
        </button>
      </form>
    </div>
  );
}
