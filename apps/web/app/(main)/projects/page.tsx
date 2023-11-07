import { allProjects, Project } from 'contentlayer/generated';
import Link from 'next/link';
import { compareDesc } from 'date-fns';
import { generateUrl } from '../../../libs/utils';
import { SINGLE_PROJECTS_ROUTE } from '../../../libs/constants';
import { UnderDevelopmentMessage } from '../../../libs/components';

const Page = () => {
  const projects = allProjects.sort((a, b) =>
    compareDesc(new Date(a.createdAt), new Date(b.createdAt))
  );

  const renderFilters = () => (
    <>
      <ul className="filter-list">
        <li className="filter-item">
          <button className="active" data-filter-btn>
            همه
          </button>
        </li>

        <li className="filter-item">
          <button data-filter-btn>طراحی وب</button>
        </li>

        <li className="filter-item">
          <button data-filter-btn>اپلیکیشن</button>
        </li>

        <li className="filter-item">
          <button data-filter-btn>توسعه وب</button>
        </li>
      </ul>
      <div className="filter-select-box">
        <button className="filter-select" data-select>
          <div className="select-value" data-selecct-value>
            انتخاب دسته بندی
          </div>

          <div className="select-icon">
            <ion-icon name="chevron-down"></ion-icon>
          </div>
        </button>

        <ul className="select-list">
          <li className="select-item">
            <button data-select-item>همه</button>
          </li>

          <li className="select-item">
            <button data-select-item>طراحی وب</button>
          </li>

          <li className="select-item">
            <button data-select-item>اپلیکیشن</button>
          </li>

          <li className="select-item">
            <button data-select-item>توسعه وب</button>
          </li>
        </ul>
      </div>
    </>
  );
  const renderProjects = (projects: Project[]) => (
    <ul className="project-list">
      {projects.map((project) => (
        <li key={project.slug} className="project-item active">
          <Link
            href={generateUrl(
              SINGLE_PROJECTS_ROUTE,
              { slug: project.slug },
              {}
            )}
          >
            <figure className="project-img">
              <div className="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img src={project.thumbnail} alt={project.title} loading="lazy" />
            </figure>

            <h3 className="project-title">{project.title}</h3>

            <p className="project-category">{project.category}</p>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <article className="portfolio" style={{ minHeight: 'unset' }}>
        <header>
          <h2 className="h2 article-title">پروژه ها</h2>
        </header>
        <section className="projects">
          {/* {renderFilters()} */}
          {/* {renderProjects(projects)} */}
          <UnderDevelopmentMessage />
        </section>
      </article>
    </>
  );
};

export default Page;
