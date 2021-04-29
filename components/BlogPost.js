import { motion } from 'framer-motion';
import Link from 'next/link';

const BlogPost = ({ title, summary, id }) => {
  const { colorMode } = useColorMode();

  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600'
  };

  return (
    <Link href={`/blog/${id}`}>
      <a>
        <Box w={['400px', '450px', '600px', '800px']} px={10} py={4}>
          <motion.div
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.2 }
            }}
          >
            <Flex
              align="center"
              border="1px solid"
              borderColor={borderColor[colorMode]}
              borderRadius={4}
              p={4}
            >
              <Stack>
                <Heading
                  as="h4"
                  fontSize={['2xl', '3xl', '4xl']}
                  fontWeight="bold"
                  mb={4}
                  letterSpacing="tighter"
                >
                  {title}
                </Heading>
                <Text fontSize={['md', 'lg', 'xl']}>{summary}</Text>
              </Stack>
            </Flex>
          </motion.div>
        </Box>
      </a>
    </Link>
  );
};

export default BlogPost;
