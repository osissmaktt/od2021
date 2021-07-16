// const backToTopButton = document.querySelector(".back-to-top-btn");

// window.addEventListener("scroll", scrollFuntion);

function scrollFuntion(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
}
// backToTopButton.addEventListener("click", backToTop);

// function backToTop(){
//     window.scrollTo(0, 0);
// }


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
