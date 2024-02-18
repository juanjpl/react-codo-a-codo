import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { criptoSelector } from "../redux/selectors/criptoSelector";
import { CriptoLayout } from "../Layouts/criptoLayout";
import { getStateServiceThunk } from "../redux/middleware/criptoMiddleware";

export const Cripto = () => {
  const { crypt, loading, state, price } = useSelector(criptoSelector);
  const dispatch = useDispatch();
  console.log(state)

  useEffect(() => {
    dispatch(getStateServiceThunk());
  }, []);

  return (
    <CriptoLayout>
      <h1>Criptos </h1>
      <h2 className="bg-light text-dark rounded">{crypt} </h2>

      <div className="d-flex gap-2 justify-content-center">
        <h4>Estado del servicio:</h4>
        <h4>
     
          {
          state 
          ?   state === 200 
          ?   <div className="badge bg-success">En linea</div>
          :   <div className="badge bg-danger">Error de conexion</div>
          :   <div className="badge bg-warning text-dark">verificando.....</div>
          }
        </h4>
      
      </div>
    </CriptoLayout>
  );
};
