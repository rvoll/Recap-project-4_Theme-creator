import { useState } from "react";

// DONE FOR NOW

// Überarbeiten:

//  Exporting the function 'colorInput' with the Props 'id' and 'defaultValue',
// lifting (=passing) the State of 'inputValue' up to App.js, in order to use it
// (a) to adjust the connected input fields for hexCode and Contrast Text
// and (b) to add the new color in the DOM database/array color.js

export default function ColorInput({ id, defaultValue }) {
  const [inputValue, setInputValue] = useState(defaultValue);

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
