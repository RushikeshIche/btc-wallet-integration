import React from "react";

const setConnected = ({ connected }) => {
  const [Connected, setConnected] = useState(false);
  () => setConnected(connected);
};

export default setConnected;
