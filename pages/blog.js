import BlogPost from '@/components/BlogPost';
import Container from '@/components/Container';
import { getAllFilesFrontMatter } from '@/lib/mdx';

export default function Blog({ posts }) {
  return (
    <Container>
      <Flex flexDirection="column" alignSelf="center">
        <Text
          ml={10}
          fontSize={['3xl', '4xl', '5xl', '6xl', '6xl']}
          fontWeight="bold"
        >
          Blog
        </Text>
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
