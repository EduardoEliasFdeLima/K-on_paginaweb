$(document).ready(function(){
    var testeMS = 1;
    var testemusica = document.getElementById('musicfundo');
    testemusica.volume = 0.1;
    
    $('#ms').on('click', function(){
      
        if(testeMS === 1){
            testemusica.play();
            $('#ms').removeClass("fa-volume-xmark");
            $('#ms').addClass('fa-volume-low');
            testeMS++;
                        
            testemusica.addEventListener('ended', function(){
                $('#ms').removeClass("fa-volume-low");
                $('#ms').addClass('fa-volume-xmark');             
            },false);

        }else{
            testemusica.pause();
            $('#ms').removeClass("fa-volume-low");
            $('#ms').addClass('fa-volume-xmark');
            testeMS--;
        }
    });
});