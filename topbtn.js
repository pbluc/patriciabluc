window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    window.onscroll = function() {scrollFunction()};
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("topBtn").classList.add("visible");
    } else {
        document.getElementById("topBtn").classList.remove("visible");
    }
}

function topFunction() {
    $('html, body').animate({
        scrollTop: 0
    }, 800, function(){});
}