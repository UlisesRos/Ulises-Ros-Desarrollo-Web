import { Box, Button, Flex, Link } from '@chakra-ui/react'
import React, { useState } from 'react'
import Contenido from './Contenido'
import Cursos from '../cursos/Cursos'
import Proyecto from '../proyecto/Proyecto'

function AcercaDeMi({theme}) {

    const [visible, setVisible] = useState('1')

    function click1(){
        setVisible('1')
    }
    function click2(){
        setVisible('2')
    }
    function click3(){
        setVisible('3')
    }

    console.log(visible)
    return (
        <Box
            w={['100%','80%','50%']}
            >
            <Flex
                marginLeft={['20px','30px','30px']}
                marginRight={['20px','30px','30px']}
                justifyContent='space-between'
                >
                <Link
                    onClick={click1}
                    w='33%'
                    >
                    <Button
                        backgroundColor={theme === 'light' ? '#f0f0f0' : '#1A202C'}
                        color={theme == 'light' ? 'black' : 'white'}
                        borderRadius='0'
                        w='100%'
                        _hover={{
                            borderBottom:'3px solid #CC0088'
                        }}
                        >
                        About me
                    </Button>
                </Link>
                <Link
                    onClick={click2}
                    w='34%'
                    >
                    <Button
                        backgroundColor={theme === 'light' ? '#f0f0f0' : '#1A202C'}
                        color={theme == 'light' ? 'black' : 'white'}
                        w='100%'
                        borderRadius='0'
                        _hover={{
                            borderBottom:'3px solid #CC0088'
                        }}
                        >                     
                        Courses 
                    </Button>
                </Link>
                <Link
                    onClick={click3}
                    w='33%'
                    >
                    <Button
                        backgroundColor={theme === 'light' ? '#f0f0f0' : '#1A202C'}
                        color={theme == 'light' ? 'black' : 'white'}
                        borderRadius='0'
                        w='100%'
                        _hover={{
                            borderBottom:'3px solid #CC0088'
                        }}
                        >
                        Projects
                    </Button>
                </Link>
            </Flex>
            <Flex
                display={visible == '1' ? 'flex' : 'none'}
                marginLeft={['20px','30px','30px']}
                marginRight={['20px','30px','30px']}
                marginTop='20px'
                >
                <Contenido />
            </Flex>
            <Flex
                display={visible == '2' ? 'flex' : 'none'}
                marginLeft={['20px','30px','30px']}
                marginRight={['20px','30px','30px']}
                marginTop='20px'
                >
                <Cursos />
            </Flex>
            <Flex
                display={visible == '3' ? 'flex' : 'none'}
                marginLeft={['20px','30px','30px']}
                marginRight={['20px','30px','30px']}
                marginTop='20px'
                >
                <Proyecto />
            </Flex>
        </Box>
    )
}

export default AcercaDeMi