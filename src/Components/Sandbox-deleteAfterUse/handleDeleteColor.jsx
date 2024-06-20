function handleDeleteColor(colorToDelete) {
    console.log("Ich bin die Funktion in der App.js", id);
    // state updaten https://github.com/neuefische/hh-web-24-3/blob/main/sessions/react-state-3/react-state-3.md#removing-from-an-array
    
    setColors([{ colors.filter((color) => color !== colorToDelete)}]);

  }

  woanders: handleRemoveColor(colorToDelete)