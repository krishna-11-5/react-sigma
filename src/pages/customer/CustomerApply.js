import { useState, useEffect } from "react";
import { emi } from "../../components/EmiCalculator";
import ExportExcel from "../../components/ExportExcel";

const loanTypes = [
  "Loan Against property", "Car loan", "Personal Loan", "Business Loan", "Other"
];

export default function CustomerApply() {
  const init = {
    name: "", phone: "", pincode: "", loanType: "", amount: "",
    carName: "", carModel: "", carYear: "",
    loanAmount: "", duration: "",
    businessAmount: "", businessType: "", businessPeriod: ""
  };
  const [form, setForm] = useState(init);
  const [calculatedEmi, setEmi] = useState(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  useEffect(() => {
    const { loanType, loanAmount, duration } = form;
    if (loanType === "Personal Loan" && loanAmount && duration) {
      setEmi(emi(+loanAmount, 10, +duration));
    } else setEmi(null);
  }, [form.loanType, form.loanAmount, form.duration]);

  const handleSubmit = e => {
    e.preventDefault();
    const stored = JSON.parse(localStorage.getItem("employees") || "[]");
    stored.push(form);
    localStorage.setItem("employees", JSON.stringify(stored));
    alert("Application submitted!");
    setForm(init);
  };

  return (
    <div>
      <h2>Customer Loan Application</h2>
      <form onSubmit={handleSubmit}>
        {["name","phone","pincode"].map(f => (
          <div key={f}>
            <label>{f.charAt(0).toUpperCase()+f.slice(1)}</label><br/>
            <input name={f} value={form[f]} required onChange={handleChange}/>
          </div>
        ))}
        <div>
          <label>Loan Type</label><br/>
          <select name="loanType" value={form.loanType} onChange={handleChange} required>
            <option value="">--Select--</option>
            {loanTypes.map(l => <option key={l}>{l}</option>)}
          </select>
        </div>
        {/* Conditional fields */}
        {form.loanType === "Car loan" && (
          <>
            {["carName","carModel","carYear"].map(f => (
              <div key={f}>
                <label>{f}</label><br/>
                <input name={f} value={form[f]} onChange={handleChange} required/>
              </div>
            ))}
          </>
        )}
        {form.loanType === "Personal Loan" && (
          <>
            <div><label>Loan Amount</label><br/>
              <input name="loanAmount" value={form.loanAmount} onChange={handleChange} required/>
            </div>
            <div><label>Duration (months)</label><br/>
              <input name="duration" value={form.duration} onChange={handleChange} required/>
            </div>
            {calculatedEmi && (
              <p>Estimated EMI: ₹{calculatedEmi.toFixed(2)}</p>
            )}
          </>
        )}
        {form.loanType === "Business Loan" && (
          <>
            <div><label>Business Amount</label><br/>
              <input name="businessAmount" value={form.businessAmount} onChange={handleChange} required/>
            </div>
            <div><label>Business Type</label><br/>
              <select name="businessType" required onChange={handleChange}>
                <option value="">--Select--</option>
                <option>personal</option>
                <option>partnership</option>
                <option>other</option>
              </select>
            </div>
            <div><label>Loan Period (months)</label><br/>
              <input name="businessPeriod" value={form.businessPeriod} onChange={handleChange} required/>
            </div>
          </>
        )}
        <button type="submit">Submit</button>
      </form>
      <ExportExcel type="employees" data={JSON.parse(localStorage.getItem("employees") || "[]")} />
    </div>
  );
}
return (
  <div className="max-w-lg mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
    <h2 className="text-2xl font-semibold text-gray-700 mb-6">Loan Application</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Basic Info */}
      {["name", "phone", "pincode"].map(f => (
        <div key={f}>
          <label className="block text-gray-600 capitalize mb-1">{f}</label>
          <input
            name={f}
            value={form[f]}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded focus:ring focus:ring-indigo-200"
          />
        </div>
      ))}
      {/* Loan Type */}
      <div>
        <label className="block text-gray-600 mb-1">Loan Type</label>
        <select
          name="loanType"
          value={form.loanType}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded focus:ring focus:ring-indigo-200"
        >
          <option value="">--Select--</option>
          {loanTypes.map(l => <option key={l}>{l}</option>)}
        </select>
      </div>

      {/* Conditional Sections */}
      {form.loanType === "Car loan" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["carName", "carModel", "carYear"].map(f => (
            <div key={f}>
              <label className="block text-gray-600 capitalize mb-1">{f}</label>
              <input
                name={f}
                value={form[f]}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded focus:ring focus:ring-indigo-200"
              />
            </div>
          ))}
        </div>
      )}
      {form.loanType === "Personal Loan" && (
        <>
          {/* Loan Amount & Duration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 mb-1">Loan Amount</label>
              <input
                name="loanAmount"
                value={form.loanAmount}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded focus:ring focus:ring-indigo-200"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Duration (months)</label>
              <input
                name="duration"
                value={form.duration}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded focus:ring focus:ring-indigo-200"
              />
            </div>
          </div>
          {calculatedEmi && (
            <p className="mt-2 text-blue-600">
              Estimated EMI: ₹{calculatedEmi.toFixed(2)}
            </p>
          )}
        </>
      )}
      {form.loanType === "Business Loan" && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-600 mb-1">Business Amount</label>
              <input
                name="businessAmount"
                value={form.businessAmount}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded focus:ring focus:ring-indigo-200"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Business Type</label>
              <select
                name="businessType"
                value={form.businessType}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded focus:ring focus:ring-indigo-200"
              >
                <option value="">--Select--</option>
                <option value="personal">Personal</option>
                <option value="partnership">Partnership</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Loan Period (months)</label>
              <input
                name="businessPeriod"
                value={form.businessPeriod}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded focus:ring focus:ring-indigo-200"
              />
            </div>
          </div>
        </>
      )}

      <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
        Submit Application
      </button>
    </form>
    <ExportExcel type="employees" data={JSON.parse(localStorage.getItem("employees") || "[]")} />
  </div>
);
