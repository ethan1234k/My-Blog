

import React, { useState } from "react";
import ModalExample from "./ModalExample";

const OpenModal = () => {
  const [modalExampleOpen, setModalExampleOpen] = useState(false);
  const [modalExampleRefresh, setModalExampleRefresh] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setModalExampleOpen(true);
          setModalExampleRefresh(!modalExampleRefresh);
        }}
      >
        Open Modal In Another File
      </button>
      <ModalExample open={modalExampleOpen} refresh={modalExampleRefresh}/>
    </div>
  );
};

export default OpenModal;



// const OpenModal = () => {
//   const [modalExampleOpen, setModalExampleOpen] = useState(false);
//   const [modalExampleRefresh, setModalExampleRefresh] = useState(false);

//   return (
//     <div>
//       <button
//         onClick={() => {
//           setModalExampleOpen(true);
//           setModalExampleRefresh(!modalExampleRefresh);
//         }}
//       >
//         Open Modal In Another File
//       </button>
//       <ModalExample open={modalExampleOpen} refresh={modalExampleRefresh} />
//     </div>
//   );
// };

// export default OpenModal;


// const [number, setNumber] = useState(0);

// useEffect(() => {
//   console.log("useEffect Triggered");
// }, [number]);

// return (
//     <button onClick={() => setNumber(number + 1)}>Increase Number</button>
// )
