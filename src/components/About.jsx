import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid  md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="about me" />
          <p className="text-slate-600 mt-8 leading-loose">
            I'm a seasoned WordPress developer and website editor with 5 years
            of hands-on experience. Currently serving as the WordPress Team
            Manager at Executive Digital, I excel in HTML, CSS, JavaScript,
            jQuery, PHP. My skill set extends beyond coding to include effective
            Team and Project Management
          </p>
          <p className="text-slate-600 mt-8 leading-loose">
            With a solid background in both technical development and managerial
            roles, I bring a unique blend of skills to ensure your projects not
            only meet high coding standards but are also efficiently managed to
            success.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
