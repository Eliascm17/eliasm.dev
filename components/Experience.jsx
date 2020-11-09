import { Flex, Heading, Link, Stack, Text, useColorMode, List, ListItem, ListIcon } from '@chakra-ui/core';
import React from 'react';

const Experience = ({ company, date, role, description, href }) => {

    const { colorMode } = useColorMode();

    const borderColor = {
        light: 'gray.200',
        dark: 'gray.600'
    };

    return (
        <Link
            mb={6}
            href={href}
            title={company}
            isExternal
            _hover={{
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
                textDecoration: 'none',
            }}
        >
            <Flex
                align="center"
                border="1px solid"
                borderColor={borderColor[colorMode]}
                borderRadius={4}
                p={4}
                width="auto"
            >
                <Stack

                >
                    <Flex
                        justifyContent="space-between"
                    >
                        <Heading
                            as="h4"
                            size="md"
                            fontWeight="bold"
                            mb={1}
                            letterSpacing="tighter"
                        >
                            {company}
                        </Heading>
                        <Heading
                            as="h5"
                            size="md"
                            fontWeight="semibold"
                            mb={1}
                            letterSpacing="tighter"
                        >
                            {date}
                        </Heading>
                    </Flex>
                    <Heading
                        as="h5"
                        size="sm"
                        fontWeight="semibold"
                        letterSpacing="tighter"
                        justifyContent="space-between"
                    >
                        {role}
                    </Heading>
                    <Text lineHeight="1.3">{description}</Text>
                </Stack>
            </Flex >
        </Link >
    );
};

export default Experience;