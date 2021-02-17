import BlogPost from '@/components/BlogPost';
import Container from '@/components/Container';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import { Flex, Heading } from '@chakra-ui/react';

export default function Blog({ posts }) {
  return (
    <Container>
      <Flex flexDirection="column" alignSelf="center">
        {posts.map((post) => {
          return <BlogPost {...post} key={post.id} />;
        })}
      </Flex>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter();

  return { props: { posts } };
}
