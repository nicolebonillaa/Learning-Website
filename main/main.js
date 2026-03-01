//Learning website focused on teaching computer science concepts through brief lessons.

//change navbar styles on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})