function Colorir(Number){

    var numero = parseInt(Number)
    var btns_colors_change = document.getElementsByClassName('btns_color');

    for(i = 0; i <= btns_colors_change.length; i++){
    
        for(i2 = 0; i2 <= 4; i2++){
            btns_colors_change[i].classList.remove(`active-btn-${i2}`);
            //remove todas as classes para não sobrepor cor
        }

        btns_colors_change[i].classList.add(`active-btn-${numero}`);
        //adiciona a classe com o indice clicado 
        
    }
}

