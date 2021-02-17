import React from "react";
import { FiList } from "react-icons/fi";

const EmptyState = () => {
  return (
    <div className="text-center p-5 mt-5">
      <FiList size={48} />

      <div className="font-weight-bold mt-3">
        Parece que sua planilha está vazia!
      </div>
      <div className="text-muted">
        Comece atualizado o seu saldo e depois adicione o seu primeiro ativo.
      </div>
      {/* <div className="text-muted">
        Que tal criar uma conta e sincronizar os seus dados?
      </div>

      <div className="d-grid gap-2 col-4 mx-auto mt-5">
        <button
          className="btn btn-dark"
          data-toggle="modal"
          data-target="#stockModal"
        >
          Adicionar meu primeiro ativo
        </button>

        <button className="btn btn-link btn-sm text-dark" disabled>
          Criar uma conta
        </button>
      </div> */}
    </div>
  );
};

export default EmptyState;
