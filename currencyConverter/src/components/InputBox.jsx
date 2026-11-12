import { useId } from "react";

function InputBox({ label, amount, onAmountChange, onCurrencyChange, currencyOptions = [], selectCurrency, amountDisable = false, currencyDisable = false }) {
    const amountInputId = useId();


    return (
        <div className="  backdrop-blur-md border  border-white/10 rounded-xl  flex p-6">
            {/* Amount Side */}
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-white/60 mb-12 inline-block text-xs font-semibold uppercase tracking-widest">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-2.5 text-white text-lg font-semibold placeholder-white/30 border-b border-white/10 focus:border-blue-400 transition-colors duration-200"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>

            {/* Currency Side */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-white/50 mb-2 w-full text-xs font-semibold uppercase tracking-widest">
                    Currency
                </p>
                <select id="mySelect"
                    className="rounded-lg px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 cursor-pointer outline-none text-white font-semibold text-sm transition-all duration-200 backdrop-blur-sm backdrop-filter backdrop-saturate-50 backdrop-contrast-100"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency} className="bg-slate-800 text-white">
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
                </div>
        </div>
    );
}


export default InputBox;
