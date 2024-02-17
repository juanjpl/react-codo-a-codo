import React, { useState, useTransition } from "react";

export const UseTransition = () => {
  const [count, setCount] = useState(0);
  const [list, setList] = useState(50000);

  const [loading, startTransition] = useTransition();

  const styleDiv = { height: "10vh", overFlowY: "auto" };

  const addItems = () => {
    setCount(count + 1);

    startTransition(() => setList(list + 50000));
  };

  const simularGranProceso = () => {
    Array(list)
      .fill(1)
      .map((_, index) => <span key={index}>{list - index} </span>);
  };

  return (
    <div className="oddStyle + centerStyle">
      <h3>UseTransition</h3>
      <h4>Count: {count} </h4>

      <button className="btn btn-warning" onClick={addItems}>
        Agregar números
      </button>

      {loading ? <p>Cargando....</p> : undefined}

      <div className="form-control" style={styleDiv}>
        {simularGranProceso()}
      </div>
    </div>
  );
};
