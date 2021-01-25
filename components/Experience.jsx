import React from 'react';
import { Flex, Heading, Box, Text, useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Experience = ({ company, date, role, description }) => {

    const { colorMode } = useColorMode();

    const borderColor = {
        light: 'gray.200',
        dark: 'gray.600'
    };

    return (
        <Box
            align="center"
            border="1px solid"
            borderColor={borderColor[colorMode]}
            borderRadius={4}
            p={4}
            mb={6}
            w="100%"
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
                <Text align="start" lineHeight="1.3" mt={2}>{description}</Text>
            </Flex>
        </Box >
    );
};

export default Experience;

{/* <Flex
                align="center"
                border="1px solid"
                borderColor={borderColor[colorMode]}
                borderRadius={4}
                p={4}
                w="100%"
                maxW="800px"
                margin="0 auto"
                w="full"
                mb={6}
            > */}