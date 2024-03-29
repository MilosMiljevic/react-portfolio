import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid  md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            With 4+ years as a WordPress developer, I've got the ins and outs of
            both frontend and backend. Over the past 3 years, I've led a team,
            ensuring our WordPress projects hit their goals. Let's connect and
            chat about the world of web development!
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
