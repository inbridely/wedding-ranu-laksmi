$(document).ready(function() {
    $(".slider").slick({
        infinite: true,
        slidesToShow: 4,
        slideToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        arrows: false, 
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    // Get the modal
    const modal = document.getElementById('zoom-modal');
 
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    const modalImg = document.getElementById("img-modal");
    $(".slide-image").on('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
    });
    
    
    // When the user clicks on <span> (x), close the modal
    modal.onclick = function() {
        modalImg.className += " out";
        setTimeout(function() {
            modal.style.display = "none";
            modalImg.className = "modal-content";
        }, 400);
        
    }    
});