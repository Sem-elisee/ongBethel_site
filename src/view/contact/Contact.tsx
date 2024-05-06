import { Link } from "react-router-dom";
import Hearder from "../../components/Hearder";
import FooterOne from "../../components/FooterOne";
import { PhoneCall, MapPin } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaYoutube } from "react-icons/fa";

import { motion } from "framer-motion";
import { fadeIn2s } from "../../animation/Animation";

export default function Contact() {
  return (
    <div>
      <Hearder />
      <div
        className="bg-center h-[530px] w-full text-center bg-cover bg-repeat"
        style={{
          background: "url('/zz.jpg') ",
        }}
      >
        <div className="relative top-28">
          <motion.h1
            variants={fadeIn2s("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
            className="font-bold text-white sm:text-5xl md:text-5xl relative top-[8rem] min-[320px]:text-[1.8rem]"
          >
            Contactez-Nous
          </motion.h1>
          <p className="relative text-white sm:text-[1.3rem] min-[400px]:text-[1.3rem] min-[320px]:text-[1.1rem] top-[10rem] font-semibold">
            <Link className=" hover:text-orange-300" to="/">
              <span className="  relative right-[.5rem]">Accueil</span>
            </Link>
            / Contact
          </p>
        </div>
      </div>
      <section className="">
        <main>
          <div className="flex flex-col justify-center items-center py-8">
            <h2 className="md:text-[1.80rem] lg:text-[1.90rem] font-semibold min-[320px]:text-[1.50rem]">
              Rejoignez-nous
            </h2>
            <div className="w-20 h-[4px] bg-orange-300 rounded-md relative top-3" />
            <div className=" text-center relative top-8 sm:text-[1.2rem] min-[320px]:text-md p-2 ">
              <p>Nous Sommes Joignable sur tout les reseaux sociaux</p>
            </div>
          </div>
        </main>

        <div className=" relative top-6 md:flex md:items-center lg:gap-10 min-[320px]:justify-center md:gap-6 min-[320px]:items-center">
          <div className=" min-[320px]:flex min-[320px]:justify-center min-[320px]:items-center">
            <div
              className=" sm:px-[6.5rem] sm:py-[4rem] min-[320px]:bg-[#f4f4f4] lg:px-[4rem] lg:py-[4rem] md:px-[2.8rem] md:py-[2.8rem] min-[320px]:p-14 min-[375px]:p-16"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <div className="">
                <div className="min-[320px]:flex min-[320px]:justify-center ">
                  <PhoneCall className="  text-orange-300 w-10 h-10 " />
                </div>
              </div>
              <div className="relative top-2 ">
                <h1 className="min-[320px]:text-center font-semibold text-[1.1rem] min-[320px]:leading-10">
                  Appelez-Nous
                </h1>
                <span className="min-[320px]:leading-8">(+225) 0717998343</span>
                <h3 className="">(+225) 0102030405</h3>
              </div>
            </div>
          </div>
          <div className=" min-[320px]:my-8 min-[320px]:flex min-[320px]:justify-center min-[320px]:items-center">
            <div
              className=" sm:px-[6.5rem] sm:py-[4rem] min-[320px]:bg-[#f4f4f4] lg:px-[4rem] lg:py-[4rem] md:px-[2.8rem] md:py-[2.8rem] min-[320px]:p-14 min-[375px]:p-16"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <div className=" ">
                <div className="min-[320px]:flex min-[320px]:justify-center ">
                  <BsWhatsapp className="  text-orange-300 w-10 h-10 " />
                </div>
              </div>
              <div className="relative top-2 ">
                <h1 className="min-[320px]:text-center font-semibold text-[1.1rem] min-[320px]:leading-10">
                  Appelez-Nous
                </h1>
                <span className="min-[320px]:leading-8">(+225) 0717998343</span>
                <h3>(+225) 0717998343</h3>
              </div>
            </div>
          </div>
          <div className=" min-[320px]:flex min-[320px]:justify-center min-[320px]:items-center">
            <div
              className=" sm:px-[6.2rem] sm:py-[4rem] min-[320px]:bg-[#f4f4f4] lg:px-[4rem] lg:py-[4rem] md:px-[2.8rem] md:py-[2.8rem] min-[320px]:p-14 min-[375px]:p-16"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <div className=" ">
                <div className="min-[320px]:flex min-[320px]:justify-center ">
                  <MapPin className="  text-orange-300 w-10 h-10 " />
                </div>
              </div>
              <div className="relative top-2 ">
                <h1 className="min-[320px]:text-center font-semibold text-[1.1rem] min-[320px]:leading-10">
                  Localisation
                </h1>
                <h3 className="min-[320px]:leading-8 text-center">
                  Côte d'Ivoire
                </h3>
                <h3>Commune d'Azaguié</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main className=" py-8 relative top-8 flex text-center justify-center md:gap-8 min-[320px]:gap-4 sm:gap-5">
        <Link to="https://www.facebook.com/" target="_blank">
          <FaFacebookF
            className="bg-orange-300 rounded-xl text-white sm:w-12 sm:h-12  min-[320px]:w-10 min-[320px]:h-10 min-[320px]:p-[.60rem]"
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          />
        </Link>
        <Link to="https://www.instagram.com/" target="_blank">
          <FaInstagram
            className="bg-orange-300  rounded-xl text-white sm:w-12 sm:h-12 min-[320px]:w-10 min-[320px]:h-10 min-[320px]:p-[.60rem]"
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          />
        </Link>
        <Link to="https://www.twitter.com/" target="_blank">
          <BsTwitterX
            className="bg-orange-300 rounded-xl text-white sm:w-12 sm:h-12 min-[320px]:w-10 min-[320px]:h-10 min-[320px]:p-[.60rem]"
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          />
        </Link>
        <Link to="https://www.youtube.com/" target="_blank">
          <FaYoutube
            className="bg-orange-300 rounded-xl text-white sm:w-12 sm:h-12 min-[320px]:w-10 min-[320px]:h-10 min-[320px]:p-[.60rem]"
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          />
        </Link>
      </main>
      <section className="relative top-[5rem]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35266.148920520005!2d-4.107391158576504!3d5.619936867098601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1a2177cac3f89%3A0x4ba241c48ee81283!2zQXphZ3Vpw6k!5e0!3m2!1sfr!2sci!4v1713867295785!5m2!1sfr!2sci"
          width="100%"
          height="450"
          style={{ border: "none" }}
          // allowfullscreen=""
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <div className="relative top-20">
        <FooterOne />
      </div>
    </div>
  );
}

// s sommes une ONG qui condanne fermement l'immigration clandestine à travers le monde et qui prend la vie de plusieur etre humain
