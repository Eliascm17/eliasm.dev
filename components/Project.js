import Link from 'next/link';
import Icon from '@/components/Icon';
import { motion } from 'framer-motion';
import React from 'react';

const Project = ({ title, description, href, iconlist }) => {
  const { colorMode } = useColorMode();

  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600'
  };

  const iconColor = {
    light: 'white',
    dark: 'gray.900'
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
                size="md"
                fontWeight="bold"
                mb={2}
                letterSpacing="tighter"
              >
                {title}
              </Heading>
              <Text lineHeight="1.3">{description}</Text>
              <Text lineHeight="1.3">
                Built with:
                {iconlist.map((icon, key) => {
                  return (
                    <Icon
                      key={key}
                      aria-label={icon}
                      name={icon}
                      color={icon === 'nextjs' ? '' : iconColor[colorMode]}
                      boxSize="32px"
                      mx={2}
                    />
                  );
                })}
              </Text>
            </Stack>
          </Flex>
        </motion.div>
      </Box>
    </Link>
  );
};

export default Project;
