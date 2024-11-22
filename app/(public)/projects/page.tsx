import Image from "next/image"
import Link from "next/link"

// utils
import { generateUrl } from "@/utils"

// constants
import { SINGLE_PROJECTS_ROUTE } from "@/constants"

// components
import { UnderDevelopmentMessage } from "@/components"

// icons
import { ChevronDown, Eye } from "@/icons"

const Page = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const projects = []

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
            <ChevronDown width="15" height="15" />
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
  )
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const renderProjects = (projects: []) => (
    <ul className="project-list">
      {projects.map((project) => (
        <li key={Math.random()+project} className="project-item active">
          <Link
            href={generateUrl(
              SINGLE_PROJECTS_ROUTE,
              { slug: "project.slug" },
              {}
            )}
          >
            <figure className="project-img">
              <div className="project-item-icon-box">
                <Eye width="20" height="20" />
              </div>

              <Image src={"as"} alt={"dsa"} loading="lazy"  width={100} height={100}/>
            </figure>

            <h3 className="project-title">عنوان پروژه</h3>

            <p className="project-category">دسته بندی</p>
          </Link>
        </li>
      ))}
    </ul>
  )

  return (
    <>
      <article className="portfolio" style={{ minHeight: "unset" }}>
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
  )
}

export default Page
