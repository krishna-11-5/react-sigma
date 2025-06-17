import { useHistory } from "react-router-dom";

const loanTypes = [
  {
    title: "Car Loan",
    description: "Finance your dream car.",
    path: "/customer/apply#car"
  },
  {
    title: "Personal Loan",
    description: "Quick cash for any purpose.",
    path: "/customer/apply#personal"
  },
  {
    title: "Business Loan",
    description: "Expand your enterprise.",
    path: "/customer/apply#business"
  },
];

export default function LoanSlider() {
  const history = useHistory();
  return (
    <div className="bg-gray-100 py-6">
      <div className="max-w-4xl mx-auto flex space-x-4 overflow-x-auto px-4">
        {loanTypes.map((loan, i) => (
          <div 
            key={i}
            className="min-w-[250px] bg-white p-4 rounded-lg shadow-md flex-shrink-0"
          >
            <h3 className="text-xl font-semibold">{loan.title}</h3>
            <p className="mt-2 text-gray-600">{loan.description}</p>
            <button
              onClick={() => history.push(loan.path)}
              className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
