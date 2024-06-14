import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
// LATER - once I use it here:
import Form from "./Components/Form/Form";

import "./App.css";

// OMIT?: import react
// import React from "react";
// LATER: import useState
// import { useState } from "react";

// TASKS:
// - Implement a ColorForm component
//     that allows users to
//      submit new colors to the theme.

// - (inside the ColorForm component) Use a package
// to generate unique id's like nanoid or ui
// - Develop a ColorInput component
//      to handle synchronized text and color inputs,
//        ensuring that they reflect the same value.
//    ( Controlled Inputs )

console.log("App.jsx is connected!");

function App() {
  return (
    <>
      <h1>Theme Creator</h1>
      {/* create component in which to get form from Form.jsx  */}
      <>
        {/* LATER MOVE THE <form> TAG!!! into Form.jsx */}
        <form>
          {/* add classes for layout with css */}

          <label htmlFor="Role">Colour Role</label>
          {/* defaultValue={initialData.hex} von Laura übernommen; siehe Tip in den instructions!!!
          außerdem noch value="" and inputValue="" hinzufügen - mit UseSate auf jeden Fall*/}
          <input type="text" role="background main" id="Role" />

          {/* below: später mit useState wieder as defaultWert verwenden:
              defaultValue={initialData.hex} */}

          {/* arrange the 2 fields for each horizontally with Flexbox*/}
          {/* Labels above the (text) fields */}
          {/* maybe use pattern="xy" for role and hex value?*/}

          {/* group fields togther with fieldset tag, (s. HO HTML Forms) */}

          <fieldset>
            <label htmlFor="hexValueText">Hex Colour Code</label>
            <input
              type="text"
              role="background main"
              id="hexValueText"
              name="red"
            />
            {/* ADD LATER: 
              value="hexValueRed"
 */}
            <label htmlFor="hexValueColor"></label>
            <input
              type="color"
              role="background main"
              name="red"
              id="hexValueColor"
            />
            {/* ADD LATER: 
              value="hexValueRed"
 */}
            {/* use color picker tool, see html form handout, p.3 */}
            {/* type="color" creates a color picker */}
            {/* change type then */}
          </fieldset>

          <fieldset>
            <label htmlFor="textContrastText">Text Contrast</label>
            {/* 
            !!! -----------
            DAS PROBLEM LIEGT HIER UNTEN DRIN!!!
            !!! ---------
            */}
            <input
              type="text"
              role="background main"
              name="yellow"
              id="textContrastText"
            />
            {/* BUG FIX: 
                This was inside the input above; check where it comes from
                 and what it is good for; ah, I think it was the default value 
                 I wanted to use! 
              "#54c73d" */}

            {/* connect hexValueText and hexValueColor as well as 
      contrastText and contrastColor, 
      so when one of them is filled in (with a string 
        or color respectively), 
      the other automatically gets filled in with the other value, 
      i.e. with a color or string, respectively.  */}

            <label htmlFor="textContrastColor"></label>
            <input
              type="color"
              role="background main"
              name="green"
              id="textContrastColor"
            />
            {/* USE LATER: 
            default value for contrast: "#000000" */}

            {/* use color picker tool, see html form handout, p.3 */}
            {/* maybe a radio element or dropdown menu for contrast? */}
          </fieldset>

          {/* add sth. like this for the button later: 
          onClick="addColorButton" */}
          <button type="submit" aria-label="add Color">
            Add Colour
          </button>

          {/* JETZT: GIVE FUNCTION TO BUTTON!!!

      Upon submission, 
      the new color is added to the top of the colors 
      and is displayed on a color card to confirm addition. */}

          {/* adds a bar of the selected color 
      above/on top of the other bars,
      with the entered/selected string names 
      of hex, role and contrast (in this order) */}

          {/* if therewas enough time, one could add a reset button 
      in order to delete all previous choices - Challenge 3!*/}
        </form>
      </>
      {initialColors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
