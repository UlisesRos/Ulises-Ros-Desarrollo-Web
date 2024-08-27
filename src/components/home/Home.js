import React from 'react'
import { Box, Button, Image, Link, Text } from '@chakra-ui/react'
import dev from '../../img/dev.png'
import ulises from '../../img/ulises.png'
import linkedin from '../../img/linkedin.png'
import maleta from '../../img/maleta.png'
import torta from '../../img/torta.png'
import cadena from '../../img/cadena.png'
import evento from '../../img/evento.png'

function Home() {
    return (
        <Box
            w={['100%','80%','50%']}
            >
            <Image src={dev} alt='developer' w='100%' h='15rem' />
            <Box>
                <Image src={ulises} alt='ulises' w='10rem' h='10rem' borderRadius='100px' border='2px solid white' position='absolute' top='260px' marginLeft='30px'/>
                <Box
                    w='100%'
                    display='flex'
                    justifyContent='right'
                    margin='30px 0 30px 0'
                    paddingRight='20px'
                    >
                    <Link
                        href='https://www.linkedin.com/in/ulises-ros/'
                        target='_blank'
                        >
                        <Button
                            backgroundColor='#CC0088'
                            color='black'
                            borderRadius='80px'
                            _hover={{
                                backgroundColor: 'white',
                                color: '#CC0088',
                                border: '1px solid black'
                            }}
                            >
                            Linkedin <span><Image marginLeft='.3rem' w='1rem' h='1rem' src={linkedin} alt='linkedin icon'/></span>
                        </Button>
                    </Link>
                </Box>
                <Box
                    marginLeft={['20px','30px','30px']}
                    marginRight={['20px','30px','30px']}
                    >
                    <Text
                        fontSize='2.5rem'
                        fontWeight='semi-bold'
                        >
                        Hola Ulises! 🤘🏻
                    </Text>
                    <Text>
                        ¡Da vida a tus ideas con código! ✨
                    </Text>
                    <Text>
                        Desarrollador Web Junior. Desarrollador Creativo.
                    </Text>
                    <Box
                        display='flex'
                        justifyContent='space-between'
                        flexWrap='wrap'
                        color='gray'
                        marginTop='1rem'
                        >
                        <Box
                            display='flex'
                            columnGap='3px'
                            >
                            <Image src={maleta} alt='maletin' w='18px' h='18px'/>
                            <Text
                                fontSize='.9rem'
                                fontWeight='400'
                                >Disponible</Text>
                        </Box>
                        <Box
                            display='flex'
                            columnGap='3px'
                            >
                            <Image src={cadena} alt='maletin' w='18px' h='18px'/>
                            <Link
                                _hover={{
                                    color: '#CC0088'
                                }}
                                >
                                <Text
                                    _hover={{
                                        color: '#CC0088',
                                        fontWeight: '600'
                                    }}
                                    fontSize='.9rem'
                                    fontWeight='400'
                                    >GIT</Text>
                            </Link>
                        </Box>
                        <Box
                            display='flex'
                            columnGap='3px'
                            >
                            <Image src={torta} alt='maletin' w='18px' h='18px'/>
                            <Text
                                fontSize='.9rem'
                                fontWeight='400'
                                >02 Octubre</Text>
                        </Box>
                        <Box
                            display='flex'
                            columnGap='3px'
                            >
                            <Image src={evento} alt='maletin' w='18px' h='18px'/>
                            <Text
                                fontSize='.9rem'
                                fontWeight='400'
                                >Se unio en Agosto 2024</Text>
                        </Box>
                    </Box>
                    <Box
                        display='flex'
                        margin='1.3rem 0 1.3rem 0'
                        alignItems='center'
                        justifyContent='center'
                        >
                        <Link
                            href="https://api.whatsapp.com/send?phone=3417539870&text=Hola! Te hablo porque vi tu portafolio Web!. Gracias!&nbspme&nbsppueden&nbspayudar?"
                            target='_blank'
                            >
                            <Button
                                backgroundColor='#CC0088'
                                color='black'
                                borderRadius='80px'
                                _hover={{
                                    backgroundColor: 'white',
                                    color: '#CC0088',
                                    border: '1px solid black'
                                }}
                                >
                                🤘 Creemos algo juntos
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Home