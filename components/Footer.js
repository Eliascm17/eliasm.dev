import { EmailIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Link } from '@chakra-ui/react';
import React from 'react';
import { Github, LinkedIn, Resume, Spotify, Twitter } from '../styles';

const Footer = () => (
  <Box
    display="flex"
    justifyContent="space-around"
    alignSelf="center"
    align="center"
    maxW={['200px', '500px']}
    w="100%"
    mb={4}
  >
    <Link href="https://twitter.com/eliascm17" title="Twitter" isExternal>
      <Twitter
        aria-label="Twitter"
        icon="twitter"
        size="lg"
        color="gray.500"
        variant="ghost"
      />
    </Link>
    <Link href="https://github.com/eliascm17" title="GitHub" isExternal>
      <Github
        aria-label="GitHub"
        icon="github"
        size="lg"
        color="gray.500"
        variant="ghost"
      />
    </Link>
    <Link
      href="https://www.linkedin.com/in/eliascm17"
      title="LinkedIn"
      isExternal
    >
      <LinkedIn
        aria-label="LinkedIn"
        icon="linkedin"
        size="lg"
        color="gray.500"
        variant="ghost"
      />
    </Link>
    <Link
      href="https://open.spotify.com/user/eliascm17?si=Mm8KNjZhT3OHn4YIe4C8Ng"
      title="Spofity"
      isExternal
    >
      <Spotify
        aria-label="Spotify"
        icon="spotify"
        size="lg"
        color="gray.500"
        variant="ghost"
      />
    </Link>
    <Link
      href="https://eliascm17.github.io/Resume/Resume%20Fall%202020.pdf"
      title="Resume"
      isExternal
    >
      <Resume
        aria-label="Resume"
        icon="resume"
        size="lg"
        color="gray.500"
        variant="ghost"
      />
    </Link>
    <Link href="mailto:app@eliasm.dev" title="Email" isExternal>
      <EmailIcon
        aria-label="Email"
        icon="mail"
        size="lg"
        color="gray.500"
        variant="ghost"
      />
    </Link>
  </Box>
);

export default Footer;
