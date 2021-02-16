import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import NumberFormat from "react-number-format";
import { toast } from "react-toastify";
import { CSVLink } from "react-csv";
import { parse } from "papaparse";

import DevelopedBy from "./developed-by";

import { balanceState, stockListState } from "../../store/atoms";
import {
  stockListTotalState,
  stockListIdealTotalState,
} from "../../store/selectors";

const Sidebar = () => {
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
    <div className="">
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
          className="form-control"
          autoFocus
        />
        <label htmlFor="">Saldo</label>
        <div className="form-text">Seu saldo total na corretora.</div>
      </div>

      <div className="form-floating mt-3">
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

      <div className="form-floating mt-2">
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

      <div className="d-grid gap-2 mt-3">
        <CSVLink
          filename="planilhapit-stocks.csv"
          data={stocks}
          separator={";"}
          className="btn btn-dark btn-block"
          onClick={handleClickExport}
        >
          Exportar CSV
        </CSVLink>
        <button
          className="btn btn-dark btn-block"
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
      </div>

      <hr />

      <div className="d-grid gap-2">
        <button className="btn btn-dark btn-block disabled">Entrar</button>
        <button className="btn btn-link btn-sm btn-block text-dark disabled">
          Criar uma conta
        </button>
      </div>

      <div className="mt-5">
        <DevelopedBy />
      </div>
    </div>
  );
};

export default Sidebar;
