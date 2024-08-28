import { Box, Flex, Image, Text, Button, Link } from '@chakra-ui/react'
import React from 'react'
import avatar from '../../img/avatar.svg'
import paisaje from '../../img/paisaje.png'
import frontend from '../../img/fronend.png'
import backend from '../../img/backend.png'
import diseño from '../../img/diseño.png'

function Contenido() {
    return (
        <Flex
            flexDir='column'
            rowGap='20px'
            w='100%'
            >
            <Box
                w='100%'
                h='auto'
                borderRadius='5px'
                _hover={{
                    bgColor: 'rgba(0, 0, 0, 0.2)'
                }}
                overflow='hidden'
                paddingBottom='15px'
                >
                    <Text
                        color='grey'
                        margin='10px 0 0 20px'
                        >
                        🖈 tweet fijado
                    </Text>
                    <Box
                        marginLeft='5px'
                        display='flex'
                        justifyContent='start'
                        alignItems='center'
                        >
                            <Image src={avatar} alt='avatar' w='50px' h='50px' borderRadius='100%' />
                            <Text marginLeft='5px' fontWeight='bold'>Uli ✨</Text>
                            <Text marginLeft='5px' color='grey' fontSize='.8rem'>• 28 Ago 2024 </Text>
                    </Box>
                    <Text
                        fontSize='1.5rem'
                        fontWeight='bold'
                        marginLeft='58px'
                        >
                            Hola, soy Ulises! Un placer conocerte.
                    </Text>
                    <Text
                        marginLeft='58px'
                        marginRight='30px'
                        >
                        Este es mi sitio donde intento publicar sobre lo que hago y cómo hacer cosas con código.
                        En lo personal, me encanta estar con la computadora, crear codigo y viajar.
                    </Text>
                    <Image src={paisaje} alt='foto mia' borderRadius='5px' margin='10px 0 0 58px' w='80%' h='49vh'/>
            </Box>
            <Box
                w='100%'
                h='auto'
                borderRadius='5px'
                _hover={{
                    bgColor: 'rgba(0, 0, 0, 0.2)'
                }}
                overflow='hidden'
                paddingBottom='15px'
                >
                    <Box
                        margin='15px 0 0 5px'
                        display='flex'
                        justifyContent='start'
                        alignItems='center'
                        >
                            <Image src={avatar} alt='avatar' w='50px' h='50px' borderRadius='100%' />
                            <Text marginLeft='5px' fontWeight='bold'>Uli ✨</Text>
                            <Text marginLeft='5px' color='grey' fontSize='.8rem'>• 15 jul 2024 </Text>
                    </Box>
                    <Text
                        fontSize='1.5rem'
                        fontWeight='bold'
                        marginLeft='58px'
                        >
                            Esto soy yo!
                    </Text>
                    <Text
                        marginLeft='58px'
                        marginRight='30px'
                        >
                        Soy nuevo en el mundo del desarrollo web, pero he estado dedicando tiempo y esfuerzo para aprender y crecer en esta área. He completado con éxito tres cursos que me han proporcionado una sólida base en tecnologías y buenas prácticas. Estoy muy entusiasmado por aplicar todo lo que he aprendido y llevarlo a la práctica en proyectos reales. Mi objetivo es ganar experiencia trabajando y seguir desarrollando mis habilidades en el campo. Estoy comprometido y motivado para contribuir y aprender en un entorno profesional, y estoy listo para enfrentar nuevos desafíos en el desarrollo web.
                    </Text>
                    <Link
                        
                        >
                    <Button
                        margin='40px 0 0 54px'
                        backgroundColor='#CC0088'
                        color='black'
                        w='85%'
                        borderRadius='10px'
                        _hover={{
                            backgroundColor: 'white',
                            color: '#CC0088',
                            border: '1px solid black'
                        }}
                        boxShadow='3px 3px 10px rgba(0, 0, 0, 0.5)'
                        >Hablame!
                    </Button>
                </Link>
            </Box>
            <Box
                w='100%'
                h='auto'
                borderRadius='5px'
                _hover={{
                    bgColor: 'rgba(0, 0, 0, 0.2)'
                }}
                overflow='hidden'
                paddingBottom='15px'
                >
                    <Box
                        margin='15px 0 0 5px'
                        display='flex'
                        justifyContent='start'
                        alignItems='center'
                        >
                            <Image src={avatar} alt='avatar' w='50px' h='50px' borderRadius='100%' />
                            <Text marginLeft='5px' fontWeight='bold'>Uli ✨</Text>
                            <Text marginLeft='5px' color='grey' fontSize='.8rem'>• 09 jul 2024 </Text>
                    </Box>
                    <Text
                        fontSize='1.5rem'
                        fontWeight='bold'
                        marginLeft='58px'
                        >
                            Mis Conocimientos
                    </Text>
                    <Box
                        margin='15px 0 0 58px'
                        display='flex'
                        flexDir='column'
                        >
                            <Flex
                                alignItems='center'
                                columnGap='5px'
                                >
                                <Image src={frontend} alt='avatar front' borderRadius='100%' w='30px' h='30px'/>
                                <Text textDecor='underline'>Desarrollo Front End</Text>
                            </Flex>
                        <Text>• HTML, CSS, Sass, Git, React.js, JavaScript, WordPress</Text>
                        <Text>• Chakra UI, GitHub, Bootstrap, Netlify, VS code, Material UI, Vercel</Text>
                    </Box>
                    <Box
                        margin='15px 0 0 58px'
                        display='flex'
                        flexDir='column'
                        >
                            <Flex
                                alignItems='center'
                                columnGap='5px'
                                >
                                <Image src={backend} alt='avatar front' borderRadius='100%' w='30px' h='30px'/>
                                <Text textDecor='underline'>Desarrollo Back End</Text>
                            </Flex>
                        <Text>• Express.js, JavaScript, Node,js</Text>
                        <Text>• Mongo DB, Postman, Web Socket, JWT, Test y Mocks, Railway</Text>
                    </Box>
                    <Box
                        margin='15px 0 0 58px'
                        display='flex'
                        flexDir='column'
                        >
                            <Flex
                                alignItems='center'
                                columnGap='5px'
                                >
                                <Image src={diseño} alt='avatar front' borderRadius='100%' w='30px' h='30px'/>
                                <Text textDecor='underline'>Diseño</Text>
                            </Flex>
                        <Text>• UX, UI, Web, Aplicaciones</Text>
                        <Text>• Figma, Canva, Slack</Text>
                    </Box>
            </Box>
        </Flex>
    )
    }

export default Contenido