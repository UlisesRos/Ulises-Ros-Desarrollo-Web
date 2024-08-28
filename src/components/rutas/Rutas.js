import React, { useState, useEffect } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Navbar from '../navbar/Navbar'
import Home from '../home/Home'
import AcercaDeMi from '../acercaDeMi/AcercaDeMi'
import Footer from '../footer/Footer'

function Rutas() {
    
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute('data-theme', savedTheme);
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <Box>
            <Navbar toggleTheme={toggleTheme}/>
            <Flex
                flexDir='column'
                justifyContent='center'
                alignItems='center'
                >
                <Home />
                <AcercaDeMi theme={theme}/>
                <Footer />
            </Flex>
        </Box>
    )
}

export default Rutas