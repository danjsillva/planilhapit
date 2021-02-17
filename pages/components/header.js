import React from "react";

const Header = () => {
  return (
    <header className="position-top bg-dark text-light p-3">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <a
              href="/"
              className="h4 text-light"
              style={{ textDecoration: "none" }}
            >
              <b>Planilha Pit</b>
            </a>
          </div>
          <div className="col-6 text-right">
            <a
              href="/about"
              className="text-light mr-5"
              style={{ textDecoration: "none" }}
            >
              Sobre
            </a>
            <a
              href="/privacy"
              className="text-light"
              style={{ textDecoration: "none" }}
            >
              Política de privacidade
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
