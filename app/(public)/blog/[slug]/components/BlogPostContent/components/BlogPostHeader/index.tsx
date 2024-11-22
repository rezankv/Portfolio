import Image from "next/image"

interface Props {
  title: string
  description: string
  banner: {
    src: string
    alt: string
  }
}
const BlogPostHeader = ({}: Props) => {
  return (
    <>
      <h1>{"title"}</h1>
      <p>{"description"}</p>
      <Image
        src={"/images/b.jpg"}
        alt={"alt"}
        width={500}
        height={500}
        sizes="100%"
        className="banner"
      />
    </>
  )
}

export default BlogPostHeader
