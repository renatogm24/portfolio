import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import getConfig from "next/config";
import styles from "../../styles/Home.module.css";
import packageJson from "../../package.json";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CodeBlock, anOldHope, solarizedLight } from "react-code-blocks";

export default function Home({ pseudoLocale, titleHeader }) {
  const { locale, push } = useRouter();
  const {
    publicRuntimeConfig: { sites, pseudoLocales },
  } = getConfig();

  const nextLocale = pseudoLocales.find(
    (otherLocale) => otherLocale !== pseudoLocale
  );

  const stringCodeEnglish = `{ fullName: "Renato Garay",
            mail: "renato.garay@pucp.pe",
        github: "renatogm24",
         locale: "Lima, Perú",
             age: 26,
  education: "Telecommunications engineer",
  bootcamp: "Coding Dojo",
             skills: ["MERN","NextJS","Flask","Spring"]};`;

  const stringCodeSpanish = `{       nombre: "Renato Garay",
            correo: "renato.garay@pucp.pe",
            github: "renatogm24",
       localidad: "Lima, Perú",
               edad: 26,
     educacion: "Ingeniero de Telecomunicaciones",
     bootcamp: "Coding Dojo",
   habilidades: ["MERN","NextJS","Flask","Spring"]}`;

  const sitesInfo = {
    en: {
      laguage: "english",
      title: "The First Site",
      description: "This is the description for the first site.",
      menu: ["Home", "About me", "Work"],
      home: {
        hello: "Hello,",
        im: "I'm",
        desc1: "And I'm a Full-Stack Web Developer",
        code: stringCodeEnglish,
      },
      about: {
        p1: "I am a person who puts his passion into everything I do, with over 4 years of resource management experience, focused on problem solving, effective negotiations and teamwork.",
        p2: "I am passionate about technology and developing solutions that positively impact lives and increase efficiency. Always eager to bring excellent communication, diverse experience, and technical skills to a focused and driven software team.",
        p3: "At the end of 2021, I decided to bet on myself, on what I am passionate about, and make a career change towards software development. In this 2022, I have graduated from Coding Dojo with 3 Black Belt achievement which demonstrates highly proficient in web development with over 1,000+ hours of programming experience on Full-Stack development. It has been a very hard and satisfying experience becoming a truly self-learning programmer.",
      },
      work: {
        desc: "Here are the latest projects I've been working on. There are personal projects as well as those worked on the Coding Dojo bootcamp",
        links: {
          deploy: "Deploy",
          code: "Code",
        },
        projects: {
          enelmarket:
            'From the english "in the market", is a web application that helps startups to create an online market',
          rumbero:
            "It is an online store for a clothing brand allusive to iconic characters of the salsa genre",
          portfolio: "Full Stack Web Development Portfolio for Renato Garay",
          python:
            "EmprendeAdvisor is a web application made with Flask that seeks to be the first digital directory of qualifications and opinions of businesses",
          verdi:
            "Verdi is an application that provides a quality Courier service committed to caring for the environment",
          github:
            "Visit my GitHub page in order to find more Full Stack projects",
        },
      },
    },
    es: {
      laguage: "spanish",
      title: "El Primer Sitio",
      description: "Esta es la descripción para el primer sitio.",
      menu: ["Inicio", "Acerca de mi", "Trabajo"],
      home: {
        hello: "Hola,",
        im: "soy",
        desc1: "Y soy un desarrollador web Full-Stack",
        code: stringCodeSpanish,
      },
      about: {
        p1: "Soy una persona que pone su pasión en todo lo que hace, con más de 4 años de experiencia en el manejo de recursos, enfocado en la resolución de problemas, negociaciones efectivas y trabajo en equipo.",
        p2: "Me apasiona la tecnología y el desarrollo de soluciones que impacten vidas de manera positiva y aumenten la eficiencia. Siempre dispuesto por brindar una excelente comunicación, experiencia diversa y habilidades técnicas a un equipo de software enfocado y motivado.",
        p3: "A finales del 2021 decidí apostar por mí, por lo que me apasiona, y hacer un cambio de carrera hacia el desarrollo de software. En este 2022, me gradué de Coding Dojo con 3 'Black Belt', lo que demuestra una gran competencia en el desarrollo web con más de 1,000 horas de experiencia en programación en desarrollo Full-Stack. Ha sido una experiencia muy dura y satisfactoria convertirme en un verdadero programador autodidacta.",
      },
      work: {
        desc: "Aquí están los últimos proyectos en los que he estado trabajando. Tanto los personales como los realizados en el bootcamp de Coding Dojo",
        links: {
          deploy: "Web",
          code: "Codigo",
        },
        projects: {
          enelmarket:
            "Es una aplicación web que ayuda a los emprendedores a crear una tienda online personalizable",
          rumbero:
            "Es una tienda online para una marca de ropa alusiva a personajes iconicos del genero salsero",
          portfolio:
            "Portafolio de desarrollo web Full Stack para Renato Garay",
          python:
            "Es una aplicación web realizada con Flask que busca ser el primer directorio digital de calificaciones y opiniones de los emprendimientos",
          verdi:
            "Verdi es una aplicación que proporciona un servicio de courier de calidad comprometido con el cuidado del medio ambiente",
          github:
            "Visita mi página de GitHub para encontrar más proyectos Full Stack.",
        },
      },
    },
  };

  const siteInfo = sitesInfo[pseudoLocale];
  const [language, setLanguage] = useState(siteInfo.laguage);
  const [dark, setDark] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [optionSelected, setOptionSelected] = useState(siteInfo.menu[0]);
  const [codeTheme, setCodeTheme] = useState(solarizedLight);
  const [svgSelected, setSvgSelected] = useState("javascript");

  function changeLocale(language) {
    setLanguage(language);
    const languageHash = language === "english" ? "en" : "es";
    push(`/${languageHash}`, null, { scroll: false });
    const index = siteInfo.menu.findIndex((ele) => ele === optionSelected);
    setOptionSelected(sitesInfo[nextLocale].menu[index]);
  }

  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
    if (scrollY < 800) {
      setOptionSelected(siteInfo.menu[0]);
    } else if (scrollY > 800 && scrollY < 1400) {
      setOptionSelected(siteInfo.menu[1]);
    } else if (scrollY > 1400 && scrollY < 3000) {
      setOptionSelected(siteInfo.menu[2]);
    } else if (scrollY > 3000 && scrollY < 4000) {
      setOptionSelected(siteInfo.menu[3]);
    } else if (scrollY > 4000) {
      setOptionSelected(siteInfo.menu[4]);
    }
  }

  useEffect(() => {
    const languageHash = language === "english" ? "en" : "es";
    push(`/${languageHash}`, null, { scroll: false });
  }, []);

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
    <div className={`${styles.container} ${dark ? styles.dark : ""}`}>
      <Head>
        <title>{titleHeader}</title>
        <meta name="description" content={packageJson.description} />
        <link rel="icon" href="/logo_web.ico" />

        <meta property="og:title" content="Renato Garay" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.renatogaray.dev" />
        <meta
          property="og:description"
          content="Hello, I'm Renato Garay and I'm a Full Stack Web Developer"
        />
        <meta
          property="og:image"
          content="https://emprendeadvisor.s3.amazonaws.com/renato_garay_dev.png"
        />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:width" content="1200" />
      </Head>
      <style jsx global>{`
        html,
        body {
          background-color: ${dark ? "#111111" : "#f9fafb"};
        }
      `}</style>
      <nav className={`${styles.navBarBx} ${dark ? styles.dark : ""}`}>
        <div className={styles.navBar}>
          <div className={styles.toggle} onClick={() => setOpenMenu(!openMenu)}>
            {!openMenu && (
              <Image src="/images/menu.png" alt="menu" width="25" height="25" />
            )}
            {openMenu && (
              <Image
                src="/images/close.png"
                alt="close"
                width="20"
                height="20"
              />
            )}
          </div>
          <div className={`${styles.menu} ${openMenu ? styles.active : ""}`}>
            <ul>
              <a href="#home">
                <li
                  className={
                    optionSelected === siteInfo.menu[0] ? styles.active : ""
                  }
                  onClick={() => {
                    setOpenMenu(!openMenu);
                    setOptionSelected(siteInfo.menu[0]);
                    setTimeout(() => {
                      window.scrollBy(0, -80);
                    }, 700);
                  }}
                >
                  {siteInfo.menu[0]}
                </li>
              </a>
              <a href="#about">
                <li
                  className={
                    optionSelected === siteInfo.menu[1] ? styles.active : ""
                  }
                  onClick={() => {
                    setOpenMenu(!openMenu);
                    setOptionSelected(siteInfo.menu[1]);
                  }}
                >
                  {siteInfo.menu[1]}
                </li>
              </a>
              <a href="#work">
                <li
                  className={
                    optionSelected === siteInfo.menu[2] ? styles.active : ""
                  }
                  onClick={() => {
                    setOpenMenu(!openMenu);
                    setOptionSelected(siteInfo.menu[2]);
                  }}
                >
                  {siteInfo.menu[2]}
                </li>
              </a>
            </ul>
          </div>
          <div className={styles.navOptions}>
            <div className={styles.flagsBx}>
              <div
                className={`${styles.flag} ${
                  language === "english" ? styles.active : ""
                }`}
                onClick={() => changeLocale("english")}
              >
                <Image
                  src="/images/united-states.png"
                  alt="english"
                  width="35"
                  height="35"
                />
              </div>

              <div
                className={`${styles.flag} ${
                  language === "spanish" ? styles.active : ""
                }`}
                onClick={() => changeLocale("spanish")}
              >
                <Image
                  src="/images/spain.png"
                  alt="spanish"
                  width="35"
                  height="35"
                />
              </div>

              <div
                className={styles.themeBx}
                onClick={() => {
                  setDark(!dark);
                  dark ? setCodeTheme(solarizedLight) : setCodeTheme(anOldHope);
                }}
              >
                {!dark && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className={styles.theme}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    ></path>
                  </svg>
                )}
                {dark && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className={styles.theme}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    ></path>
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className={styles.main}>
        <section
          id="home"
          className={`${styles.home} ${dark ? styles.dark : ""}`}
        >
          <div className={styles.homeInfo}>
            <h1>
              <span>{siteInfo.home.hello}</span> {siteInfo.home.im}
            </h1>
            <h1>Renato Garay</h1>
            <h2>{siteInfo.home.desc1}</h2>
            <div className={styles.code1}>
              <CodeBlock
                text={siteInfo.home.code}
                language={"javascript"}
                showLineNumbers={false}
                startingLineNumber={1}
                theme={codeTheme}
                wrapLines={true}
              />
            </div>
          </div>
          <div className={styles.homeProfile}>
            <div className={styles.homeProfileImg}>
              <Image
                src="/images/profile.jpeg"
                alt="Profile image"
                width="350"
                height="350"
              />
            </div>
            <div className={styles.profileLinks}>
              <a
                href="https://www.linkedin.com/in/renatogaray/"
                target="_blank"
              >
                <svg className={styles.logo} viewBox="0 0 128 128">
                  <path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"></path>
                </svg>
              </a>
              <a href="https://github.com/renatogm24" target="_blank">
                <svg className={styles.logo} viewBox="0 0 128 128">
                  <g fill="#181616">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                    ></path>
                    <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                  </g>
                </svg>
              </a>
            </div>
            <div className={styles.code2}>
              <CodeBlock
                text={siteInfo.home.code}
                language={"javascript"}
                showLineNumbers={false}
                startingLineNumber={1}
                theme={codeTheme}
                wrapLines={true}
              />
            </div>
            <a href="#about">
              <input
                className={styles.btn}
                type="button"
                value={siteInfo.menu[1]}
                onClick={() => setOptionSelected(siteInfo.menu[1])}
              />
            </a>
          </div>
        </section>
        <section
          id="about"
          className={`${styles.about} ${dark ? styles.dark : ""}`}
        >
          <h2>{siteInfo.menu[1]}</h2>
          <p>{siteInfo.about.p1}</p>
          <p>{siteInfo.about.p2}</p>
          <p>{siteInfo.about.p3}</p>
        </section>
        <section
          id="work"
          className={`${styles.work} ${dark ? styles.dark : ""}`}
        >
          <h2>{siteInfo.menu[2]}</h2>
          <p>{siteInfo.work.desc}</p>
          <div className={styles.cardsWorkBx}>
            <div className={styles.cardWork}>
              <div
                className={[styles.gradientBorder, styles.gradient1].join(" ")}
              >
                <div className={styles.cardWorkContent}>
                  <div className={styles.cardIconAndLinks}>
                    <div className={styles.cardImgWB}>
                      <Image
                        src="/images/enelmarket500.png"
                        alt="Enelmarket logo"
                        width="120"
                        height="120"
                      />
                    </div>
                    <div className={styles.cardLinks}>
                      <a href="https://enelmarket.com/" target="_blank">
                        <h6>{siteInfo.work.links.deploy}</h6>
                      </a>
                      <a
                        href="https://github.com/renatogm24/enelmarket_fs"
                        target="_blank"
                      >
                        <h6>{siteInfo.work.links.code}</h6>
                      </a>
                    </div>
                  </div>
                  <div className={styles.cardDescAndTech}>
                    <h3>enelmarket.com</h3>
                    <p>{siteInfo.work.projects.enelmarket}</p>
                    <div className={styles.cardTechIcon}>
                      <div className={styles.techIcon}>
                        <svg
                          viewBox="0 0 128 128"
                          width={40}
                          className={dark ? styles.svgDark : ""}
                        >
                          <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm32.7 114.4L48.4 41.8h-6.8v50.1h6.8V55.3l44.2 61.5c-8.5 4.6-18.2 7.2-28.6 7.2-33.2.1-60.1-26.8-60.1-60S30.8 3.9 64 3.9s60.1 26.9 60.1 60.1c0 21.1-10.9 39.7-27.4 50.4z"></path>
                          <path d="M78.6 73.3l7.5 11.3V41.8h-7.5z"></path>
                        </svg>
                        <h6>NextJS</h6>
                      </div>
                      <div className={styles.techIcon}>
                        <svg
                          viewBox="0 0 128 128"
                          width={40}
                          className={dark ? styles.svgDark : ""}
                        >
                          <path
                            d="M116.452 6.643a59.104 59.104 0 01-6.837 12.136A64.249 64.249 0 0064.205-.026C28.984-.026 0 28.982 0 64.242a64.316 64.316 0 0019.945 46.562l2.368 2.1a64.22 64.22 0 0041.358 15.122c33.487 0 61.637-26.24 64.021-59.683 1.751-16.371-3.051-37.077-11.24-61.7zM29.067 111.17a5.5 5.5 0 01-4.269 2.034c-3.018 0-5.487-2.484-5.487-5.502 0-3.017 2.485-5.501 5.487-5.501 1.25 0 2.485.433 3.452 1.234 2.351 1.9 2.718 5.384.817 7.735zm87.119-19.238c-15.843 21.122-49.68 14.003-71.376 15.02 0 0-3.852.234-7.721.867 0 0 1.45-.617 3.335-1.334 15.226-5.301 22.43-6.335 31.685-11.086 17.427-8.869 34.654-28.274 38.24-48.463-6.637 19.422-26.75 36.11-45.077 42.895-12.557 4.635-35.238 9.136-35.238 9.136l-.917-.484c-15.442-7.518-15.91-40.977 12.157-51.78 12.291-4.735 24.048-2.134 37.323-5.302 14.175-3.367 30.568-14.004 37.238-27.874 7.471 22.19 16.46 56.932.35 78.405z"
                            fill="black"
                          ></path>
                        </svg>
                        <h6>Spring</h6>
                      </div>
                      <div className={styles.techIcon}>
                        <svg
                          viewBox="0 0 128 128"
                          width={40}
                          className={dark ? styles.svgDark : ""}
                        >
                          <path
                            fill="black"
                            d="M116.948 97.807c-6.863-.187-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.809 1.829 1.365 2.731 1.07 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.577 2.751 5.465 3.902 3.358 2.047 7.107 3.217 10.34 5.268 1.906 1.21 3.799 2.733 5.658 4.097.92.675 1.537 1.724 2.732 2.147v-.194c-.628-.8-.79-1.898-1.366-2.733l-2.537-2.537c-2.48-3.292-5.629-6.184-8.976-8.585-2.669-1.916-8.642-4.504-9.755-7.609l-.195-.195c1.892-.214 4.107-.898 5.854-1.367 2.934-.786 5.556-.583 8.585-1.365l4.097-1.171v-.78c-1.531-1.571-2.623-3.651-4.292-5.073-4.37-3.72-9.138-7.437-14.048-10.537-2.724-1.718-6.089-2.835-8.976-4.292-.971-.491-2.677-.746-3.318-1.562-1.517-1.932-2.342-4.382-3.511-6.633-2.449-4.717-4.854-9.868-7.024-14.831-1.48-3.384-2.447-6.72-4.293-9.756-8.86-14.567-18.396-23.358-33.169-32-3.144-1.838-6.929-2.563-10.929-3.513-2.145-.129-4.292-.26-6.438-.391-1.311-.546-2.673-2.149-3.902-2.927C17.811 4.565 5.257-2.16 1.633 6.682c-2.289 5.581 3.421 11.025 5.462 13.854 1.434 1.982 3.269 4.207 4.293 6.438.674 1.467.79 2.938 1.367 4.489 1.417 3.822 2.652 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.951 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.95 6.44-3.05 9.615-1.899 21.567 2.537 28.683 1.36 2.186 4.567 6.871 8.975 5.073 3.856-1.57 2.995-6.438 4.098-10.732.249-.973.096-1.689.585-2.341v.195l3.513 7.024c2.6 4.187 7.212 8.562 11.122 11.514 2.027 1.531 3.623 4.177 6.244 5.073v-.196h-.195c-.508-.791-1.303-1.119-1.951-1.755-1.527-1.497-3.225-3.358-4.487-5.073-3.556-4.827-6.698-10.11-9.561-15.609-1.368-2.627-2.557-5.523-3.709-8.196-.444-1.03-.438-2.589-1.364-3.122-1.263 1.958-3.122 3.542-4.098 5.854-1.561 3.696-1.762 8.204-2.341 12.878-.342.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.554-6.07-3.029-15.842-.781-22.829.582-1.809 3.21-7.501 2.146-9.172-.508-1.666-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.124-5.464-2.09-4.731-3.066-10.044-5.267-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.683-6.635-.446-.968-1.051-2.518-.391-3.513.21-.671.508-.951 1.171-1.17 1.132-.873 4.284.29 5.462.779 3.129 1.3 5.741 2.538 8.392 4.294 1.271.844 2.559 2.475 4.097 2.927h1.756c2.747.631 5.824.195 8.391.975 4.536 1.378 8.601 3.523 12.292 5.854 11.246 7.102 20.442 17.21 26.732 29.269 1.012 1.942 1.45 3.794 2.341 5.854 1.798 4.153 4.063 8.426 5.852 12.488 1.786 4.052 3.526 8.141 6.05 11.513 1.327 1.772 6.451 2.723 8.781 3.708 1.632.689 4.307 1.409 5.854 2.34 2.953 1.782 5.815 3.903 8.586 5.855 1.383.975 5.64 3.116 5.852 4.879zM29.729 23.466c-1.431-.027-2.443.156-3.513.389v.195h.195c.683 1.402 1.888 2.306 2.731 3.513.65 1.367 1.301 2.732 1.952 4.097l.194-.193c1.209-.853 1.762-2.214 1.755-4.294-.484-.509-.555-1.147-.975-1.755-.556-.811-1.635-1.272-2.339-1.952z"
                          ></path>
                        </svg>
                        <h6>MySQL</h6>
                      </div>
                      <div className={styles.techIcon}>
                        <svg
                          viewBox="0 0 128 128"
                          width={40}
                          className={dark ? styles.svgDark : ""}
                        >
                          <path fill="none" d="M0 0h128v128H0z"></path>
                          <path
                            d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 01-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0010 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0026.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 01-2.61-6A9.12 9.12 0 0187.37 70h.34a9.15 9.15 0 011 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 01-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0016 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 00-17.27-20.85 62 62 0 00-34.74-10.59h-2.93a9.21 9.21 0 01-8 5.54h-.31a9.13 9.13 0 01-.3-18.25h.33a9 9 0 018 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 011.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 00-9.64 25.25 59.61 59.61 0 008.47 36.16 2.75 2.75 0 011.14-.16h.32a9.12 9.12 0 01.33 18.24h-.33a9.16 9.16 0 01-9.12-8.79z"
                            fill="black"
                          ></path>
                        </svg>
                        <h6>Redux</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cardWork}>
              <div
                className={[styles.gradientBorder, styles.gradient4].join(" ")}
              >
                <div className={styles.cardWorkContent}>
                  <div className={styles.cardIconAndLinks}>
                    <div className={styles.cardImg}>
                      <Image
                        src="/images/Logo.png"
                        alt="EmprendeAdvisor logo"
                        width="120"
                        height="120"
                      />
                    </div>
                    <div className={styles.cardLinks}>
                      <a
                        href="https://www.emprendeadvisor.com/"
                        target="_blank"
                      >
                        <h6>{siteInfo.work.links.deploy}</h6>
                      </a>
                      <a
                        href="https://github.com/renatogm24/emprendeadvisor"
                        target="_blank"
                      >
                        <h6>{siteInfo.work.links.code}</h6>
                      </a>
                    </div>
                  </div>
                  <div className={styles.cardDescAndTech}>
                    <h3>EmprendeAdvisor</h3>
                    <p>{siteInfo.work.projects.python}</p>
                    <div className={styles.cardTechIcon}>
                      <div className={styles.techIcon}>
                        <svg
                          viewBox="0 0 128 128"
                          width={40}
                          className={dark ? styles.svgDark : ""}
                        >
                          <path
                            fill="#010101"
                            d="M44.44 100.63c-4.23-3.33-8.74-6.52-11.83-11.01-6.49-7.92-11.49-17.1-14.9-26.74-2.07-6.27-2.77-12.99-5.44-19.02-2.78-4.38.48-9.16 5.27-10.55 2.13-.41 5.89-2.43 1.36-.98-4.06 2.98-4.45-2.71-.29-3.07 2.84-.38 3.89-2.7 2.92-4.8-3.05-1.99 7.4-4.18 2.14-7.15-5.48-5.91 7.66-7.05 4.42-.33-.77 5.16 9.18-.95 6.87 5.01 2.35 2.86 8.8.65 8.63 4.67 3.42.24 4.6 3.11 7.8 3.33 3.33 1.5 9.36 2.69 10.49 6.44-3.3 2.61-10.95-5.4-11.31 1.84 1 10.69.74 21.7 4.65 31.88 1.85 6.16 6.33 11.01 10.38 15.81 3.88 4.7 9.12 8.01 14.48 10.8 4.69 2.21 9.75 3.68 14.87 4.6 2.07-1.59 5.74-7.48 8.97-5 .16 2.8-6.42 5.84-.31 5.54 3.59-1.08 6.08 2.77 9.04-.71 2.72 3.23 11.32-2.06 9.38 4.53-2.62 1.69-6.44.67-9.07 3-4.33-2.16-7.77 1.93-12.56 1.42-5.32.95-10.73 1.34-16.13 1.34-8.85-.7-17.89-.99-26.3-4.07-4.74-1.38-9.37-4.08-13.53-6.78zm7.47 3.24c4.63 2 9.16 4.11 14.23 4.75 8.05 1.12 16.37 2.84 24.45 1.27-3.66-1.65-7.44.64-11.08-1.18-4.37.94-9.06-.24-13.5-.82-5.05-2.25-10.5-3.8-15.23-6.72-5.91-2.16 3.06 2.77 4.65 3.17 3.69 2.1-4.06-1.08-5.16-1.95-3.09-1.74-3.49-1.37-.31.39.64.37 1.28.77 1.95 1.09zm-8.81-6.23c4.49 1.66-.02-3.16-2.07-2.88-.91-1.58-3.48-2.58-1.67-3.43-3.26 1.13-3.42-4.3-4.95-3.53-3.45-1.09-1.34-4.95-5.45-7.32-.37-2.5-4.08-4.66-5.26-8.43-.52-1.93-4.19-7.46-1.94-2.31 1.92 4.96 5.29 9.21 8.1 13.45 2.18 4.04 4.76 8.26 8.72 10.78 1.34 1.3 2.63 3.27 4.52 3.67zM30.17 83.45c.16-.68.82 1.46 0 0zm18.3 16.18c1-.44-1.43-.56 0 0zm2.44.89c-.25-1.23-1.11.69 0 0zm3.05 1.27c1.45-1.38-2.24-.87 0 0zm5.22 2.91c.89-1.3-2.82-.49 0 0zm-10.03-6.99c2.25-1.46-2.91-.02 0 0zm2.29 1.14c-.07-.77-.82.34 0 0zm11.43 7.13c1.84 1.16 10.73 2.54 5.16.48-.93.2-10.33-2.66-5.16-.48zM44.72 91.85c-.18-.77-2.85-.85 0 0zm5.32 3.1c1.39-.96-2.87-.74 0 0zm4.48 2.75c1.98-.75-3.23-.75 0 0zm-11.97-8.21c2.16 1.65 8.7.21 3.3-.99-2.45-1.31-7.99-2.2-4.22.79l.92.2zm15 9.16c.9-1.53-3.77-.88 0 0zm-4.56-3.63c5.27 1.49-4.43-3.34-1.3-.55l.7.32.6.23zm9.14 5.28c4.99.05-4.51-.68 0 0zm-21.5-13.7c-.19-.93-1.23.08 0 0zm29.94 18.44c.14-1.68-1.62 1.25 0 0zM49.15 91.82c-.3-.88-1.56-.04 0 0zm-8.04-5.8c2.86-.17-3.93-1.26 0 0zm-9.54-6.16c-.36-1.38-3.12-2.47 0 0zM56.6 95.74c-.52-.6-.25.13 0 0zm15.58 9.56c-.05-.91-.85.35 0 0zM55.22 94.32c.28-1.18-2.44-.36 0 0zm-11.6-7.36c2.13-.23-3.42-1.44 0 0zm19.63 12.2c3.32-1.32-3.24-.64 0 0zm-10.21-6.93c3.83.49-4.56-2.61-.84-.28l.84.28zm13.31 8.19c3.58-2.14 2.4 5.01 6.07.6 3.62-2.64-3.13 3.27 1.33.47 3.23-2.16 7.99 1.02 11 2.06 2.16-.11 4.27 1.87 6.49.67 4.27-1.15-8.36-1.71-5.05-3.75-3.91 1.14-6.8-1.36-8.72-3.86-4.39-1.01-9.46-3.25-11.65-7.14-.89-1.46 1.29.21-.77-2.18-2.64-2.35-3.96-5.02-5.73-7.88-2.12-1.13-2.37-4.46-2.58-.11.02-2.74-2.56-4.59-3.19-3.82-.01-2.64 2.76-1.32.82-3.27-.42-2.74-1.79-5.59-2.2-8.68-.64-1.49-.09-4.68-2.19-1.31-.76 3.57-.25-4.38.94-1.76 1.56-2.67-.56-2.36-.65-1.99 1.02-2.26.64-5.46-.27-4.24.54-2.39.86-8.8-.81-7.66 1.01-2.5 1.92-11.44-2.47-8.03-1.78.03-4.85.64-6.31 1.37 4.56 2.51-.46.91-2.32.51-.24 2.33-2.08 1.32-4.38 1.34 3.67.45-1.79 3.75-3.89 2.47-2.74 1.31 2.36 4.57.05 5.58.28 1.52-4.19-.55-3.84 2.96-2.65-1.12-.36 4.16.96 2.38 4.51 1.22 3.18 4.01 3.29 6.65-.74 1.54-3.63-3.62-.64-3.38-2.36-3.83-2.61-1.38-4.56.39-.45.13 4.99 2.53 1.57 3.72 3.01.47 3.1 3.1 3.71 4.76 1.81 1.88 1.44-2.08 3.6.18-1.37-2.02-7.25-5.68-2.52-4.51-.03-2.03-.86-3.67.6-3.63 1.44-2.6-1.51 6.42 1.73 3.11.9-.39 1.12-2.6 2.73.21 2.34 2.3.85 3.97-2.46 1.86.59 2.01 4.42 2.72 3.7 5.86.76 2.76 1.83 1.74 2.76 1.58.73 2.68 1.14.71 1.18-.57 3.34.72 2.56 2.69 3.6 4.07 2.3 1.04-3.29-7.04.66-2.43 4.16 3.75 1.56 5.32-2.17 4.72 2.36-.19 3.12 3.19 6.07 3.07 2.69 1.28 4.52 6.2-.12 4.15-1.61-1.45-7.31-3.24-2.65-.48 4.3 1.99 7.71 3.18 11.86 5.68 2.96 2.12 4.25 4.54 5.37 5.02-2.49 1.19-7.51-.95-3.78-1.61-2.33-.42-4.94-1.6-2.71 1.3 1.89 1.58 6.71 1.42 7.58 1.59-.73 1.61-1.99 1.74.03 1.86-2.25 1.22.72 1.41.93 2.1zm-4.6-13c-1.37-1.43-1.72-4.11-.24-1.78.75.3 2.43 4.38.24 1.78zm14.99 9.52c.85-.06.02.65 0 0zM59.59 83.91c-.06-2.17.49 1.67 0 0zM58.1 81.9c-1.73-3.32 2.17.95 0 0zM40.04 69.44c1.01-.27.5 1.73 0 0zm14.37 7.79c.62-2.33.73 1.96 0 0zm-10.15-7.06c-.71-1.29 1.5 1.21 0 0zm8.71 2.79c-1.63-3.65 1.16-2 .36.6l-.36-.6zM37.95 62.95c-.73-1.2-1.93-4.72-1.55-5.79.35 1.75 3.72 7.53 1.65 2.39-2.28-4.3 2.73 1.4 3.25 2.47.24 1.07-1.41-.29-.29 2.21-2.04-2.85-1.2 1.58-3.06-1.28zm-4.64-3.2c.19-2.79 1.06 1.91 0 0zm2.08.72c1-2.11 1.69 2.93 0 0zm-5.02-3.89c-1.73-1.72-2.98-3.3.08-1.07 1.18.05-2.62-3.6.28-1.16 3.06.56 1.51 5.01-.36 2.23zm2.64-.07c1-.99.53.98 0 0zm1.62.52c-1.52-2.85 1.85 1.2 0 0zm-3.22-3.08c-5.02-4.47 6.31 2.34.82.83l-.82-.83zm14.39 8.36c-2.18-1.3-.58-9.18.16-3.79 2.11-.68-.12 2.78 1.46 2.75-.24 2.18-.95 2.97-1.62 1.04zm5.33 3.15c.21-2.38.45 1.62 0 0zm-.93-.92c.24-1.01.03 1.2 0 0zM32.39 52.48c-3.23-4.45 9.38 4.51 2.07 1.13-.77-.21-1.69-.28-2.07-1.13zm10.26 5.43c-.31-3.75.68.62 0 0zm7.78 5c.6-2.14.05 1.41 0 0zM32.89 50.78c1.92-.41 7.95 3.37 2.41 1.08-.62-.69-1.93-.38-2.41-1.08zm16.47 8.21c.2-3.84 1.15-2.29.01.55l-.01-.55zm-15.05-9.55c.78-1.15-2.08-5.18.41-1.45 1.08.85 3.11 1.43 1.31 1.79 2.84 2.5-.68.68-1.72-.34zm14.24 8.35c.54-4.37.47 2.56 0 0zM32.68 45.41c.6-.26.32.79 0 0zm3.71 2.21c.96-2.01 1.77 2.23 0 0zm10.47 5.82c0-.77.2 1.12 0 0zm-.6-1.34c-1.45-3.59 1.35 1.9 0 0zm-.89-2.35c-.25-1.48.83 1.86 0 0zm1.45-2.36c-1-1.76 1.26-7.75 1.51-4.03-1.05 2.89-.3 4.51.43.63 1.36-3.06-.29 6.02-1.94 3.4zm1.49-8.91c.44-.53.1.65 0 0zM45.82 87.6c-.59-.52.07.33 0 0zm5.13 2.6c2.86.74 2.84-.44.26-.79-1.39-1.29-5.77-2.66-1.85-.16.27.65 1.09.63 1.59.95zm-10.14-6.74c1.57 1.18 5.93 3.32 2.24.45 1.24-1.44-2.38-2.21-1.18-3.18-3.06-1.87-2.41-1.7-.27-1.64-3.67-1.64.53-1.52.33-2.36-1.42-.28-7.03-2.5-3.73.18-3.36-1.71-.8.64-1.82.39-3.44-.94 3.06 2.62-.54 1.73 1.97 1.56 5.3 4 .83 1.65-.57.85 3.21 2.14 4.14 2.78zm5.37 3.09c6.53 2.1-3.2-2.58 0 0zm27.5 16.65c.08-1.3-.9 1.11 0 0zm2.82 1.19c1.51-1.46.06 2.33 2.5-.36.03-1.92-.07-3.06-2.8-.72-.75.42-1.09 2.19.3 1.08zM31.65 76.22c-.47-1.82-3.25-1.81 0 0zm3.01 1.98c-1.12-1.86-4-1.68 0 0zm17.17 10.35c1.68 1.49 7.7 1.09 2.03.18-.83-1.24-5.32-.94-2.03-.18zm23.6 14.57c2.57-2.16-2.5.97 0 0zm5.36 3.69c.02-.69-1.11.3 0 0zm.01-.97c2.86-3.03-2.77.18 0 0zM24.22 70.01c-2.43-3.47-1.51-5.03-3.86-7.87-.45-2.17-4.03-7.09-1.85-1.88 1.99 3.05 2.58 7.77 5.71 9.75zm55.68 34.87c5.26-3.4-2.15-1.48 0 0zm4.01 1.57c2.64-2.26-1.66-.47 0 0zM30.75 72.38c.76-1.12-1.94-.14 0 0zm52.33 32.99c2.55-1.64-.59-1.39-.46.15l.46-.15zM48.5 83.58c-.09-1.11-1.35.09 0 0zm2.14 1.23c-.69-1.38-1.05.21 0 0zm36.53 21.67c3.27-2.36-1.98-.45-.68.45l.68-.45zm-1.26-.6c2.67-2.23-2.8.99 0 0zm6.39 4.25c1.79-1.19-2.17-.38 0 0zM32.39 71.57c2.39.54 9.56 5.89 5.33.37-2.17-.64-.87-5.94-3.08-5 1.48 2.48 1.22 3.53-1.9 1.97-3.91-1.91-2.2.94-1.43 1.73-1.04.25 1.39.91 1.08.93zm-10.9-8.61c.43-1.77-3.95-9.75-2.07-4 .68 1.21.61 3.49 2.07 4zM41.5 75.3c-1.23-1.03-.06-.15 0 0zm3.03.71c0-1.88-3.35-.77 0 0zm26.3 16.57c-.5-1.28-1.98-.02 0 0zm1.26.93c-.18-.72-.72.14 0 0zm10.43 6.56c1-.74-1.25-.09 0 0zM26.93 64.35c2.87-1.11-3.07-.79 0 0zm41.59 26.2c-.04-1.86-1.83.46 0 0zM25.8 61.71c1.84-.62-1.71-.41 0 0zm5.34 2.59c-.03-.61-.56.23 0 0zm65.22 39.99c2.37-.48 7.77 1.21 8.64-.63-2.88-.07-9.95-2.03-10.28.46l.63.1 1.01.07zM32.84 64.73c.05-1.88-1.46-.07 0 0zm-14.05-9.75c-.64-3.58-2.43-.54 0 0zm3.35.84c.04-1.15-3.07-1.03 0 0zm1.91.94c-.55-.44-.43.57 0 0zm12.06 7.73c.57-.52-1.35-.38 0 0zm-13.33-9.85c-.33-2.71-3.88-.4 0 0zm-6.87-4.46c-.1-1.25-.67.47 0 0zm1.02-.77c-.17-1.48-.88.19 0 0zm5.65 3.37c2.39-.94-4.35-1.94-.49-.18l.49.18zm75.59 46.69c1.53-1.4-1.94-.43 0 0zm9.13 4.74c.61-1.81-1.54.23 0 0zM23.15 49.82c.26-1.75-1.89.35 0 0zm-8.03-5.38c-.43-2.47-.37-6.82 3.76-5.35-5.51 1.1 3.82 6.85 2.64 2.31 2.32.11 4.53-1.37 3.32.88 4.57-.5 7.73-4.46 12.14-3.91 3.44-.46 7.19-.8 10.89-2.18 3.04-.22 5.97-3.5 4.31-5.44-4.15-.35-8.5.17-13.08 1.08-5.08 1.06-9.7 3.06-14.83 3.93-5 .67 1 1.85-.43 2.11-2.61.9 3.11 1.52-.34 2.47-2.13-.41-4.35-1.14-3.44-3.38-4.79.62-9 2.61-5.21 7.48h.27zm11.54-5.88c1.12-4.14 6.01 3.4 1.84.55-.5-.38-1.32-.68-1.84-.55zm.22-2.01c1.62-1.2.86.68 0 0zm2.06.04c.15-1.9 4.71 1.01.75.68l-.75-.68zm2.81-1.14c1.03-1.2.3 1.07 0 0zm.72-.48c1.71-2.06 9.69-1.31 3.85-.2-1.56-1.18-2.76.7-3.85.2zm10.42-1.6c-.26-5.62 5.18 1.99 0 0zm2.96-.02c1.08-2.83 4.2-1.14.5-.57.08.3-.11 1.46-.5.57zM21.99 48.37c3.23-1.98-3.43-1.72 0 0zm2.39.66c1.13-1.2-2.46-.49 0 0zm-7.04-4.99c1.85-1.42-2.18-.54 0 0zm95.35 59.65c.05-1.65-1.41.74 0 0zM103 97.08c.28-1.9-1.24.16 0 0zm12.36 7.25c2.58.01 7.82-.8 2.2-.8-.88.13-5.13.11-2.2.8zM26.48 47.87c2.09-.14 3.27-2.3-.41-2.18-5.69-.59 5.02 1.95-.73 1.22-.77.51 1.09 1.1 1.14.96zm1.84.93c-.22-1.34-.65.71 0 0zm2.18-5.82c.9-1.12-1.26-.3 0 0zm-6.95-11.6c3.73-1.27 8.82-2.69 10.58.62-1.79-2.15-.72-4.28.97-1.12 2.39 3.19 3.59-1.45 2.03-2.52 1.77 2.2 3.79 3.24 1.19.14 2.83-3.4-5.66.45-7.59.41-.92.41-9.58 2.2-7.18 2.47zm2.19-4.18c2.13-1.6 7.35.96 4-1.59-.33-.3-7.35 1.93-4 1.59zm7.75.32c2.49.06-1.07-3.34 1.89-1.8-.49-1.59-3.45-1.89-4.9-2.52-.82 1.45 1.66 4.34 3.01 4.32zm-6.39-7.04c.86-1.16-1.51.6 0 0zm3.16.76c4.01-.53-1.02-1.72-.81-.04l.81.04zm-5.91-4.62c-2.82-3.69 5.31.62 2.44-3.24-2.41-1.92-4.73 2.16-2.44 3.24zm36.21 19.5c1.29-2.29-5.34-3.09-.87-.81.42.14.32.97.87.81z"
                          ></path>
                        </svg>
                        <h6>Flask</h6>
                      </div>
                      <div className={styles.techIcon}>
                        <svg
                          viewBox="0 0 128 128"
                          width={40}
                          className={dark ? styles.svgDark : ""}
                        >
                          <path
                            fill="black"
                            d="M116.948 97.807c-6.863-.187-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.809 1.829 1.365 2.731 1.07 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.577 2.751 5.465 3.902 3.358 2.047 7.107 3.217 10.34 5.268 1.906 1.21 3.799 2.733 5.658 4.097.92.675 1.537 1.724 2.732 2.147v-.194c-.628-.8-.79-1.898-1.366-2.733l-2.537-2.537c-2.48-3.292-5.629-6.184-8.976-8.585-2.669-1.916-8.642-4.504-9.755-7.609l-.195-.195c1.892-.214 4.107-.898 5.854-1.367 2.934-.786 5.556-.583 8.585-1.365l4.097-1.171v-.78c-1.531-1.571-2.623-3.651-4.292-5.073-4.37-3.72-9.138-7.437-14.048-10.537-2.724-1.718-6.089-2.835-8.976-4.292-.971-.491-2.677-.746-3.318-1.562-1.517-1.932-2.342-4.382-3.511-6.633-2.449-4.717-4.854-9.868-7.024-14.831-1.48-3.384-2.447-6.72-4.293-9.756-8.86-14.567-18.396-23.358-33.169-32-3.144-1.838-6.929-2.563-10.929-3.513-2.145-.129-4.292-.26-6.438-.391-1.311-.546-2.673-2.149-3.902-2.927C17.811 4.565 5.257-2.16 1.633 6.682c-2.289 5.581 3.421 11.025 5.462 13.854 1.434 1.982 3.269 4.207 4.293 6.438.674 1.467.79 2.938 1.367 4.489 1.417 3.822 2.652 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.951 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.95 6.44-3.05 9.615-1.899 21.567 2.537 28.683 1.36 2.186 4.567 6.871 8.975 5.073 3.856-1.57 2.995-6.438 4.098-10.732.249-.973.096-1.689.585-2.341v.195l3.513 7.024c2.6 4.187 7.212 8.562 11.122 11.514 2.027 1.531 3.623 4.177 6.244 5.073v-.196h-.195c-.508-.791-1.303-1.119-1.951-1.755-1.527-1.497-3.225-3.358-4.487-5.073-3.556-4.827-6.698-10.11-9.561-15.609-1.368-2.627-2.557-5.523-3.709-8.196-.444-1.03-.438-2.589-1.364-3.122-1.263 1.958-3.122 3.542-4.098 5.854-1.561 3.696-1.762 8.204-2.341 12.878-.342.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.554-6.07-3.029-15.842-.781-22.829.582-1.809 3.21-7.501 2.146-9.172-.508-1.666-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.124-5.464-2.09-4.731-3.066-10.044-5.267-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.683-6.635-.446-.968-1.051-2.518-.391-3.513.21-.671.508-.951 1.171-1.17 1.132-.873 4.284.29 5.462.779 3.129 1.3 5.741 2.538 8.392 4.294 1.271.844 2.559 2.475 4.097 2.927h1.756c2.747.631 5.824.195 8.391.975 4.536 1.378 8.601 3.523 12.292 5.854 11.246 7.102 20.442 17.21 26.732 29.269 1.012 1.942 1.45 3.794 2.341 5.854 1.798 4.153 4.063 8.426 5.852 12.488 1.786 4.052 3.526 8.141 6.05 11.513 1.327 1.772 6.451 2.723 8.781 3.708 1.632.689 4.307 1.409 5.854 2.34 2.953 1.782 5.815 3.903 8.586 5.855 1.383.975 5.64 3.116 5.852 4.879zM29.729 23.466c-1.431-.027-2.443.156-3.513.389v.195h.195c.683 1.402 1.888 2.306 2.731 3.513.65 1.367 1.301 2.732 1.952 4.097l.194-.193c1.209-.853 1.762-2.214 1.755-4.294-.484-.509-.555-1.147-.975-1.755-.556-.811-1.635-1.272-2.339-1.952z"
                          ></path>
                        </svg>
                        <h6>MySQL</h6>
                      </div>
                      <div className={styles.techIcon}>
                        <svg
                          viewBox="0 0 128 128"
                          width={40}
                          className={dark ? styles.svgDark : ""}
                        >
                          <path
                            fill="black"
                            d="M38.089 77.466l-11.4 4.896 10.559 4.514 12.241-4.514-11.4-4.896zm-17.138 6.12l-.382 22.034 16.679 7.345V90.089l-16.297-6.503zm34.276 0l-15.073 5.739V110.9l15.073-6.121V83.586zm17.979-68.551L61.73 19.931l10.635 4.515 12.241-4.515-11.4-4.896zm-15.914 6.503v22.034l14.231 4.132.459-20.046-14.69-6.12zm31.828 1.224L75.654 28.5v21.652l13.466-6.121V22.762zM19.306 46.047L7.907 50.944l10.558 4.514 12.241-4.514-11.4-4.897zM2.168 52.168l-.382 22.034 16.679 7.345V58.671L2.168 52.168zm34.275 0l-15.071 5.738V79.48l15.071-6.12V52.168zm19.587-6.937l-11.4 4.897 10.558 4.514 12.241-4.514-11.399-4.897zm-17.137 6.121l-.383 22.035 16.679 7.345V57.855l-16.296-6.503zm34.275 0L58.096 57.09v21.576l15.072-6.121V51.352zm35.908-36.317l-11.399 4.896 10.559 4.515 12.241-4.515-11.401-4.896zm-17.137 6.121l-.382 22.034 16.679 7.344V27.658l-16.297-6.502zm34.275 0l-15.071 5.738v21.575l15.071-6.12V21.156z"
                          ></path>
                        </svg>
                        <h6>AWS</h6>
                      </div>
                      <div className={styles.techIcon}>
                        <svg
                          viewBox="0 0 128 128"
                          width={40}
                          className={dark ? styles.svgDark : ""}
                        >
                          <path
                            fill="black"
                            d="M75.701 65.603c-2.334-.768-5.694-.603-10.08-.603H48v23h18.844c2.944 0 5.012-.315 6.203-.535 2.099-.376 3.854-1.104 5.264-1.982 1.409-.876 2.568-2.205 3.478-3.881.908-1.676 1.363-3.637 1.363-5.83 0-2.568-.658-4.54-1.975-6.436-1.316-1.896-3.141-2.965-5.476-3.733zm-2.419-10.516c2.317-.688 4.064-1.89 5.239-3.487 1.176-1.598 1.763-3.631 1.763-6.044 0-2.286-.549-4.314-1.646-6.054s-2.662-2.413-4.699-3.056c-2.037-.641-5.53-.446-10.48-.446H48v20h16.587c4.042 0 6.939-.38 8.695-.913zM126 18.625C126 9.443 118.557 2 109.375 2h-91.75C8.443 2 1 9.443 1 18.625v91.75C1 119.557 8.443 127 17.625 127h91.75c9.182 0 16.625-7.443 16.625-16.625v-91.75zm-35.447 66.12c-1.362 2.773-3.047 4.911-5.052 6.415-2.006 1.504-4.521 2.78-7.544 3.548C74.935 95.477 71.229 96 66.844 96H39V27h27.42c5.264 0 9.485.609 12.665 2.002 3.181 1.395 5.671 3.497 7.474 6.395 1.801 2.898 2.702 5.907 2.702 9.071 0 2.945-.8 5.708-2.397 8.308-1.598 2.602-4.011 4.694-7.237 6.292 4.166 1.222 7.37 3.304 9.61 6.248 2.24 2.945 3.36 6.422 3.36 10.432 0 3.227-.681 6.225-2.044 8.997z"
                          ></path>
                        </svg>
                        <h6>Bootstrap</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cardWork}>
              <div
                className={[styles.gradientBorder, styles.gradient5].join(" ")}
              >
                <div className={styles.cardWorkContent}>
                  <div className={styles.cardIconAndLinks}>
                    <div className={styles.cardImg}>
                      <Image
                        src="/images/verdi2.jpeg"
                        alt="EmprendeAdvisor logo"
                        width="120"
                        height="120"
                      />
                    </div>
                    <div className={styles.cardLinks}>
                      <a
                        href="https://github.com/renatogm24/verdi"
                        target="_blank"
                      >
                        <h6>{siteInfo.work.links.deploy}</h6>
                      </a>
                      <a
                        href="https://github.com/renatogm24/verdi"
                        target="_blank"
                      >
                        <h6>{siteInfo.work.links.code}</h6>
                      </a>
                    </div>
                  </div>
                  <div className={styles.cardDescAndTech}>
                    <h3>Verdi</h3>
                    <p>{siteInfo.work.projects.verdi}</p>
                    <div className={styles.cardTechIcon}>
                      <div className={styles.techIcon}>
                        <svg
                          viewBox="0 0 128 128"
                          width={40}
                          className={dark ? styles.svgDark : ""}
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            fill="black"
                            d="M90.491 57.282c-.37-4.79-1.496-9.409-3.062-13.934-3.244-10.104-8.45-19.046-15.783-26.74-1.854-1.946-3.916-3.729-5.209-6.151-.818-1.532-1.597-3.085-2.394-4.629l-.505-1.273c-.085.292-.139.396-.142.501-.065 2.517-1.491 4.224-3.267 5.817-1.997 1.793-3.856 3.739-5.775 5.618l-5.901 7.763c-1.592 2.925-3.182 5.85-4.772 8.775l-3.19 8.617-.096.134c-1.756 5.768-2.622 11.698-3.048 17.688-.16 2.251.022 4.535.149 6.798.181 3.235.743 6.415 1.586 9.545 3.062 11.372 9.276 20.805 17.771 28.819 1.579 1.489 3.199 2.843 4.847 4.26.282-.965.507-1.93.763-2.895.256-.961.515-1.917.688-2.881-.174.964-.369 1.92-.562 2.881l-.826 2.895.738 2.501.684 3.884.326 4.053c-.003.823-.036 1.648.014 2.47.012.21.288.404.442.606l1.376.483 1.434.558-.246-3.603-.011-3.548.495-5.405.359-1.177 1.027-1.82c1.268-1.02 2.629-1.946 3.784-3.081 2.09-2.054 4.175-4.134 6.045-6.383a47.846 47.846 0 006.191-9.516c1.122-2.284 2.178-4.614 3.052-7.001.77-2.104 1.247-4.315 1.854-6.479.054-.156.126-.309.16-.468 1.254-5.841 1.465-11.741 1.004-17.682zm-23.599 49.375l-.805-1.763.805 1.763 1.183 1.01-1.183-1.01z"
                          ></path>
                        </svg>
                        <h6>MongoDB</h6>
                      </div>
                      <div className={styles.techIcon}>
                        <svg
                          viewBox="0 0 128 128"
                          width={40}
                          className={dark ? styles.svgDark : ""}
                        >
                          <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"></path>
                        </svg>
                        <h6>Express</h6>
                      </div>
                      <div className={styles.techIcon}>
                        <svg
                          viewBox="0 0 128 128"
                          width={40}
                          className={dark ? styles.svgDark : ""}
                        >
                          <g fill="black">
                            <circle cx="64" cy="64" r="11.4"></circle>
                            <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                          </g>
                        </svg>
                        <h6>React</h6>
                      </div>
                      <div className={styles.techIcon}>
                        <svg
                          viewBox="0 0 128 128"
                          width={40}
                          className={dark ? styles.svgDark : ""}
                        >
                          <path
                            fill="black"
                            d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"
                          ></path>
                        </svg>
                        <h6>Node</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cardWork}>
              <div
                className={[styles.gradientBorder, styles.gradient2].join(" ")}
              >
                <div className={styles.cardWorkContent}>
                  <div className={styles.cardIconAndLinks}>
                    <div className={styles.cardImg}>
                      <Image
                        src="/images/Rumbero.png"
                        alt="Enelmarket logo"
                        width="120"
                        height="120"
                      />
                    </div>
                    <div className={styles.cardLinks}>
                      <a
                        href="https://renatogm24.github.io/op-react-shopping-cart/"
                        target="_blank"
                      >
                        <h6>{siteInfo.work.links.deploy}</h6>
                      </a>
                      <a
                        href="https://github.com/renatogm24/op-react-shopping-cart"
                        target="_blank"
                      >
                        <h6>{siteInfo.work.links.code}</h6>
                      </a>
                    </div>
                  </div>
                  <div className={styles.cardDescAndTech}>
                    <h3>Rumbero</h3>
                    <p>{siteInfo.work.projects.rumbero}</p>
                    <div className={styles.cardTechIcon}>
                      <div className={styles.techIcon}>
                        <svg
                          viewBox="0 0 128 128"
                          width={40}
                          className={dark ? styles.svgDark : ""}
                        >
                          <g fill="black">
                            <circle cx="64" cy="64" r="11.4"></circle>
                            <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                          </g>
                        </svg>
                        <h6>React</h6>
                      </div>
                      <div className={styles.techIcon}>
                        <svg
                          viewBox="0 0 128 128"
                          width={40}
                          className={dark ? styles.svgDark : ""}
                        >
                          <path
                            fill="black"
                            d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626L119.24 1H8.76zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336L64 101.607v.001l-.022.019-28.311-7.888L33.75 72h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229L81.075 65H48.792l-.277-3.043-.631-7.129L47.553 51h34.749l1.264-14H30.64l-.277-3.041-.63-7.131L29.401 23h69.281l-.331 3.862z"
                          ></path>
                        </svg>
                        <h6>CSS</h6>
                      </div>
                      <div className={styles.techIcon}>
                        <svg
                          viewBox="0 0 128 128"
                          width={40}
                          className={dark ? styles.svgDark : ""}
                        >
                          <g fill="black">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                            ></path>
                            <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                          </g>
                        </svg>
                        <h6>Pages</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cardWork}>
              <div
                className={[styles.gradientBorder, styles.gradient3].join(" ")}
              >
                <div className={styles.cardWorkContent}>
                  <div className={styles.cardIconAndLinks}>
                    <div className={styles.cardImgWB}>
                      <Image
                        src="/images/portfolio.png"
                        alt="Imporia logo"
                        width="120"
                        height="120"
                      />
                    </div>
                    <div className={styles.cardLinks}>
                      <a href="https://www.renatogaray.dev/en" target="_blank">
                        <h6>{siteInfo.work.links.deploy}</h6>
                      </a>
                      <a
                        href="https://github.com/renatogm24/portfolio"
                        target="_blank"
                      >
                        <h6>{siteInfo.work.links.code}</h6>
                      </a>
                    </div>
                  </div>
                  <div className={styles.cardDescAndTech}>
                    <h3>Portfolio</h3>
                    <p>{siteInfo.work.projects.portfolio}</p>
                    <div className={styles.cardTechIcon}>
                      <div className={styles.techIcon}>
                        <svg
                          viewBox="0 0 128 128"
                          width={40}
                          className={dark ? styles.svgDark : ""}
                        >
                          <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm32.7 114.4L48.4 41.8h-6.8v50.1h6.8V55.3l44.2 61.5c-8.5 4.6-18.2 7.2-28.6 7.2-33.2.1-60.1-26.8-60.1-60S30.8 3.9 64 3.9s60.1 26.9 60.1 60.1c0 21.1-10.9 39.7-27.4 50.4z"></path>
                          <path d="M78.6 73.3l7.5 11.3V41.8h-7.5z"></path>
                        </svg>
                        <h6>NextJS</h6>
                      </div>
                      <div className={styles.techIcon}>
                        <svg
                          viewBox="0 0 128 128"
                          width={40}
                          className={dark ? styles.svgDark : ""}
                        >
                          <path fill="none" d="M0 0h128v128H0z"></path>
                          <path
                            d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 01-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0010 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0026.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 01-2.61-6A9.12 9.12 0 0187.37 70h.34a9.15 9.15 0 011 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 01-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0016 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 00-17.27-20.85 62 62 0 00-34.74-10.59h-2.93a9.21 9.21 0 01-8 5.54h-.31a9.13 9.13 0 01-.3-18.25h.33a9 9 0 018 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 011.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 00-9.64 25.25 59.61 59.61 0 008.47 36.16 2.75 2.75 0 011.14-.16h.32a9.12 9.12 0 01.33 18.24h-.33a9.16 9.16 0 01-9.12-8.79z"
                            fill="black"
                          ></path>
                        </svg>
                        <h6>Redux</h6>
                      </div>
                      <div className={styles.techIcon}>
                        <svg
                          viewBox="0 0 128 128"
                          width={40}
                          className={dark ? styles.svgDark : ""}
                        >
                          <g fill="black">
                            <circle cx="64" cy="64" r="11.4"></circle>
                            <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                          </g>
                        </svg>
                        <h6>React</h6>
                      </div>
                      <div className={styles.techIcon}>
                        <svg
                          viewBox="0 0 128 128"
                          width={40}
                          className={dark ? styles.svgDark : ""}
                        >
                          <path
                            fill="black"
                            d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626L119.24 1H8.76zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336L64 101.607v.001l-.022.019-28.311-7.888L33.75 72h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229L81.075 65H48.792l-.277-3.043-.631-7.129L47.553 51h34.749l1.264-14H30.64l-.277-3.041-.63-7.131L29.401 23h69.281l-.331 3.862z"
                          ></path>
                        </svg>
                        <h6>CSS</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.cardWork}>
              <div
                className={[styles.gradientBorder, styles.gradient6].join(" ")}
              >
                <div className={styles.cardWorkContent}>
                  <div className={styles.cardIconAndLinks}>
                    <div className={styles.cardImg}>
                      <Image
                        src="/images/github.png"
                        alt="Imporia logo"
                        width="120"
                        height="120"
                      />
                    </div>
                    <div className={styles.cardLinks}>
                      <a href="https://github.com/renatogm24" target="_blank">
                        <h6>{siteInfo.work.links.deploy}</h6>
                      </a>
                      <a href="https://github.com/renatogm24" target="_blank">
                        <h6>{siteInfo.work.links.code}</h6>
                      </a>
                    </div>
                  </div>
                  <div className={styles.cardDescAndTech}>
                    <h3>Github</h3>
                    <p>{siteInfo.work.projects.github}</p>
                    <div className={styles.cardTechIcon}>
                      <div className={styles.techIcon}>
                        <svg
                          viewBox="0 0 128 128"
                          width={40}
                          className={dark ? styles.svgDark : ""}
                        >
                          <path
                            fill="black"
                            d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"
                          ></path>
                        </svg>
                        <h6>Git</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps({
  params: { pseudoLocale = "en" },
  locale = "main",
}) {
  const titleHeader =
    pseudoLocale === "en"
      ? "Renato Garay - Developer"
      : "Renato Garay - Desarrollador";
  return {
    props: {
      pseudoLocale,
      titleHeader,
    },
    revalidate: 60, // Seconds. This refresh time could be longer depending on how often data changes.
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pseudoLocale: "en" }, locale: "main" },
      { params: { pseudoLocale: "es" }, locale: "main" },
    ],
    fallback: false, // true -> build page if missing, false -> serve 404
  };
}
