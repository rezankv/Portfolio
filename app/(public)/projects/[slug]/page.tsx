import { notFound } from "next/navigation"

// interface GenerateMetaDataArgs {
//   params: { slug: string };
// }
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
  params: {
    slug: string
  }
}

// export const generateMetaData = async ({
//   params: { slug },
// }: GenerateMetaDataArgs) => {
//   const project = getProjectBySlug(slug);
//   if (!project) notFound();
//   return { title: project.title };
// };

export const generateStaticParams = async () =>
  [{ url: "" }].map((project) => ({ url: project.url }))

const Page = ({ params: { slug } }: Props) => {
  const project = { a: slug }
  if (!project) return notFound()
  return (
    <article style={{ color: "var(--white-1)" }}>
      <div>
        <time
          style={{ color: "var(--white-2)" }}
          dateTime={"22/22/22"}
          className="mb-1 text-xs text-gray-600"
        >
          {/* {format(parseISO(project.createdAt), "LLLL d, yyyy")} */}
          22/22/22
        </time>
        <h1 className="text-3xl font-bold">عنوان پروژه</h1>
      </div>
      <div
        className="[&>*]:mb-3 [&>*:last-child]:mb-0"
        // dangerouslySetInnerHTML={{ __html: project.body.html }}
      />
    </article>
  )
}

export default Page
