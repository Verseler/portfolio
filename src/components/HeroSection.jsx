import SocialMedia from "./SocialMedia";
import profileImg from "../assets/images/profile.jpg";

export default function HeroSection() {
  return (
    <section className="text-center text-white sm:text-start">
      <div className="relative w-5/6 pb-24 m-auto border-b-2 border-white max-w-7xl">
        <div className="w-[200px] m-auto pt-4 sm:justify-between sm:flex sm:w-full sm:top-5 sm:absolute z-20 ">
          <p
            className="mb-4 text-2xl font-bold tracking-wider"
            alt="Verslr logo name"
          >
            Verslr
          </p>
          <SocialMedia />
        </div>
        <div className="max-w-[200px] sm:max-w-[325px] md:max-w-sm relative ml-auto mr-auto sm:mr-0  bg-gradient-to-t from-slate-50 to-zinc-900">
          <img className="object-cover opacity-80" src={profileImg} />
        </div>
        <div className="sm:absolute sm:top-24 sm:w-1/2 md:w-3/5 lg:w-2/3 md:top-52">
          <p className="mt-6 text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-7 md:mb-14 sm:mt-0">
            Nice to meet you! I&apos;m{" "}
            <span className="inline-block border-b-2 border-green-400 sm:inline md:inline-block">Verseler Kerr</span>.
          </p>
          <p className="text-gray-300 mb-7 sm:text-lg lg:text-xl sm:pr-9 md:pr-24">
            Based in the PH, I&apos;m an aspiring front-end developer passionate
            about building accessible web apps that users love.
          </p>
          <a
            className="py-3 text-xl tracking-wider border-b-2 border-green-400 cursor-pointer"
            href="#contact-section" 
          >
            CONTACT ME
          </a>
        </div>
      </div>
    </section>
  );
}
