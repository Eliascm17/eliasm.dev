import { Flex, Text, Image } from '@chakra-ui/react';
import { parseISO, format } from 'date-fns';
import Container from './Container';
import BlogContainer from './BlogContainer';

const BlogLayout = ({ children, frontMatter }) => {
  return (
    <Container>
      <Flex
        flexDirection="column"
        alignSelf="center"
        m="0 auto 4rem auto"
        maxWidth="700px"
      >
        <Text fontSize={['4xl', '4xl', '5xl', '6xl']} fontWeight="bold">
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
              src="/Me.jpg"
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
//2021-02-20T14:48:00.000Z

export default BlogLayout;
