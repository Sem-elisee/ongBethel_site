// import React from 'react'

import { ArrowLeft } from "lucide-react";
import Hearder from "../../components/Hearder";
import { Link } from "react-router-dom";
import img from "../../assets/img (1).jpg";
import { TfiLinkedin } from "react-icons/tfi";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import FooterOne from "../../components/FooterOne";

export default function ActualitesOthers() {
  return (
    <section>
      <div>
        <Hearder />
        <main className="relative top-[8rem]">
          <div className="md:px-6">
            <Link to="/actualites">
              <div className="flex md:text-[1.18rem] gap-[0.30rem] items-center">
                <div className="">
                  <ArrowLeft />
                </div>
                <h1 className=" font-bold text-[#0d3137]">
                  Retour aux actualités
                </h1>
              </div>
            </Link>

            <div className="lg:p-6">
              <div className=" lg:leading-[3.3rem] lg:text-4xl text-center min-[320px]:text-[1.5rem] md:text-[1.7rem]  font-bold min-[320px]:px-2 ">
                <h1>Création d’une nouvelle société commune dans les</h1>
                <h1>énergies renouvelables en Afrique</h1>
              </div>
              <div className=" text-center min-[320px]:py-5  md:leading-10">
                <span className="text-center text-[#a09f9f] font-normal">
                  5 Avr 2024
                </span>
              </div>

              <div className="md:flex min-[320px]:px-3 min-[450px]:px-6 min-[530px]:px-8 md:justify-center md:py-8 ">
                <img src={img} alt="" className=" md:w-[52rem] md:h-[25rem]" />
              </div>

              <div className=" min-[450px]:px-6 lg:px-32 min-[320px]:px-3 min-[530px]:px-8">
                <h3>
                  Communiqué de presse disponible en langue anglaise uniquement
                </h3>
                <h2 className=" font-semibold min-[320px]:py-4">
                  Consolidation of renewable energy activities in Africa to
                  accelerate business development
                </h2>
                <div>
                  <p>
                    Toyota Tsusho Corporation (hereinafter: Toyota Tsusho)
                    established in March 2024 in France AEOLUS SAS (hereinafter:
                    AEOLUS), a joint venture to promote renewable energy
                    business in Africa. The new joint venture is owned 50%
                    respectively by Toyota Tsusho’s wholly owned subsidiaries,
                    CFAO SAS (hereinafter: CFAO) and Eurus Energy Holdings
                    Corporation (hereinafter: Eurus Energy)
                  </p>
                </div>

                <div>
                  <h2 className="font-semibold min-[320px]:py-4">
                    1. Background and Objectives
                  </h2>
                  <div>
                    <p>
                      To accelerate its advancement in Renewable Energy and
                      Energy Management and « Africa of the seven priority
                      domains of its Growth Strategy, Toyota Tsusho is actively
                      promoting infrastructure projects to expand renewable
                      energy in Africa, including solar, wind and geothermal
                      power generation CFAO has a long business history,
                      knowledge and network in Africa in four domains: mobility,
                      healthcare, consumer and infrastructure. Eurus Energy
                      operates wind and solar power projects in 15 countries and
                      regions, and is the largest wind power producer in Japan.
                      It has expertise in all aspects of renewable energy
                      business. Toyota Tsusho, CFAO and Eurus Energy have been
                      collaborating in developing renewable energy in Africa. In
                      order to promote the business more flexibly and
                      efficiently, Toyota Tsusho has established AEOLUS to
                      integrate the expertise of CFAO and Eurus Energy and to
                      consolidate renewable energy business in Africa.
                    </p>
                  </div>
                </div>
                <div className=" flex gap-2 min-[320px]:py-3">
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
              </div>
            </div>
          </div>
        </main>
      </div>
      <main className=" min-[530px]:relative min-[530px]:top-[8rem] min-[320px]:relative  min-[320px]:top-[8rem] lg:relative lg:top-[7rem] md:relative md:top-[8rem] sm:relative sm:top-[8rem] ">
        <FooterOne />
      </main>
    </section>
  );
}
