function loader() {
    var tl = gsap.timeline()

tl.to(".yellow1", {
    top: "-100%",
    delay: .5,
    duration: .7,
    ease: "expo.out"
})

tl.from(".yellow2", {
    top: "100%",
    delay: .6,
    duration: .5,
    duration: .7,
    ease: "expo.out"
}, "anim")
tl.to(".loader h1", {
    color: "black",
    delay: .6,
    duration: .7
}, "anim")

tl.to(".loader", {
    display: "none"
})
tl.to(".loader", {
    opacity: 0
})
}

loader()


function loco() {
    
const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});

document.querySelector("footer h3").addEventListener("click", function(){
    scroll.scrollTo(0)
})


var elems = document.querySelectorAll(".elem");
var page2 = document.querySelector(".page2");

elems.forEach(function(e){

    e.addEventListener("mouseenter", function(){
        var bgimg =  e.getAttribute("data-img");
            page2.style.backgroundImage = `url(${bgimg})`
    })

    e.addEventListener("mouseleave", function(){
        page2.style.backgroundImage= "none"
})

})
}

loco()
