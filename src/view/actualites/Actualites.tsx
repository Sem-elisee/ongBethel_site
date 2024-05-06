import FooterOne from "../../components/FooterOne";
import Hearder from "../../components/Hearder";
// import { ActualitesDetails } from "../../constants";
import img from "../../assets/clandestins.jpg";
import { Link } from "react-router-dom";

export default function Actualites() {
  return (
    <div>
      <Hearder />
      <div
        className="bg-center object-cover h-[530px] w-full text-center bg-cover bg-repeat"
        style={{
          background: "url('/zz.jpg') ",
        }}
      >
        <div className="relative top-28">
          <h1
            // variants={fadeIn("down", 0.3)}
            // initial="hidden"
            // whileInView={"show"}
            // viewport={{ once: false, amount: 0.8 }}
            className="font-bold text-white sm:text-5xl md:text-5xl relative top-[8rem] min-[320px]:text-[1.8rem]"
          >
            Nos Différentes actualités
          </h1>

          <p className="relative text-white sm:text-[1.3rem] min-[320px]:text-[1.1rem] min-[400px]:text-[1.3rem] top-[10rem] font-semibold">
            <Link className=" hover:text-orange-300" to="/">
              <span className="  relative right-[.5rem]">Accueil</span>
            </Link>
            / Actualités
          </p>
        </div>
      </div>
      <div className="">
        <h1 className="md:text-4xl min-[530px]:py-4 min-[530px]:px-12 md:p-10 font-bold min-[320px]:text-2xl min-[320px]:py-3 min-[320px]:px-8 lg:px-11">
          Nos actualités
          <div className="w-24 h-[4px] bg-orange-300 rounded-md relative top-[.9rem]" />
        </h1>

        <div className=" ">
          <main className="min-[320px]:p-4 min-[530px]:px-8 md:grid md:grid-cols-3 md:justify-center md:items-center">
            <div className="m-4 shadow-md relative overflow-hidden rounded-md">
              <div className=" xl:w-[100%] h-[460px] flex-col flex">
                <img
                  src={img}
                  alt=""
                  className=" w-[100%] h-[260px]"
                  style={{ borderRadius: "7px 7px 0px 0px" }}
                />
                <div>
                  <div className=" overflow-hidden bg-white p-8 ">
                    {/* absolute left-0 bottom-0 right-0 max-h-full */}
                    <h3 className="text-xl font-bold">Overview</h3>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe, debitis laudantium facilis error aut id laborum
                      nesciunt amet odit quidem eius, aliquid quam distinctio
                    </p>
                    <div className=" min-[320px]:flex min-[320px]:justify-end sm:flex sm:justify-end md:flex md:justify-end font-bold text-[#0d3137]">
                      <Link className="" to="/actualites/actualitesplus">
                        <h3>Lire la suite » </h3>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <FooterOne />
    </div>
  );
}
