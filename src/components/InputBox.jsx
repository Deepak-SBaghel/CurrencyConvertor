import { useId } from "react";
import React from "react";

function InputBox({
  label, // for defining TO or FROM
  amount,
  onAmountChange, // when amount cahnge
  onCurrencyChange, // when currency change
  currencyOptions = [], // from api call
  setCurrency = "usd", // default
  amountDisable = false, // to disable the to value
  currenctDisable = false,
  className = "",
}) {

  const amountInputId = useId()
  // while 
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable} // disable it if amountDisabled is set to default  
          value={amount} 
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          // it will check if onAmountChange is empty or not if not the call the function
          // because empty call will crash the file
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={setCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currenctDisable}
        >
          {/* remember the key in loop in react || key will increase the perfomance of the loop */}
          {/* // preffer key to be unique , preffer id from db */}
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
