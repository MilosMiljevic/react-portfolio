import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24 ">
      <div className="align-element md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I'm Milos</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Wordpress and Frontend Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            Turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/MilosMiljevic" target="_blank">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/milosmiljevic1988/"
              target="_blank"
            >
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="mailto:m.miljevic1988@gmail.com" target="_blank">
              <FaEnvelope className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} alt="" className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
