import Head from "next/head";
import { useRef, useState } from "react";
import { animateScroll } from "react-scroll";
import { Scope } from "@unform/core";
import * as Yup from "yup";
import { Link } from "react-scroll";
import { Form } from "@unform/web";
import { Spinner } from "baseui/spinner";
import { toaster } from "baseui/toast";

import {
  FaAngleDown,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaCopyright,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

import Header from "../components/Header";
import Tabs from "../components/Tabs";
import Input from "../components/Input";
import styles from "../styles/index.module.scss";

export default function Home() {
  const now = new Date();
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data, { reset }) {
    setLoading(!loading);

    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required("Digite um Nome."),
        email: Yup.string()
          .email("Digite um E-mail válido.")
          .required("Digite um E-mail."),
        phone: Yup.string().required("Digite seu WhatsApp."),
        mensagem: Yup.string().required("Digite uma Mensagem."),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      await fetch("/api/sendFormMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(() => {
          setLoading(false);
          reset();
          toaster.positive(
            "Informações enviadas com sucesso! Entraremos em contato o mais breve possível."
          );
        })
        .catch(() => {
          setLoading(false);
          reset();
          toaster.negative(
            "Não foi possível enviar as informações! por favor, entre em contato através do nosso WhatsApp."
          );
        });
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <section className={styles.containerFirstSection} id="section1">
        <span>Especialista no Direito Imobiliário</span>
        <span>
          Somos totalmente focados no universo jurídico imobiliário, com
          atendimento personalizado, humanizado e tecnológico.
        </span>
        <Link to="section2" smooth duration={500} offset={-50}>
          <FaAngleDown />
        </Link>
      </section>
      <div className={styles.containerAddress}>
        <span>
          Av. Salgado Filho, 1817, sala 309, 3º andar - Centro, Guarulhos - SP,
          07115-000 <nobr>| (11) 94350-8449 -</nobr>
          <nobr> (11) 5461-1116 | </nobr>
          thiago@thpadv.com.br
        </span>
        <div className={styles.containerSocialMedia}>
          <a href="https://www.instagram.com/thiagopereira_adv" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/thpadv" target="_blank">
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/company/thiago-pereira-advogados"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <section className={styles.containerDeskSection} id="section2">
        <img
          src="/images/Banner_Escritório.webp"
          alt="Escritório Thiago Pereira Advogados"
        />
        <div>
          <h1>Escritório</h1>
          <p>
            O escritório nasceu com um grande, saudável e ambicioso sonho de ser
            referência nacional no ramo do direito imobiliário, voltando toda a
            atenção que o universo imobiliário exige.
          </p>

          <p>
            Nosso “porque” está centrado em buscar performance enquanto outros
            relaxam, conhecimento enquanto outros se distraem em outras áreas,
            persistência enquanto outros desistem. Acreditamos que ser
            <span> exclusivos no direito imobiliário</span> nos levará a
            resultados extraordinários para os nossos clientes.
          </p>
          <p>
            Para isso, adotamos todas as tecnologias, expertises e conhecimentos
            necessários para buscar sempre a melhor solução jurídica e tornar os
            negócios imobiliários seguros.
          </p>
          <p>
            Contudo, há algo mais que nos torna singular: a forma
            <span> humanizada</span> de atender pessoas e empresas — pessoas com
            muitas responsabilidades e grandes questões a resolver. Foi com essa
            maneira de trabalhar que erguemos o
            <span> THIAGO PEREIRA ADVOGADOS</span>.
          </p>

          <p>
            A confiança de nossos clientes sempre nos impulsionou e continua a
            nos impulsionar. Com eles, buscamos sempre um atendimento eficaz,
            justo e objetivo na solução de problemas que envolvem o direito
            imobiliário.
          </p>
          <p>
            Nossa meta é eliminar burocracias e formalismos e atuar de forma
            ética e transparente na avaliação do que é oportuno e necessário aos
            nossos clientes.
          </p>
        </div>
      </section>
      <section className={styles.containerOccupationAreaSection} id="section3">
        <img
          src="/images/Banner_AreaDeAtuação.webp"
          alt="Área de Atuação Thiago Pereira Advogados"
        />
        <Tabs />
      </section>
      <section className={styles.containerContactSection} id="section4">
        <img
          src="/images/Banner_Contato.webp"
          alt="Contato Thiago Pereira Advogados"
        />
        <div className={styles.containerContactAddress}>
          <div className={styles.containerContact}>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <div className={styles.titleForm}>
                <FaPhoneAlt />
                <h1>FALE CONOSCO</h1>
              </div>
              <span>
                Entre em contato conosco através do formulário abaixo ou pelos
                telefone ao lado.
              </span>
              <Input name="name" label="Nome" />
              <Input name="email" label="E-mail" />
              <Input name="phone" label="WhatsApp" />
              <Input
                name="mensagem"
                label="Mensagem"
                isTextArea
                rows="10"
                cols="50"
              />
              <button type="submit" disabled={loading}>
                {loading ? <Spinner color="#FFFFFF" /> : "Enviar"}
              </button>
            </Form>
          </div>
          <div className={styles.containerInformations}>
            <div>
              <div className={styles.titleContact}>
                <FaMapMarkerAlt />
                <h1>Endereço</h1>
              </div>
              <p>
                Av. Salgado Filho, 1817, sala 309, 3º andar, Centro,
                <nobr> Guarulhos - SP,</nobr> 07115-000
              </p>
            </div>
            <div>
              <div className={styles.titleContact}>
                <FaWhatsapp />
                <h1>WhatsApp</h1>
              </div>
              <p>
                (11) 94350-8449 -
                <a
                  href="https://api.whatsapp.com/send?phone=5511943508449&text=Ol%C3%A1%20Thiago%2C%20consegui%20seu%20contato%20atrav%C3%A9s%20do%20site%2C%20poderia%20me%20ajudar%3F"
                  target="_blank"
                >
                  Acessar <FaExternalLinkAlt />
                </a>
              </p>
            </div>
            <div>
              <div className={styles.titleContact}>
                <FaPhoneAlt />
                <h1>Telefone</h1>
              </div>
              <p>(11) 5461-1116</p>
            </div>

            <div>
              <div className={styles.titleContact}>
                <FaEnvelope />
                <h1>E-mail</h1>
              </div>
              <p>thiago@thpadv.com.br</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.containerFooter}>
        <div className={styles.containerInformationsFooter}>
          <div className={styles.containerLogoFooter}>
            <img
              src="/images/Logo-Thiago-Advogado.svg"
              alt="Thiago Pereira Advogados"
            />
          </div>
          <div className={styles.containerMenuFooter}>
            <div className={styles.containerMenu}>
              <a onClick={() => animateScroll.scrollToTop({ duration: 500 })}>
                HOME
              </a>
              <Link to="section2" smooth duration={500} offset={-50}>
                ESCRITÓRIO
              </Link>
              <Link to="section3" smooth duration={500} offset={-50}>
                ÁREA DE ATUAÇÃO
              </Link>
              <Link to="section4" smooth duration={500} offset={-50}>
                CONTATO
              </Link>
            </div>
            <div className={styles.containerTextFooter}>
              <p>Av. Salgado Filho, 1817, sala 309, 3º andar - Centro</p>
              <p>Guarulhos - SP, 07115-000 </p>
              <p>
                (11) 94350-8449 - (11) 5461-1116 <br /> thiago@thpadv.com.br
              </p>
            </div>

            <div className={styles.containerSocialMedia}>
              <a
                href="https://www.instagram.com/thiagopereira_adv"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/thpadv" target="_blank">
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/company/thiago-pereira-advogados"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.containerCopyRigth}>
        <div className={styles.containerTextCopy}>
          <p>
            <FaCopyright /> {now.getFullYear()} Thiago Pereira Advogados.
          </p>
        </div>
        <p>
          Todos os direitos reservados | Desenvolvido por
          <a href="https://evoldigital.com.br/" target="_blank">
            <img src="/images/Logo-Evol.svg" alt="Evol Digital" />
          </a>
        </p>
      </section>
    </>
  );
}
