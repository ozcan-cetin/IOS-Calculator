/*VARIABLES*/

let firstScreen=document.querySelector(".firstScreen")
let secondScreen=document.querySelector(".secondScreen")
let buttons=document.querySelector(".buttons");

/*CONDITIONALS*/
buttons.addEventListener("click",(e)=>{
    if(e.target.classList.contains("buttons")){
        null
    }else{
        if(e.target.classList.contains("ac")){
            e.target.closest(".container").querySelector(".firstScreen").innerText="";
            e.target.closest(".container").querySelector(".secondScreen").innerText="";
        }
        else if(e.target.classList.contains("num")){
            if(secondScreen.innerText==0 && secondScreen.innerText.match(/\./)==null){
                secondScreen.innerHTML=e.target.innerText;
            }else{
                secondScreen.innerHTML+=e.target.innerText;
            }
        }
        else if(e.target.classList.contains("dot")){
            if(secondScreen.innerText && secondScreen.innerText.match(/\./)==null){
                secondScreen.innerText+=e.target.innerText;
            }
        }
        else if(e.target.classList.contains("operator")){
            if(secondScreen.innerText && secondScreen.innerText.match(/[\.]$/)==null){
                secondScreen.innerText+=" " + e.target.innerText;
                firstScreen.innerText=secondScreen.innerText; 
                secondScreen.innerText="";
            }
        }
        else if(e.target.classList.contains("equal")){
            if(secondScreen.innerText && firstScreen.innerText && secondScreen.innerText.match(/[\.]$/)==null){
                operation()
            }
        }
        
    }
})