import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";
import { useState } from "react";
import { uid } from "uid";
// DONE WITH ADD COLOR

// NOW - DELETE COLOR:
// I want to delete a color from the theme, so that I can
// remove colors that I no longer need or want in my custom theme.
//
// - add a remove button in the ColorForm File
// - use xy to give the button its function
// - structure/path for the props:

console.log("App.jsx is connected!");

// onSubmitColor muss xy ???
// von hier (App.jsx) mitgegeben werden!

function App() {
  // von JEssica:
  const [colors, setColors] = useState(initialColors);
  console.log("allColors", colors);

  // Hier definieren wir jetzt die Funktion OnSubmit
  function handleAddColor(newColor) {
    // jetzt wird eine color zu den initial colors hinzugefügt:

    setColors([{ ...newColor, id: uid() }, ...colors]);
  }
  // ------------------------------------
  // DIENSTAG: Also muss auch onSubmitRemoveColor
  // von hier mitgegeben werden.

  // function handleRemoveColor(newColor) {
  // jetzt wird eine color von den
  // (???initial) colors weggenommen:

  //   setColors([{ ...newColor, id: uid() }, ...colors]);
  // }

  // =======================================
  // Hier kommt die Filterfunktion rein:
  // setColors([---HIER WEITER!!!------HIER WEITER!!!------HIER WEITER!!!---])
  // Muss ich hier eine andereVariable benutzen?
  // Sowas wie reducedColors, äquivalent zu allColors bei AddColor?

  // =======================================

  return (
    <>
      <h1>Theme Creator</h1>
      {/* Bem.: jetzt geben wir der ColorForm noch eine property mit 
      (die geben wir runter von der App js) */}
      <ColorForm onSubmitColor={handleAddColor} />
      {/*  */}
      {/* --------------------------------------- */}
      {/* DIENSTAG NEU: REMOVE COLOR: 
    maybe find better name than "onSubmitRemoveColor"?
    e.g. "onSubmitRemoveColor"? Or is the Submit-part essential for its function?, 
    i.e. part of the syntax?*/}
      {/* <ColorForm onSubmitRemoveColor={handleRemoveColor} /> */}
      {/* --------------------------------------- */}
      {/*  */}
      {colors.map((color) => {
        return <Color color={color} key={color.id} />;
      })}
    </>
  );
}
// bei Laura fehlen die inneren diamonds,
// deshalb habe ich sie jetzt hier auch mal rausgenommen;
// außerdem ist bei ihr die Reihenfolge der properties umgekehrt:
// <Color key={color.id} color={color} />
// Ich behalte erstmal meine Reihenfolge bei, bis es Probleme gibt

// In the code above,
// the variable initialColors is defined in the color.js
// It represents the array of objects in src/lib/colors.js,
// i.e. the color database consisting of
// an array of objects with one object for each of the 9 colors
// displayed in the browser after mounting the page;
// the color objects have the following
// properties: id, role, hex, contrastText
// und "real name" auskommentiert

export default App;

// Laura's Version (17.06.24):

// function App() {
//   return (
//     <>
//       <h1>Theme Creator</h1>
//       <ColorForm />
//       {initialColors.map((color) => {
//         return <Color key={color.id} color={color} />;
//       })}
//     </>
//   );
// }

// export default App;

// ///////////////////////////////
//
// NOT NECESSARY TO IMPORT useState OR uid HERE
// (see Laura's version)
// import { useState } from "react";
