import { useState } from "react";

// DONE FOR NOW

export default function ColorInput({ id, defaultValue }) {
  //  exporting function ColorInput with ?arguments? id and defaultValue
  const [inputValue, setInputValue] = useState(defaultValue);
  // lifting State of InputValueUp to App.js, in order to use it
  // (a) to adjust the connected input fields for hexCode and Contrast Text
  // and (b) to add the new color in the database/array color.js

  console.log(inputValue);

  function handleInputValue(event) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <input
        type="text"
        id={id}
        name={id}
        value={inputValue}
        onChange={handleInputValue}
      />
      <input type="color" value={inputValue} onChange={handleInputValue} />
    </>
  );
}
