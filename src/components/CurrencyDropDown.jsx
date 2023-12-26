// CurrencyDropdown.js
import React from 'react';

const CurrencyDropdown = ({ currency, setCurrency, countryList, updateFlag,labelText }) => {
  return (
    <div className="from">
      <p>{labelText}</p>
      <div className="select-container">
        <img src={`https://flagsapi.com/${countryList[currency]}/flat/64.png`} alt={currency} />
        <select
          name="from"
          value={currency}
          onChange={(e) => {
            setCurrency(e.target.value);
            updateFlag(e.target.value, e.target);
          }}
        >
          {Object.keys(countryList).map((currCode) => (
            <option key={currCode} value={currCode}>
              {currCode}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CurrencyDropdown;
