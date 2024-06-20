import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";
import { useState } from "react";
import { uid } from "uid";

// DONE WITH ADD COLOR and DELETE COLOR!

// ==== KOMMENTARE KOMMEN SPÄTER WEG... :) ==== KOMMENTARE KOMMEN SPÄTER WEG... :) ==== KOMMENTARE KOMMEN SPÄTER WEG... :)

// console.log("App.jsx is connected!");

function App() {
  const [colors, setColors] = useState(initialColors);
  // console.log("allColors: ", colors);

  // -----------------
  // The variable 'initialColors', which represents an array of objects, is defined in the src/lib/colors.js,
  // i.e. the color database consisting of an array of objects
  // with one object for each of the 9 colors displayed in the browser after mounting the page;
  // the color objects have the following "properties": id, role, hex, contrastText;
  // im Code in colors.js steht außerdem, hinter jedem Objekt,
  // der "echte" Name der Farbe, der der "role" (input field 1) entspricht, auskommentiert.

  // Bem.: Definition of (JS) OBJECT:
  // "An object is a collection of properties, and a property is an association between a name (or key) and a value.
  // A property's value can be a function, in which case the property is known as a method."
  // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)

  // -----------------
  // Hierunter definieren wir jetzt die Funktion handleAddColor mit der Parameter 'newColor'
  // ...und fügen eine Farbe ('newColor') zu den 'colors' hinzu,
  // sodass sie nicht mehr den Default/Anfangszustand 'initialcolors' haben, sondern jetzt:
  // quasi " 'colors'(aktueller Stand) = 'initialcolors' + newColor, mit einer neuen id: 'id: uid()';
  // Wir erstellen einen array (mit '[]'), packen darin aus (mit ...spread):                   (Q: Warum muss man die beiden auspacken, evor man sie gemeinsam in ein array legt?)
  // 'newColor' und 'colors'
  // und geben 'newColor' noch einen frischen id mit: 'id: uid()', sprich: "Dein id sei ...".  (Q: nicht sicher wg. id; stimmt das so?)

  function handleAddColor(newColor) {
    setColors([{ ...newColor, id: uid() }, ...colors]);
  }

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

  // Bem.: Jetzt geben wir der ColorForm noch die Funktion 'handleAddColor', die
  // mit: 'onSubmitColor={handleAddColor}'; als property mit. Sie wird dann als "onSubmitColor" verwendet werden.

  // ACHTUNG!!! PROBLEM BELOW! --- ACHTUNG!!! PROBLEM BELOW! --- ACHTUNG!!! PROBLEM BELOW! ---
  // Ich denke, der Name sollte gleich bleiben: 'onAddColor' enstprechend 'handleAddColor',
  // NICHT 'onSubmitColor' !!!! --- BESSER 'onAddColor' !!! ---

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleAddColor} />
      {colors.map((color) => {
        return (
          <Color
            key={color.id}
            color={color}
            onDeleteColor={handleDeleteColor}
          />
        );
      })}
    </>
  );
}

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>;

export default App;
