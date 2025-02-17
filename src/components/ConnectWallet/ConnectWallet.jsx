import { LEATHER, UNISAT, XVERSE, useLaserEyes } from "@omnisat/lasereyes";
import Button from "../Button/Button";
function ConnectWallet() {
  const { connect, disconnect } = useLaserEyes();
  return (
    <>
      <button onClick={() => connect(LEATHER)}>
        <Button label="Leather" />
      </button>

      <button onClick={() => connect("magic-eden")}>
        <Button label="Magic Eden" />
      </button>

      <button onClick={() => connect("unisat")}>
        <Button label="Unisat" />
      </button>

      <button onClick={() => connect("xverse")}>
        <Button label="Xverse" />
      </button>

      <button onClick={() => connect("okx")}>
        <Button label="OKX" />
      </button>

      {/* <button onClick={disconnect}>
        <Button label="Disconnect" />
      </button> */}
    </>
  );
}
export default ConnectWallet;
