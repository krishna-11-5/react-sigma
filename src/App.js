import Header from "./components/Header";
import LoanSlider from "./components/LoanSlider";
import PartnerDashboard from "./pages/Partner/PartnerDashboard";
import CustomerDashboard from "./pages/customer/CustomerDashboard.js";
import EmployeeDashboard from "./pages/employee/EmployeeDashboard.js";
import ProtectedRoute from "./components/ProtectedRoute";
<Routes>
<ProtectedRoute path="/partner/dashboard" component={PartnerDashboard} role="partner" />
<ProtectedRoute path="/employee/dashboard" component={EmployeeDashboard} role="employee" />
<ProtectedRoute path="/customer/dashboard" component={CustomerDashboard} role="customer" />
</Routes>


import { AuthProvider } from "./context/AuthContext";

function Root() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
export default Root;


function App() {
  return (
    <Router>
      <Header />

      {/* Loan info slider always visible */}
      <LoanSlider />

      <Switch>
        {/* Signup/Login */}
        <Route path="/partner/login" component={PartnerLogin} />
        <Route path="/partner/signup" component={PartnerSignup} />
        <Route path="/employee/login" component={EmployeeLogin} />
        <Route path="/employee/signup" component={EmployeeSignup} />
        {/* Dashboards */}
        <Route path="/partner/dashboard" component={PartnerDashboard} />
        <Route path="/customer/dashboard" component={CustomerDashboard} />
        <Route path="/employee/dashboard" component={EmployeeDashboard} />
        {/* Customer loan application page */}
        <Route path="/customer/apply" component={CustomerApply} />
        {/* Landing/Home */}
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
}
