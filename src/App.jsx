import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file
import { countryList } from './assets';
import AmountInput from './components/AmountInput';
import CurrencyDropdown from './components/CurrencyDropDown';
import ExchangeRateMessage from './components/ExchangeRateMessage';
import arrow from '../src/assets/arrow-right-arrow-left-solid.svg';

const App = () => {
  const BASE_URL =
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(null);


  const updateFlag = (currency, element) => {
    const countryCode = countryList[currency];
    const newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    const img = element.parentElement.querySelector("img");
    img.src = newSrc;
  };

  const updateExchangeRate = async () => {
    try {
      const URL = `${BASE_URL}/${fromCurrency.toLowerCase()}/${toCurrency.toLowerCase()}.json`;
      const response = await fetch(URL);
      const data = await response.json();
      const rate = data[toCurrency.toLowerCase()];
      setExchangeRate(rate);
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
    }
  };

  useEffect(() => {
    updateExchangeRate();
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div className="container">
      <h2>Currency Converter</h2>
      <form>
        <AmountInput amount={amount} setAmount={setAmount} />
        <div className="dropdown">
          <CurrencyDropdown
            currency={fromCurrency}
            setCurrency={setFromCurrency}
            countryList={countryList}
            updateFlag={updateFlag}
            labelText="From"
          />
          <img className='arrow' src={arrow} alt="" srcset="" />
          <CurrencyDropdown
            currency={toCurrency}
            setCurrency={setToCurrency}
            countryList={countryList}
            updateFlag={updateFlag}
            labelText="To"
          />
        </div>
        <ExchangeRateMessage
          amount={amount}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          exchangeRate={exchangeRate}

        />
        <button onClick={(e) => { e.preventDefault(); updateExchangeRate(); }}>
          Get Exchange Rate
        </button>
      </form>
    </div>
  );
};

export default App;
