var main=document.querySelector('.main');
var cursor=document.querySelector('.cursor');
var imgDiv=document.querySelector(`.image`)

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        ease: "back.out",
        duration: 0.5,
        
    })
})

imgDiv.addEventListener("mouseenter",function(){
    cursor.innerHTML="View More",
    gsap.to(cursor,{
        
        scale:4,

    })
})
imgDiv.addEventListener("mouseleave",function(){
    cursor.innerHTML=""
    gsap.to(cursor,{
        scale:1,
    })
})