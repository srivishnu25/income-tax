type TaxOutputProps = {
  tax: number;
  message: string;
};

function TaxOutput({ tax, message }: TaxOutputProps) {
  return (
    <div>
      <h3 className="text-3xl">
        {message ? message : `Calculated Tax: ₹${tax}`}
      </h3>
    </div>
  );
}
export default TaxOutput;
