import Image from 'next/image';
import { Flex } from '@chakra-ui/react';
import { parseISO, format } from 'date-fns';
import Container from './Container';
import BlogPost from './BlogPost';

const BlogLayout = ({ children, frontMatter }) => {
  return (
    <Container
      title={`${frontMatter.title} - Elias Moreno`}
      description={frontMatter.summary}
      // date={new Date(frontMatter.publishedAt).toISOString()}
    >
      <Flex flexDirection="column" alignSelf="center">
        <article>
          <h1>{frontMatter.title}</h1>
          <div>
            <div>
              <Image
                alt="Elias Moreno"
                height={24}
                width={24}
                src="/Me.jpg"
                className="rounded-full"
              />
              <p>
                {'Elias Moreno /'}
                {/* {format(parseISO(frontMatter.publishedAt), 'MMMM dd yyyy')} */}
              </p>
            </div>
            <div>{children}</div>
          </div>
        </article>
      </Flex>
    </Container>
  );
};

export default BlogLayout;
