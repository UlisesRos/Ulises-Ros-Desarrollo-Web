import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Navbar from '../navbar/Navbar'
import Home from '../home/Home'
import AcercaDeMi from '../acercaDeMi/AcercaDeMi'

function Rutas() {
    return (
        <Box>
            <Navbar />
            <Flex
                flexDir='column'
                justifyContent='center'
                alignItems='center'
                >
                <Home />
                <AcercaDeMi />
            </Flex>
        </Box>
    )
}

export default Rutas