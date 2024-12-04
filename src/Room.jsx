import  { useState } from "react";


const Room = () => {
  const [isLightOn, setIsLightOn] = useState(true); // true

  const toggleLight = () => {
    setIsLightOn((prevState) => !prevState);
  };

  return (
    <div className={isLightOn ? "lit" : "dark"}>
      <p>The room is {isLightOn ? "bright" : "dark"}</p>
      <button onClick={toggleLight}>
        Turn {isLightOn ? "off" : "on"}
      </button>
    </div>
  );
};

export default Room;
