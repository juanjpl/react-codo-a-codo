import { useEffect, useState } from "react";
import { evenStyle, errorStyle } from "../styles";
import { capital } from "../utilities";

export const UseEffect = () => {
  const [coins, setCoins] = useState({});
  const [error, setError] = useState([false, "No hay errores"]);
  const [loading, setLoading] = useState(true);
  const [crypto, setCrypto] = useState("bitcoin");

  const url = (currency) =>
    `https://api.coingecko.com/api/v3/simple/price?ids=${currency}&vs_currencies=ars%2Cusd`;
  const url_currencies_codes = () =>
    `https://api.coingecko.com/api/v3/simple/supported_vs_currencies`;
  const url_currencies_list = () =>
    `https://api.coingecko.com/api/v3/coins/list`;

  const btnHandleClick = (cryptoCurrency) => {
    if (cryptoCurrency === crypto) return;

    setCrypto(cryptoCurrency);
    setLoading(true);
  };

  

  useEffect(() => {
    const getPriceApi = async () => {
      try {
        if (loading) {
          let respuesta = await fetch(url(crypto));
          let data = await respuesta.json();
          //console.log(respuesta);
          //console.log(data);

          if (!Reflect.has(data, crypto)) {
            setError([true, "No se pudo obtener la cryptomoneda solicitada."]);
          }

          setCoins({ ...data[crypto] });
        }
      } catch (e) {
        setError([true, "No se pudo obtener la criptomonea solicitada."]);
      } finally {
        setLoading(false);
      }
    };

    setTimeout(() => getPriceApi(), 2000);
  }, [loading]);

  console.log(coins);

  return loading ? (
    <div>Cargando...</div>
  ) : error[0] ? (
    <div className={error[0] ? errorStyle : evenStyle}>{error[1]} </div>
  ) : (
    <div className={evenStyle}>
      <div>
        <h6>Criptomoneda: 1 {capital(crypto)} </h6>
        <h4>USD: ${coins.usd} </h4>
        <h3>ARS: ${coins.ars} </h3>
      </div>
      <div className="btn-group">
        <button
          className="btn btn-warning"
          onClick={() => btnHandleClick("bitcoin")}
        >
          Bitcoin{" "}
        </button>
        <button
          className="btn btn-primary"
          onClick={() => btnHandleClick("ethereum")}
        >
          Ethereum{" "}
        </button>
      </div>
    </div>
  );
};
