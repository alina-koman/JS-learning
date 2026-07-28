const carousel = document.querySelector('.carousel')
const slides = carousel.querySelector('.slides')
const slide = slides.querySelectorAll('.slide')
const prevSlide = carousel.querySelector('.prev')
const nextSlide = carousel.querySelector('.next')
const pauseSlide = carousel.querySelector('.pause')
const indicatorsContainer = carousel.querySelector('.indicators')
const indicator = indicatorsContainer.querySelectorAll('.indicator')

const SLIDES_COUNT = slide.length
const SLIDES_INTERVAL_MS = 1000
let currentSlide = 0
let isPlaying = true
let timerId = null
let swipeStartX = null
let swipeEndX = null

const isPlay = 'Play'
const isPause = 'Pause'
const SWIPE_INTERVAL = 100
const ARROW_LEFT = 'ArrowLeft'
const ARROW_RIGHT = 'ArrowRight'
const SPACE = 'Space'


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
    timerId = setInterval(gotoNext, SLIDES_INTERVAL_MS)
}

const pauseHandler = () => {
    if (!isPlaying) return
    clearInterval(timerId)
    isPlaying = !isPlaying
    pauseSlide.textContent = isPlay
}

const playHandler = () => {
    tick()
    isPlaying = !isPlaying
    pauseSlide.textContent = isPause
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
    if (code === ARROW_LEFT) return prevHandler()
    if (code === ARROW_RIGHT) return nextHandler()
    if (code === SPACE) {
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
    if (diffX > SWIPE_INTERVAL) return prevHandler()
    if (diffX < -SWIPE_INTERVAL) return nextHandler()
}


const initEventHandler = () => {
    pauseSlide.addEventListener('click', togglePlayHandler)
    prevSlide.addEventListener('click', prevHandler)
    nextSlide.addEventListener('click', nextHandler)
    indicatorsContainer.addEventListener('click', indicatorClickHandler)
    document.addEventListener('keydown', keydownHandler)
    slides.addEventListener('touchstart', swipeStartHandler)
    slides.addEventListener('mousedown', swipeStartHandler)
    slides.addEventListener('touchend', swipeEndHandler)
    slides.addEventListener('mouseup', swipeEndHandler)
}


const init = () => {
    initEventHandler()
    tick()
}

init()