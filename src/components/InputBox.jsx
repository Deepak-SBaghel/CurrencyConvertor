import React, { useId } from "react";

function InputBox({
  // WE ARE WRITING THE VARIABLE HERE AND TEH VALUE IS PASSED DURING THE CALL IN APP.JS
  label, // for defining TO or FROM
  amount,
  onAmountChange, // method in app.jsx and call on change
  onCurrencyChange, // method in app.jsx and call on change
  currencyOptions = [], // from api call
  selectCurrency = "usd", // the selected currency 
  amountDisable = false, // to disable the to value
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          // HTML FOR IS USED TO GET THE HTML OF A ELEMENT
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          // disable it if amountDisabled is set to default
          
          
          value={amount} 
          // here we take input 

          
          onChange={(e) =>
            {console.log(e.target.val);
              return onAmountChange &&  onAmountChange(Number(e.target.value))}
          }
          // we write with" onAmountChange && " as a good preactice 
          // so is the method is not defined in app.jsx , it will not run 
          // we will define onAmountChange in the app.jsx and will call it from here
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        
        
        {/* all this is to show the options */}
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) =>
            /*onCurrencyChange &&*/ onCurrencyChange(e.target.value)
            // calls the oncurrency change 
          }
          disabled={currencyDisable}
        >
          {/* remember the key in loop in react || key will increase the perfomance of the loop */}
          {/* // preffer key to be unique , preffer id from db */}



          {currencyOptions.map((currency) => (
            // HTML INSIDE JS INSIDE HTML
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
