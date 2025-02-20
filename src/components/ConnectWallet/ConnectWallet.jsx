import { LEATHER, UNISAT, XVERSE, useLaserEyes } from "@omnisat/lasereyes";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { toast } from "react-toastify";

function ConnectWallet({ setIsConnected, setOpen }) {
  const errorNotify = (name) =>
    toast.error(`Error connecting to ${name} wallet`);
  const successNotify = (name) =>
    toast.success(`Successfully Connected to ${name} wallet`);

  const { connected, connect, disconnect, address } = useLaserEyes();

  useEffect(() => {
    // console.log("🔄 Wallet Connection Status Updated:", connected);
    setIsConnected(connected);

    if (connected) console.log(address);
  }, [connected, address]);
  return (
    <>
      <button
        onClick={async () => {
          try {
            await connect(LEATHER);
            successNotify("Leather");
          } catch (error) {
            errorNotify("Leather");
          }
        }}
      >
        <Button label="Leather" />
      </button>
      <button
        onClick={async () => {
          try {
            await connect(MAGIC_EDEN);

            successNotify("Magic Eden");
          } catch (error) {
            errorNotify("Magic Eden");
          }
        }}
      >
        <Button label="Magic Eden" />
      </button>
      <button
        onClick={async () => {
          try {
            await connect(UNISAT);
            successNotify("Unisat");
          } catch (error) {
            errorNotify("Unisat");
          }
        }}
      >
        <Button label="Unisat" />
      </button>

      <button
        onClick={async () => {
          try {
            await connect(XVERSE);
            successNotify("Xverse");
          } catch (error) {
            errorNotify("Xverse");
          }
        }}
      >
        <Button label="Xverse" />
      </button>
      <button
        onClick={async () => {
          try {
            await connect(OKX);

            successNotify("OKX");
          } catch (error) {
            errorNotify("OKX");
          }
        }}
      >
        <Button label="OKX" />
      </button>
    </>
  );
}

export default ConnectWallet;
