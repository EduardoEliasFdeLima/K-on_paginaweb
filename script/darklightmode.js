var teste = 1;
var testeMS = 1;

document.getElementById("ld").addEventListener("click", ()  => {

    const change = document.getElementById('ld');
   
    $(".light").toggleClass("dark");
    $(".light2").toggleClass("dark2");
    $(".ll").toggleClass("dd");


    if(teste === 1){
        document.body.style.background = "#1a1818";
        document.body.style.color = "#ffffff";
        change.classList.remove("bx-moon");
        change.classList.add("bx-sun");

        teste++;            
    }else{
        document.body.style.background = "#fbfbfb";
        document.body.style.color = "#252525";
        change.classList.remove("bx-sun");
        change.classList.add("bx-moon");

        teste--;
    }

}) 