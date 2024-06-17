import "../ColorForm/ColorForm.css";
import ColorInput from "../ColorInput/ColorInput";
import "../Color/Color.jsx";

/////////////////////////////////////////////////

/////////////////////////////////////////////////
// ColorForm component:
//  allows users to submit new colors to the theme.
// only AFTER THIS: Develop a ColorInput component
// to handle synchronized text and color inputs (see instructions for details:
//github.com/users/rvoll/projects/1/views/1?pane=issue&itemId=67105882 )

console.log("ColorForm.jsx is connected!");

// Struktur der Funktion: ColorForm({object,y=nothing})
export default function ColorForm({
  onSubmitColor,
  initialData = { role: "some color", hex: "#123456", contrastText: "#ffffff" },
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmitColor(data);
  }

  return (
    // <form className="color-form" onSubmit={handleSubmit}>
    <form className="color-form" onSubmit={handleSubmit}>
      <label htmlFor="role">
        Role
        <br />
        <input
          type="text"
          id="role"
          name="role"
          defaultValue={initialData.role}
        />
      </label>
      <br />
      <label htmlFor="hex">
        Hex
        <br />
        <ColorInput id="hex" defaultValue={initialData.hex} />
      </label>
      <br />
      <label htmlFor="contrastText">
        Contrast Text
        <br />
        <ColorInput id="contrastText" defaultValue={initialData.contrastText} />
      </label>
      <br />
      {/* <button>ADD COLOR</button> */}
      <button type="submit">ADD COLOR</button>
    </form>
  );
}

/////////////////////////////////////////////////////
// // kopiert von Laura (17.06.24):

//       <label htmlFor="hex">
//         Hex
//         <br />
//         <ColorInput id="hex" defaultValue={initialData.hex} />
//       </label>
//       <br />
//       <label htmlFor="contrastText">
//         Contrast Text
//         <br />
//         <ColorInput id="contrastText" defaultValue={initialData.contrastText} />
//       </label>
//       <br />
//       <button type="submit">ADD COLOR</button>
//     </form>
//   );
// }

////////////////////////////////////////////////

// TASKS:
// The form should be prefilled with default values to guide user input.
// Upon submission, the new color is added to the top of the colors
// and is displayed on a color card to confirm addition.

///////////////////////////////////////
// final COMMENTS
//