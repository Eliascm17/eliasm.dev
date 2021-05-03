import Image from 'next/image';

const BlogPost = ({ title, summary, id, image }) => {
  return (
    <a className="flex space-x-4" href={`/blog/${id}`}>
      <div>
        <div className="font-semibold text-2xl">{title}</div>
        <div className="text-md">{summary}</div>
      </div>
      <div className="hidden md:block">
        <Image src={image} height={140} width={238} className="rounded-md" />
      </div>
    </a>
  );
};

export default BlogPost;
