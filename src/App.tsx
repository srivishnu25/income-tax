import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import IncomeInput from "./components/IncomeInput";
import TaxOutput from "./components/TaxOutput";

const TAX_SLABS = [
  { maxIncome: 1000000, rate: 0.1 },
  { maxIncome: 2000000, rate: 0.2 },
];

function App() {
  const [income, setIncome] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [tax, setTax] = useState<number>(0);

  const calculateTax = () => {
    const incomeNumber = Number(income.replace(/,/g, ""));

    if (!incomeNumber) {
      setMessage("Please enter a valid annual income.");
      setTax(0);
      return;
    }

    const matchedSlab = TAX_SLABS.find(
      (slab) => incomeNumber <= slab.maxIncome
    );

    if (matchedSlab) {
      setTax(Math.round(incomeNumber * matchedSlab.rate));
      setMessage("");
    } else {
      setMessage("Income above 20 LPA is not handled.");
      setTax(0);
    }
  };
  return (
    <>
      <IncomeInput
        income={income}
        setIncome={setIncome}
        calculateTax={calculateTax}
      />
      <TaxOutput tax={tax} message={message} />
    </>
  );
}

export default App;
