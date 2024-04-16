t=gsap.timeline()

t.from(".nav img",{
    scale:2,
    opacity:0,
}) 

t.from(".nav h4,i",{
    y:"-100",
    opacity:0,
    // color:red,
    stagger:0.1
}) 

t.to(".nav",{
    height:"110",
    backgroundColor:"rgba(0,0,0,0.3)",
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -20%",
        scrub:3
    }
})

t.from(".main h1,.main h3,.main p",{
    y:-100,
    opacity:0,
    // duration:1.5,
    stagger:0.5
})


t.to(".main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        start:"top -50%",
        end:"top -60%",
        scrub:3
    }
})
t.from(".form",{
    opacity:0
})
t.from("input",{
    opacity:0,
    x:"100",
    stagger:0.5
})
t.from("label",{
    opacity:0,
    y:"100",
    stagger:0.5
})
t.from(".but",{
    opacity:0
})



t.to(".h1",{
    
   color:"#3B615F"
})



