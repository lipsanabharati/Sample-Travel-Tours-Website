document.addEventListener('DOMContentLoaded', function () {
    let elements = document.querySelectorAll('#main, #services, #destinations, #book, #subscribe');
    
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    }

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, options);

    elements.forEach(element => {
        observer.observe(element);
    });
});