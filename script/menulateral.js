$(document).ready(function(){

    var teste = 0;

    $('#menu_lateral').on('click', function(){
    
        $('#gg').toggleClass('active-menu');

        if(teste == 0){
            $('#menu_lateral').removeClass('fa-bars');
            $('#menu_lateral').addClass('fa-x');
    
    
            const menun = $('#menu_lateral');
            menun.css('font-size', '19px');
            // menun.css('position', 'fixed');
            menun.css('margin-top', '2px');
            // menun.css('right', '22px');
            teste = 1;   
        
        }else{
          tirarmenu();
        }
    });

    $('.txt_menu_lateral').on('click', function(){

        if(teste == 1){
          tirarmenu();
        }

    });



    function tirarmenu(){
      
        $('#gg').removeClass('active-menu');
       
        $('#menu_lateral').removeClass('fa-x');
        $('#menu_lateral').addClass('fa-bars');
    
        const menun = $('#menu_lateral');
        menun.css('font-size', '22px');
        menun.css('position', 'relative');
        menun.css('margin-top', '0px');
        // menun.css('right', '0px');
    
        teste = 0;
    
    }
    
});

