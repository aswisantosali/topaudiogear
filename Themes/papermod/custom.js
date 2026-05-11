$(document).ready(function () {
    $('.latest_post').owlCarousel({ loop: !1, margin: 20, autoplay: !0, autoplayTimeout: 3000, nav: !1, dots: !0, responsive: { 0: { margin: 10, autoplay: !1, items: 1 }, 600: { items: 1 }, 1000: { items: 1 } } })
    $('.stories').owlCarousel({ loop: !1, margin: 20, autoplay: !1, autoplayTimeout: 3000, nav: !1, dots: !0, responsive: { 0: { margin: 10, items: 1 }, 600: { items: 2 }, 1000: { items: 3 } } })
});