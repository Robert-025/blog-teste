import { useEffect, useRef } from "react";
import { useField } from "@unform/core";

export default function Input({ name, label, isTextArea, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, defaultValue = "", registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);
  return (
    <>
      {isTextArea ? (
        <textarea
          ref={inputRef}
          id={fieldName}
          defaultValue={defaultValue}
          placeholder={label}
          {...rest}
        />
      ) : (
        <input
          ref={inputRef}
          id={fieldName}
          defaultValue={defaultValue}
          placeholder={label}
          {...rest}
        />
      )}

      {error && (
        <span
          style={{
            color: "#f00",
            margin: 0,
            fontSize: "1rem",
            transition: "all 0.2s",
          }}
        >
          {error}
        </span>
      )}
    </>
  );
}
