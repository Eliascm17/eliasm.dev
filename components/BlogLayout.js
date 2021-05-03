import { parseISO, format } from 'date-fns';
import Container from './Container';
import Image from 'next/image';

const BlogLayout = ({ children, frontMatter }) => {
  return (
    <Container
      title={`${frontMatter.title} – Elias Moreno`}
      description={frontMatter.summary}
      image={frontMatter.image}
      date={new Date(frontMatter.timestamp).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start max-w-2xl justify-center mx-auto my-8 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-normal mb-4">
          {frontMatter.title}
        </h1>
        <div className="flex items-center justify-between my-4">
          <div className="flex items-center">
            <Image
              className="rounded-full"
              width={35}
              height={35}
              src="/me.jpg"
              alt="Elias Moreno"
            />
            <div className="ml-4">
              {`Elias Moreno / ${format(
                new Date(frontMatter.timestamp),
                'MMMM dd yyyy'
              )}`}
            </div>
          </div>
        </div>
        <div className="max-w-none w-full mx-auto space-y-4">{children}</div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <a href="#" target="_blank" rel="noopener noreferrer">
            {'Find me on Twitter '}
          </a>
          {` • `}
        </div>
      </article>
    </Container>
  );
};

export default BlogLayout;
