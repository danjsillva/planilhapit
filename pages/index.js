import React from "react";
import Image from "next/image";

import DevelopedBy from "./components/developed-by";

const Welcome = () => {
  return (
    <div className="container" style={{ marginTop: "10vh" }}>
      <div className="row">
        <div className="col-12 col-lg-3 pt-5">
          <h1>
            Bem vindo ao <b>Planilha Pit</b>!
          </h1>
          <h4>A ferramenta que vai te ajudar a rebalancear sua carteira</h4>

          <p className="text-muted py-4">
            Ao utilizar o Planilha Pit você está ciente de que nenhuma
            informação deste domínio deve ser considerada uma recomendação.
          </p>

          <div className="">
            <a href="/stocks" className="btn btn-dark px-5">
              Ir para a planilha
            </a>
          </div>

          <div className="mt-5">
            <DevelopedBy />
          </div>
        </div>
        <div className="col-12 col-lg-9">
          <Image
            src="/assets/screen-1.png"
            alt="welcome"
            layout="responsive"
            width="1280"
            height="840"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
