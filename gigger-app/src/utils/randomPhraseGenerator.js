const phrases = [
    { phrase: 'ESTO ES COMO EL AGUA QUE CAE DEL CIELO SIN QUE SEPAMOS POR QUÉ', author: 'Mariano Rajoy' },
    { phrase: 'DESPUÉS DEL AÑO 14 VIENE EL 15', author: 'Mariano Rajoy' },
    { phrase: 'LO MÁS IMPORTANTE QUE SE PUEDE HACER POR VOSOTROS ES LO QUE VOSOTROS PODRAÍS HACER POR VOSOTROS', author: 'Mariano Rajoy' },
    { phrase: 'CUANTO PEOR, MEJOR', author: 'Mariano Rajoy' },
    { phrase: 'NI A HITLER NI A STALIN LES HAN NOMBRADO PERSONAS NON GRATAS EN PONTEVEDRA', author: 'Mariano Rajoy' },
    { phrase: 'UNA COSA ES SER SOLIDARIO Y OTRA ES SER SOLIDARIO A CAMBIO DE NADA', author: 'Mariano Rajoy' },
    { phrase: '¿USTEDES PIENSAN ANTES DE HABLAR O HABLAN TRAS PENSAR?', author: 'Mariano Rajoy' },
    { phrase: 'TENEMOS QUE FABRICAR MÁQUINAS QUE PERMITAN SEGUIR FABRICANDO MÁQUINAS, PORQUE LO QUE NUNCA VA A HACER LA MÁQUINA ES FABRICAR MÁQUINAS A SU VEZ', author: 'Mariano Rajoy' },
    { phrase: 'SOMOS SENTIMIENTOS Y TENEMOS SERES HUMANOS', author: 'Mariano Rajoy' },
    { phrase: 'IT’S VERY DIFICULT TODO ESTO', author: 'Mariano Rajoy' },
]

export const giveMeARandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length)
    return phrases[randomIndex]
}