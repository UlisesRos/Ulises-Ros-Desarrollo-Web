import React from 'react'
import { Box, Flex, Text, Image, Link } from '@chakra-ui/react'
import avatar from '../../img/avatar.svg'
import back from '../../img/cert-back.png'
import numen from '../../img/cert-numen.png'
import p5 from '../../img/cert-p5.png'
import data from '../../img/cert-data.png'

function Cursos() {

    const cursos = [
        {
            titulo: 'Programacion Back End',
            descripcion: 'Curso de 94hs dictadas a lo largo de 24 semanas en Programacion Back End realizado con exito en la plataforma Coder House.',
            img: back,
            alt: 'Back end',
            cert: 'https://ulises-ros.vercel.app/static/media/cert-back.d0190b7b58b15b1e879c.png'
        },
        {
            titulo: 'Desarrollo Web Full Stack',
            descripcion: 'Diplomatura en desarrollo web full stack logrado luego de 256hs del curso dictado en la plataforma Academia Numen.',
            img: numen,
            alt: 'Full Stack',
            cert: 'https://ulises-ros.vercel.app/static/media/cert-numen.b10935956a43dde0a273.png'
        },
        {
            titulo: 'Introduccion en la Programacion',
            descripcion: 'Curso introductorio de programacion (HTML, CSS, JAVASCRIPT) de 54hs dictado en Plataforma 5.',
            img: p5,
            alt: 'introduccion en programacion',
            cert: 'https://ulises-ros.vercel.app/static/media/cert-p5.00e20a14ad5eceea5f62.png'
        },
        {
            titulo: 'Data Analytics',
            descripcion: 'Curso de 46hs dictadas a lo largo de 12 semanas en Data Analytics realizado con exito en la plataforma Coder House.',
            img: data,
            alt: 'data analytics',
            cert: 'https://ulises-ros.vercel.app/static/media/cert-data.a5393c30594526e34009.png'
        },
    ]

    return (
        <Flex
            flexDir='column'
            rowGap='20px'
            w='100%'
            >
                {cursos.map(c => (
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
                            {c.titulo}
                        </Text>
                        <Text
                            marginLeft='58px'
                            marginRight='30px'
                            >
                            {c.descripcion}
                        </Text>
                        <Link
                            target='_blank'
                            href={c.cert}
                            >
                            <Image cursor='pointer' src={c.img} alt={c.alt} borderRadius='5px' margin='10px 0 0 58px' w='80%' h={['35vh','45vh','60vh']}/>
                        </Link>
                    </Box>
                    ))}
        </Flex>
    )
}

export default Cursos