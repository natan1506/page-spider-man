document.addEventListener('DOMContentLoaded', () => {
    let tl = new TimelineMax();

    tl.fromTo('.bg-loader', 
        1, //tempo da animacao
        {width: '100%'}, // como começa
        {
            width: '0%', // como termina
            delay: 5, // tempo para comecar
            ease: Expo.easeInOut // o efeito de transicao
        },
    )
    .fromTo('.bg-video', 
        2, //tempo da animacao
        {
            width: '0%', 
            opacity: 0}, // como começa
        {
            width: '100%', // como termina
            opacity: 1,
            ease: Expo.easeInOut // o efeito de transicao
        }, '-=1' // adianto de 1 segundo para comecar
    )
    .fromTo('.logo', 
        0.7, //tempo da animacao
        {
            y: -50, // aparece de cima apara baixo
            opacity: 0}, // como começa
        {
            y: 0, // como termina
            opacity: 1,
            ease: Expo.easeInOut // o efeito de transicao
        }, '-=0.5' // adianto de 1 segundo para comecar
    )

    .fromTo('.nav-list', 
        0.7, //tempo da animacao
        {
            y: -50, // aparece de cima apara baixo
            opacity: 0}, // como começa
        {
            y: 0, // como termina
            opacity: 1,
            ease: Expo.easeInOut // o efeito de transicao
        }, '-=0.5' // adianto de 1 segundo para comecar
    )

    .fromTo('.nav-social', 
        0.7, //tempo da animacao
        {
            y: -50, // aparece de cima apara baixo
            opacity: 0}, // como começa
        {
            y: 0, // como termina
            opacity: 1,
            ease: Expo.easeInOut // o efeito de transicao
        }, '-=0.5' // adianto de 1 segundo para comecar
    )

    .fromTo('.item-1', 
        0.7, 
        {y: -50, opacity: 0}, 
        {y: 0, opacity: 1,ease: Expo.easeInOut }, '-=0.5' )
    .fromTo('.item-2', 
        0.7, 
        {y: -50, opacity: 0}, 
        {y: 0, opacity: 1,ease: Expo.easeInOut }, '-=0.5' )
    .fromTo('.item-3', 
        0.7, 
        {y: -50, opacity: 0}, 
        {y: 0, opacity: 1,ease: Expo.easeInOut }, '-=0.5' )
    .fromTo('.item-4', 
        0.7, 
        {y: -50, opacity: 0}, 
        {y: 0, opacity: 1,ease: Expo.easeInOut }, '-=0.5' )
    .fromTo('.item-5', 
        0.7, 
        {y: -50, opacity: 0}, 
        {y: 0, opacity: 1,ease: Expo.easeInOut }, '-=0.5' )
})