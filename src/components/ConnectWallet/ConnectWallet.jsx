import { LEATHER, UNISAT, XVERSE, useLaserEyes } from "@omnisat/lasereyes";
import Button from "../Button/Button";
import { toast } from "react-toastify";
function ConnectWallet() {
  const { connect, disconnect } = useLaserEyes();
  // const { successConnect, setSuccessConnect } = useState("");
  // const { errorConnect, setErrorConnect } = useState("");
  const errorNotify = (name) =>
    toast.error(`Error connecting to ${name} wallet`);
  const successNotify = (name) =>
    toast.success(`Successfully Connected to ${name} wallet`);
  return (
    <>
      <button
        onClick={async () => {
          try {
            await connect(LEATHER);
            // setSuccessConnect(() => " Leather ");
            successNotify("Leather");
          } catch (error) {
            // setErrorConnect(() => " Leather ");
            errorNotify("Leather");
          }
        }}
      >
        <Button label="Leather" />
      </button>

      <button
        onClick={async () => {
          try {
            await connect("magic-eden");
            // setSuccessConnect(() => " Magic Eden ");
            successNotify("Magic Eden");
          } catch (error) {
            // setErrorConnect(() => " Magic Eden ");
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
            // setSuccessConnect(() => " Unisat ");
            successNotify("Unisat");
          } catch (error) {
            // setErrorConnect(() => " Unisat ");
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
            // setSuccessConnect(() => " Xverse ");
            successNotify("Xverse");
          } catch (error) {
            // setErrorConnect(() => " Xverse ");
            errorNotify("Xverse");
          }
        }}
      >
        <Button label="Xverse" />
      </button>

      <button
        onClick={async () => {
          try {
            await connect("okx");
            // setSuccessConnect(() => " OKX ");
            successNotify("OKX");
          } catch (error) {
            // setErrorConnect(() => " OKX ");
            errorNotify("OKX");
          }
        }}
      >
        <Button label="OKX" />
      </button>

      {/* <button onClick={disconnect}>
        <Button label="Disconnect" />
      </button> */}
    </>
  );
}
export default ConnectWallet;
