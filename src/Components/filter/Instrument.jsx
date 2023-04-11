import React from "react";

const Instrument = () => {
  return (
    <div>
      <select name='instrument' placeholder='instruments' id='Piano'>
        <option value=''>Instruments</option>
        <option value='piano'>Piano</option>
        <option value='violin'>violin</option>
        <option value='piano'>Piano</option>
      </select>
    </div>
  );
};

export default Instrument;
