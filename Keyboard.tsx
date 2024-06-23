// The below one is a react component which reads the keyboard clicks and writes them on the screen

import { useEffect, useState } from "react";

const Keyboard = () => {
  const [keys, setKeys] = useState<string[]>([]);

  // The below function reads keyboard clicks and stores them in the above variable only if it is not there
  const handleKeyDown = (e: KeyboardEvent) => {
    if (!keys.includes(e.key)) {
      setKeys([...keys, e.key]);
    }
  };

  // The below function deletes the key which is released
  const handleKeyUp = (e: KeyboardEvent) => {
    setKeys(keys.filter((key) => key !== e.key));
  };

  useEffect(() => {
    
    // The below function adds event listeners to the react app
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // The below function removes the event listeners to stop the program from creating multiple event listeners
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [keys]);

  return (
    <div>
      <p>Pressed keys: {keys.join(", ")}</p>
    </div>
  );
};

export default Keyboard;
