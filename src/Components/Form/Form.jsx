import "./Form.css";

// Users can input a role, hex value,
// and contrast text via a form
// to add a new color to the theme.

// The form should be prefilled with default values
// to guide user input.

export default function Form() {
  return (
    // ist es nötig/sinnvol, hier ein div drum zu wrappen?
    // oder reicht es, dass alles in form steckt?
    //     <div
    //       className="color-card"
    //       style={{
    //         background: color.hex,
    //         color: color.contrastText,
    //       }}
    //     >
    <form>
      {/* add classes for layout with css */}

      <label htmlFor="Role">Colour Role</label>
      <input type="text" role="background main" id="Role"></input>

      {/* inputs for hex and contrastText should include 
both color and text input types */}

      <label htmlFor="hexValueText">hex Colour Code</label>
      <input type="text" role="background main" id="hexValueText"></input>

      <label htmlFor="hexValueColor">hex Colour Code</label>
      <input type="color" role="background main" id="hexValueColor"></input>
      {/* use color picker tool, see html form handout, p.3 */}
      {/* change type then */}

      <label htmlFor="contrastText">Text Contrast</label>
      <input type="text" role="background main" id="contrastText"></input>

      <label htmlFor="contrastColor">Text Contrast</label>
      <input type="color" role="background main" id="contrastColor"></input>
      {/* use color picker tool, see html form handout, p.3 */}
      {/* change type then */}
    </form>
    //     </div>
  );
}

// export default function Color({ color }) {
//   return (
//     <div
//       className="color-card"
//       style={{
//         background: color.hex,
//         color: color.contrastText,
//       }}
//     >
//       <h3 className="color-card-headline">{color.hex}</h3>
//       <h4>{color.role}</h4>
//       <p>contrast: {color.contrastText}</p>
//     </div>
//   );
// }
