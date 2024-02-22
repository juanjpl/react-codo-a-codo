import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { criptoSelector } from "../redux/selectors/criptoSelector";
import { CriptoLayout } from "../Layouts/criptoLayout";
import {getStateServiceThunk } from "../redux/middleware/criptoMiddleware";
import { getDataThunk } from "../redux/middleware/criptoMiddleware";
import { setCrypt } from "../redux/reducers/criptoReducer";

export const Cripto = () => {
  const { crypt, loading, state, price } = useSelector(criptoSelector);
  const dispatch = useDispatch();
  //console.log(state)



  const handleChange = e =>{
    dispatch(setCrypt(e.target.value))
  }

  const handleClick =()=>{ 
    dispatch(startLoading())
    dispatch(getDataThunk())
    //console.log(crypt,state,price)
  }

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

      <div className="bg-secondary-subtle p-4 rounded">
        <h3 className="bg-primary opacity-50 rounded p-1" >Ars:{price.ars} </h3>
        <h3 className="bg-success opacity-50 p-1 rounded">Usd:{price.usd} </h3>
        <h4></h4>
      </div>

      <h5>
        Loading:
        <b className= {
            loading
            ? 'badge text-bg-warning'
            : 'badge text-bg-success'
        }>
                {loading ? 'in progress' : 'finish'}
        </b>
      </h5>

      <input type="text" 
              className="w-100 form-control text-center bg-light"
              value={crypt}
              onChange={handleChange}
      />

      <button onClick={handleClick}
              className="btn btn-primary"
      >Buscar</button>
    </CriptoLayout>
  );
};
