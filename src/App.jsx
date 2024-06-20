import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";
import { useState } from "react";
import { uid } from "uid";
// DONE WITH ADD COLOR and DELETE COLOR!

// ==== NOW CLEAN UP!!! ==== CLEAN UP!!! ==== CLEAN UP!!! ==== CLEAN UP!!!
// ==== CLEAN UP!!! ==== CLEAN UP!!! ==== CLEAN UP!!! ==== CLEAN UP!!!

//  ===== AND FIND PROBLEMS!!! (see Terminal/Problems below) ======
//  ===== AND FIND PROBLEMS!!! (see Terminal/Problems below) ======

// console.log("App.jsx is connected!");

function App() {
  const [colors, setColors] = useState(initialColors);
  // console.log("allColors: ", colors);

  // Hier definieren wir jetzt die Funktion handleAddColor mit der Parameter 'newColor'
  // ...und fügen eine Farbe ('newColor') zu den 'colors' hinzu,
  // sodass sie nicht mehr den Default/Anfangszustand 'initialcolors' haben, sondern jetzt:
  // quasi " 'colors'(aktueller Stand) = 'initialcolors' + newColor, mit einer neuen id: 'id: uid()';
  // Wir erstellen einen array (mit '[]'), packen darin aus (mit ...spread):                   (Q: Warum muss man die beiden auspacken, evor man sie gemeinsam in ein array legt?)
  // 'newColor' und 'colors'
  // und geben 'newColor' noch einen frischen id mit: 'id: uid()', sprich: "Dein id sei ...".  (Q: nicht sicher wg. id; stimmt das so?)
  function handleAddColor(newColor) {
    setColors([{ ...newColor, id: uid() }, ...colors]);
  }

  // ==============================NEW: id as parameter (not prop) of handleDeleteColor
  // ==========================and 'color.id !== id'
  // ==================== in the setter function:
  // ==================== 'setColors(colors.filter((color) => color.id !== id))'

  //

  // Wir definieren die Funktion handleDeleteColor
  // und geben ihr den Parameter (nicht Prop weil Top) 'id' mit.
  //
  // In der Funktion filtern wir alle Farben raus,
  // deren id ( = 'color.id' !!!) nicht mit der Variable(?) 'id' (s.o. in der handleAddColor-Funktion)
  // identisch ist.                                                                       (Q: Wo kommt die id her? Bzw., wo wird sie mitgegeben? Hier, in handleAddColor?)

  // siehe STATE UPDATEN: https://github.com/neuefische/hh-web-24-3/blob/main/sessions/react-state-3/react-state-3.md#removing-from-an-array

  function handleDeleteColor(id) {
    console.log("Ich bin die Funktion in der App.js", id);
    setColors(colors.filter((color) => color.id !== id));
  }

  // function handleDeleteColor aus ColorForm.jsx in die App.jsx verschoben (jetzt wie in Laura's Code);
  // es hatte vorher auch funktioniert, aber es hatte Fehlermeldungen gegeben; jetzt nicht mehr. :)

  // my latest version (verworfen!) before Laura found the solution:
  // // function handleDeleteColor(colorToDelete) {
  //   console.log("Ich bin die Funktion in der App.js");
  //   // state updaten https://github.com/neuefische/hh-web-24-3/blob/main/sessions/react-state-3/react-state-3.md#removing-from-an-array
  //   setColors(colors.filter((color) => color !== colorToDelete));
  //   // Chat GPT suggests changing the code below to the code in the line above,
  //   // i.e. simply taking out the square and curly brackets.
  //   // setColors([{ colors.filter((color) => color !== colorToDelete)}]);
  // }
  // //
  // // woanders: handleRemoveColor(colorToDelete);
  //=========================================================

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

  // =======================FINE UP TO HERE!!! (same as Laura's)
  // ============================================
  // ============================================
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
        // ================== return <Color color={color} key={color.id} />;
        // =============== replaced the line above with the one below
        // ========= - see esp. 'onDeleteColor={handleColor}' :
        return (
          <Color
            key={color.id}
            color={color}
            // there was a mistake here: "handleColor" instead of "handleDeleteColor"
            // no idea how it got in here!!!
            onDeleteColor={handleDeleteColor}
          />
        );
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

// =================== bei Laura scheint die Zeile 'export default App'
// ============ komplett zu fehlen und es funktoniert trotzdem!?<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>;
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
