import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import Sidebar from "./components/sidebar";
import EmptyState from "./components/empty-state";
import StocksTable from "./components/stocks-table";
import StocksCharts from "./components/stocks-charts";
import StockForm from "./components/stock-form";

import { stockListState } from "../store/atoms";

const Stocks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [stocks] = useRecoilState(stockListState);

  useEffect(() => {
    if (
      !confirm(
        "Ao utilizar o Planilha Pit você está ciente de que nenhuma informação deste domínio deve ser considerada uma recomendação."
      )
    ) {
      location.href = "/";
    }
  }, []);

  return (
    <div className="container mt-5">
      <Sidebar tabIndex={tabIndex} onSetTabIndex={setTabIndex} />

      <hr />

      <StockForm />

      {stocks.length ? (
        tabIndex === 0 ? (
          <StocksTable />
        ) : (
          <StocksCharts />
        )
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

export default Stocks;
