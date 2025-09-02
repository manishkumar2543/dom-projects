var path="M 10 100 Q 500 100 990 100";
var finalPath="M 10 100 Q 500 100 990 100";


var string=document.querySelector(".string")
// string.addEventListener("mouseenter",function(){
//     console.log("clicked")
// })

// string.addEventListener("mousemove",function(dets){
//     // console.log(dets)
//     // console.log(dets.x)
//     // console.log(dets.y)
// })

string.addEventListener("mousemove",function(dets){
    path=`M 10 100 Q ${dets.x} ${dets.y} 990 100`; 
    gsap.to("svg path",{
        attr:{d:path},
        ease:"power3.out",
        duration:0.3,

    })
});

string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalPath},
       ease: "elastic.out(1,0.2)",
        duration:1.5,
    })
})
