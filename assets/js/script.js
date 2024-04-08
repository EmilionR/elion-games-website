function moveCarousel(position) {
    var carousel = document.querySelectorAll('.video-wrapper');
    for(item of carousel) {
        item.style.transform = `translateX(${position}%)`;
    }
}