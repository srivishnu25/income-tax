type IncomeInputProps = {
  income: string;
  setIncome: (value: string) => void;
  calculateTax: () => void;
};

function IncomeInput({ income, setIncome, calculateTax }: IncomeInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      // allow only numbers
      setIncome(value);
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        calculateTax();
      }}
      className="space-x-3 mb-10"
    >
      <input
        value={income}
        autoFocus
        onChange={handleChange}
        placeholder="Enter Annual Income"
        className="py-2 px-3 rounded-md border border-gray-50"
      />
      <button type="submit">Calculate Tax</button>
    </form>
  );
}

export default IncomeInput;
