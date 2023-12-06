
import { useEffect, useState } from "react";
import { evenStyle, errorStyle } from "../styles";
import { capital } from "../utilities";

export const useMapeado = (url) =>{


const [coins, setCoins] = useState({});
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

return { data}

}