import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Experience = ({ href, company, date, role, description }) => {
  const { colorMode } = useColorMode();

  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600'
  };

  return (
    <Link
      href={href ? href : ''}
      passHref
      _hover={{
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
        textDecoration: 'none'
      }}
      isExternal
    >
      <Box mb={6} maxW="800px" w="100%">
        <motion.div
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          <Box
            align="center"
            border="1px solid"
            borderColor={borderColor[colorMode]}
            borderRadius={4}
            p={4}
          >
            <Flex
              alignItems="center"
              justifyContent="space-between"
              maxW="800px"
              w="100%"
            >
              <Heading
                as="h4"
                size="md"
                fontWeight="bold"
                mb={1}
                letterSpacing="tighter"
                textAlign="left"
              >
                {company}
              </Heading>
              <Heading
                as="h5"
                size="md"
                fontWeight="semibold"
                mb={1}
                letterSpacing="tighter"
                textAlign="right"
              >
                {date}
              </Heading>
            </Flex>
            <Flex>
              <Heading
                as="h5"
                size="sm"
                fontWeight="semibold"
                letterSpacing="tighter"
                justifyContent="space-between"
              >
                {role}
              </Heading>
            </Flex>
            <Flex>
              <Text align="start" lineHeight="1.3" mt={2}>
                {description}
              </Text>
            </Flex>
          </Box>
        </motion.div>
      </Box>
    </Link>
  );
};

export default Experience;
