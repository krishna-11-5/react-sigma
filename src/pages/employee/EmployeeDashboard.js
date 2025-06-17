import { useEffect, useState } from "react";
import DashboardTable from "../../components/DashboardTable";
import ExportExcel from "../../components/ExportExcel"; // ✅ Import it

export default function CustomerDashboard() {
  const [employees, setemployees] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("employees") || "[]");
    setemployees(stored);
  }, []);

  const columns = [
    "name", "phone", "pincode", "loanType", "loanAmount", "duration",
    "carName", "carModel", "carYear",
    "businessAmount", "businessType", "businessPeriod"
  ];

  return (
    <div className="max-w-6xl mx-auto my-6 px-4">
      <h2 className="text-2xl font-semibold mb-4">Customer Dashboard</h2>
      <DashboardTable columns={columns} data={employees} />

      {/* ✅ Add Excel export button here */}
      <ExportExcel type="employees" data={employees} />
    </div>
  );
}
