import { Link } from "react-router-dom";
import { MapPin, Mail } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import img from "../assets/Logo.png";

export default function FooterOne() {
  return (
    <section className=" bg-black min-[350px]:px-14 min-[350px]:py-8 min-[500px]:px-20 sm:px-28 sm:py-[4rem] lg:px-16 lg:py-8 min-[320px]:px-8 min-[320px]:py-8 ">
      <div className=" lg:flex lg:justify-between lg:items-center">
        <main className="">
          <div className="lg:flex lg:items-center lg:gap-3 min-[350px]:items-center min-[350px]:gap-3 min-[350px]:flex ">
            <img src={img} alt="Logo_bethel" className="w-[68px] h-[67px]" />
            <h1 className=" text-white font-bold">ONG BETHEL</h1>
          </div>
          <div className=" text-white my-8 leading-8">
            <p>L'ONG BETHEL est une organisation</p>
            <p>à but non lucratif qui lutte contre</p>
            <p>l'immigration illégale et les disparités sociales</p>
          </div>
        </main>
        <main className="lg:flex lg:items-center lg:gap-[2.5rem]">
          <div className=" text-white ">
            <h1 className="text-white text-[1.3rem] font-bold">Aide</h1>

            <div className="my-4">
              <h3 className=" text-white my-2">Nos partenaires</h3>
              <h3 className=" text-white my-2">Pourquoi ONG </h3>
              <h3 className=" text-white ">FAQ</h3>
              <h3 className=" text-white">Nos Formations</h3>
            </div>
          </div>

          <div className=" text-white min-[326px]:my-7">
            <h1 className="text-white text-[1.3rem] font-bold">A Propos</h1>
            <div className="my-4">
              <Link to="/">
                <h3 className=" text-white ">Accueil</h3>
              </Link>
              <Link to="/a_propos">
                <h3 className=" text-white my-2">A propos</h3>
              </Link>
              <Link to="/actualites">
                <h3 className=" text-white my-2">Actualités</h3>
              </Link>
              <Link to="/contact">
                <h3 className=" text-white">Contact</h3>
              </Link>
            </div>
          </div>

          <main className=" min-[320px]:relative min-[320px]:right-2 min-[350px]:relative min-[350px]:right-2 lg:relative lg:top-[-5px] ">
            <h1 className="text-white text-[1.3rem] my-3 px-2 font-bold">
              Information
            </h1>
            <div className="min-[320px]:flex min-[320px]:items-center min-[320px]:gap-0 lg:flex lg:items-center lg:gap-0 my-2 min-[350px]:flex min-[350px]:items-center min-[350px]:gap-1">
              <MapPin className=" cursor-pointer text-white w-10 h-10 lg:p-[.55rem] min-[350px]:p-[.40rem] min-[320px]:p-[.60rem]  rounded-full" />
              <h3 className=" text-white">Côte d'Ivoire, Azaguié</h3>
            </div>
            <div className=" min-[320px]:flex min-[320px]:items-center min-[320px]:gap-0 lg:flex lg:items-center lg:gap-0 my-2 min-[350px]:flex min-[350px]:items-center min-[350px]:gap-1">
              <FaPhoneAlt className=" cursor-pointer text-white w-10 h-10 lg:p-[.65rem] rounded-full min-[350px]:p-[.40rem] min-[320px]:p-[.60rem]" />
              <p className="  text-white">(+225) 0717998343</p>
            </div>
            <div className=" min-[320px]:flex min-[320px]:items-center min-[320px]:gap-0 lg:flex lg:items-center min-[350px]:flex min-[350px]:items-center min-[350px]:gap-1">
              <Mail className="cursor-pointer text-white w-10 h-11 lg:p-[.60rem]  min-[350px]:p-[.43rem] min-[320px]:p-[.60rem]" />
              <p className=" text-white">ongbethel22@gmail.com</p>
            </div>
            <div className="lg:flex lg:gap-4"></div>
          </main>
        </main>
      </div>
      <div className=" min-[320px]:py-7 min-[320px]:relative min-[320px]:top-4 min-[350px]:relative min-[350px]:top-5 lg:py-[0rem]">
        <div className="lg:mx-0 lg:relative lg:top-3 min-[350px]:relative ">
          <div className="border-t border-gray-500 mt-2"></div>
        </div>
        <div className="lg:flex lg:justify-between items-center mx-1  lg:relative lg:top-[-1.8rem]">
          <h1 className="text-white min-[360px]:text-[1rem] md:relative md:top-5 min-[360px]:relative min-[360px]:top-6 min-[320px]:relative min-[320px]:top-5 ">
            Copyright © 2024 ONG Bethel, Côte d'Ivoire Azaguié
          </h1>
          <div className="min-[320px]:flex min-[320px]:gap-3 min-[320px]:relative min-[320px]:top-7 min-[326px]:my-4 min-[326px]:flex  min-[326px]:justify-center min-[528px]:flex md:flex md:gap-3 lg:flex lg:gap-3 sm:flex gap-6 min-[400px]:flex">
            <Link to="https://www.facebook.com/" target="_blank">
              <FaFacebookF className="bg-[#0d3137] rounded-sm min-[326px]:my-4 cursor-pointer min-[326px]:p-[.60rem] text-white w-10 h-10 lg:p-[.50rem] min-[320px]:flex min-[320px]:items-center min-[320px]:p-[.60rem]" />
            </Link>
            <Link to="https://www.instagram.com/" target="_blank">
              <FaInstagram className="bg-[#0d3137] rounded-sm min-[326px]:my-4 cursor-pointer min-[326px]:p-[.60rem] text-white w-10 h-10 lg:p-[.45rem] min-[320px]:p-[.60rem]" />
            </Link>
            <Link to="https://www.youtube.com/" target="_blank">
              <FaYoutube className="bg-[#0d3137] rounded-sm min-[326px]:my-4 cursor-pointer min-[326px]:p-[.60rem] text-white w-10 h-10 lg:p-[.45rem] min-[320px]:p-[.60rem]" />
            </Link>
            <Link to="https://www.twitter.com/" target="_blank">
              <BsTwitterX className="bg-[#0d3137] rounded-sm min-[326px]:my-4 cursor-pointer min-[326px]:p-[.60rem] text-white w-10 h-10 lg:p-[.45rem] min-[320px]:p-[.60rem]" />
            </Link>
            <Link to="https://www.linkedin.com/" target="_blank">
              <TfiLinkedin className=" bg-[#0d3137] rounded-sm min-[326px]:my-4 cursor-pointer min-[326px]:p-[.60rem] text-white w-10 h-10 lg:p-[.45rem] min-[320px]:p-[.60rem]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
