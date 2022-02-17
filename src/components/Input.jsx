import React from "react";
import NumberFormat from 'react-number-format';

const Input = ({
  value,
  onChange, 
  name,
  prefix, 
  sufix,  
  thousandSeparator = false, 
  decimalSeparator = ',',
  isAllowed,
  displayType = 'input',
  type = 'text',
  format,
  style,
}) => {
  return (
    <NumberFormat
      name={name}
      value={value}
      onChange={onChange}
      prefix={prefix}
      type={type}
      suffix={sufix}
      displayType={displayType}
      thousandSeparator={thousandSeparator}
      decimalSeparator={decimalSeparator}
      isAllowed={isAllowed}
      format={format}
      style={style}
    />
  );
};

export default Input;
