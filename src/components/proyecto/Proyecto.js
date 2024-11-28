import React from 'react'
import { Box, Text, Image, Link, Flex } from '@chakra-ui/react'
import avatar from '../../img/avatar.svg'
import fuerzaintegral from '../../img/fuerzaintegral.png'
import store from '../../img/Store.png'
import mercadolibre from '../../img/mercadolibre.jpg'
import fron from '../../img/fron.jpg'
import portafolio from '../../img/portafolio.jpg'
import ecommerce from '../../img/ecommerce.jpg'
import motor from '../../img/motor.png'

function Proyecto() {

    const proyectos = [
        {
            img: fuerzaintegral,
            titulo: 'Fuerza Integral',
            descripcion: 'Pagina Web de un gimnasio ubicado en la ciudad de Rosario.',
            link: 'https://fuerza-integral.vercel.app/',
            botonLink: 'fuerza-integral.vercel.app/',
            gitHub: 'https://github.com/UlisesRos/pefManuelMartino.git',
        },
        {
            img: fuerzaintegral,
            titulo: 'Calendario Fuerza Integral',
            descripcion: 'Calendario semanal personalizado para el gimnasio Fuerza Integra. Cuenta tanto con Backend como frontend. Totalmente funcional y en uso por el gimansio.',
            link: 'https://calendario-fuerza-integral.vercel.app/',
            botonLink: 'calendario-fuerza-integral.vercel.app/',
            gitHub: 'https://github.com/UlisesRos/CalendarioFuerzaIntegral.git'
        },
        {
            img: motor,
            titulo: 'Frontend y Backend de Taller de Motos',
            descripcion: 'Proyecto que incluye el back y el front de un taller de motos para administrar los clientes y sus turnos.',
            link: 'https://tallertobias.vercel.app/',
            botonLink: 'Taller Motos',
            gitHub: 'https://github.com/UlisesRos/TallerTobias'
        },
        {
            img: avatar,
            titulo: 'Portafolio Personal',
            descripcion: 'Portafolio personal realizado con React.js y ChakraUI. Este fue mi primer portafolio.',
            link: 'https://ulises-ros.vercel.app/',
            botonLink: 'ulises-ros.vercel.app/',
            gitHub: 'https://github.com/UlisesRos/portafolioU'
        },
        {
            img: store,
            titulo: 'Pine Apple Store',
            descripcion: 'E-commerce realizado en el proyecto final del curso de Academia Numen.',
            link: 'https://storepineapple.vercel.app/',
            botonLink: 'storepineapple.vercel.app/',
            gitHub: 'https://github.com/UlisesRos/Proyecto-Final-React.git'
        },
        {
            img: mercadolibre,
            titulo: 'Tarjetas Mercado Libre',
            descripcion: 'Creacion de una copia de las Tarjetas que utiliza la Web de Mercado Libre.',
            link: 'https://tarjetasml.netlify.app/',
            botonLink: 'tarjetasml.netlify.app/',
            gitHub: 'https://github.com/UlisesRos/Trabajo-MercadoLibre.git'
        },
        {
            img: fron,
            titulo: 'Proyecto Frontend',
            descripcion: 'Creacion de un frontend para una pagina web.',
            link: 'https://trabajofront.netlify.app/',
            botonLink: 'trabajofront.netlify.app/',
            gitHub: 'https://github.com/UlisesRos/Proyecto.git'
        },
        {
            img: portafolio,
            titulo: 'Portafolio Personal',
            descripcion: 'Portafolio personal creado solo con HTML, CSS y JavaScript. Sin ninguna libreria.',
            link: 'https://ulisesros-portafolio.netlify.app/',
            botonLink: 'UlisesRos Portafolio',
            gitHub: 'https://github.com/UlisesRos/PortafolioEnPuro.git'
        },
        {
            img: ecommerce,
            titulo: 'Backend E-Commerce',
            descripcion: 'En este caso realice un proyecto para el curso de backend donde cree el backend de un E-commerce.',
            link: 'https://github.com/UlisesRos/ProyectoCoderHouse.git',
            botonLink: 'ProyectoCoderHouse.git',
            gitHub: 'https://github.com/UlisesRos/ProyectoCoderHouse.git'
        },
    ]

    return (
        <Flex
            flexDir='column'
            rowGap='20px'
            w='100%'
            >
                {proyectos.map(p => (
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
                            {p.titulo}
                        </Text>
                        <Text
                            marginLeft='58px'
                            marginRight='30px'
                            >
                            {p.descripcion}
                        </Text>
                        <Link
                            href={p.gitHub}
                            _hover={{
                                color: '#1DA1F2'
                            }}
                            target='_blank'
                            >
                            <Text
                                marginLeft='58px'
                                marginRight='30px'
                                >
                                {p.gitHub}
                            </Text>
                        </Link>
                        <Link
                            target='_blank'
                            href={p.link}
                            >
                            <Image cursor='pointer' objectFit='cover' src={p.img} alt={p.alt} borderRadius='5px' margin='10px 0 0 58px' w='80%' h={['35vh','45vh','60vh']}/>
                        </Link>
                    </Box>
                    ))}
        </Flex>
    )
}

export default Proyecto