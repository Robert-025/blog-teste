import { useEffect, useState } from "react";
import { Drawer, SIZE, ANCHOR } from "baseui/drawer";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import styles from "./styles.module.scss";
import { Link, animateScroll } from "react-scroll";

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [scrollSizePage, setScrollPageSize] = useState(0);

  function logit() {
    setScrollPageSize(window.scrollY);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <header
      className={
        scrollSizePage > 200
          ? styles.headerContainerActive
          : styles.headerContainer
      }
    >
      <div className={styles.headerContent}>
        <div className={styles.imgContainer}>
          <img
            src="/images/Logo.webp"
            alt="Thiago Pereira"
            onClick={() => animateScroll.scrollToTop({ duration: 500 })}
          />
        </div>
        <nav>
          <Drawer
            isOpen={isOpenMenu}
            autoFocus
            onClose={() => setIsOpenMenu(false)}
            size={SIZE.full}
            anchor={ANCHOR.top}
            overrides={{
              DrawerBody: {
                style: ({ $theme }) => ({
                  color: "#151d26",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }),
              },
              DrawerContainer: {
                style: ({ $theme }) => ({
                  backgroundColor: "#151d26",
                }),
              },
              Close: {
                style: ({ $theme }) => ({
                  height: "40px",
                  width: "40px",
                  borderRadius: "20px",
                  backgroundColor: "#e3dcd7",
                }),
              },
            }}
          >
            <a
              onClick={() => {
                setIsOpenMenu(false),
                  animateScroll.scrollToTop({ duration: 500 });
              }}
              style={{
                fontWeight: 700,
                fontSize: "1.5rem",
                marginBottom: "60px",
                color: "#e3dcd7",
              }}
            >
              HOME
            </a>
            <Link
              to="section2"
              smooth
              duration={500}
              offset={-50}
              onClick={() => setIsOpenMenu(false)}
              style={{
                fontWeight: 700,
                fontSize: "1.5rem",
                marginBottom: "60px",
                color: "#e3dcd7",
              }}
              href="#section2"
            >
              ESCRITÓRIO
            </Link>
            <Link
              to="section3"
              smooth
              duration={500}
              offset={-50}
              onClick={() => setIsOpenMenu(false)}
              style={{
                fontWeight: 700,
                fontSize: "1.5rem",
                marginBottom: "60px",
                color: "#e3dcd7",
              }}
            >
              ÁREA DE ATUAÇÃO
            </Link>
            <Link
              to="section4"
              smooth
              duration={500}
              offset={-50}
              onClick={() => setIsOpenMenu(false)}
              style={{
                fontWeight: 700,
                fontSize: "1.5rem",
                marginBottom: "60px",
                color: "#e3dcd7",
              }}
            >
              CONTATO
            </Link>
          </Drawer>
          <FaAlignJustify onClick={() => setIsOpenMenu(true)} />
          <a onClick={() => animateScroll.scrollToTop({ duration: 500 })}>
            <p className={styles.linkSceenGreat}>HOME</p>
          </a>
          <span>/</span>
          <Link to="section2" smooth duration={500} offset={-70}>
            <p className={styles.linkSceenGreat}>ESCRITÓRIO</p>
          </Link>
          <span>/</span>
          <Link to="section3" smooth duration={500} offset={-70}>
            <p className={styles.linkSceenGreat}>ÁREA DE ATUAÇÃO</p>
          </Link>
          <span>/</span>
          <Link to="section4" smooth duration={500} offset={-70}>
            <p className={styles.linkContactCustomized}>CONTATO</p>
          </Link>
        </nav>
      </div>
    </header>
  );
}
