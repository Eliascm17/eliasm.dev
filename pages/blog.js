import BlogPost from '@/components/BlogPost';
import Container from '@/components/Container';
import { getAllFilesFrontMatter } from '@/lib/mdx';

export default function Blog({ posts }) {
  return (
    <Container>
      <div className="flex flex-col justify-start mx-auto max-w-2xl space-y-12 my-16">
        <div className="font-bold text-4xl sm:text-6xl">Blog</div>
        {posts.map((post) => {
          return <BlogPost {...post} key={post.id} />;
        })}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter();

  return { props: { posts } };
}
