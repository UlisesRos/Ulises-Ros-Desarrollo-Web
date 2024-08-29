import React from 'react'
import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import avatar from '../../img/avatar.svg'
import ulisesr from '../../img/ulisesr.png'
import flecha from '../../img/flecha-izquierda.png'
import { Link } from 'react-router-dom'
import '../../css/hablame/Form.css'

function Hablame() {
    return (
        <Flex
            flexDir='column'
            >
            <Flex
                w='100%'
                justifyContent='center'
                alignItems='center'
                borderBottom='1px solid lightgray'
                >
                <Box
                    w='90%'
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                    >
                    <Box
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        w='110px'
                        >
                        <Link
                            to='/'
                            >
                            <Image src={ulisesr} alt='logo de Ulises' />
                        </Link>
                    </Box>
                    <Image src={avatar} alt='avatar de ulises' w='110px' h='110px' position='relative' top='50px' />
                    <Box
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        w='110px'
                        >
                        <Link
                            to='/'
                            >
                            <Image src={flecha} alt='volver' h='40px' w='40px' />
                        </Link>
                    </Box>
                </Box>
            </Flex>
            <Flex
                flexDir='column'
                alignItems='center'
                >
                <Heading
                    w='70%'
                    paddingTop='100px'
                    textAlign='center'
                    fontSize={['1.5rem','2rem','3rem']}
                    >
                    Gracias por tomarte el tiempo de comunicarte conmigo. ¿Cómo puedo ayudarte hoy?
                </Heading>
                <form className="contact-form" action="https://formsubmit.co/ulisesros70@gmail.com" method="POST">
                    <label
                        htmlFor="nombre"
                        >
                        Nombre y Apellido
                    </label>
                    <input type="text" name="Nombre" id="nombre" title="Nombre solo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$" required/>
                    <input type="hidden" name="_autoresponse" value="Recibimos correctamente tu mail. ¡Te responderemos a la brevedad!" />
                    <label
                        htmlFor="email"
                        >
                        Email
                    </label>
                    <input type="email" name="Email" id="email" title="Email incorrecto" pattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$" required/>

                    <label
                        htmlFor="mensaje"
                        >
                        Mensaje
                    </label>

                    <textarea id="mensaje" name="mensaje" cols="20" rows="8" ></textarea>
                    <input type="submit" className="btn" value="ENVIAR" />
                </form>
            </Flex>
        </Flex>

    )
}

export default Hablame