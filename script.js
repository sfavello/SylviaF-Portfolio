let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
.to('.girlbird', 10, {y: -100}, '-=3')
.to('.rockbook', 3, {y: -100})
.to('.bg1', 3, {y: 50} , "-=3")
.to('.content', 3, {bottom: "0%"}, "-=3")


let scene = new ScrollMagic.Scene ({ 
    triggerElement: "section",
    duration: '125%', 
    triggerHook: 0,
})

    .setTween(timeline)
    .addTo(controller)

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read Less"; 
      moreText.style.display = "inline";
    }
  }


const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click' , () => {
        nav.classList.toggle('nav-active');
    });
    
    
}
navSlide();

