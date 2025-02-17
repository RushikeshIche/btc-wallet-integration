import React, { useState } from "react";
import { Popup } from "./components/Popup/Popup";
import "./App.css";
const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <button
          onClick={() => setOpen(true)}
          className="connectBtn bg-[#E9983D] font-bold pt-2.5 pb-2.5 pl-4 pr-4 text-2xl rounded-md"
        >
          Connect
        </button>
        {open ? (
          <Popup
            text="Launch and trade Runes at lightning-fast speeds."
            closePopup={() => setOpen(false)}
          />
        ) : null}
      </div>
    </>
  );
};
export default App;
