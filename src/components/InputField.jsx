import React from "react";
import { Controller } from "react-hook-form";

const InputField = ({ label, name, type = "text", placeholder, control, rules, errorMessage }) => {
  return (
    <div>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type={type}
            placeholder={placeholder}
          />
        )}
        rules={rules}
      />
      {errorMessage && <span>{errorMessage}</span>}
    </div>
  );
};

export default InputField;
