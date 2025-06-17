import { useState } from "react";

export default function EmployeeLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const employees = JSON.parse(localStorage.getItem("employees") || "[]");
    const match = employees.find(emp => emp.username === username && emp.password === password);
    if (match) {
      alert("Employee logged in!");
      // Dashboard redirection logic
    } else {
      alert("Invalid login");
    }
  };

  return (
    <div className="max-w-sm mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Employee Login</h2>
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
