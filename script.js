// gsap.to(".box",{
//     x:1200,
//     duration:3,
//     rotate:360,
//     delay:1,
//     backgroundColor:"yellow",
    
// })
// gsap.from(".box2",{
//     x:1000,
//     duration:3,
//     translateY:200,
//     delay:1,
//     backgroundColor:"pink",
//     opacity:0,

// })

// from: -end point 
// to :- start point


// gsap.from("h1",{
//     opacity:0,
//     duration:1,
//     y:20,
    
//     delay:1,
    
//     //  ye hmar 1 porperty ko dikhtta hai para pri- stagger 📢
//     stagger:0.5, 

//     // repeat:-1 ye infinite hai 1 kren ek hi bar chalga 📢
//     repeat:-1, 

//     // yoyo:true ye aage piche hoga 📢
//     yoyo:true,        
// }) 


// <!-- Gsap timeline and how to control. ( Topic -3  💡) -->

// let tl=gsap.timeline()
// tl.to(".box1",{
//      x:800,
//     duration:2,
//     delay:1,
//     // repeat:-1,
//     yoyo:true,
//    })

//     tl.to(".box2",{
//      x:800,
//     duration:2,
//     delay:1
//    })

//    tl.to(".box3",{
//     x:800,
//     duration:2,
//     delay:1,

//    })


let tl=gsap.timeline()
tl.from("h2",{
     y:-20,
     opacity:0,
     duration:1,
     delay:1,
    
})
tl.from("h4",{
     y:-20,
     opacity:0,
     duration:1,
     
})
tl.from("h1",{
     y:-20,
     duration:0.5,
     opacity:0,
     scale:0.2,

})


