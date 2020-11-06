import { Flex, Heading, Icon, Link, Stack, Text, useColorMode } from '@chakra-ui/core';
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
            mb={6}
            href={href}
            title={title}
            isExternal
            _hover={{
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
                textDecoration: 'none'
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
                        mb={4}
                        letterSpacing="tighter"
                    >
                        {title}
                    </Heading>
                    <Text lineHeight="1.3">{description}</Text>
                    <Text lineHeight="1.3">Built with:
                    {iconlist.map((icon, key) => {
                        return <Icon
                            key={key}
                            aria-label={icon}
                            name={icon}
                            color={icon === 'nextjs' ? '' : iconColor[colorMode]}
                            size="32px"
                            ml={2}
                            mr={2}
                        />
                    })}
                    </Text>
                </Stack>
            </Flex>
        </Link>
    );
};

export default Project;