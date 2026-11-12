import { useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/UseCurrencyInfo";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);


  // const currencyOptions = ["usd", "pkr", "eur", "gbp", "jpy", "aud", "cad", "chf", "cny", "sgd"];

  useEffect
  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyInfo);
  console.log(currencyInfo);
  console.log(currencyOptions)


  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  function convertfunc () {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-black bg-no-repeat"
      style={{
        // backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwat82713Ds51pOEMG7m8goFFymJ496rnUu9mwnnvlSA&s=10')`,
      }}
    >
      <div className="">
          <form
            onSubmit={(e) => {
            e.preventDefault();
            convertfunc();
            

            }}
          >
            <div className="w-full ">
              <InputBox
                label="From"
                currencyOptions={currencyOptions}
                selectCurrency={from}
                onCurrencyChange={(currency) => setFrom(currency)}
                amount={amount}
                onAmountChange={(amount) => setAmount(amount)}


              />
            </div>
            
            <div className="w-full mt-6 mb-6">
              <InputBox
                currencyOptions={currencyOptions}
                selectCurrency={to}
                onCurrencyChange={(currency) => setTo(currency)}
                label="To"
                amount={convertedAmount}
                onAmountChange={(amount) => setAmount(amount)}

              />
          </div>
          <div className=" mt-12 flex justify-center gap-7  pt-9 items-center">
          <button type="submit" onClick={convertfunc} className=" bg-blue-600 text-white px-20 py-3  flex items-center justify-center">
              Convert
          </button>
          <button onClick={swap}
            type="button"
              className="border-white-3 bg-blue-600 text-white px-4 py-3  flex items-center justify-center ">
            swap
          </button>
    </div>
          </form>
      </div>
    </div>
  );
}

export default App;