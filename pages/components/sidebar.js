import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import NumberFormat from "react-number-format";
import { toast } from "react-toastify";
import { FiFileText } from "react-icons/fi";
import { CSVLink } from "react-csv";
import { parse } from "papaparse";
import classNames from "classnames";

import { balanceState, stockListState } from "../../store/atoms";
import {
  stockListTotalState,
  stockListIdealTotalState,
} from "../../store/selectors";

const Sidebar = ({ tabIndex, onSetTabIndex }) => {
  const [balance, setBalance] = useRecoilState(balanceState);
  const [stocks, setStocks] = useRecoilState(stockListState);
  const stockListTotal = useRecoilValue(stockListTotalState);
  const stockListIdealTotal = useRecoilValue(stockListIdealTotalState);

  const handleClickExport = async (event) => {
    try {
      toast.success("A lista de ativos foi exportada!");
    } catch (error) {
      console.log(error);

      toast.error("Erro ao tentar exportar lista de ativos!");
    }
  };

  const handleClickImport = async (event) => {
    try {
      const file = event.target.files[0];

      parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          setStocks(results.data);

          toast.success("A lista de ativos foi importada!");
        },
      });
    } catch (error) {
      console.log(error);

      toast.error("Erro ao tentar importar lista de ativos!");
    }

    event.target.value = null;
  };

  return (
    <div className="row">
      <div className="col-2">
        <div className="form-floating">
          <NumberFormat
            defaultValue={0}
            value={balance}
            prefix="R$ "
            thousandSeparator="."
            decimalSeparator=","
            decimalScale={2}
            fixedDecimalScale={true}
            allowLeadingZeros={false}
            onValueChange={(values) => setBalance(values.floatValue)}
            className="form-control fw-bold"
            autoFocus
          />
          <label htmlFor="">Saldo</label>
          <div className="form-text">Seu saldo total na corretora.</div>
        </div>
      </div>

      <div className="col-2">
        <div className="form-floating">
          <NumberFormat
            defaultValue={0}
            value={stockListTotal}
            prefix="R$ "
            thousandSeparator="."
            decimalSeparator=","
            decimalScale={2}
            fixedDecimalScale={true}
            allowLeadingZeros={false}
            className="form-control"
            readOnly
          />
          <label htmlFor="">Total atual</label>
        </div>
      </div>

      <div className="col-2">
        <div className="form-floating">
          <NumberFormat
            defaultValue={0}
            value={stockListIdealTotal}
            prefix="R$ "
            thousandSeparator="."
            decimalSeparator=","
            decimalScale={2}
            fixedDecimalScale={true}
            allowLeadingZeros={false}
            className="form-control"
            readOnly
          />
          <label htmlFor="">Total ideal</label>
        </div>
      </div>

      <div className="col-3 offset-2">
        <label htmlFor="">Visualização</label>
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
              // style={{ height: "58px" }}
              onClick={() => onSetTabIndex(0)}
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
              // style={{ height: "58px" }}
              onClick={() => onSetTabIndex(1)}
            >
              Gráfico
            </button>
          </div>
        </div>
      </div>

      <div className="col-1">
        <label htmlFor="">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </label>
        <div className="btn-group float-right" style={{ width: "100%" }}>
          <button
            type="button"
            className="btn btn-dark dropdown-toggle"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            <FiFileText className="mr-2 ml-3" />
          </button>
          <ul className="dropdown-menu dropdown-menu-right dropdown-menu-dark">
            <li>
              <button
                className="dropdown-item"
                onClick={() => document.getElementById("stockListFile").click()}
              >
                Importar CSV
              </button>
              <input
                id="stockListFile"
                type="file"
                accept=".csv"
                className="form-control-file"
                onChange={handleClickImport}
              />
            </li>
            <li>
              <CSVLink
                filename="planilhapit-stocks.csv"
                data={stocks}
                separator={";"}
                className="dropdown-item"
                onClick={handleClickExport}
              >
                Exportar CSV
              </CSVLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
