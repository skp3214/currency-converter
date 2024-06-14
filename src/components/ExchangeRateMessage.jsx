// ExchangeRateMessage.js
import React from 'react';

const ExchangeRateMessage = ({ amount, fromCurrency, toCurrency, exchangeRate, datafetched }) => {
  return (
    <>
      {datafetched ? (<div className="msg">
        {exchangeRate && `${amount} ${fromCurrency} = ${(amount * exchangeRate).toFixed(2)} ${toCurrency}`}
      </div>) : (<div className='msg'>Api is not working sorry</div>)}
    </>
  );
};

export default ExchangeRateMessage;
