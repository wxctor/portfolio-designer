let trilho = document.getElementById('trilho')
let body = document.querySelector('body')

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
})


window.revelar = ScrollReveal({reset:true})

revelar.reveal('.efeito-txt',{
    duration:2000,
    distance: '90px',
    delay: 1000,
    origin: 'left'
})

revelar.reveal('.gabi-effect',{
    duration:2000,
    distance: '90px',
    delay: 500,
    origin: 'left'
})

revelar.reveal('.carnauba-effect',{
    duration:2000,
    distance: '90px',
    delay: 500,
    origin: 'left'
})

revelar.reveal('.post-effect',{
    duration:2000,
    distance: '90px',
    delay: 500,
    origin: 'left'
})

revelar.reveal('.outlet-effect',{
    duration:2000,
    distance: '90px',
    delay: 500,
    origin: 'left'
})

revelar.reveal('.xoxo-effect',{
    duration:2000,
    distance: '90px',
    delay: 500,
    origin: 'left'
})

revelar.reveal('.thumb-effect',{
    duration:2000,
    distance: '90px',
    delay: 500,
    origin: 'left'
})

revelar.reveal('.thumb2-effect',{
    duration:2000,
    distance: '90px',
    delay: 500,
    origin: 'left'
})

revelar.reveal('.linkedin-effect',{
    duration:2000,
    distance: '90px',
    delay: 500,
    origin: 'top'
})

revelar.reveal('.instagram-effect',{
    duration:2000,
    distance: '90px',
    delay: 1000,
    origin: 'top'
})

revelar.reveal('.github-effect',{
    duration:2000,
    distance: '90px',
    delay: 1500,
    origin: 'top'
})
