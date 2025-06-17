import { useState } from "react";
import ExportExcel from "../../components/ExportExcel";

const initialForm = {
  name: "", company: "", phone: "", bank: "",
  account: "", ifsc: "", username: "", password: ""
};

export default function PartnerSignup() {
  const [form, setForm] = useState(initialForm);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // store form data in localStorage array
    const stored = JSON.parse(localStorage.getItem("partners") || "[]");
    stored.push(form);
    localStorage.setItem("partners", JSON.stringify(stored));
    setForm(initialForm);
    alert("Partner signed up!");
  };

  return (
    <div>
      <h2>Partner Signup</h2>
      <form onSubmit={handleSubmit}>
        {["name","company","phone","bank","account","ifsc","username","password"].map(field => (
          <div key={field}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label><br/>
            <input 
              name={field} 
              value={form[field]} 
              type={field==="password"?"password":"text"} 
              required 
              onChange={handleChange} />
          </div>
        ))}
        <button type="submit">Sign Up</button>
      </form>
      <ExportExcel type="partners" data={JSON.parse(localStorage.getItem("partners") || "[]")} />
    </div>
  );
}
