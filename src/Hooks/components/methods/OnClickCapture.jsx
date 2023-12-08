import { centerStyle, evenStyle } from "../../styles";

export const OnClickCapture = () => {


    function handleClick(){
        console.log('Click primer botón');
    }

    function handleClickDos(){
        console.log('Click segundo botón');
    }

    function handleClickCapture(){
        console.log('Click Capture');
        e.stopPropagation();
        e.nativeEvent.stopInmediatePropoagation();
    }

  return (
    <div className={evenStyle + centerStyle}
     //onClick={handleClickCapture}
     onClickCapture={handleClickCapture}
     >
      <h3>OnclickCapture</h3>
      <button className="btn btn-outline-light" onClick={handleClick}>Primer Click</button>
      <button className="btn btn-outline-light" onClick={handleClickDos}>Segundo Click</button>
    </div>
  );
};
