import React from 'react';
import NextLink from 'next/link';
import { Flex, Link, IconButton } from '@chakra-ui/core';

const Footer = () => (
    <Flex align="center" mb={4} direction="column">
        <div>
            <Link href="https://twitter.com/eliascm17" title="Twitter" isExternal>
                <IconButton
                    aria-label="Twitter"
                    icon="twitter"
                    size="lg"
                    color="gray.500"
                    variant="ghost"
                />
            </Link>
            <Link href="https://github.com/eliascm17" title="GitHub" isExternal>
                <IconButton
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
                <IconButton
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
                <IconButton
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
                <IconButton
                    aria-label="Resume"
                    icon="resume"
                    size="lg"
                    color="gray.500"
                    variant="ghost"
                />
            </Link>
            <Link href="mailto:app@eliasm.dev" title="Email" isExternal>
                <IconButton
                    aria-label="Email"
                    icon="mail"
                    size="lg"
                    color="gray.500"
                    variant="ghost"
                />
            </Link>
        </div>
    </Flex>
);

export default Footer;
