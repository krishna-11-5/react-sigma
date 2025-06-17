import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

export default function ExportExcel({ type, data }) {
  const handleExport = () => {
    if (!data.length) return alert("No data to export");
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, type);
    const buf = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const blob = new Blob([buf], { type: "application/octet-stream" });
    saveAs(blob, `${type}.xlsx`);
  };
  return (
    <button onClick={handleExport} style={{ marginTop: "1rem" }}>
      Download {type}.xlsx
    </button>
  );
}
