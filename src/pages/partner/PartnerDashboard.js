import { useEffect, useState } from "react";
import DashboardTable from "../../components/DashboardTable";

export default function PartnerDashboard() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    setPartners(JSON.parse(localStorage.getItem("partners") || "[]"));
  }, []);

  const columns = ["name","company","phone","bank","account","ifsc","username"];

  return (
    <div className="max-w-6xl mx-auto my-6 px-4">
      <h2 className="text-2xl font-semibold mb-4">Partner Dashboard</h2>
      <DashboardTable columns={columns} data={partners} />
    </div>
  );
}
