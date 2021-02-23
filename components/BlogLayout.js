import { Flex, Text, Image } from '@chakra-ui/react';
import { parseISO, format } from 'date-fns';
import Container from './Container';

const BlogLayout = ({ children, frontMatter }) => {
  return (
    <Container
      title={`${frontMatter.title} – Elias Moreno`}
      description={frontMatter.summary}
      image={frontMatter.image}
      date={new Date(frontMatter.timestamp).toISOString()}
      type="article"
    >
      <Flex
        flexDirection="column"
        alignSelf="center"
        m="0 auto 2rem auto"
        maxWidth={'700px'}
        w={[250, 380, 500, 660, 700]}
      >
        <Text fontSize={['3xl', '3xl', '4xl', '6xl']} fontWeight="bold">
          {frontMatter.title}
        </Text>
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          mt={2}
        >
          <Flex alignItems="center">
            <Image
              borderRadius="full"
              boxSize="35px"
              src="/me.jpg"
              alt="Elias Moreno"
            />
            <Text fontSize="md" ml={4}>
              {`Elias Moreno / ${format(
                new Date(frontMatter.timestamp),
                'MMMM dd yyyy'
              )}`}
            </Text>
          </Flex>
        </Flex>
        <Text>{children}</Text>
      </Flex>
    </Container>
  );
};

export default BlogLayout;
