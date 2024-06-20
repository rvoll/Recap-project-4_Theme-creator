import "../ColorForm/ColorForm.css";
import ColorInput from "../ColorInput/ColorInput";
import "../Color/Color.jsx";

console.log("ColorForm.jsx is connected!");

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
      <button type="submit">ADD COLOR</button>
    </form>
  );
}

// NOTES ColorForm.jsx

// BEm.: The trailing comma in the function ColorForm:
// ColorForm({function, ?key(initialData) = {newly invented object (consisting of keys
// and properties) as default value for the input
// fields} HERE:>>>,<<<:HERE })
// {...}
// is just an orthographic convention(!) to make it easier to add parameters later.
// It has no other function.
