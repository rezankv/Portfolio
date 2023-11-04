import Image from 'next/image';

interface Props {
  title: string;
  description: string;
  banner: {
    src: string;
    alt: string;
  };
}
const BlogPostHeader = ({ title, description, banner }: Props) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <Image
        src={banner.src}
        alt={banner.alt}
        width={500}
        height={500}
        sizes="100%"
        className='banner'
      />
    </>
  );
};

export default BlogPostHeader;
