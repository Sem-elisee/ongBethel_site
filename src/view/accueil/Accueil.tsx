import FooterOne from "../../components/FooterOne";
import Hearder from "../../components/Hearder";
import { Detail, Element } from "../../constants";
import img from "../../assets/img (2).jpg";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="">
      <Hearder />
      <div
        className="bg-center h-[580px] w-full bg-cover "
        style={{
          background: "url('/xxx.jpg') ",
        }}
      >
        <div className="relative md:px-28 xl:px-[11rem] lg:px-[10rem] min-[585px]:px-[5rem] min-[320px]:py-[8rem] min-[500px]:px-[3.1rem] min-[320px]:px-[2.5rem] top-[6rem] font-extrabold">
          <div className="">
            <h1 className=" lg:text-[2.6rem] text-white min-[500px]:text-[2.4rem] min-[320px]:text-[1.7rem] min-[400px]:text-[2rem] ">
              Bienvenue a vous!
            </h1>
            <h1 className=" lg:text-[2.6rem] text-white sm:my-0 min-[500px]:text-[2.4rem] min-[320px]:text-[1.7rem] min-[400px]:text-[2rem]">
              Rejoingnez nous maintenant
            </h1>
          </div>
          <div className=" sm:my-10 min-[320px]:flex min-[320px]:gap-3  min-[320px]:my-4  ">
            <Link to="/projet">
              <button className=" lg:px-7 min-[500px]:py-3 min-[320px]:px-2 min-[400px]:px-3 min-[320px]:py-2 bg-white font-semibold">
                Plus D'information
              </button>
            </Link>
            <button className=" text-white min-[585px]:px-6 min-[320px]:px-2 border-white  border-2  font-semibold">
              <Link to="/contact">Contact</Link>
            </button>
          </div>
        </div>
      </div>
      <main className=" min-[320px]:px-10 md:px-[6.5rem] min-[506px] min-[506px]: min-[320px]:py-14 sm:grid sm:grid-cols-2 sm:gap-4 lg:flex lg:gap-3 lg:px-[1.5rem] justify-center text-center ">
        {Detail.map((item) => (
          <div
            className="flex flex-col items-center min-[320px]:my-7 sm:my-2  min-[320px]:p-8"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.16)  0px 3px 6px, rgba(0, 0, 0, 0.30) 0px 3px 6px",
            }}
          >
            <div>
              <img
                src={item.picture}
                alt=""
                className="w-[45px] h-[45px] text-center justify-center"
              />
            </div>
            <h1 className="text-center font-bold">{item.title}</h1>
            <div className="text-center">
              <p>{item.paragraphe1}</p>
              <p>{item.paragraphe2}</p>
            </div>
          </div>
        ))}
      </main>

      <section>
        <main className="text-center">
          <h1 className=" font-semibold text-md">COMMUNAUTÉ</h1>
          <h2 className=" font-bold text-4xl md:leading-[3rem] min-[320px]:text-3xl">
            Rassembler les communautés
          </h2>
          <div className="flex  justify-center items-center">
            <div className="w-28 h-[4px] bg-orange-300 rounded-md relative top-[.6rem]" />
          </div>

          <div className=" md:py-7 md:text-[1rem] lg:text-[1.1rem] min-[320px]:text-[.99rem] min-[320px]:p-4 min-[430px]:p-5">
            <p>
              Nous nous engageons à donner l’opportunité à toutes personnes de
              croire
            </p>
            <p>
              en l'avenir de l'Afrique et d'y participer en leur donnant un coup
              de pouce
            </p>
            <p>
              pour ne pas s'adonner à toutes aventures risquées et périlleuses
            </p>
          </div>
        </main>

        <main className="lg:flex lg:gap-10 lg:justify-center lg:text-center lg:py-18 bg-[#0d3137] xl:flex xl:gap-20 lg:relative lg:top-7 min-[320px]:py-14 lg:py-0">
          {Element.map((item) => (
            <div className=" min-[320px]:my-10  min-[320px]:flex-col min-[320px]:justify-center lg:flex lg:flex-col lg:items-center lg:py-14">
              <div className="min-[320px]:flex min-[320px]:justify-center">
                <img
                  src={item.image}
                  alt=""
                  className="w-[80px] h-[90px] text-center justify-center opacity-8"
                />
              </div>
              <h1 className="text-center xl:text-[1.20rem] lg:text-[1.15rem] text-white font-bold">
                {item.title}
              </h1>
              <div className="  min-[320px]:text-center  lg:w-[300px] lg:h-[150px] lg:py-6 min-[320px]:py-5 min-[400px]:px-10 min-[474px]:px-10 lg:px-0">
                {/* bg-red-400 */}
                <p className="text-white">{item.paragraphe1}</p>
                <p className="text-white">{item.paragraphe2}</p>
              </div>
              <div className="lg:py-4 min-[320px]:flex min-[320px]:justify-center">
                <Link to="/actualites">
                  <button className="px-5 py-2 bg-white font-semibold">
                    En savoir plus
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </main>

        <main className="lg:flex lg:justify-center lg:items-center lg:relative lg:py-14 min-[512px]:px-5 sm:px-7 md:px-12">
          <img
            src={img}
            alt=""
            className="lg:w-[480px] lg:h-[370px] xl:w-[530px] xl:h-[370px] min-[320px]:p-4 sm:w-full sm:h-[430px] md:w-full md:h-[500px]"
          />
          <div className=" min-[320px]:w-full min-[320px]:h-full     min-[320px]:p-4 sm:w-[600px] sm:h-[349px] sm:overflow-hidden ">
            <h1 className="font-bold lg:text-3xl min-[320px]:text-xl min-[512px]:text-2xl">
              A propos de Nous
            </h1>
            <div className="w-20 h-[4px] bg-orange-300 rounded-md relative top-[1rem]" />

            <div className="lg:py-7 lg:text-md min-[320px]:py-6">
              <p>
                L'ONG BETHEL est une organisation a but non lucratif créée en
              </p>
              <p>Republique de Cote D'Ivoire et agréé par le gouvernement</p>
              <p>
                Ivoirien plus précisément par la préfecture de la ville
                d'Agboville
              </p>
              <p>nous somme situé dans la région de l'AGNEBY-TIASSA dans la</p>
              <p>commune d'AZAGUIE nous luttons contre l'immigration</p>
              <p>
                illégale et contre la disparité sociale nous menons des actions
              </p>
              <p>concrète et nous luttons contre ce fléau</p>
            </div>
            <Link to="/a_propos">
              <button className=" lg:relative lg:top-3 hover:bg-white hover:border-[3px] hover:border-[#0d3137] hover:rounded-md hover:text-[#0d3137] bg-[#0d3137] px-5 py-3 text-white font-bold">
                Lire la Suite
              </button>
            </Link>
          </div>
        </main>
      </section>
      <FooterOne />
    </div>
  );
}
