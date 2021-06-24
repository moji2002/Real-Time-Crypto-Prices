import { useRef, useState } from "react";
import useWebSocketWithCB from "../hooks/useWebSocketWithCB";
import classes from "./table.module.scss";

const CryptoTable = () => {
  const [priceList, setPriceList] = useState({});
  const URL = "wss://stream.binance.com:9443/ws/!miniTicker@arr";
  const previousPrices = useRef({});

  const coinList = [
    "BTCUSDT",
    "DOTUSDT",
    "BNBUSDT",
    "ETHUSDT",
    "ADAUSDT",
    "SOLUSDT",
  ];

  const onMessage = (data: any) => {
    let newObject = {};

    for (const item of data) {
      if (coinList.includes(item.s)) {
        setPriceList((pre) => {
          const newItem = {
            [item.s]: {
              price: item.c,
            },
          };
          newObject = { ...pre, ...newItem };
          return newObject;
        });
      }
    }
    previousPrices.current = newObject;
  };

  useWebSocketWithCB(URL, onMessage);

  const headers = ["Symbol", "price"];

  return (
    <table className={classes.table}>
      <thead>
        <tr className={classes.table__row}>
          {headers.map((item) => (
            <th className={classes.table__cell} key={item}>
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.entries(priceList).map(([symbol, coin]) => {
          const price = parseFloat(coin.price);
          const prePrice = parseFloat(previousPrices.current[symbol]?.price);
          const className =
            price === prePrice
              ? ""
              : price > prePrice
              ? classes.positive
              : classes.negative;
          return (
            <tr className={`${classes.table__row} ${className}`} key={symbol}>
              <th className={classes.table__cell}>{symbol}</th>
              <td className={classes.table__cell}>{price.toString()}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CryptoTable;
