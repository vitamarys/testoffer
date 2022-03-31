
const anim = document.querySelectorAll('.scroll');
const animCard = document.querySelector('.showAn');

document.addEventListener('scroll',()=>{

    if(animCard.getBoundingClientRect().top < 800){
        animCard.classList.add('show')
    }
    anim.forEach(element => {
        if(element.getBoundingClientRect().top < 400){
            element.classList.add('fade')
        }
        else{
            element.classList.remove('fade') 
        }
    });
    
   
})
