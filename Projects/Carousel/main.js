const carousel = document.querySelector('.carousel')
const slides = document.querySelector('.slides')
const slide = document.querySelectorAll('.slide')
const prevSlide = document.querySelector('.prev')
const nextSlide = document.querySelector('.next')
const pauseSlide = document.querySelector('.pause')

const SLIDES_COUNT = slide.length
const SLIDES_INTERVAL_MS = 1000
const isPlay = true
let timerId = null

let currentSlide = 0

const gotoNth = () => {
    slide[currentSlide].classList.remove('active')
    currentSlide = (currentSlide + 1) % SLIDES_COUNT
    slide[currentSlide].classList.add('active')
}

const gotoNext = () => {
    gotoNth(currentSlide + 1)
}

let gotoPrev = () => {
    gotoNth(currentSlide - 1)
}

const tick = () => {
    timerId = setInterval(gotoNth, 1000)
}

const pauseHandler = () => {
    if (!isPlay) return clearInterval(timerId)
    pauseSlide.textContent = 'Play'
}

const playHandler = () => {
    tick()
    pauseSlide.textContent = 'Pause'
}

const togglePlayHandler = () => {isPlay ? pauseHandler() : playHandler()}

pauseSlide.addEventListener('click', togglePlayHandler)
prevSlide.addEventListener('click', gotoPrev)
nextSlide.addEventListener('click', gotoNext)

tick()