import React, { useState, useEffect } from "react";
import { Popup } from "./components/Popup/Popup";
import "./App.css";
import { useLaserEyes } from "@omnisat/lasereyes";
import { toast } from "react-toastify";

const App = () => {
  const [open, setOpen] = useState(false);
  const { connected, disconnect } = useLaserEyes();
  const [isConnected, setIsConnected] = useState(false);
  useEffect(() => {
    () => setIsConnected(connected);
  }, [connected]);
  return (
    <>
      {!isConnected ? (
        <div>
          <button
            onClick={() => {
              setOpen(true);
            }}
            className="connectBtn bg-[#E9983D] font-bold pt-2.5 pb-2.5 pl-4 pr-4 text-2xl rounded-md"
          >
            Connect
          </button>

          {open && !isConnected && (
            <Popup
              text="Launch and trade Runes at lightning-fast speeds."
              closePopup={() => setOpen(false)}
              setIsConnected={setIsConnected}
              setOpen={setOpen}
            />
          )}
        </div>
      ) : (
        <div>
          <button
            onClick={async () => {
              if (isConnected) {
                try {
                  disconnect(); // ✅ Properly calling disconnect()
                  toast.success("Disconnected Successfully");

                  setOpen(false);
                  setIsConnected(connected);
                  // console.log("isConnected:", connected);
                } catch (error) {
                  toast.error("Error disconnecting wallet");
                  console.error(error);
                }
              } else {
                toast.error("No wallet connected to disconnect");
              }
            }}
            className="connectBtn bg-[#C73E1D] font-bold pt-2.5 pb-2.5 pl-4 pr-4 text-2xl rounded-md"
          >
            Disconnect
          </button>
        </div>
      )}
    </>
  );
};

export default App;
