import React, { useState } from "react";

const Boton = () => {
  const [clicks, setClicks] = useState(0);

  return (
    <div>
      <button
        className="btn btn-light"
        onClick={() => {
          setClicks(clicks + 1);
        }}
      >
        {" "}
        Hola {clicks}
      </button>
    </div>
  );
};

export default Boton;
