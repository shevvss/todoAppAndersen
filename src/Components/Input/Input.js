import React from 'react';

const Input = ({ labelFor, label, type, id, placeholder, value, onChange }) => {
  return (
    <div>
      <label htmlFor={labelFor}>{label}</label>
      <input
        type={type}
        id={id}
        required
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
