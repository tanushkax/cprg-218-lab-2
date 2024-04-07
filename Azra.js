
document.addEventListener("DOMContentLoaded", function() {
    var accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(function(header) {
        header.addEventListener("click", function() {
            var content = this.nextElementSibling;
            content.classList.toggle("active");
        });
    });
});