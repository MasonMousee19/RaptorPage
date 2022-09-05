console.log("hello");
// console.log(window.clientY);
let installation = 0;
let awards = 0;
let registered = 0
let satisfied = 998;
let isRun = false
let intervalInsta;
let intervalawards;
let intervalregistered;
let intervalsatisfied;
window.addEventListener("scroll", event =>{
    // console.log(window.scrollY);//660
    if(window.scrollY >= 660 && !isRun){
        isRun = true
        intervalInsta = setInterval(()=>{
            document.querySelector(".installation").innerHTML = `${installation.toLocaleString()}`
            installation+=10
            if(installation > 2000){
                clearInterval(intervalInsta)
            }
        },1)
        // 
        intervalawards = setInterval(()=>{
            document.querySelector(".awards").innerHTML = `${awards.toLocaleString()}`
            awards+=1
            if(awards > 100){
                clearInterval(intervalawards)
            }
        },1)
        // 
        intervalregistered = setInterval(()=>{
            document.querySelector(".registered").innerHTML = `${registered.toLocaleString()}`
            registered+=100
            if(registered > 32000){
                clearInterval(intervalregistered)
            }
        },1)
        // 
        intervalsatisfied = setInterval(()=>{
            document.querySelector(".satisfied").innerHTML = `${satisfied.toLocaleString()}`
            satisfied+=100
            if(satisfied > 31998){
                clearInterval(intervalsatisfied)
            }
        },1)
    }

})