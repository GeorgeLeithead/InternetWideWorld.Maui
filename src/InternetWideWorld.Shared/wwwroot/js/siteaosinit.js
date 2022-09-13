/// <reference path="https://cdnjs.cloudflare.com/ajax/libs/aos/3.0.0-beta.6/aos.js">

(function () {
    "use strict";

    /**
     * Animation on scroll
     */
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
    AOS.refresh();

    /**
     * Scroll with ofset on page load with hash links in the url
     */
    if (window.location.hash) {
        if (select(window.location.hash)) {
            scrollto(window.location.hash)
        }
    }

    let body = select('body')
    if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.add('bi-list')
        navbarToggle.classList.remove('bi-x')
    }

})();