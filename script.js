const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

const slides = document.querySelectorAll('.slide')
const main = document.querySelector('.main')

let currentSlide     = 0

const slideWidth = 400

slides.forEach((slide, index)=>{
    
    slide.style.left = `${index * 100}%`
   
 })

const setSlidePosition = () =>{
    
    console.log(currentSlide)
slides.forEach((slide)=>{
    slide.style.transform = `translateX(-${currentSlide * 100}%)`
})
  
}




function goNext(){
   
    if( currentSlide < 3){
        currentSlide++;
        setSlidePosition()
    }
   
}

function goPrev(){
    
    if(currentSlide > 0 ){
        currentSlide--  
        setSlidePosition()
    }
   
}


prev.addEventListener('click',goPrev)
next.addEventListener('click',goNext)