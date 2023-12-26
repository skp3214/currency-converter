// AmountInput.js
import React from 'react';


const AmountInput = ({ amount, setAmount }) => {
  return (
    <div className="amount">
      <p>Enter Amount</p>
      <input
        value={amount}
        type="number"
        onChange={(e) => setAmount(e.target.value)}
      />
    </div>
  );
};

export default AmountInput;
