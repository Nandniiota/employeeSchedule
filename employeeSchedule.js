let drop=document.querySelector("#drop");
let div1=document.querySelector("#employeeA");
let div2=document.querySelector("#employeeB");
div1.style.display="none";
div2.style.display="none";
let drop1=document.querySelector("#drop1");

drop.addEventListener('click',function(){
div1.style.display="none";
div2.style.display="none";
    if(drop.value==="employeeA"){
        div1.style.display="block";
    }
    else if(drop.value==="employeeB"){
        div2.style.display="block";
    }
    else if(drop.value==="All"){
        div1.style.display="block";
        div2.style.display="block";
    }
});


