import { useState } from "react";
import "./Color.css";

export default function Color({ color, onDeleteColor }) {
  const [isConfirming, setIsConfirming] = useState(false);

  function handleConfirmMessage() {
    setIsConfirming(!isConfirming);
  }

  function confirmDelete(id) {
    onDeleteColor(id);
  }

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {isConfirming ? (
        <>
          <p className="color-card-highlight">Really delete?</p>
          <button className="color-delete" onClick={handleConfirmMessage}>
            Cancel
          </button>
          {/* erst wenn der button wech damit geklickt wird, soll die funktion ausgeführt werden */}
          <button
            className="color-delete"
            onClick={() => {
              confirmDelete(color.id);
            }}
          >
            Wech damit
          </button>
        </>
      ) : (
        <button onClick={handleConfirmMessage}>Delete</button>
      )}
    </div>
  );
}

// ========So. Jetzt kommentiere ich alles von hier an abwärts erstmal aus
// und paste Lauras Version von Color.jsx hierrein; mal gucken, ob es dann funktioniert.

// import "./Color.css";

// // MEINS - hatte vor DELETE COLOR gut funktionert;
// // ich kommentiere es jetzt trotzdem mal aus
// // um das von Laura hier rein zu pasten
// // nächstes Mal unbedungt vorher pushen und einen neuen Branch erstellen;
// // das macht das auskommenteieren überflüssig - viel Besser!
// //
// // export default function Color({ color }) {
// //   return (
// //     <div
// //       className="color-card"
// //       style={{
// //         background: color.hex,
// //         color: color.contrastText,
// //       }}
// //     >
// //       <h3 className="color-card-headline">{color.hex}</h3>
// //       <h4>{color.role}</h4>
// //       <p>contrast: {color.contrastText}</p>
// //     </div>
// //   );
// // }

// // ersetzt durch LAURAS:=================
// export default function Color({ color, onDeleteColor }) {
//   const [isConfirming, setIsConfirming] = useState(false);

//   function handleConfirmMessage() {
//     setIsConfirming(!isConfirming);
//   }

//   function confirmDelete(id) {
//     onDeleteColor(id);
//   }

//   return (
//     <div className="color-card">
//       <h3 className="color-card-headline">{color.hex}</h3>
//       <h4>{color.role}</h4>
//       <p>contrast: {color.contrastText}</p>
//       {isConfirming ? (
//         <>
//           <p className="color-card-highlight">Really delete?</p>
//           <button className="color-delete" onClick={handleConfirmMessage}>
//             Cancel
//           </button>
//           {/* erst wenn der button wech damit geklickt wird, soll die funktion ausgeführt werden */}
//           <button
//             className="color-delete"
//             onClick={() => {
//               confirmDelete(color.id);
//             }}
//           >
//             Wech damit
//           </button>
//         </>
//       ) : (
//         <button onClick={handleConfirmMessage}>Delete</button>
//       )}
//     </div>
//   );
// }
