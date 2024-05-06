import { ArrowDown } from "lucide-react";

import FooterOne from "../../components/FooterOne";
import Hearder from "../../components/Hearder";
import { Link } from "react-router-dom";
import img from "../../assets/pict.jpg";
import img1 from "../../assets/culture (2).jpg";
import { TfiLinkedin } from "react-icons/tfi";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { Detail2, TiltePropos } from "../../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/Animation";

export default function Projet() {
  return (
    <section>
      <div>
        <Hearder />
        <div className=" ">
          <div
            className="bg-center object-cover h-[550px] w-full text-center bg-cover bg-repeat"
            style={{
              background: "url('/img1.jpeg') ",
            }}
          >
            <div className="relative top-28">
              <motion.h1
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.8 }}
                className="font-bold text-white sm:text-5xl md:text-5xl relative top-[8rem] min-[320px]:text-[1.8rem]"
              >
                Nos Objectifs et Formations
              </motion.h1>

              <p className="relative text-white sm:text-[1.3rem] min-[320px]:text-[1.1rem] min-[400px]:text-[1.3rem] top-[10rem] font-semibold">
                <Link className=" hover:text-orange-300" to="/">
                  <span className="  relative right-[.5rem]">Accueil</span>
                </Link>
                / A propos
              </p>
            </div>
          </div>

          <main className=" md:px-16 font-bold min-[320px]:p-6 min-[460px]:p-8 min-[460px]:leading-[2.9rem] sm:text-4xl sm:px-10 sm:leading-[3.5rem]  min-[320px]:text-3xl lg:text-[2.8rem] xl:px-20 lg:px-16 lg:leading-[4rem] relative top-8  text-[#0d3137] ">
            <h1>L’ONG BETHEL au cœur </h1>
            <h1>de votre Bien-être</h1>
          </main>

          <main className="lg:flex lg:justify-center lg:items-center lg:relative lg:py-14 min-[512px]:px-5 sm:px-7 md:px-12">
            <img
              src={img1}
              alt=""
              className="lg:w-[490px] lg:h-[390px] xl:w-[530px] xl:h-[370px] min-[320px]:p-4 sm:w-full sm:h-[430px] md:w-full md:h-[500px]"
            />
            <div className=" min-[320px]:w-full min-[3450px]:h-full min-[320px]:p-4 sm:w-[600px] sm:h-[349px] sm:overflow-hidden ">
              <div className="lg:py-0 lg:text-md min-[320px]:py-6  ">
                <p>
                  L’ONG BETHEL dispose des programmes qui s’adressent aux
                  jeunes,
                </p>
                <p>
                  hommes et femmes, victimes ou non de l’immigration
                  clandestine,
                </p>
                <p>
                  déterminés à se prendre sainement en charge, ainsi que leur
                </p>
                <p>
                  famille , en exerçant des activités génératrices de revenus
                </p>
                <p>
                  liées au secteur agricole. Nous leur donnons la possibilité de
                </p>
                <p>
                  s’insérer dans la vie active pour se construire. Nous avons
                  des
                  <br /> partenaires avec qui nous collaborons et qui sont
                  disponibles
                </p>
                <p>
                  à accompagner nos bénéficiaires, afin qu’ils puissent
                  s’épanouir. Après <br />
                  nos différentes formations, les programmes aident les
                </p>
                <p>
                  bénéficiaires à mettre en place des activités à partir des
                  connaissances <br /> acquises et à pouvoir
                </p>
                <p>les gérer de façon autonome, après une période</p>
                <p>de supervision, de coaching, de contrôle et d’évaluation.</p>
              </div>
            </div>
          </main>
          <main className=" text-center bg-[#0d3137] p-11">
            <div>
              <h1 className="text-4xl text-white font-semibold">
                Nos différentes formations...
              </h1>
              <div className="py-8 text-white">
                <p>
                  Nos formations disposent de plusieurs volets qui seront
                  pratiquées selon le choix et l’engagement de
                </p>
                <p>
                  chaque bénéficiaire. En fonction de la finalité de tous ces
                  programmes de formation et de la nature
                </p>
                <p>
                  des activités menées, les modules seront dispensés soit en
                  salle, au siège social ou au bureau, section
                </p>
                <p>
                  ou représentation et/ou sur les fermes ou plantations pilotes
                  mises en place par L’ONG ou utilisés dans
                </p>
                <p>le cadre d’un partenariat </p>
              </div>
              <div className=" flex justify-center cursor-pointer  ">
                <div className="border-2 p-2 rounded-full">
                  <ArrowDown className=" hover:rotate-180 transition-[.10s] text-white w-8 h-8 rounded-full " />
                </div>
              </div>
            </div>
          </main>

          <main className=" min-[512px]:justify-center min-[512px]:flex  lg:flex lg:justify-center lg:items-center md:flex md:justify-center md:items-center sm:flex sm:justify-center py-8 ">
            <div className=" min-[320px]:p-3 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 lg:gap-y-4 md:gap-x-8  lg:gap-x-16 xl:gap-x-16 xl:gap-y-4">
              {Detail2.map((item) => (
                <div className=" min-[320px]:gap-3  min-[512px]:gap-6  min-[320px]:my-6 min-[320px]:flex min-[512px]:my-10 lg:flex sm:my-10 lg:items-center lg:gap-7 lg:my-4">
                  <div className=" min-[320px]:flex  min-[320px]:justify-center">
                    <div className="bg-orange-300 min-[320px]:flex min-[320px]:justify-center min-[320px]:items-center min-[320px]:p-2">
                      <img
                        src={item.picture}
                        alt=""
                        className=" min-[320px]:w-[43px] min-[320px]:h-[40px] lg:w-[50px] lg:h-[50px] md:p-[.2rem] text-center justify-center"
                      />
                    </div>
                  </div>
                  <div className="">
                    <h1 className=" font-bold sm:text-xl min-[320px]:text- ">
                      {item.title}
                    </h1>
                    <div className="">
                      <p>{item.paragraphe1}</p>
                      <p>{item.paragraphe2}</p>
                      <p>{item.paragraphe3}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>

          <main className="lg:flex lg:justify-center lg:items-center lg:gap-10 bg-[#f4f4f4] min-[320px]:p-4 min-[450px]:p-10 sm:p-14 md:p-20 ">
            <img
              src={img}
              alt=""
              className="lg:w-[320px] rounded-2xl lg:h-[430px] md:w-full h-[500px]  "
            />
            <div className="">
              <div className="">
                <div className=" min-[320px]:my-3 min-[450px]:my-6 text-3xl text-[#0d3137] font-bold">
                  <h1>Nous disposons de plusieurs </h1>
                  <h1>Aspects positifs </h1>
                  <h1></h1>
                </div>

                <div className=" lg:grid lg:grid-cols-2 gap-x-4">
                  {TiltePropos.map((item) => (
                    <div className="bg-white shadow-md   min-[320px]:p-4 min-[450px]:p-6  min-[320px]:my-3 rounded-lg overflow-hidden">
                      <h1 className=" font-bold">{item.title}</h1>
                      <div className="">
                        <p>{item.paragraphe1}</p>
                        <p>{item.paragraphe2}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>

          {/* <main> */}
          {/* L'ONG BETHEL est une organisation a but non lucratif cree en
            Republique de Cote D'Ivoire et aggree par le gouvernement de Cote
            d'ivoire plus precisement par la prefecture de la ville d'Agboville
            nous somme situe dans la region de l'AGNEBY-TIASSA dans la commune
            d'AZAGUIE */}

          <div className=" flex gap-2 min-[320px]:py-3 px-20">
            <Link to="https://www.linkedin.com/" target="_blank">
              <TfiLinkedin className=" bg-[#2e73b9] rounded-sm min-[326px]:my-4 cursor-pointer min-[326px]:p-[.60rem] text-white w-10 h-10 lg:p-[.45rem] min-[320px]:p-[.60rem]" />
            </Link>
            <Link to="https://www.facebook.com/" target="_blank">
              <FaFacebookF className="bg-[#0b295f] rounded-sm min-[326px]:my-4 cursor-pointer min-[326px]:p-[.60rem] text-white w-10 h-10 lg:p-[.50rem] min-[320px]:flex min-[320px]:items-center min-[320px]:p-[.60rem]" />
            </Link>
            <Link to="https://www.twitter.com/" target="_blank">
              <BsTwitterX className="bg-black rounded-sm min-[326px]:my-4 cursor-pointer min-[326px]:p-[.60rem] text-white w-10 h-10 lg:p-[.45rem] min-[320px]:p-[.60rem]" />
            </Link>
          </div>
          <div>
            <FooterOne />
          </div>
        </div>
      </div>
    </section>
  );
}
