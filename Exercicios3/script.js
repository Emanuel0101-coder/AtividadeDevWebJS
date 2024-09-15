let currentIndex = 0;
const slide=document.querySelectorAll('.slide');
const totalSlides= slide.lenght;
const intervalTime = 3000;
let interval;
function showSlide(index) {
    if (index >= totalSlides) currentIndex = 0;
    if (index < 0) currentIndex = totalSlides - 1;
    const offset =  -currentIndex*100;
    document.querySelector('.slides').style.transform =  `translateX(${offset}%)`;
}
function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}
function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}
document.querySelector('.next').addEventListener('click',nextSlide);
document.querySelector('.prev').addEventListener('click',prevSlide);
function StartAutoSlide(){
    interval = intervalTime(nextSlide, prevSlide);
}
window.onload = () => {
    startAutoSlide();
}   