import { useEffect, useState } from "react";

// "use" convention
function useCurrencyinfo(currency) {
  const [data, setdata] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setdata(res[currency]));
      console.log(data);
  }, [currency]);
  //   return [data, setdata];  
return data;
// we will extract data from the function 
}

export default useCurrencyinfo;
// here we are returning the whole function 
// and we are taking the 
