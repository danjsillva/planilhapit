import React, { useState } from "react";
import { useRecoilState } from "recoil";
import NumberFormat from "react-number-format";
import { toast } from "react-toastify";
import axios from "axios";

import { stockListState } from "../../store/atoms";

const StockModal = () => {
  const [formDisabled, setFormDisabled] = useState(false);
  const [form, setForm] = useState({
    symbol: "",
    name: "",
    price: 0,
    grade: 0,
    volume: 0,
  });
  const [stocks, setStocks] = useRecoilState(stockListState);

  const handleBlurSymbol = async (event) => {
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
            <label htmlFor="">Ativo</label>
            <input
              value={form.symbol}
              onChange={(e) =>
                setForm({ ...form, symbol: e.target.value.toUpperCase() })
              }
              onBlur={handleBlurSymbol}
              className="form-control"
              disabled={formDisabled}
            />
          </div>

          <div className="col-4">
            <label htmlFor="">Nome</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="form-control"
              disabled={formDisabled}
            />
          </div>

          <div className="col-2">
            <label htmlFor="">Preço</label>
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
          </div>

          <div className="col-2">
            <label htmlFor="">Nota</label>
            <input
              type="number"
              value={form.grade}
              onChange={(e) => setForm({ ...form, grade: e.target.value })}
              className="form-control"
            />
          </div>

          <div className="col-2">
            <label htmlFor="">Quantidade</label>
            <input
              type="number"
              value={form.volume}
              onChange={(e) => setForm({ ...form, volume: e.target.value })}
              className="form-control"
            />
          </div>
        </div>

        {/* <button
          type="submit"
          className="btn btn-dark mt-3 "
          disabled={
            !form.symbol ||
            !form.name ||
            !form.price ||
            !form.grade ||
            !form.volume
          }
        >
          Salvar alterações
        </button> */}
      </form>
    </div>
  );
};

export default StockModal;
