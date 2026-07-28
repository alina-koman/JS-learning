const carousel = document.querySelector('.carousel')
const slides = document.querySelector('.slides')
const slide = document.querySelectorAll('.slide')
const prevSlide = document.querySelector('.prev')
const nextSlide = document.querySelector('.next')
const pauseSlide = document.querySelector('.pause')
const indicatorsContainer = document.querySelector('.indicators')
const indicator = document.querySelectorAll('.indicator')

const SLIDES_COUNT = slide.length
const SLIDES_INTERVAL_MS = 1000
let isPlaying = true
let timerId = null
let swipeStartX = null
let swipeEndX = null

let currentSlide = 0

const gotoNth = (n) => {
    slide[currentSlide].classList.remove('active')
    indicator[currentSlide].classList.remove('active')

    currentSlide = (n + SLIDES_COUNT) % SLIDES_COUNT

    slide[currentSlide].classList.add('active')
    indicator[currentSlide].classList.add('active')
}

const gotoNext = () => {
    gotoNth(currentSlide + 1)
}

const gotoPrev = () => {
    gotoNth(currentSlide - 1)
}

const tick = () => {
    timerId = setInterval(gotoNext, 1000)
}

const pauseHandler = () => {
    if (!isPlaying) return
    clearInterval(timerId)
    isPlaying = !isPlaying
    pauseSlide.textContent = 'Play'
}

const playHandler = () => {
    tick()
    isPlaying = !isPlaying
    pauseSlide.textContent = 'Pause'
}

const togglePlayHandler = () => isPlaying ? pauseHandler() : playHandler()

const nextHandler = () => {
    pauseHandler()
    gotoNext()
}

const prevHandler = () => {
    pauseHandler()
    gotoPrev()
}

const indicatorClickHandler = (e) => {
    const { target } = e
    if (target && target.classList.contains('indicator')) {
        pauseHandler()
        gotoNth(+target.dataset.slideTo)
    }
}

const keydownHandler = (e) => {
    const { code } = e
    if (code === 'ArrowLeft') return prevHandler()
    if (code === 'ArrowRight') return nextHandler()
    if (code === 'Space') {
        e.preventDefault()
        return togglePlayHandler()
    }
}

const swipeStartHandler = (e) => {
    swipeStartX = e instanceof MouseEvent ? e.clientX : e.changedTouches[0].clientX
}

const swipeEndHandler = (e) => {
    swipeEndX = e instanceof MouseEvent ? e.clientX : e.changedTouches[0].clientX
    const diffX = swipeEndX - swipeStartX
    if (diffX > 0) return prevHandler()
    if (diffX < 0) return nextHandler()
}

pauseSlide.addEventListener('click', togglePlayHandler)
prevSlide.addEventListener('click', prevHandler)
nextSlide.addEventListener('click', nextHandler)
indicatorsContainer.addEventListener('click', indicatorClickHandler)
document.addEventListener('keydown', keydownHandler)
slides.addEventListener('touchstart', swipeStartHandler)
slides.addEventListener('mousedown', swipeStartHandler)
slides.addEventListener('touchend', swipeEndHandler)
slides.addEventListener('mouseup', swipeEndHandler)

tick()