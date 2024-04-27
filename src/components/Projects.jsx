import ProjectsCard from './ProjectsCard';
import { projects } from '../data';
import SectionTitle from './SectionTitle';
import { TbWorldWww } from 'react-icons/tb';
const Projects = () => {
  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle text="web creations" />
      <p className="text-slate-600 mt-8 leading-loose">
        Most of the projects here are done with some kind of page builder
        because it's the most time/money efficient way to satisfy client needs.
        Besides builders, I know how to build websites from scratch using
        WordPress templates and ACF. Currently, I'm learning how to develop my
        own Gutenberg blocks with React, and I'm diving deeper into full site
        editing. I have many more projects to add to this list, but all of them
        follow a similar pattern, so I hope this is enough.
      </p>
      <p className="text-slate-600 mt-8 leading-loose">
        Please click below on <strong>WWW</strong> icon to see the project live.
        Have a nice day!
      </p>
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map(project => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
