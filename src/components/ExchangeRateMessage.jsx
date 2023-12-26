// ExchangeRateMessage.js
import React from 'react';

const ExchangeRateMessage = ({ amount, fromCurrency, toCurrency, exchangeRate }) => {
  return (
    <div className="msg">
      {exchangeRate && `${amount} ${fromCurrency} = ${amount * exchangeRate}   ${toCurrency}`}
    </div>
  );
};

export default ExchangeRateMessage;
