import React, { useState } from 'react';

interface InputTextProps {
  labelTitle: string;
  labelStyle?: string;
  type?: 'text' | 'password'; // Restrict type to text or password
  containerStyle?: string;
  defaultValue?: string;
  placeholder?: string;
  updateFormValue: (updateType: string, value: string) => void;
  updateType: string;
}

function InputTextPassword({
  labelTitle,
  labelStyle,
  type = 'text', // Default to 'text'
  containerStyle,
  defaultValue,
  placeholder,
  updateFormValue,
  updateType,
}: InputTextProps): JSX.Element {
  const [value, setValue] = useState<string>(defaultValue || '');
  const [showPassword, setShowPassword] = useState<boolean>(false); // State to toggle password visibility

  const updateInputValue = (val: string): void => {
    setValue(val);
    updateFormValue(updateType, val);
  };

  const togglePasswordVisibility = (): void => {
    setShowPassword((prev) => !prev); // Toggle the password visibility
  };

  return (
    <div className={`form-control w-full ${containerStyle}`}>
      <label className="label">
        <span className={`label-text text-xs text-base-content ${labelStyle || ''}`}>{labelTitle}</span>
      </label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : type} // Toggle between text and password
          value={value}
          placeholder={placeholder || ''}
          onChange={(e) => updateInputValue(e.target.value)}
          className="input input-bordered w-full"
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            {showPassword ? 'Hide' : 'Show'} {/* Toggle button text */}
          </button>
        )}
      </div>
    </div>
  );
}

export default InputTextPassword;
