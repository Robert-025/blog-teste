import React, { useState } from "react";
import { Accordion, Panel } from "baseui/accordion";
import { FaHome, FaBuilding, FaFileSignature, FaSquare } from "react-icons/fa";

import styles from "./styles.module.scss";

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.tabs}>
        <Tabs>
          <Tab title="IMOBILIÁRIO">
            <div className={styles.containerPanel}>
              <div>
                <div className={styles.title}>
                  <FaHome />
                  <h1>IMOBILIÁRIO</h1>
                </div>
                <p>
                  O escritório <span>THIAGO PEREIRA ADVOGADOS</span> possui
                  profissionais especializados no ramo imobiliário para a
                  implementação de soluções inteligentes e seguras nas demandas
                  extrajudiciais e judiciais. A atuação do escritório compreende
                  as mais diversas áreas do Direito Imobiliário, sendo algumas
                  delas expostas ao lado.
                </p>
              </div>
              <div className={styles.itensList}>
                <Accordion>
                  <Panel title="CONSULTIVO IMOBILIÁRIO">
                    <p>
                      <FaSquare /> Assessoria na aquisição de imóveis em
                      operações de compra e venda, permuta, permuta financeira,
                      permuta com promessa de dação em pagamento de unidades
                      futuras, permuta de quotas, dentre outras.
                    </p>
                    <p>
                      <FaSquare /> Auditoria legal (due diligence) para
                      aquisição de imóveis.
                    </p>
                    <p>
                      <FaSquare /> Elaboração de memorial de incorporação e
                      convenção de condomínio.
                    </p>
                    <p>
                      <FaSquare /> Loteamentos.
                    </p>
                    <p>
                      <FaSquare /> Contratos de locação residencial, não
                      residencial, built to suit e comodato.
                    </p>
                    <p>
                      <FaSquare /> Contratos de construção e de prestação de
                      serviços para projetos imobiliários.
                    </p>
                    <p>
                      <FaSquare /> Contratos de consórcio para execução de
                      empreendimentos imobiliários.
                    </p>
                    <p>
                      <FaSquare /> Retificação administrativa de registro e
                      fusão de matrículas.
                    </p>
                    <p>
                      <FaSquare /> Doação e usufruto.
                    </p>
                    <p>
                      <FaSquare /> Usucapião extrajudicial.
                    </p>
                  </Panel>
                  <Panel title="CONTENCIOSO IMOBILIÁRIO">
                    <p>
                      <FaSquare /> Propositura de ação e apresentação de defesa
                      em processos judiciais relativos a questões imobiliárias.
                    </p>
                    <p>
                      <FaSquare /> Rescisão ou execução de contratos de
                      aquisição e alienação de imóveis, antes e após a entrega
                      das chaves.
                    </p>
                    <p>
                      <FaSquare /> Ação de Despejo em locações comerciais e
                      residenciais com contratos vigentes ou vencidos.
                    </p>

                    <p>
                      <FaSquare /> Ações de Reintegração de Posse, Imissão de
                      Posse, Manutenção de Posse, Interdito Proibitório e
                      Reivindicatória.
                    </p>

                    <p>
                      <FaSquare /> Ações revisional e renovatória de aluguel.
                    </p>

                    <p>
                      <FaSquare /> Demandas decorrentes de vícios construtivos.
                    </p>

                    <p>
                      <FaSquare /> Embargos de obras.
                    </p>

                    <p>
                      <FaSquare /> Execução de hipoteca e alienação fiduciária
                      de bem imóvel em garantia.
                    </p>

                    <p>
                      <FaSquare /> Usucapião judicial.
                    </p>

                    <p>
                      <FaSquare /> Retificações judiciais de registro de
                      imóveis.
                    </p>
                  </Panel>
                </Accordion>
              </div>
            </div>
          </Tab>
          <Tab title="LOCAÇÃO">
            <div className={styles.containerPanel}>
              <div>
                <div className={styles.title}>
                  <FaFileSignature />
                  <h1>LOCAÇÃO</h1>
                </div>
                <p>
                  O mercado imobiliário é um dos que mais cresce nos últimos
                  anos, e a demanda por imóveis para locação é acompanhada pela
                  necessidade de novas oportunidades para encontrar o imóvel
                  ideal para sua família ou negócio, o que torna a adoção das
                  melhores práticas de locação um elemento fundamental para
                  proprietários e inquilinos.
                </p>
                <p>
                  Nosso escritório está preparado para atender as demandas dessa
                  importante alternativa de negócio imobiliário, atendendo
                  imobiliárias, corretores, proprietários e locatários.
                </p>
                <p>
                  Confira ao lado nosso suporte jurídico especializado para as
                  relações de inquilinato.
                </p>
              </div>
              <div className={styles.itensList}>
                <p>
                  <FaSquare /> Assessoria para análise de risco de
                  inadimplemento.
                </p>
                <p>
                  <FaSquare /> Assessoria para cobrança de aluguéis mensais.
                </p>
                <p>
                  <FaSquare /> Elaboração de contrato de aluguel de imóveis
                  residenciais e comerciais.
                </p>
                <p>
                  <FaSquare /> Ação renovatória e revisional.
                </p>
                <p>
                  <FaSquare /> Despejo e Cobrança de valores em atrasado.
                </p>
                <p>
                  <FaSquare /> Notificação extrajudicial.
                </p>
              </div>
            </div>
          </Tab>
          <Tab title="CONDOMINIAL">
            <div className={styles.containerPanel}>
              <div>
                <div className={styles.title}>
                  <FaBuilding />
                  <h1>CONDOMINIAL</h1>
                </div>
                <p>
                  Assessoramos judicial e extrajudicialmente síndicos e
                  condomínios viabilizando uma melhor gestão do condomínio, a
                  fim de reduzir a inadimplência.
                </p>

                <p>
                  Para viabilizar uma melhor gestão do condomínio, o
                  <span> THIAGO PEREIRA ADVOGADOS</span> oferece a assessoria
                  jurídica especializada para atender as demandas de pequenos,
                  médios e grandes condomínios.
                </p>
                <p>Confira algumas formas de atuação:</p>
              </div>
              <div className={styles.itensList}>
                <p>
                  <FaSquare /> Análise de Contratos;
                </p>
                <p>
                  <FaSquare /> Cobranças de Condôminos Inadimplentes;
                </p>
                <p>
                  <FaSquare /> Envio de Notificações;
                </p>
                <p>
                  <FaSquare /> Gestão de Conflitos;
                </p>
                <p>
                  <FaSquare /> Participação em Reuniões;
                </p>
                <p>
                  <FaSquare /> Assessoria Na Elaboração de Regimento Interno.
                </p>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState(props.children[0].props.title);
  let content;
  let buttons = [];

  function changeTab(tab) {
    setActiveTab(tab);
  }

  return (
    <>
      {props.children.map((child) => {
        buttons.push(child.props.title);
        if (child.props.title === activeTab) {
          content = child.props.children;
        }
      })}
      <TabButtons
        activeTab={activeTab}
        buttons={buttons}
        changeTab={changeTab}
      />
      <div className="tab-content">{content}</div>
    </>
  );
};

const TabButtons = ({ buttons, changeTab, activeTab }) => {
  return (
    <div className={styles.tabButtons}>
      {buttons.map((button, index) => (
        <React.Fragment key={button}>
          <button
            className={button === activeTab ? styles.active : ""}
            onClick={() => changeTab(button)}
          >
            {button}
          </button>
          {!(index + 1 == buttons.length) ? <span>/</span> : <></>}
        </React.Fragment>
      ))}
    </div>
  );
};

const Tab = (props) => {
  return <>{props.children}</>;
};
