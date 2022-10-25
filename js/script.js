let numberOfButton = document.querySelectorAll(".btn").length;
for (let i =0; i < numberOfButton; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click",function(){
       
     let btnInnerHtml = this.innerHTML;
     changeColor(btnInnerHtml)

    }
    );

}

document.addEventListener("keypress",function(a){
    changeColor(a.key)
}
)


function changeColor(color){
    switch (color){
        case "a":
            document.querySelector("body").style.backgroundColor="pink"
           break
    
        case "b":
            document.querySelector("body").style.backgroundColor="yellow"
            break
    
        case "c":
            document.querySelector("body").style.backgroundColor="black"
            break
    
        case "d":
            document.querySelector("body").style.backgroundColor="brown"
            break
    
    
        case "e":
            document.querySelector("body").style.backgroundColor="purple"
            break
    
    
        case "f":
            document.querySelector("body").style.backgroundColor="red"
            break
            default:console.log("color not found");
    }
}

