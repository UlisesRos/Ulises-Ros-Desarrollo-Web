import React from 'react'
import {  Link } from 'react-router-dom'
import { Flex, Image, Box } from '@chakra-ui/react'
import avatar from '../../img/avatar.svg'
import '../../css/navbar/Boton-switch.css'

function Navbar({toggleTheme}) {

    return (
        <Flex
            alignItems='center'
            justifyContent='space-between'
            >
            <Link
                to='/'
                >
                <Image src={avatar} alt='avatar' w='3.5rem' h='3.5rem' margin='15px'/>
            </Link>
            <Box
                margin='15px'
                >
            <div class="toggle-switch">
                <label class="switch-label">
                    <input type="checkbox" class="checkbox" onClick={toggleTheme}/>
                    <span class="slider"></span>
                </label>
            </div>  
            </Box>
        </Flex>
    )
}

export default Navbar