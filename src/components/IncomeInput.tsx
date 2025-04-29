type IncomeInputProps = {
  income: string;
  setIncome: (value: string) => void;
  calculateTax: () => void;
};

function IncomeInput({ income, setIncome, calculateTax }: IncomeInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/,/g, ""); // Remove commas first

    if (/^\d*$/.test(rawValue)) {
      // Only digits
      const formattedValue = new Intl.NumberFormat("en-IN").format(
        Number(rawValue)
      );
      setIncome(formattedValue);
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
