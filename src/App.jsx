import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyinfo from "./hooks/useCurrencyinfo";
import "./App.css";

function App() {
  const [from, setFrom] = useState("usd"); // FROM CURRENCY
  const [amount, setAmount] = useState(); // the from amount
  const [to, setTo] = useState("inr"); // TO CURRENCY
  const [convertedAmount, setConvertedAmount] = useState(); // the to amount

  const currencyInfo = useCurrencyinfo(from); // getting all the values from the the hook
  const options = Object.keys(currencyInfo);
  // the data we returned form currencyinfo is used here
  // options will have all the list of currency

  // swap button
  const swap = () => {
    setFrom(to);
    setTo(from);
    
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => {return setFrom(currency)}}// does not return
                selectCurrency={from}
                onAmountChange={(amount) => amount>=0 && setAmount(amount)}// does not return
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)} //change the setTo currency to the new value
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
