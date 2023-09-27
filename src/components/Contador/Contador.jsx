import React, { useState } from "react";
import "./contador.css";

export default function Contador() {
  const [numero, setNum] = useState(1);

  const handCountPlus = () => {
    if (numero < 15) {
      setNum(numero + 1);
    }
  };

  const handCountMinus = () => {
    if (numero > 0) {
      setNum(numero - 1);
    }
  };

  const maximoClass = numero === 15 ? "maximo" : "";
  const minimoClass = numero === 0 ? "maximo" : "";

  return (
    <div className="items-center  text-center mr-4 my-auto">
      <button
        type=""
        className={`${minimoClass} countBtn text-white font-bold mr-2 active:bg-gray-800`}
        onClick={handCountMinus}
      >
        -
      </button>
      <span className="font-bold">{numero}</span>
      <button
        type=""
        id="sumarbtn"
        className={`${maximoClass} countBtn text-white font-bold ml-2 active:bg-gray-800`}
        onClick={handCountPlus}
      >
        +
      </button>
    </div>
  );
}
