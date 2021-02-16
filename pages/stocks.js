import React, { useState } from "react";
import { useRecoilState } from "recoil";
import classNames from "classnames";

import Sidebar from "./components/sidebar";
import EmptyState from "./components/empty-state";
import StocksTable from "./components/stocks-table";
import StocksCharts from "./components/stocks-charts";
import StockForm from "./components/stock-form";

import { stockListState } from "../store/atoms";

const Stocks = () => {
  const [showStockForm, setShowStockForm] = useState(true);
  const [tabIndex, setTabIndex] = useState(0);
  const [stocks] = useRecoilState(stockListState);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 col-lg-2">
          <Sidebar />
        </div>
        <div className="col-12 col-lg-10">
          <div className="d-flex justify-content-between align-items-center font-weight-bold">
            <div className="btn-group">
              <button
                type="button"
                className={classNames([
                  "btn px-5",
                  {
                    "btn-dark": tabIndex === 0,
                    "btn-outline-dark": tabIndex === 1,
                  },
                ])}
                onClick={() => setTabIndex(0)}
              >
                Planilha
              </button>
              <button
                type="button"
                className={classNames([
                  "btn px-5",
                  {
                    "btn-dark": tabIndex === 1,
                    "btn-outline-dark": tabIndex === 0,
                  },
                ])}
                onClick={() => setTabIndex(1)}
              >
                Gráfico
              </button>
            </div>
            {/* <div className="">
              <button
                className="btn btn-dark px-5"
                onClick={() => setShowStockForm(!showStockForm)}
              >
                Adicionar ativo
              </button>
            </div> */}
          </div>

          {showStockForm && <StockForm />}

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
      </div>
    </div>
  );
};

export default Stocks;
