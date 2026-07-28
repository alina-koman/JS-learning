const carousel = document.querySelector('.carousel')
const slides = document.querySelector('.slides')
const slide = document.querySelectorAll('.slide')
const prevSlide = document.querySelector('.prev')
const nextSlide = document.querySelector('.next')
const statusSlide = document.querySelector('.status')

const SLIDES_COUNT = slides.length
let currentSlide = 0

setInterval(() => {
    slide[currentSlide].classList.remove('active')
    currentSlide += 1
    slide[currentSlide].classList.add('active')
}, 2000)