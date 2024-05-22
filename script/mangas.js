var cores = ["#FF2423", "#2AB9FF", "#F9921E", "#A3609C", "#B0D83A", "#898F8F"];

function colorir(n){
    Change(n);
    anima();

    var labelss = document.getElementsByClassName('volume');

    var tt = document.querySelector('#tlt');

    if(n <= 3){        
        tt.innerHTML = `K-on! | volume ${n+1}`;
    }else if(n == 4){
        tt.innerHTML = `K-on! HighSchool!`;
    }else{
        tt.innerHTML = `K-on! College!`;
    }


    for (i2 = 0; i2 < labelss.length; i2++){
        labelss[i2].style.backgroundColor = "transparent";
        labelss[i2].style.color = 'inherit';
    }

    var nmb = n;

    for(i = 0; i <= cores.length; i++){
        if (i === nmb){
            document.getElementById(`volume${nmb+1}`).style.backgroundColor = cores[nmb];
            document.getElementById(`volume${nmb+1}`).style.color = "#fff";
         }
    }

}

function Change(NN){
    var b = NN + 1;
    var FotoMio = document.querySelector('#mio');

    FotoMio.setAttribute('src', `./src/images/mio_0${b}.png`);

   
}

function anima(){
    var foto = document.getElementById('mio');
    foto.classList.toggle('anim');
}

