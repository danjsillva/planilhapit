import React from "react";

const Privacy = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-8">
          <h1>Sobre</h1>
          <hr></hr>
          <p>
            Ao utilizar o Planilha Pit você está ciente de que nenhuma
            informação deste domínio deve ser considerada uma recomendação.
          </p>
          <p>
            Este é o resultado de uma ideia que nasceu com o propósito de ser
            uma ferramenta para uso pessoal, mas agora ficou claro que pode
            ajudar outras pessoas. Enfim, espero que curtam!
          </p>
          <p>
            Planilha Pit é uma ferramenta online e gratuita que auxilia
            investidores no rebalanceamento de suas carteiras. Baseado no
            sistema de notas (em que cada ativo recebe uma nota relativa), o
            Planilha Pit é capaz de ajudar a encontrar a porcentagem ideal de
            cada ativo. Além disso, também mostra a diferença entre a posição
            atual e a posição ideal.
          </p>
          <h4 id="reasonstouse">Motivos para usar o Planilha Pit</h4>
          <ul>
            <li>
              É muito mais simples e intuitivo se comparado à outras planilhas.
              Não exige nenhuma configuração.
            </li>
            <li>
              Você não precisa se preocupar com fórmulas e campos calculados e
              os preços dos ativos são preenchidos automaticamente com a cotação
              atual.
            </li>
            <li>
              Versão gratuita sem registro e com quantidade ilimitada de ativos.
            </li>
            <li>
              Planilha Pit não salva NENHUMA informação sua em NENHUM lugar.
              Isso mesmo, nada de cookies!
            </li>
          </ul>
          <h4 id="howtouse">Como usar o Planilha Pit</h4>
          <ol>
            <li>
              Comece pelo saldo! Mantenha o campo <b>Saldo</b> sempre atualizado
              com o valor total que você possui na corretora, que deve ser o
              valor já investido mais o valor disponível. Os campos{" "}
              <b>Total atual</b> e <b>Total ideal</b> serão calculados na medida
              em que os ativos forem sendo adicionados{" "}
            </li>
            <li>
              Adicione os ativos! No campo <b>Ativo</b> digite o código do ativo
              que você deseja incluir, por exemplo: <i>PETR4</i>. Ao digitar um
              código válido, os campos <b>Nome</b> e <b>Preço</b> serão
              preenchidos automaticamente com dados atualizados do ativo. Depois
              disso insira uma nota<sup>1</sup>, a quantidade que você já possui
              (ou deixe 0 caso ainda não possua) e dê ENTER. Pronto! Repita o
              processo para os demais ativos.
            </li>
          </ol>
          <h4 id="howtocontribute">Como contribuir com o Planilha Pit</h4>
          <p>
            O projeto é Open Source! Os interessados em contribuir podem entrar
            em contato.
          </p>
          <sup>1</sup> A funcionalidade de notas é genérica e deve funcionar
          para sistemas de 0 à 10 e também para sistemas de 0 à 100 (ou qualquer
          outro), o que importa é o valor de cada nota em relação às outras.
        </div>
        <div className="col-4 p-5">
          <p>
            <a href="#reasonstouse">Motivos para usar o Planilha Pit</a>
          </p>
          <p>
            <a href="#howtouse">Como usar o Planilha Pit</a>
          </p>
          <p>
            <a href="#howtocontribute">Como contribuir com o Planilha Pit</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
