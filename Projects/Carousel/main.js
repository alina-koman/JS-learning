function Carousel() {}

Carousel.prototype = {
    _init_Props() {
        this.container = document.querySelector('.carousel')
        this.slides = this.container.querySelector('.slides')
        this.slide = this.slides.querySelectorAll('.slide')
        this.prevSlide = this.container.querySelector('.prev')
        this.nextSlide = this.container.querySelector('.next')
        this.pauseSlide = this.container.querySelector('.pause')
        this.indicatorsContainer = this.container.querySelector('.indicators')
        this.indicator = this.indicatorsContainer.querySelectorAll('.indicator')

        this.SLIDES_COUNT = this.slide.length
        this.SLIDES_INTERVAL_MS = 1000
        this.currentSlide = 0
        this.isPlaying = true
        this.timerId = null
        this.swipeStartX = null
        this.swipeEndX = null

        this.isPlay = 'Play'
        this.isPause = 'Pause'
        this.SWIPE_INTERVAL = 100
        this.ARROW_LEFT = 'ArrowLeft'
        this.ARROW_RIGHT = 'ArrowRight'
        this.SPACE = 'Space'
    },

    gotoNth (n) {
        this.slide[this.currentSlide].classList.remove('active')
        this.indicator[this.currentSlide].classList.remove('active')

        this.currentSlide = (n + this.SLIDES_COUNT) % this.SLIDES_COUNT

        this.slide[this.currentSlide].classList.add('active')
        this.indicator[this.currentSlide].classList.add('active')
    },

    gotoNext () {
        this.gotoNth(this.currentSlide + 1)
    },

    gotoPrev () {
        this.gotoNth(this.currentSlide - 1)
    },

    tick () {
        this.timerId = setInterval(this.gotoNext, this.SLIDES_INTERVAL_MS)
    },

    pauseHandler () {
        if (!this.isPlaying) return
        clearInterval(this.timerId)
        this.isPlaying = !this.isPlaying
        this.pauseSlide.textContent = this.isPlay
    },

    playHandler () {
        this.tick()
        this.isPlaying = !this.isPlaying
        this.pauseSlide.textContent = this.isPause
    },

    togglePlayHandler () { this.isPlaying ? this.pauseHandler() : this.playHandler() },

    nextHandler () {
        this.pauseHandler()
        this.gotoNext()
    },

    prevHandler () {
        this.pauseHandler()
        this.gotoPrev()
    },

    indicatorClickHandler (e) {
        const { target } = e
        if (target && target.classList.contains('indicator')) {
            this.pauseHandler()
            this.gotoNth(+target.dataset.slideTo)
        }
    },

    keydownHandler (e) {
        const { code } = e
        if (code === this.ARROW_LEFT) return this.prevHandler()
        if (code === this.ARROW_RIGHT) return this.nextHandler()
        if (code === this.SPACE) {
            e.preventDefault()
            return this.togglePlayHandler()
        }
    },

    swipeStartHandler (e) {
        this.swipeStartX = e instanceof MouseEvent ? e.clientX : e.changedTouches[0].clientX
    },

    swipeEndHandler (e) {
        this.swipeEndX = e instanceof MouseEvent ? e.clientX : e.changedTouches[0].clientX
        const diffX = this.swipeEndX - this.swipeStartX
        if (diffX > this.SWIPE_INTERVAL) return this.prevHandler()
        if (diffX < -this.SWIPE_INTERVAL) return this.nextHandler()
    },


    initEventHandler () {
        this.pauseSlide.addEventListener('click', this.togglePlayHandler)
        this.prevSlide.addEventListener('click', this.prevHandler)
        this.nextSlide.addEventListener('click', this.nextHandler)
        this.indicatorsContainer.addEventListener('click', this.indicatorClickHandler)
        document.addEventListener('keydown', this.keydownHandler)
        this.slides.addEventListener('touchstart', this.swipeStartHandler)
        this.slides.addEventListener('mousedown', this.swipeStartHandler)
        this.slides.addEventListener('touchend', this.swipeEndHandler)
        this.slides.addEventListener('mouseup', this.swipeEndHandler)
    },


    init (){
        this._init_Props()
        this.initEventHandler()
        this.tick()
    }
}


Carousel.prototype.constructor = Carousel

function SwipeCarousel() {
    Carousel.apply(this)
}

SwipeCarousel.prototype = Object.create(Carousel.prototype)
SwipeCarousel.prototype.constructor = SwipeCarousel

const carousel = new Carousel()
carousel.init()