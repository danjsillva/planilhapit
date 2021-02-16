import React from "react";

const Privacy = () => {
  return (
    <div className="container">
      <div className="mt-5">
        <h1>Sobre</h1>

        <p>
          Este é o resultado de uma ideia que nasceu com o propósito de ser uma
          ferramenta para uso pessoal, mas agora ficou claro que pode ajudar
          outras pessoas. Enfim, espero que curtam!
        </p>

        <h3>Motivos para usar o Planilha Pit</h3>

        <ul>
          <li>
            É muito mais simples e intuitivo se comparado à outras planilhas.
            Não exige nenhuma configuração. É só acessar e sair usando!
          </li>
          <li>
            Você não precisa se preocupar com fórmulas e campos calculados e
            preços dos ativos são preenchidos automaticamente com a cotação
            atual.
          </li>
          <li>Quantidade ilimitada de ativos na versão gratuita.</li>
          <li>
            Não salvamos NENHUMA informação sua em NENHUM lugar. Isso mesmo,
            nada de cookies!
          </li>
        </ul>
      </div>

      <h3>Como usar o Planilha Pit</h3>

      <ol>
        <li>
          Comece pelo saldo! Mantenha o campo <b>Saldo</b> sempre atualizado com
          o valor total que você possui na corretora, que deve ser o valor já
          investido mais o valor disponível. Os campos <b>Total atual</b> e{" "}
          <b>Total ideal</b> serão calculados na medida em que os ativos forem
          sendo adicionados{" "}
        </li>
        <li>
          Adicione os ativos! No campo <b>Ativo</b> digite o código do ativo que
          você deseja incluir, por exemplo: <i>PETR4</i>. Ao digitar um código
          válido, os campos <b>Nome</b> e <b>Preço</b> serão preenchidos
          automaticamente com dados atualizados do ativo. Depois disso insira
          uma nota*, a quantidade que você já possui (ou deixe 0 caso ainda não
          possua) e dê ENTER. Pronto! Repita o processo para os demais ativos.
        </li>
      </ol>

      <h3>Como contribuir com o Planilha Pit</h3>

      <p>
        O projeto é Open Source! Os interessados em contribuir podem entrar em
        contato.
      </p>
    </div>
  );
};

export default Privacy;
