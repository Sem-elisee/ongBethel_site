import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import img from "../assets/Logo.png";
import { useState } from "react";
import { X } from "lucide-react";

export default function Hearder() {
  const [open, setOpen] = useState(false);

  const handlclick = () => {
    setOpen(!false);
  };

  return (
    <div className=" md:px-10 md:py-5 lg:px-14 flex justify-between items-center min-[422px]:px-12 min-[422px]:py-5 sm:px-14 min-[460px]:px-14  min-[460px]:py-5 min-[300px]:px-8 min-[300px]:py-4 min-[460px]: sm:py-5 min-[560px]:py-5 min-[560px]:px-14 shadow-md fixed w-full bg-white z-[99999]">
      <div className="flex items-center gap-2 font-bold text-[1.05rem]">
        <img src={img} alt="Logo_bethel" className="w-[68px] h-[67px]" />
        <img src="" alt="" />
        <h1>ONG BETHEL</h1>
      </div>

      <div className="flex gap-10">
        <div className="min-[300px]:hidden sm:hidden md:block text-[1.17rem] font-semibold">
          <Link className=" hover:text-orange-500" to="/">
            Accueil
          </Link>
        </div>

        <div className="min-[300px]:hidden sm:hidden md:block text-[1.17rem] font-semibold">
          <Link className=" hover:text-orange-500" to="/actualites">
            Actualités
          </Link>
        </div>
        <div className="min-[300px]:hidden sm:hidden md:block text-[1.17rem] font-semibold">
          <Link className=" hover:text-orange-500" to="/a_propos">
            A propos
          </Link>
        </div>
        <div className="min-[300px]:hidden sm:hidden md:block text-[1.17rem] font-semibold">
          <Link className=" hover:text-orange-500" to="/contact">
            Contact
          </Link>
        </div>
        <div onClick={handlclick}>
          <div className=" cursor-pointer md:hidden sm:block text-[1.5rem]">
            <CgMenu />
          </div>
        </div>

        <>
          {open && (
            <div
              className="fixed inset-0 z-50 bg-black/80"
              onClick={() => setOpen(false)}
            ></div>
          )}
          <div
            className={`absolute z-50  left-0 top-0 w-[20rem]  h-screen overflow-hidden z-60 bg-white ${
              open ? "translate-x-0 " : "-translate-x-full "
            } ${
              open
                ? "overflow-y-hidden transition ease-in-out duration-500"
                : "duration-500"
            }`}
          >
            <button
              onClick={() => setOpen(!open)}
              className="absolute top-0 right-0 px-3 py-3 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              {open ? (
                <div className="text-white bg-[#000] p-2 rounded-md cursor-pointer ">
                  <X className="cursor-pointer " />
                </div>
              ) : (
                ""
              )}
            </button>
            <div className="px-4 py-2">
              <div
                className="w-[1.30rem] h-[2.70rem] bg-[#000] "
                style={{ borderRadius: "0px 30px 30px 0px" }}
              />
              <div className="flex flex-col h-screen justify-center items-center relative top-[-2rem]">
                <div className=" flex-col flex gap-8 text-center">
                  <Link
                    className="text-[1.35rem] hover:text-orange-500 font-bold text-[#171717] "
                    to="/"
                  >
                    Accueil
                  </Link>
                  <Link
                    className="text-[1.35rem] hover:text-orange-500 font-bold text-[#171717] "
                    to="/actualites"
                  >
                    Actualités
                  </Link>
                  <Link
                    className="text-[1.35rem] hover:text-orange-500 font-bold text-[#171717] "
                    to="/a_propos"
                  >
                    A propos
                  </Link>

                  <Link
                    className="text-[1.35rem] hover:text-orange-500 font-bold text-[#171717] "
                    to="/contact"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
