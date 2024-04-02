function change(numero){
    var img1 = document.getElementById("imgg1");
    var img2 = document.getElementById("imgg2");

    if(numero == 1){
        img1.setAttribute('src', "https://i.imgur.com/2fgnAoq.jpeg");
        img2.setAttribute('src', "https://i.imgur.com/Jdp3vuZ.jpeg");
    }

    if(numero == 2){
        img2.setAttribute('src', "https://i.imgur.com/2fgnAoq.jpeg");
        img1.setAttribute('src', "https://i.imgur.com/Jdp3vuZ.jpeg");
    }



}