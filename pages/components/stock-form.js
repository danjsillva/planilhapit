import React, { useState } from "react";
import { useRecoilState } from "recoil";
import NumberFormat from "react-number-format";
import { toast } from "react-toastify";
import axios from "axios";
import classNames from "classnames";

import { stockListState } from "../../store/atoms";

const StockModal = () => {
  const [formDisabled, setFormDisabled] = useState(false);
  const [formInvalid, setFormInvalid] = useState(false);
  const [form, setForm] = useState({
    symbol: "",
    name: "",
    price: 0,
    grade: 0,
    volume: 0,
  });
  const [stocks, setStocks] = useRecoilState(stockListState);

  const handleBlurSymbol = async (event) => {
    if (!form.symbol) return;

    try {
      setFormDisabled(true);

      const response = (await axios.get(`/api/quotation?symbol=${form.symbol}`))
        .data;

      setFormDisabled(false);

      if (response[form.symbol]) {
        setForm({
          ...form,
          name: response[form.symbol].name,
          price: response[form.symbol].price,
        });
      } else {
        setFormInvalid(true);
        setForm({
          ...form,
          name: "",
          price: 0,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    if (stocks.some((stock) => stock.symbol === form.symbol)) {
      toast.error("Este ativo já foi adicionado!");
      return;
    }

    setStocks([...stocks, form]);
    toast.success(`O ativo ${form.symbol} foi adicionado!`);

    setForm({ symbol: "", name: "", price: 0, grade: 0, volume: 0 });
  };

  return (
    <div className="card card-body mt-3">
      <form onSubmit={handleSubmitForm}>
        <div className="row">
          <div className="col-2">
            <div class="form-floating">
              <input
                value={form.symbol}
                onChange={(e) =>
                  setForm({ ...form, symbol: e.target.value.toUpperCase() })
                }
                onFocus={() => setFormInvalid(false)}
                onBlur={handleBlurSymbol}
                className={classNames("form-control", {
                  "is-invalid": formInvalid,
                })}
                disabled={formDisabled}
              />
              <label htmlFor="">Ativo</label>
            </div>
          </div>

          <div className="col-4">
            <div class="form-floating">
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="form-control"
                disabled={formDisabled}
              />
              <label htmlFor="">Nome</label>
            </div>
          </div>

          <div className="col-2">
            <div class="form-floating">
              <NumberFormat
                defaultValue={0}
                value={form.price}
                prefix="R$ "
                thousandSeparator="."
                decimalSeparator=","
                decimalScale={2}
                fixedDecimalScale={true}
                allowLeadingZeros={false}
                onValueChange={(values) =>
                  setForm({ ...form, price: values.floatValue })
                }
                className="form-control"
                disabled={formDisabled}
              />
              <label htmlFor="">Preço</label>
            </div>
          </div>

          <div className="col-2">
            <div class="form-floating">
              <input
                type="number"
                value={form.grade}
                onChange={(e) => setForm({ ...form, grade: e.target.value })}
                className="form-control"
              />
              <label htmlFor="">Nota</label>
            </div>
          </div>

          <div className="col-2">
            <div class="form-floating">
              <input
                type="number"
                value={form.volume}
                onChange={(e) => setForm({ ...form, volume: e.target.value })}
                className="form-control"
              />
              <label htmlFor="">Quantidade</label>
            </div>
          </div>
        </div>

        <hr />

        <button
          type="submit"
          className="btn btn-dark m3 "
          disabled={
            !form.symbol ||
            !form.name ||
            !form.price ||
            !form.grade ||
            !form.volume
          }
        >
          Salvar alterações
        </button>
      </form>
    </div>
  );
};

export default StockModal;
